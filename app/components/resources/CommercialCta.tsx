"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import { motion } from "motion/react";

interface CommercialCtaProps {
  countryName?: string;
  marketId?: string;
}

export default function CommercialCta({ countryName, marketId }: CommercialCtaProps) {
  const { t } = useLanguage();
  const res = t.resourcesHub;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-24 mb-16 bg-[#0D1B2E] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-white">
          {countryName ? `${res.ctaHeadline} ${countryName}?` : `${res.ctaHeadline} Africa?`}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-xl">
          {res.ctaBody}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16A34A] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#15803D] hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            {res.ctaTalkToTeam}
          </Link>
          {marketId && (
            <Link
              href={`/coverage#${marketId}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all w-full sm:w-auto"
            >
              {res.ctaExplorePrefix} {countryName}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
