"use client";

import { motion } from "motion/react";
import { MapPin, ShieldCheck, Cpu, Globe2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const ICONS = [MapPin, ShieldCheck, Cpu, Globe2];

export default function HeroCapabilities() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className="w-full pt-6 sm:pt-8 lg:pt-10 pb-4 border-t border-slate-200/70 mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
        {t.capabilities.map((item, index) => {
          const Icon = ICONS[index] || MapPin;
          return (
            <div
              key={item.title}
              className="flex items-start space-x-2.5 sm:space-x-3 group p-1.5 sm:p-0"
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-slate-100/90 text-[#16A34A] group-hover:bg-[#16A34A]/10 transition-colors shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A34A]" />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-[11.5px] sm:text-xs lg:text-sm font-semibold text-[#0E1B2E] tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] lg:text-xs text-[#475569] leading-snug mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
