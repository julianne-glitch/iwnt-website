"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Users, Settings, ShieldCheck, Globe2 } from "lucide-react";
import { OPERATIONAL_MARKETS, AFRICA_TOUR_SEQUENCE } from "@/app/data/markets";
import { useLanguage } from "@/app/context/LanguageContext";
import { AFRICA_COUNTRY_PATHS } from "@/app/data/africaGeoData";
import AfricaMap from "@/app/components/coverage/AfricaMap";
import MarketCommandPanel from "@/app/components/coverage/MarketCommandPanel";
import MobileMarketCard from "@/app/components/coverage/MobileMarketCard";

export default function CoverageSection() {
  const { t } = useLanguage();
  const c = t.coverageSection;

  const [activeCountryCode, setActiveCountryCode] = useState<string>("cm");
  const [mobileFilter, setMobileFilter] = useState<"current" | "all">("current");

  // Derive selected market or non-operational country based on activeCountryCode
  const activeMarket = OPERATIONAL_MARKETS.find((m) => m.code === activeCountryCode);
  const selectedMarketId = activeMarket ? activeMarket.id : OPERATIONAL_MARKETS[0].id;
  const activeCountryData = AFRICA_COUNTRY_PATHS.find(c => c.id === activeCountryCode);
  const nonOpCountry = activeMarket ? null : { code: activeCountryCode, name: activeCountryData?.name || "" };

  const selectedMarket =
    OPERATIONAL_MARKETS.find((m) => m.id === selectedMarketId) || OPERATIONAL_MARKETS[0];

  // Automatic tour through AFRICA_TOUR_SEQUENCE, resets timer on any change (manual or auto)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveCountryCode((currentCode) => {
        const idx = AFRICA_TOUR_SEQUENCE.indexOf(currentCode);
        const nextIdx = idx === -1 ? 0 : (idx + 1) % AFRICA_TOUR_SEQUENCE.length;
        return AFRICA_TOUR_SEQUENCE[nextIdx];
      });
    }, 3500);

    return () => clearTimeout(timeout);
  }, [activeCountryCode]);

  const handleUserSelectMarket = (id: string) => {
    const market = OPERATIONAL_MARKETS.find((m) => m.id === id);
    if (market) setActiveCountryCode(market.code);
  };

  const handleNonOperationalClick = (countryCode: string) => {
    setActiveCountryCode(countryCode);
  };

  const handleExplore = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="coverage" className="scroll-mt-24 pt-6 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16 bg-[#070D19] text-white border-t border-slate-800/80 overflow-hidden relative">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#16A34A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            DESKTOP COMPOSITION (hidden lg:grid) - 3 COLUMNS: ~27% | ~49% | ~24%
        ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-4 lg:gap-5 items-center">
          
          {/* LEFT COLUMN (~27% / ~3.25 cols) → use col-span-3 */}
          <div className="col-span-3 text-left space-y-3.5">
            
            {/* BRAND EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#16A34A]">
                {c.eyebrow}
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-[1.05]"
            >
              {c.headlinePart1}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">{c.headlinePart2}</span>
            </motion.h2>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-slate-300"
            >
              {c.subtitle}
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-slate-400 leading-relaxed max-w-[320px]"
            >
              {c.description}
            </motion.p>

            {/* 2 PREMIUM CREDIBILITY CARDS */}
            <div className="flex items-center gap-3 pt-3 pb-1">
              {/* CARD 1: DIFC */}
              <div className="flex-1 group flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-[#0B1526]/90 p-3 shadow-2xs hover:border-emerald-500/40 hover:-translate-y-px transition-all cursor-default">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-950/80 text-[#16A34A] border border-emerald-500/30 group-hover:scale-105 group-hover:text-emerald-400 group-hover:border-emerald-400/40 transition-all duration-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5 min-w-0 group-hover:translate-x-0.5 transition-transform duration-300">
                  <div className="text-[11px] font-extrabold text-white tracking-wide uppercase">{c.card1Title}</div>
                  <div className="text-[10px] font-medium text-slate-400 leading-snug">{c.card1Sub}</div>
                </div>
              </div>

              {/* CARD 2: IGNYTE */}
              <div className="flex-1 group flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-[#0B1526]/90 p-3 shadow-2xs hover:border-emerald-500/40 hover:-translate-y-px transition-all cursor-default">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-950/80 text-[#16A34A] border border-emerald-500/30 group-hover:scale-105 group-hover:text-emerald-400 group-hover:border-emerald-400/40 transition-all duration-300">
                  <Globe2 className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5 min-w-0 group-hover:translate-x-0.5 transition-transform duration-300">
                  <div className="text-[11px] font-extrabold text-white tracking-wide uppercase">{c.card2Title}</div>
                  <div className="text-[10px] font-medium text-slate-400 leading-snug">{c.card2Sub}</div>
                </div>
              </div>
            </div>

            {/* CLOSING CREDIBILITY LINE & MAP LEGEND */}
            <div className="pt-3 flex flex-col xl:flex-row xl:items-center justify-between gap-3 xl:gap-2 border-t border-slate-800/60">
              
              {/* CREDIBILITY LINE */}
              <div className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest max-w-[280px] leading-relaxed">
                {c.closingLine}
              </div>

              {/* MAP LEGEND */}
              <div className="space-y-1 text-[9px] font-semibold text-slate-400 shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                  <span>{c.legendIwnt}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#1E2D4A]" />
                  <span>{c.legendAfrican}</span>
                </div>
              </div>

            </div>

          </div>

          {/* CENTER COLUMN (~49% / ~6 cols): INTERACTIVE AFRICA SVG MAP */}
          <div className="col-span-6 flex items-center justify-center">
            <AfricaMap
              activeCountryCode={activeCountryCode}
              onSelectMarket={handleUserSelectMarket}
              onSelectNonOperational={handleNonOperationalClick}
            />
          </div>

          {/* RIGHT COLUMN (~24% / ~3 cols): FLOATING AFRICA COMMAND VIEW PANEL */}
          <div className="col-span-3 flex items-center justify-center mt-24 lg:mt-40">
            <MarketCommandPanel
              selectedMarket={selectedMarket}
              onSelectMarket={handleUserSelectMarket}
              onExplore={handleExplore}
              nonOpCountry={nonOpCountry}
            />
          </div>

        </div>

        {/* =========================================================================
            MOBILE COMPOSITION (block md:hidden) - DEDICATED RESPONSIVE MOBILE UX
        ========================================================================= */}
        <div className="block md:hidden text-left mx-auto max-w-[430px] px-[2px]">
          
          {/* SECTION INTRO */}
          <div className="space-y-1.5 mb-4">
            <div className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
              <span className="text-[9.5px] font-extrabold uppercase tracking-[0.15em] text-[#16A34A]">
                {c.eyebrow}
              </span>
            </div>

            <h2 className="text-[26px] font-black tracking-tight text-white leading-[1.05]">
              {c.headlinePart1}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">{c.headlinePart2}</span>
            </h2>

            <div className="space-y-2 pt-1">
              <p className="text-[12px] font-bold text-slate-300">
                {c.subtitle}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-[280px]">
                {c.description}
              </p>
            </div>
          </div>

          {/* CREDIBILITY CARDS */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#0B1526]/90 p-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] mb-0.5" />
              <div className="text-[11px] font-extrabold uppercase text-white leading-tight tracking-wide">{c.card1Title}</div>
              <div className="text-[9.5px] font-medium text-slate-400 leading-snug">{c.card1Sub}</div>
            </div>
            <div className="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#0B1526]/90 p-3 shadow-sm">
              <Globe2 className="w-4 h-4 text-[#16A34A] mb-0.5" />
              <div className="text-[11px] font-extrabold uppercase text-white leading-tight tracking-wide">{c.card2Title}</div>
              <div className="text-[9.5px] font-medium text-slate-400 leading-snug">{c.card2Sub}</div>
            </div>
          </div>

          {/* MARKET FILTER (COMPACT SEGMENTED) */}
          <div className="flex items-center gap-2 mb-3 bg-[#0B1424] p-1 rounded-full border border-slate-800/80 w-fit">
            <button
              type="button"
              onClick={() => setMobileFilter("current")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold transition-all ${
                mobileFilter === "current"
                  ? "bg-[#16A34A] text-white shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              {c.mobileToggleCurrent} (8)
            </button>
            <button
              type="button"
              onClick={() => setMobileFilter("all")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold transition-all ${
                mobileFilter === "all"
                  ? "bg-[#16A34A] text-white shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              {c.mobileToggleAll} (54)
            </button>
          </div>

          {/* INSTRUCTION */}
          <div className="text-center mb-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
              {c.mobileTapToExplore}
            </span>
          </div>

          {/* AFRICA MAP (TALLER CONTAINER TO PREVENT CLIPPING) */}
          <div className="w-full relative bg-radial from-[#1E2D4A]/10 to-transparent">
            <div className="w-full h-[480px] relative rounded-2xl border border-slate-800/90 shadow-lg overflow-hidden flex flex-col bg-[#070D19]">
              <div className="w-full h-[360px] mt-2 relative z-0">
                <AfricaMap
                  activeCountryCode={activeCountryCode}
                  onSelectMarket={handleUserSelectMarket}
                  onSelectNonOperational={handleNonOperationalClick}
                />
              </div>
              {/* OVERLAY COMPACT CARD */}
              <div className="absolute bottom-3 left-2 right-2 z-20">
                <MobileMarketCard
                  selectedMarket={selectedMarket}
                  onSelectMarket={handleUserSelectMarket}
                  onExplore={handleExplore}
                />
              </div>
            </div>
          </div>

          {/* CLOSING CREDIBILITY LINE */}
          <div className="pt-6 pb-2 text-center border-t border-slate-800/60 mt-4">
            <div className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed px-4">
              {c.closingLine}
            </div>
          </div>

        </div>

        {/* =========================================================================
            TABLET COMPOSITION (hidden md:grid lg:hidden)
        ========================================================================= */}
        <div className="hidden md:grid lg:hidden grid-cols-12 gap-5 items-center max-w-4xl mx-auto px-4 mt-8">
          
          <div className="col-span-5 text-left space-y-4">
            {/* SECTION INTRO */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#16A34A]">
                  {c.eyebrow}
                </span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-white leading-[1.1]">
                {c.headlinePart1}
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">{c.headlinePart2}</span>
              </h2>
              <div className="space-y-2 pt-1">
                <p className="text-[13px] font-bold text-slate-300">
                  {c.subtitle}
                </p>
                <p className="text-[12px] text-slate-400 leading-relaxed max-w-sm">
                  {c.description}
                </p>
              </div>
            </div>

            {/* 2 PREMIUM CREDIBILITY CARDS (TABLET) */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex-1 flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#0B1526]/90 p-3 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#16A34A] mb-0.5" />
                <div className="text-[11px] font-extrabold uppercase text-white leading-tight tracking-wide">{c.card1Title}</div>
                <div className="text-[9.5px] font-medium text-slate-400 leading-snug">{c.card1Sub}</div>
              </div>
              <div className="flex-1 flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#0B1526]/90 p-3 shadow-sm">
                <Globe2 className="w-4 h-4 text-[#16A34A] mb-0.5" />
                <div className="text-[11px] font-extrabold uppercase text-white leading-tight tracking-wide">{c.card2Title}</div>
                <div className="text-[9.5px] font-medium text-slate-400 leading-snug">{c.card2Sub}</div>
              </div>
            </div>

            {/* CLOSING CREDIBILITY LINE */}
            <div className="pt-4 mt-2 border-t border-slate-800/60">
              <div className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                {c.closingLine}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 pb-4">
              <button
                type="button"
                onClick={() => setMobileFilter("current")}
                className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                  mobileFilter === "current"
                    ? "bg-[#16A34A] text-white shadow-sm"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {c.mobileToggleCurrent} (8)
              </button>
              <button
                type="button"
                onClick={() => setMobileFilter("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                  mobileFilter === "all"
                    ? "bg-[#16A34A] text-white shadow-sm"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {c.mobileToggleAll} (54)
              </button>
            </div>

            <MarketCommandPanel
              selectedMarket={selectedMarket}
              onSelectMarket={handleUserSelectMarket}
              onExplore={handleExplore}
              nonOpCountry={nonOpCountry}
            />
          </div>

          <div className="col-span-7 flex flex-col items-center">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
              {c.mobileTapToExplore}
            </div>
            <div className="w-full aspect-[1/0.9] relative bg-[#0B1424] rounded-2xl border border-slate-800/90 p-4 shadow-lg overflow-hidden flex items-center justify-center">
              <AfricaMap
                activeCountryCode={activeCountryCode}
                onSelectMarket={handleUserSelectMarket}
                onSelectNonOperational={handleNonOperationalClick}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
