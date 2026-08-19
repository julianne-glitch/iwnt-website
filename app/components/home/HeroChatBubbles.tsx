"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroChatBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden hidden md:block">

      {/* ═══════════════════════════════════════════════
          SVG NETWORK - draws entirely in the sky/background
          space above and between the two people.
          
          Layout (viewBox 0 0 100 100):
            Country A card: ~(5, 8)   - top-left, above man
            Man's bubble:   ~(40, 22) - above man's ear
            Woman's bubble: ~(60, 40) - in the gap between them
            Country B card: ~(90, 52) - near woman's shoulder
      ════════════════════════════════════════════════ */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{ zIndex: 1 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient: white → green, left to right */}
          <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#18A94B" stopOpacity="1" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Arrow tip pointing in direction of travel */}
          <marker id="arr" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="url(#cg)" />
          </marker>
          <marker id="arr-w" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#ffffff" />
          </marker>
          <marker id="arr-g" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#18A94B" />
          </marker>
        </defs>

        {/* ── Elegant S-Curve Connection: Card A → Card B ── */}
        {/* Card A is roughly at x:18-39, y:20-26. We start at its right edge (39, 23). */}
        {/* Card B is roughly at x:77-98, y:55-61. We end at its left edge (77, 58). */}
        <motion.path
          d="M 39 23 C 58 23, 58 58, 76 58"
          fill="none"
          stroke="url(#cg)"
          strokeWidth="0.4"
          strokeDasharray="0.8 1.2"
          filter="url(#glow)"
          markerEnd="url(#arr-g)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* ── Animated travelling pulse dot with a trail effect ── */}
        <motion.circle r="0.9" fill="#ffffff" filter="url(#glow)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 39 23 C 58 23, 58 58, 76 58"
          />
        </motion.circle>
        
        {/* ── Secondary glowing pulse for a data-stream effect ── */}
        <motion.circle r="0.5" fill="#18A94B" filter="url(#glow)">
          <animateMotion
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
            path="M 39 23 C 58 23, 58 58, 76 58"
          />
        </motion.circle>
      </svg>
    </div>
  );
}
