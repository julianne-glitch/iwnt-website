"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import { AFRICA_COUNTRY_PATHS } from "@/app/data/africaGeoData";

interface AfricaNetworkProps {
  activeMarketIds?: string[];
  isMobileOnly?: boolean;
}

// Preset natural geographic arc routes between markets
const NETWORK_ARCS: Array<{ from: string; to: string; curveOffset: number }> = [
  { from: "senegal", to: "mali", curveOffset: -4 },
  { from: "mali", to: "burkina-faso", curveOffset: -3 },
  { from: "mali", to: "niger", curveOffset: -5 },
  { from: "burkina-faso", to: "cote-divoire", curveOffset: 4 },
  { from: "cote-divoire", to: "cameroon", curveOffset: 6 },
  { from: "niger", to: "chad", curveOffset: -4 },
  { from: "chad", to: "cameroon", curveOffset: 3 },
  { from: "cameroon", to: "drc", curveOffset: -4 },
  { from: "chad", to: "drc", curveOffset: 5 },
  { from: "senegal", to: "cote-divoire", curveOffset: -6 },
];

export default function AfricaNetwork({
  activeMarketIds = [],
  isMobileOnly = false,
}: AfricaNetworkProps) {
  const reduceMotion = useReducedMotion();
  const [pulseMap, setPulseMap] = useState<Record<string, number>>({});

  useEffect(() => {
    activeMarketIds.forEach((id) => {
      setPulseMap((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    });
  }, [activeMarketIds]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <defs>
          {/* Vibrant Green Active Gradient */}
          <linearGradient id="vibrantGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#22C55E" stopOpacity="1" />
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0.9" />
          </linearGradient>

          {/* Intense Neon Green Glow Filter */}
          <filter id="neonGreenGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur1" />
            <feGaussianBlur stdDeviation="2.4" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 0. FAINT DOTTED AFRICA SILHOUETTE */}
        <g transform="scale(0.1)" opacity="0.15">
          {AFRICA_COUNTRY_PATHS.map((country) => (
            <path
              key={country.id}
              d={country.d}
              fill="none"
              stroke="#AAB8C7"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* 1. RESTING NETWORK ARCS (SWEEPING GREEN/BLUE ARCS) */}
        {NETWORK_ARCS.map((arc, idx) => {
          const source = OPERATIONAL_MARKETS.find((m) => m.id === arc.from);
          const target = OPERATIONAL_MARKETS.find((m) => m.id === arc.to);
          if (!source || !target) return null;

          const isSourceActive = activeMarketIds.includes(source.id);
          const isTargetActive = activeMarketIds.includes(target.id);
          const isActiveArc = isSourceActive || isTargetActive;
          const isBothActive = isSourceActive && isTargetActive;

          // Compute midpoint with sweeping arc curve
          const midX = (source.x + target.x) / 2 + (arc.curveOffset || 0);
          const midY = (source.y + target.y) / 2 - Math.abs(arc.curveOffset || 3);
          const pathD = `M ${source.x} ${source.y} Q ${midX} ${midY} ${target.x} ${target.y}`;
          const arcKey = `arc-${arc.from}-${arc.to}-${idx}`;

          return (
            <g key={arcKey}>
              {/* Background Resting Path */}
              <path
                d={pathD}
                fill="none"
                stroke={isActiveArc ? "#22C55E" : "rgba(34, 197, 94, 0.25)"}
                strokeWidth={isBothActive ? (isMobileOnly ? "0.45" : "0.6") : (isMobileOnly ? "0.22" : "0.3")}
                strokeOpacity={isBothActive ? 0.95 : isActiveArc ? 0.55 : 0.25}
                filter={isBothActive ? "url(#neonGreenGlow)" : undefined}
                vectorEffect="non-scaling-stroke"
              />

              {/* Active Animated Glowing Path Overlay */}
              {isBothActive && (
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="url(#vibrantGreenGrad)"
                  strokeWidth={isMobileOnly ? "0.55" : "0.75"}
                  strokeLinecap="round"
                  filter="url(#neonGreenGlow)"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeInOut" }}
                />
              )}

              {/* Luminous Light Signal Dot Travelling Along Arc */}
              {isBothActive && !reduceMotion && (
                <circle
                  r={isMobileOnly ? "1.1" : "1.5"}
                  fill="#FFFFFF"
                  stroke="#22C55E"
                  strokeWidth="0.4"
                  filter="url(#neonGreenGlow)"
                >
                  <animateMotion
                    dur="2.0s"
                    repeatCount="indefinite"
                    path={pathD}
                    keyTimes="0; 1"
                    keySplines="0.4 0 0.2 1"
                    calcMode="spline"
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* 2. OPERATIONAL MARKET NODES (BRIGHT NEON GREEN DOTS WITH PULSE RINGS) */}
        {OPERATIONAL_MARKETS.map((market) => {
          const isActive = activeMarketIds.includes(market.id);

          // On mobile, prioritize active nodes for clarity
          if (isMobileOnly && !isActive) return null;

          return (
            <g key={market.id} transform={`translate(${market.x}, ${market.y})`}>
              {/* Expanding Pulse Ring */}
              {isActive && !reduceMotion && (
                <motion.circle
                  key={`pulse-${market.id}-${pulseMap[market.id] || 0}`}
                  r="2.2"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="0.4"
                  filter="url(#neonGreenGlow)"
                  vectorEffect="non-scaling-stroke"
                  initial={{ scale: 0.4, opacity: 0.9 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              )}

              {/* Outer Glowing Green Aura */}
              <circle
                r={isActive ? "1.6" : "1.0"}
                fill="#22C55E"
                opacity={isActive ? 0.95 : 0.4}
                filter={isActive ? "url(#neonGreenGlow)" : undefined}
              />

              {/* Core Solid Green Dot */}
              <circle
                r={isActive ? "1.1" : "0.7"}
                fill={isActive ? "#16A34A" : "#22C55E"}
                stroke="#FFFFFF"
                strokeWidth={isActive ? "0.35" : "0.2"}
              />

              {/* Bright White Center Point */}
              {isActive && <circle r="0.4" fill="#FFFFFF" />}
            </g>
          );
        })}
      </svg>
    </div>
  );
}