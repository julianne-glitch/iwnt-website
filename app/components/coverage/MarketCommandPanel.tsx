"use client";

import { motion } from "motion/react";
import { Check, Lightbulb, ChevronLeft, ChevronRight, Globe2 } from "lucide-react";
import { MarketNode, OPERATIONAL_MARKETS } from "@/app/data/markets";
import { useLanguage } from "@/app/context/LanguageContext";

interface MarketCommandPanelProps {
  selectedMarket: MarketNode;
  onSelectMarket: (marketId: string) => void;
  onExplore: (market: MarketNode) => void;
  // Non-operational country state
  nonOpCountry?: { code: string; name: string } | null;
}

export default function MarketCommandPanel({
  selectedMarket,
  onSelectMarket,
  onExplore,
  nonOpCountry,
}: MarketCommandPanelProps) {
  const { t, language } = useLanguage();
  const c = t.coverageSection;

  const currentIndex = OPERATIONAL_MARKETS.findIndex((m) => m.id === selectedMarket.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + OPERATIONAL_MARKETS.length) % OPERATIONAL_MARKETS.length;
    onSelectMarket(OPERATIONAL_MARKETS[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % OPERATIONAL_MARKETS.length;
    onSelectMarket(OPERATIONAL_MARKETS[nextIdx].id);
  };

  // ─── NON-OPERATIONAL COUNTRY STATE ───────────────────────────────────
  if (nonOpCountry) {
    return (
      <motion.div
        key={`nonop-${nonOpCountry.code}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full rounded-2xl border border-slate-800/90 bg-[#0B1424]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md text-left space-y-5 text-white"
      >
        {/* TOP HEADER BAR */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300">
            {c.cmdTitle}
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-slate-800/80 px-2.5 py-0.5 border border-slate-700/50 text-[10px] font-bold text-slate-400">
            <Globe2 className="w-3 h-3" />
            <span>{c.cmdNonOpStatus}</span>
          </div>
        </div>

        {/* COUNTRY NAME */}
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            {nonOpCountry.name}
          </h3>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {c.cmdNonOpTitle}
          </p>
        </div>

        {/* GROWING NETWORK INDICATOR */}
        <div className="rounded-xl border border-slate-800/80 bg-[#070D19]/80 p-4 text-center space-y-3">
          <Globe2 className="w-8 h-8 text-slate-600 mx-auto" />
          <p className="text-sm font-bold text-slate-400">
            {c.cmdNonOpStatus}
          </p>
        </div>

        {/* CTA BUTTON */}
        <button
          type="button"
          onClick={() => {
            const contactEl = document.getElementById("contact");
            if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full px-4 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-extrabold shadow-xs transition-all cursor-pointer text-center"
        >
          {c.cmdNonOpCta}
        </button>

        {/* NAVIGATION BACK TO IWNT MARKETS */}
        <div className="pt-2 flex items-center justify-center gap-2 border-t border-slate-800/60">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>{c.cmdPrevious}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer"
          >
            <span>{c.cmdNext}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    );
  }

  // ─── OPERATIONAL MARKET STATE ───────────────────────────────────────
  const countryName = selectedMarket.country[language] || selectedMarket.country.en;
  const insightText = selectedMarket.insight[language] || selectedMarket.insight.en;

  return (
    <motion.div
      key={selectedMarket.id}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-2xl border border-slate-800/90 bg-[#0B1424]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md text-left space-y-4 text-white"
    >
      {/* 1. TOP HEADER BAR */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300">
          {c.cmdTitle}
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-2.5 py-0.5 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{c.cmdLiveNetwork}</span>
        </div>
      </div>

      {/* 2. SELECTED COUNTRY HEADER WITH FLAG */}
      <div className="flex items-start gap-3.5 pt-1">
        <div className="text-3xl leading-none shrink-0 pt-0.5">{selectedMarket.flag}</div>
        <div className="space-y-0.5 flex-1 min-w-0">
          <h3 className="text-xl font-extrabold text-white tracking-tight truncate">
            {countryName}
          </h3>
          <p className="text-xs font-semibold text-slate-400 truncate">
            {selectedMarket.cities}
          </p>
        </div>
      </div>

      {/* PRESENCE BADGE */}
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-3 py-1 text-[10.5px] font-bold text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
          <span>{c.cmdOperationalPresence}</span>
        </span>
      </div>

      {/* 3. MARKET CAPABILITIES */}
      <div className="space-y-2 pt-1 border-t border-slate-800/60">
        <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
          {c.cmdCapabilitiesTitle}
        </div>

        <div className="space-y-1.5 text-xs font-semibold text-slate-200">
          <div className="flex items-center justify-between">
            <span>{c.cmdCapLocalExpertise}</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16A34A] text-white">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>{c.cmdCapWorkforceOps}</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16A34A] text-white">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>{c.cmdCapComplianceSupport}</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16A34A] text-white">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>{c.cmdCapRegionalCoord}</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16A34A] text-white">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. MARKET PULSE — ACTIVITY LEVEL INDICATORS (non-numeric) */}
      <div className="space-y-2 pt-2 border-t border-slate-800/60">
        <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
          <span>{c.cmdPulseTitle}</span>
          <span className="text-slate-500 font-medium normal-case">{c.cmdPulseThisMonth}</span>
        </div>

        {/* 4-COLUMN ACTIVITY BARS (UI/demo indicators) */}
        <div className="grid grid-cols-4 gap-2 rounded-xl border border-slate-800 bg-[#070D19]/80 p-2.5 text-center">
          {/* HIRING */}
          <div className="space-y-1.5 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[3px] h-8 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`hiring-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= selectedMarket.pulse.hiring ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= selectedMarket.pulse.hiring ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.1
                  }}
                  className={`w-1.5 rounded-t-sm ${level <= selectedMarket.pulse.hiring ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[9px] font-bold text-slate-400 truncate w-full">{c.cmdPulseHiring}</div>
          </div>

          {/* ONBOARDING */}
          <div className="space-y-1.5 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[3px] h-8 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`onboarding-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= selectedMarket.pulse.onboarding ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= selectedMarket.pulse.onboarding ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 2.2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.15
                  }}
                  className={`w-1.5 rounded-t-sm ${level <= selectedMarket.pulse.onboarding ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[9px] font-bold text-slate-400 truncate w-full">{c.cmdPulseOnboarding}</div>
          </div>

          {/* PAYROLL */}
          <div className="space-y-1.5 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[3px] h-8 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`payroll-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= selectedMarket.pulse.payroll ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= selectedMarket.pulse.payroll ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.12
                  }}
                  className={`w-1.5 rounded-t-sm ${level <= selectedMarket.pulse.payroll ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[9px] font-bold text-slate-400 truncate w-full">{c.cmdPulsePayroll}</div>
          </div>

          {/* COMPLIANCE */}
          <div className="space-y-1.5 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[3px] h-8 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`compliance-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= selectedMarket.pulse.compliance ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= selectedMarket.pulse.compliance ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.08
                  }}
                  className={`w-1.5 rounded-t-sm ${level <= selectedMarket.pulse.compliance ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[9px] font-bold text-slate-400 truncate w-full">{c.cmdPulseCompliance}</div>
          </div>
        </div>
      </div>

      {/* 5. LOCAL INSIGHT CARD */}
      <div className="rounded-xl border border-slate-800/80 bg-[#08101E]/90 p-3 flex items-start gap-2.5">
        <Lightbulb className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
            {c.cmdInsightTitle}
          </div>
          <p className="text-[11px] font-medium text-slate-300 leading-snug">
            {insightText}
          </p>
        </div>
      </div>

      {/* 6. NAVIGATION CONTROLS & PAGINATION DOTS */}
      <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-800/60">
        <button
          type="button"
          onClick={handlePrev}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{c.cmdPrevious}</span>
        </button>

        <button
          type="button"
          onClick={() => onExplore(selectedMarket)}
          className="px-4 py-1.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-extrabold shadow-xs transition-all cursor-pointer"
        >
          {c.cmdExplore}
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer"
        >
          <span>{c.cmdNext}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* PAGE DOTS */}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        {OPERATIONAL_MARKETS.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            onClick={() => onSelectMarket(m.id)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === currentIndex ? "w-5 bg-[#16A34A]" : "w-1.5 bg-slate-700 hover:bg-slate-500"
            }`}
            aria-label={`Select ${m.country.en}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
