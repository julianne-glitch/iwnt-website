"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import { AFRICA_COUNTRY_PATHS } from "@/app/data/africaGeoData";

interface AfricaNetworkProps {
  activeNodeId?: string;
  activeMarketIds?: string[];
  isMobileOnly?: boolean;
}

// Preset natural geographic arc routes between internal operational markets
const INTERNAL_NETWORK_ARCS: Array<{ from: string; to: string; curveOffset: number }> = [
  { from: "senegal", to: "mali", curveOffset: -3 },
  { from: "mali", to: "burkina-faso", curveOffset: -2 },
  { from: "mali", to: "niger", curveOffset: -4 },
  { from: "burkina-faso", to: "cote-divoire", curveOffset: 3 },
  { from: "cote-divoire", to: "cameroon", curveOffset: 5 },
  { from: "niger", to: "chad", curveOffset: -3 },
  { from: "chad", to: "cameroon", curveOffset: 3 },
  { from: "cameroon", to: "drc", curveOffset: -3 },
  { from: "senegal", to: "cote-divoire", curveOffset: -5 },
];

export default function AfricaNetwork({
  activeNodeId,
  activeMarketIds,
  isMobileOnly = false,
}: AfricaNetworkProps) {
  const targetNodeId = activeNodeId || activeMarketIds?.[0] || "cameroon";
  const reduceMotion = useReducedMotion();
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    setPulseCount((prev) => prev + 1);
  }, [targetNodeId]);

  const activeMarket = OPERATIONAL_MARKETS.find((m) => m.id === targetNodeId) || OPERATIONAL_MARKETS[0];

  // SVG ViewBox: 0 0 100 100
  // Map is scaled ~25% smaller and positioned in center-right between the two people.
  // Origin (Left side, International Card A position): x=14, y=20
  // Central IWNT Core Hub: x=58, y=42
  // Destination Node (Map coordinates mapped into adjusted viewBox space):
  // Africa Map scale: 0.075 (reduced from 0.1 for 25% smaller map)
  // Africa Map translate: (28, 12)
  const mapScale = 0.075;
  const mapOffsetX = 28;
  const mapOffsetY = 12;

  const nodeX = mapOffsetX + activeMarket.x * mapScale * 10;
  const nodeY = mapOffsetY + activeMarket.y * mapScale * 10;

  // Destination Card B position (Right side): x=82, y=20
  const cardBX = 82;
  const cardBY = 20;

  // Complete continuous route: International Card A (14, 20) -> IWNT Hub (58, 42) -> Node (nodeX, nodeY) -> African Card B (82, 20)
  const routePathD = `M 14 20 C 30 20, 45 42, 58 42 C 64 42, ${nodeX - 4} ${nodeY - 4}, ${nodeX} ${nodeY} C ${nodeX + 4} ${nodeY + 4}, 76 20, ${cardBX} ${cardBY}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-hidden"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <defs>
          {/* Luminous Route Gradient: Soft Cyan -> Royal Blue -> IWNT Vibrant Green */}
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#22C55E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#18A94B" stopOpacity="1" />
          </linearGradient>

          {/* Intense Glow Filter for Connection Route & Active Node */}
          <filter id="routeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LAYER 1: REDUCED (25% SMALLER) ELEGANT AFRICA SVG MAP */}
        <g transform={`translate(${mapOffsetX}, ${mapOffsetY}) scale(${mapScale})`} opacity="0.45">
          {AFRICA_COUNTRY_PATHS.map((country) => (
            <path
              key={country.id}
              d={country.d}
              fill="rgba(15, 23, 42, 0.7)"
              stroke="#2563EB"
              strokeWidth="1.2"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* LAYER 2: INTERNAL AFRICAN MESH (RESTING ARCS) */}
        {!isMobileOnly &&
          INTERNAL_NETWORK_ARCS.map((arc, idx) => {
            const source = OPERATIONAL_MARKETS.find((m) => m.id === arc.from);
            const target = OPERATIONAL_MARKETS.find((m) => m.id === arc.to);
            if (!source || !target) return null;

            const sx = mapOffsetX + source.x * mapScale * 10;
            const sy = mapOffsetY + source.y * mapScale * 10;
            const tx = mapOffsetX + target.x * mapScale * 10;
            const ty = mapOffsetY + target.y * mapScale * 10;

            const midX = (sx + tx) / 2 + arc.curveOffset;
            const midY = (sy + ty) / 2 - Math.abs(arc.curveOffset);
            const d = `M ${sx} ${sy} Q ${midX} ${midY} ${tx} ${ty}`;

            const isTargetNode = activeMarket.id === source.id || activeMarket.id === target.id;

            return (
              <path
                key={`int-arc-${idx}`}
                d={d}
                fill="none"
                stroke={isTargetNode ? "#22C55E" : "#1E3A5F"}
                strokeWidth={isTargetNode ? "0.35" : "0.2"}
                strokeOpacity={isTargetNode ? 0.6 : 0.25}
                strokeDasharray={isTargetNode ? undefined : "1 1.5"}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}

        {/* LAYER 3: DYNAMIC VISIBLE CROSS-BORDER CONNECTION ROUTE (1.5-2px STROKE) */}
        <g>
          {/* Faint Background Glowing Track */}
          <path
            d={routePathD}
            fill="none"
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="0.6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Main Animated Luminous Bezier Path */}
          <motion.path
            key={`route-${activeMarket.id}-${pulseCount}`}
            d={routePathD}
            fill="none"
            stroke="url(#routeGrad)"
            strokeWidth={isMobileOnly ? "0.6" : "0.9"}
            strokeLinecap="round"
            filter="url(#routeGlow)"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeInOut" }}
          />

          {/* SINGLE TRAVELLING LIGHT SIGNAL PARTICLE (INTL CARD -> IWNT -> AFRICA -> AFRICAN CARD) */}
          {!reduceMotion && (
            <circle r={isMobileOnly ? "1.1" : "1.5"} fill="#FFFFFF" filter="url(#routeGlow)">
              <animateMotion
                key={`signal-${activeMarket.id}-${pulseCount}`}
                dur="2.4s"
                repeatCount="indefinite"
                path={routePathD}
                keyTimes="0; 1"
                keySplines="0.4 0 0.2 1"
                calcMode="spline"
              />
            </circle>
          )}
        </g>

        {/* LAYER 4: CENTRAL IWNT CORE INFRASTRUCTURE NODE */}
        <g transform="translate(58, 42)">
          <circle r="1.8" fill="#0B1528" stroke="#38BDF8" strokeWidth="0.5" filter="url(#routeGlow)" />
          <circle r="0.8" fill="#18A94B" />
        </g>

        {/* LAYER 5: OPERATIONAL AFRICAN MARKET NODES */}
        {OPERATIONAL_MARKETS.map((market) => {
          const isActive = market.id === activeMarket.id;
          const mx = mapOffsetX + market.x * mapScale * 10;
          const my = mapOffsetY + market.y * mapScale * 10;

          return (
            <g key={`node-${market.id}`} transform={`translate(${mx}, ${my})`}>
              {/* Soft Pulsing Aura Ring for Active Destination Node */}
              {isActive && !reduceMotion && (
                <motion.circle
                  key={`pulse-ring-${market.id}-${pulseCount}`}
                  r="2.2"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="0.5"
                  filter="url(#routeGlow)"
                  initial={{ scale: 0.4, opacity: 0.9 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}

              {/* Glowing Outer Node Circle */}
              <circle
                r={isActive ? "1.6" : "0.9"}
                fill={isActive ? "#22C55E" : "#1E293B"}
                opacity={isActive ? 1 : 0.5}
                filter={isActive ? "url(#routeGlow)" : undefined}
              />

              {/* Core Solid Node Point */}
              <circle
                r={isActive ? "1.1" : "0.6"}
                fill={isActive ? "#FFFFFF" : "#38BDF8"}
                stroke={isActive ? "#16A34A" : "#1E3A5F"}
                strokeWidth="0.3"
              />

              {/* Active Inner Green Indicator */}
              {isActive && <circle r="0.4" fill="#16A34A" />}
            </g>
          );
        })}
      </svg>
    </div>
  );
}