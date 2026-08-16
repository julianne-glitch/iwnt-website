"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AFRICA_COUNTRY_PATHS } from "@/app/data/africaGeoData";
import { OPERATIONAL_MARKETS, MarketNode } from "@/app/data/markets";
import NetworkConnections from "./NetworkConnections";
import { useLanguage } from "@/app/context/LanguageContext";

interface AfricaMapProps {
  selectedMarketId: string;
  onSelectMarket: (marketId: string) => void;
  onSelectNonOperational?: (countryCode: string, countryName: string) => void;
}

export default function AfricaMap({
  selectedMarketId,
  onSelectMarket,
  onSelectNonOperational,
}: AfricaMapProps) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center select-none">
      
      {/* SUBTLE BACKGROUND DOTTED NETWORK FIELD — VERY LOW OPACITY DEPTH TEXTURE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#22C55E_0.8px,transparent_0.8px)] [background-size:20px_20px]" />

      {/* SVG AFRICA MAP */}
      <svg
        viewBox="0 0 1000 1000"
        className="w-full h-full overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] scale-[1.15] origin-[50%_35%] md:scale-100 md:origin-center transition-transform duration-500"
        aria-label="Interactive map of Africa showing IWNT operational markets"
      >
        <defs>
          {/* SUBTLE GREEN OUTER GLOW */}
          <filter id="greenGlow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* FAINT BACKGROUND NETWORK NODES — subtle depth behind continent */}
        <g className="pointer-events-none" opacity="0.04">
          <circle cx="180" cy="200" r="2.5" fill="#16A34A" />
          <circle cx="420" cy="150" r="2" fill="#16A34A" />
          <circle cx="700" cy="300" r="2.5" fill="#16A34A" />
          <circle cx="250" cy="600" r="2" fill="#16A34A" />
          <circle cx="650" cy="700" r="2.5" fill="#16A34A" />
          <circle cx="800" cy="500" r="2" fill="#16A34A" />
          <line x1="180" y1="200" x2="420" y2="150" stroke="#16A34A" strokeWidth="0.8" strokeDasharray="3 4" />
          <line x1="420" y1="150" x2="700" y2="300" stroke="#16A34A" strokeWidth="0.8" strokeDasharray="3 4" />
          <line x1="250" y1="600" x2="650" y2="700" stroke="#16A34A" strokeWidth="0.8" strokeDasharray="3 4" />
        </g>

        {/* 1. ALL AFRICAN COUNTRY PATHS — ONE CONTINUOUS CONTINENT */}
        <g className="country-paths">
          {AFRICA_COUNTRY_PATHS.map((country) => {
            const isOperational = OPERATIONAL_MARKETS.some((m) => m.code === country.id);
            const isSelected = OPERATIONAL_MARKETS.find((m) => m.id === selectedMarketId)?.code === country.id;
            const isHovered = hoveredCountryId === country.id;

            return (
              <path
                key={country.id}
                d={country.d}
                fill={
                  isSelected
                    ? "#22C55E"
                    : isOperational
                    ? "#16A34A"
                    : isHovered
                    ? "#E2E8F0"
                    : "#F8FAFC"
                }
                stroke={
                  isSelected
                    ? "#4ADE80"
                    : isOperational
                    ? "#22C55E40"
                    : "#CBD5E1"
                }
                strokeWidth={isSelected ? 2 : isOperational ? 1.2 : 0.6}
                filter={isSelected ? "url(#greenGlow)" : undefined}
                className="transition-colors duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCountryId(country.id)}
                onMouseLeave={() => setHoveredCountryId(null)}
                onClick={() => {
                  const market = OPERATIONAL_MARKETS.find((m) => m.code === country.id);
                  if (market) {
                    onSelectMarket(market.id);
                  } else if (onSelectNonOperational) {
                    onSelectNonOperational(country.id, country.name);
                  }
                }}
              />
            );
          })}
        </g>

        {/* 2. LABELS — ONLY IWNT OPERATIONAL MARKETS AT REST */}
        <g className="country-labels pointer-events-none">
          {AFRICA_COUNTRY_PATHS.map((c) => {
            if (!c.labelX || !c.labelY) return null;
            const isOperational = OPERATIONAL_MARKETS.some((m) => m.code === c.id);
            const isSelected = OPERATIONAL_MARKETS.find((m) => m.id === selectedMarketId)?.code === c.id;

            // Only show labels for IWNT markets permanently. Others show on hover.
            if (!isOperational && hoveredCountryId !== c.id) return null;

            return (
              <text
                key={`label-${c.id}`}
                x={c.labelX}
                y={c.labelY}
                textAnchor="middle"
                className={`transition-opacity duration-300 ${
                  isSelected
                    ? "fill-white text-[11px] font-black drop-shadow-md opacity-100"
                    : isOperational
                    ? "fill-emerald-100/90 text-[10px] font-extrabold opacity-0 md:opacity-100"
                    : "fill-slate-300/80 text-[9px] font-bold opacity-0 md:opacity-100"
                }`}
              >
                {c.name}
              </text>
            );
          })}
        </g>

        {/* HOVER TOOLTIP FOR NON-LABELED COUNTRIES */}
        {hoveredCountryId && (() => {
          const country = AFRICA_COUNTRY_PATHS.find((c) => c.id === hoveredCountryId);
          if (!country || !country.labelX || !country.labelY) return null;
          const isOperational = OPERATIONAL_MARKETS.some((m) => m.code === hoveredCountryId);
          if (isOperational) return null; // already showing permanent label

          return (
            <g className="pointer-events-none" key={`tooltip-${hoveredCountryId}`}>
              <rect
                x={country.labelX - 45}
                y={country.labelY - 28}
                width={90}
                height={20}
                rx={5}
                fill="#0D1B2E"
                stroke="#22C55E30"
                strokeWidth={0.8}
                opacity={0.92}
              />
              <text
                x={country.labelX}
                y={country.labelY - 15}
                textAnchor="middle"
                className="fill-slate-200 text-[9px] font-bold"
              >
                {country.name}
              </text>
            </g>
          );
        })()}

        {/* 3. NETWORK CURVED CONNECTIONS & PULSES */}
        <NetworkConnections selectedMarketId={selectedMarketId} />

        {/* 4. GEOGRAPHIC NODE DOTS ON OPERATIONAL HUBS */}
        <g className="operational-nodes cursor-pointer">
          {OPERATIONAL_MARKETS.map((market: MarketNode) => {
            const cx = market.x * 10;
            const cy = market.y * 10;
            const isSelected = market.id === selectedMarketId;
            const countryName = market.country[language] || market.country.en;

            return (
              <g
                key={`node-${market.id}`}
                onClick={() => onSelectMarket(market.id)}
                className="group"
              >
                {/* OUTER PULSE RING FOR SELECTED HUB */}
                {isSelected && !reduceMotion && (
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={16}
                    fill="none"
                    stroke="#4ADE80"
                    strokeWidth={1.2}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* SOLID GREEN GEOGRAPHIC NODE */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 6.5 : 4.5}
                  fill={isSelected ? "#4ADE80" : "#22C55E"}
                  stroke="#070D19"
                  strokeWidth={1.8}
                  className="drop-shadow-[0_0_8px_#22C55E] transition-all group-hover:scale-125"
                />

                {/* INNER NODE CENTER */}
                <circle cx={cx} cy={cy} r={1.8} fill="#FFFFFF" />

                {/* HOVER TOOLTIP CAPSULE */}
                <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <rect
                    x={cx - 55}
                    y={cy - 32}
                    width={110}
                    height={20}
                    rx={5}
                    fill="#0D1B2E"
                    stroke="#22C55E"
                    strokeWidth={0.8}
                  />
                  <text
                    x={cx}
                    y={cy - 19}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    className="text-[9px] font-extrabold"
                  >
                    {countryName} • {market.city}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
