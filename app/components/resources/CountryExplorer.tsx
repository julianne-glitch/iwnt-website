"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { COUNTRY_HUBS } from "@/app/data/resourcesData";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CountryExplorer() {
  const { t, language } = useLanguage();
  const res = t.resourcesHub;

  // Map COUNTRY_HUBS to their detailed market data from OPERATIONAL_MARKETS
  const activeHubs = COUNTRY_HUBS.map(hub => {
    const marketInfo = OPERATIONAL_MARKETS.find(m => m.id === hub.marketId);
    return { ...hub, marketInfo };
  }).filter(h => h.marketInfo);

  return (
    <div className="w-full mb-16 sm:mb-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B2E] mb-2">{res.exploreCountryHeading}</h3>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl">{res.exploreCountryBody}</p>
        </div>
        <Link href="/coverage" className="inline-flex items-center text-[#16A34A] font-bold text-sm hover:text-[#15803D] transition-colors">
          {res.viewAllMarkets}
        </Link>
      </div>

      {/* Horizontal scrolling on mobile, grid on desktop */}
      <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {activeHubs.map((hub, idx) => {
          const countryName = hub.marketInfo?.country[language];
          return (
            <motion.div
              key={hub.marketId}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              className="snap-start shrink-0 w-[280px] sm:w-auto h-full"
            >
              <Link 
                href={`/resources/${hub.marketId}`}
                className="group flex flex-col p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#16A34A] hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{hub.marketInfo?.flag}</span>
                    <h4 className="font-bold text-[#0D1B2E] text-base">{countryName}</h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#16A34A] transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-[13px] text-slate-500 line-clamp-3 mt-auto leading-relaxed">
                  {hub.description[language]}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
