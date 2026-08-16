"use client";

import { motion, useReducedMotion } from "motion/react";
import { MARKET_CONNECTIONS, OPERATIONAL_MARKETS } from "@/app/data/markets";

interface NetworkConnectionsProps {
  selectedMarketId: string;
}

export default function NetworkConnections({ selectedMarketId }: NetworkConnectionsProps) {
  const reduceMotion = useReducedMotion();

  // Convert percentage (0-100) coordinates to SVG viewBox (0-1000)
  const getCoords = (code: string) => {
    const market = OPERATIONAL_MARKETS.find((m) => m.code === code);
    if (!market) return { x: 500, y: 500 };
    return { x: market.x * 10, y: market.y * 10 };
  };

  return (
    <g className="network-connections pointer-events-none">
      {MARKET_CONNECTIONS.map((conn, idx) => {
        const from = getCoords(conn.from);
        const to = getCoords(conn.to);

        // Create elegant curved arcs — offset perpendicular to the line
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Curve offset proportional to distance, capped
        const curveOffset = Math.min(dist * 0.2, 40);
        
        // Perpendicular direction
        const nx = -dy / dist;
        const ny = dx / dist;
        
        const midX = (from.x + to.x) / 2 + nx * curveOffset;
        const midY = (from.y + to.y) / 2 + ny * curveOffset;
        const pathD = `M ${from.x} ${from.y} Q ${midX} ${midY}, ${to.x} ${to.y}`;

        const isRelatedToSelected =
          OPERATIONAL_MARKETS.find((m) => m.id === selectedMarketId)?.code === conn.from ||
          OPERATIONAL_MARKETS.find((m) => m.id === selectedMarketId)?.code === conn.to;

        return (
          <g key={`${conn.from}-${conn.to}-${idx}`}>
            {/* GLOWING CURVED ROUTE PATH */}
            <motion.path
              d={pathD}
              fill="none"
              stroke={isRelatedToSelected ? "#22C55E" : "#16A34A"}
              strokeWidth={isRelatedToSelected ? "2.2" : "1.5"}
              strokeDasharray={isRelatedToSelected ? "6 3" : "4 4"}
              opacity={isRelatedToSelected ? 0.9 : 0.55}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: idx * 0.12, ease: "easeOut" }}
            />

            {/* LUMINOUS PULSE TRAVELING ALONG ROUTE */}
            {!reduceMotion && (
              <motion.circle
                r={isRelatedToSelected ? 3.5 : 2.5}
                fill={isRelatedToSelected ? "#4ADE80" : "#22C55E"}
                className="drop-shadow-[0_0_6px_#22C55E]"
                animate={{
                  cx: [from.x, midX, to.x],
                  cy: [from.y, midY, to.y],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 2.5 + idx * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.35,
                }}
              />
            )}
          </g>
        );
      })}
    </g>
  );
}
