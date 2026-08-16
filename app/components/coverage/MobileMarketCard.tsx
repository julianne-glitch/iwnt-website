"use client";

import { motion } from "motion/react";
import { Check, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { MarketNode, OPERATIONAL_MARKETS } from "@/app/data/markets";
import { useLanguage } from "@/app/context/LanguageContext";

interface MobileMarketCardProps {
  selectedMarket: MarketNode;
  onSelectMarket: (marketId: string) => void;
  onExplore: (market: MarketNode) => void;
}

export default function MobileMarketCard({
  selectedMarket,
  onSelectMarket,
  onExplore,
}: MobileMarketCardProps) {
  const { t, language } = useLanguage();
  const c = t.coverageSection;

  const countryName = selectedMarket.country[language] || selectedMarket.country.en;

  const currentIndex = OPERATIONAL_MARKETS.findIndex((m) => m.id === selectedMarket.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + OPERATIONAL_MARKETS.length) % OPERATIONAL_MARKETS.length;
    onSelectMarket(OPERATIONAL_MARKETS[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % OPERATIONAL_MARKETS.length;
    onSelectMarket(OPERATIONAL_MARKETS[nextIdx].id);
  };

  return (
    <motion.div
      key={selectedMarket.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full rounded-2xl border border-slate-700/80 bg-[#0B1424]/95 backdrop-blur-md p-3 shadow-2xl text-left space-y-2.5 pointer-events-auto"
    >
      {/* HEADER: FLAG, NAME, STATUS */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl leading-none drop-shadow-sm">{selectedMarket.flag}</span>
          <div>
            <h3 className="text-[13px] font-black text-white uppercase tracking-wide leading-tight">
              {countryName}
            </h3>
            <p className="text-[10px] font-bold text-slate-400 mt-0.5">
              {selectedMarket.cities}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-emerald-950/80 px-2 py-0.5 border border-emerald-500/30 text-[9px] font-bold text-emerald-400 shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Operational</span>
        </div>
      </div>

      {/* COMPACT CAPABILITIES (3 ITEMS) */}
      <div className="flex flex-wrap gap-x-2.5 gap-y-1 pl-1">
        <div className="text-[9.5px] font-semibold text-slate-300 flex items-center gap-1">
          <Check className="w-3 h-3 text-[#16A34A]" /> {c.cmdCapLocalExpertise}
        </div>
        <div className="text-[9.5px] font-semibold text-slate-300 flex items-center gap-1">
          <Check className="w-3 h-3 text-[#16A34A]" /> {c.cmdCapWorkforceOps}
        </div>
        <div className="text-[9.5px] font-semibold text-slate-300 flex items-center gap-1">
          <Check className="w-3 h-3 text-[#16A34A]" /> {c.cmdCapComplianceSupport}
        </div>
      </div>

      {/* FOOTER: COUNTRY SWITCHER & CTA */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2.5 mt-1">
        
        {/* NAVIGATOR */}
        <div className="flex items-center gap-1">
          <button 
            type="button"
            onClick={handlePrev} 
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-bold text-slate-300 w-16 text-center uppercase truncate">
            {countryName}
          </span>
          <button 
            type="button"
            onClick={handleNext} 
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onExplore(selectedMarket)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#16A34A] hover:bg-emerald-500 text-white text-[10px] font-extrabold shadow-sm transition-colors"
        >
          {c.cmdExplore} <ArrowRight className="w-3 h-3" />
        </button>
        
      </div>
    </motion.div>
  );
}
