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

  // ─── UNIFIED MARKET STATE ───────────────────────────────────────
  const activeCountry = nonOpCountry
    ? {
        id: nonOpCountry.code,
        code: nonOpCountry.code,
        country: { en: nonOpCountry.name, fr: nonOpCountry.name },
        cities: c.cmdNonOpStatus || "Network Expansion",
        flag: "🌍",
        pulse: { hiring: 1, onboarding: 1, payroll: 1, compliance: 1 },
        insight: { 
          en: c.cmdNonOpCta || "Contact us to establish local operations in this region.", 
          fr: "Contactez-nous pour établir des opérations dans cette région." 
        },
        x: 0,
        y: 0,
      }
    : selectedMarket;

  const countryName = activeCountry.country[language] || activeCountry.country.en;
  const insightText = activeCountry.insight[language] || activeCountry.insight.en;
  const isOp = !nonOpCountry;

  return (
    <motion.div
      key={activeCountry.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-2xl border border-slate-800/90 bg-[#0B1424]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md text-left space-y-3 text-white"
    >
      {/* 1. TOP HEADER BAR */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300">
          {c.cmdTitle}
        </div>
        <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 border text-[9px] font-bold ${isOp ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400' : 'bg-slate-800/80 border-slate-700/50 text-slate-400'}`}>
          {isOp && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          {!isOp && <Globe2 className="w-2.5 h-2.5" />}
          <span>{isOp ? c.cmdLiveNetwork : c.cmdNonOpStatus}</span>
        </div>
      </div>

      {/* 2. SELECTED COUNTRY HEADER WITH FLAG */}
      <div className="flex items-start gap-3 pt-0.5">
        <div className="text-2xl leading-none shrink-0 pt-0.5">{activeCountry.flag}</div>
        <div className="space-y-0 flex-1 min-w-0">
          <h3 className="text-lg font-extrabold text-white tracking-tight truncate">
            {countryName}
          </h3>
          <p className="text-[11px] font-semibold text-slate-400 truncate">
            {activeCountry.cities}
          </p>
        </div>
      </div>

      {/* PRESENCE BADGE */}
      <div>
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold ${isOp ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-400' : 'border-slate-700/40 bg-slate-800/40 text-slate-400'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${isOp ? 'bg-[#16A34A]' : 'bg-slate-500'}`} />
          <span>{isOp ? c.cmdOperationalPresence : c.cmdNonOpStatus}</span>
        </span>
      </div>

      {/* 3. MARKET CAPABILITIES */}
      <div className="space-y-1.5 pt-1.5 border-t border-slate-800/60">
        <div className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
          {c.cmdCapabilitiesTitle}
        </div>

        <div className="space-y-1 text-[11px] font-semibold text-slate-200">
          <div className="flex items-center justify-between">
            <span className={!isOp ? "text-slate-500" : ""}>{c.cmdCapLocalExpertise}</span>
            <div className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${isOp ? 'bg-[#16A34A] text-white' : 'bg-slate-800 text-slate-600'}`}>
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className={!isOp ? "text-slate-500" : ""}>{c.cmdCapWorkforceOps}</span>
            <div className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${isOp ? 'bg-[#16A34A] text-white' : 'bg-slate-800 text-slate-600'}`}>
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className={!isOp ? "text-slate-500" : ""}>{c.cmdCapComplianceSupport}</span>
            <div className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${isOp ? 'bg-[#16A34A] text-white' : 'bg-slate-800 text-slate-600'}`}>
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className={!isOp ? "text-slate-500" : ""}>{c.cmdCapRegionalCoord}</span>
            <div className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${isOp ? 'bg-[#16A34A] text-white' : 'bg-slate-800 text-slate-600'}`}>
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. MARKET PULSE - ACTIVITY LEVEL INDICATORS */}
      <div className="space-y-1.5 pt-1.5 border-t border-slate-800/60">
        <div className="flex items-center justify-between text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
          <span>{c.cmdPulseTitle}</span>
          <span className="text-slate-500 font-medium normal-case">{c.cmdPulseThisMonth}</span>
        </div>

        {/* 4-COLUMN ACTIVITY BARS */}
        <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-slate-800 bg-[#070D19]/80 p-2 text-center">
          {/* HIRING */}
          <div className="space-y-1 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[2px] h-6 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`hiring-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= activeCountry.pulse.hiring ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= activeCountry.pulse.hiring ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.1
                  }}
                  className={`w-1 rounded-t-sm ${level <= activeCountry.pulse.hiring && isOp ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[8px] font-bold text-slate-400 truncate w-full">{c.cmdPulseHiring}</div>
          </div>

          {/* ONBOARDING */}
          <div className="space-y-1 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[2px] h-6 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`onboarding-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= activeCountry.pulse.onboarding ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= activeCountry.pulse.onboarding ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 2.2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.15
                  }}
                  className={`w-1 rounded-t-sm ${level <= activeCountry.pulse.onboarding && isOp ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[8px] font-bold text-slate-400 truncate w-full">{c.cmdPulseOnboarding}</div>
          </div>

          {/* PAYROLL */}
          <div className="space-y-1 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[2px] h-6 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`payroll-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= activeCountry.pulse.payroll ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= activeCountry.pulse.payroll ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.12
                  }}
                  className={`w-1 rounded-t-sm ${level <= activeCountry.pulse.payroll && isOp ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[8px] font-bold text-slate-400 truncate w-full">{c.cmdPulsePayroll}</div>
          </div>

          {/* COMPLIANCE */}
          <div className="space-y-1 flex flex-col items-center">
            <div className="flex items-end justify-center gap-[2px] h-6 w-full">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={`compliance-${level}`}
                  initial={{ height: "10%", opacity: 0.2 }}
                  animate={{ 
                    height: level <= activeCountry.pulse.compliance ? `${20 + (level * 16)}%` : "15%",
                    opacity: level <= activeCountry.pulse.compliance ? [0.6, 1, 0.7] : 0.2
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: level * 0.08
                  }}
                  className={`w-1 rounded-t-sm ${level <= activeCountry.pulse.compliance && isOp ? "bg-[#16A34A]" : "bg-slate-800"}`}
                />
              ))}
            </div>
            <div className="text-[8px] font-bold text-slate-400 truncate w-full">{c.cmdPulseCompliance}</div>
          </div>
        </div>
      </div>

      {/* 5. LOCAL INSIGHT CARD */}
      <div className="rounded-xl border border-slate-800/80 bg-[#08101E]/90 p-2.5 flex items-start gap-2">
        <Lightbulb className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isOp ? 'text-[#16A34A]' : 'text-slate-500'}`} />
        <div className="space-y-0.5">
          <div className={`text-[9px] font-extrabold uppercase tracking-wider ${isOp ? 'text-emerald-400' : 'text-slate-400'}`}>
            {c.cmdInsightTitle}
          </div>
          <p className="text-[10px] font-medium text-slate-300 leading-snug">
            {insightText}
          </p>
        </div>
      </div>

      {/* 6. NAVIGATION CONTROLS & PAGINATION DOTS */}
      <div className="pt-1.5 flex items-center justify-between gap-1 border-t border-slate-800/60">
        <button
          type="button"
          onClick={handlePrev}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-800 text-[11px] font-bold text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer"
        >
          <ChevronLeft className="w-3 h-3" />
          <span className="hidden sm:inline">{c.cmdPrevious}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (isOp) {
              onExplore(selectedMarket);
            } else {
              const contactEl = document.getElementById("contact");
              if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`px-3 py-1.5 rounded-lg text-white text-[11px] font-extrabold shadow-xs transition-all cursor-pointer ${isOp ? 'bg-[#16A34A] hover:bg-[#15803D]' : 'bg-slate-700 hover:bg-slate-600'}`}
        >
          {isOp ? c.cmdExplore : c.cmdNonOpCta}
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-800 text-[11px] font-bold text-slate-300 hover:bg-slate-800/80 hover:text-white transition-all cursor-pointer"
        >
          <span className="hidden sm:inline">{c.cmdNext}</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* PAGE DOTS */}
      <div className="flex items-center justify-center gap-1 pt-0.5">
        {OPERATIONAL_MARKETS.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            onClick={() => onSelectMarket(m.id)}
            className={`h-1 rounded-full transition-all cursor-pointer ${
              idx === currentIndex && isOp ? "w-4 bg-[#16A34A]" : "w-1 bg-slate-700 hover:bg-slate-500"
            }`}
            aria-label={`Select ${m.country.en}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
