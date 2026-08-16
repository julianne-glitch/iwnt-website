"use client";

import Image from "next/image";
import { TRUSTED_COMPANIES } from "@/app/data/trustedCompanies";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TrustedCarousel() {
  const { t } = useLanguage();
  // Duplicate array internally to guarantee a seamless 100% infinite marquee loop
  const marqueeLogos = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section
      className="w-full bg-[#0E1B2E] text-white py-5 sm:py-6 lg:py-8 overflow-hidden border-t border-slate-800/80"
      aria-label="Trusted Clients and Strategic Partners"
    >
      {/* LOCALIZED HEADING */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center">
        <h3 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400/90">
          {t.trustedHeading}
        </h3>
      </div>

      {/* COMPACT CONTINUOUS MARQUEE RAIL / HORIZONTAL TRACK */}
      <div className="relative w-full max-w-[1680px] mx-auto overflow-hidden group">
        {/* Left and Right Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#0E1B2E] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#0E1B2E] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex items-center space-x-8 sm:space-x-11 lg:space-x-14 w-max animate-marquee group-hover:[animation-play-state:paused] prefers-reduced-motion:animate-none prefers-reduced-motion:overflow-x-auto prefers-reduced-motion:w-full prefers-reduced-motion:justify-center py-1">
          {marqueeLogos.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="flex items-center justify-center h-[22px] sm:h-[26px] lg:h-[30px] w-[85px] sm:w-[105px] lg:w-[125px] shrink-0"
            >
              <div className="relative w-full h-full filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 85px, (max-width: 1024px) 105px, 125px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
