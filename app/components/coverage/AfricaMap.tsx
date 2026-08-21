"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AFRICA_COUNTRY_PATHS } from "@/app/data/africaGeoData";
import { OPERATIONAL_MARKETS, MarketNode } from "@/app/data/markets";
import { useLanguage } from "@/app/context/LanguageContext";

interface AfricaMapProps {
  activeCountryCode: string;
  onSelectMarket: (marketId: string) => void;
  onSelectNonOperational?: (countryCode: string) => void;
}

export default function AfricaMap({
  activeCountryCode,
  onSelectMarket,
  onSelectNonOperational,
}: AfricaMapProps) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);

  // Determine market ID for the active country (for NetworkConnections)
  const activeMarket = OPERATIONAL_MARKETS.find((m) => m.code === activeCountryCode);
  const selectedMarketId = activeMarket ? activeMarket.id : "";

  return (
    <div className="relative w-full h-full min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center select-none">
      
      {/* SUBTLE BACKGROUND DOTTED NETWORK FIELD - VERY LOW OPACITY DEPTH TEXTURE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#22C55E_0.8px,transparent_0.8px)] [background-size:20px_20px]" />

      {/* SVG AFRICA MAP */}
      <svg
        viewBox="0 0 1000 1000"
        className="w-full h-full overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] scale-[1] origin-[50%_35%] md:scale-[0.95] lg:scale-[0.85] md:origin-center transition-transform duration-500"
        aria-label="Interactive map of Africa showing IWNT operational markets"
      >
        <defs>
          {/* SUBTLE GREEN OUTER GLOW */}
          <filter id="greenGlow" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>



        <g className="country-paths">
          {AFRICA_COUNTRY_PATHS.map((country) => {
            const isOperational = OPERATIONAL_MARKETS.some((m) => m.code === country.id);
            const isSelected = activeCountryCode === country.id;
            const isHovered = hoveredCountryId === country.id;

            return (
              <path
                key={country.id}
                d={country.d}
                fill={
                  isSelected
                    ? "rgba(22, 163, 74, 0.4)"
                    : isHovered
                    ? "#334155"
                    : "#1E293B"
                }
                stroke={
                  isSelected
                    ? "#4ADE80"
                    : "#334155"
                }
                strokeWidth={isSelected ? 2 : 0.8}
                filter={isSelected ? "url(#greenGlow)" : undefined}
                className="transition-colors duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredCountryId(country.id)}
                onMouseLeave={() => setHoveredCountryId(null)}
                onClick={() => {
                  const market = OPERATIONAL_MARKETS.find((m) => m.code === country.id);
                  if (market) {
                    onSelectMarket(market.id);
                  } else if (onSelectNonOperational) {
                    onSelectNonOperational(country.id);
                  }
                }}
              />
            );
          })}
        </g>

        {/* 2. LABELS - ONLY IWNT OPERATIONAL MARKETS AT REST */}
        <g className="country-labels pointer-events-none">
          {AFRICA_COUNTRY_PATHS.map((c) => {
            if (!c.labelX || !c.labelY) return null;
            const isOperational = OPERATIONAL_MARKETS.some((m) => m.code === c.id);
            const isSelected = activeCountryCode === c.id;

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
                    ? "fill-slate-200 text-[10px] font-extrabold opacity-0 md:opacity-100"
                    : "fill-slate-400 text-[9px] font-bold opacity-0 md:opacity-100"
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


      </svg>
    </div>
  );
}
