"use client";

import Hero from "@/app/components/home/Hero";
import TrustedCarousel from "@/app/components/home/TrustedCarousel";
import EmployeeJourney from "@/app/components/solutions/EmployeeJourney";
import GlobalExpansionJourney from "@/app/components/solutions/GlobalExpansionJourney";
import PlatformSection from "@/app/components/home/PlatformSection";
import CoverageSection from "@/app/components/home/CoverageSection";
import ResourcesSection from "@/app/components/home/ResourcesSection";
import ContactSection from "@/app/components/home/ContactSection";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const sol = t.solutionsPage;

  return (
    <>
      {/* MAIN UNIFIED STORY SCROLL FLOW */}
      <main className="w-full">
        
        {/* 2. HERO SECTION (#home) - 100% UNTOUCHED */}
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>

        {/* 3. TRUSTED BY CLIENTS & PARTNERS */}
        <div className="py-10 bg-white border-b border-slate-100">
          <TrustedCarousel />
        </div>

        {/* 4. SOLUTIONS SECTION (#solutions) - UNIFIED CONTINUOUS FLOW */}
        <section id="solutions" className="scroll-mt-24 py-14 sm:py-16 lg:py-20 bg-slate-50/60">
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
            
            {/* INTRO HEADER (SEAMLESSLY CONNECTED TO JOURNEY PANEL BELOW) */}
            <div className="max-w-3xl mx-auto text-center mb-6 lg:mb-8">
              {/* EYEBROW */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  {sol.eyebrow}
                </span>
              </div>

              {/* MAIN HEADLINE */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-3.5">
                {sol.headline}
              </h2>

              {/* SUPPORTING PARAGRAPH */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                {sol.subtitle}
              </p>

              {/* DEVELOPMENT-STATUS PILL */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#16A34A]/10 px-3.5 py-1 text-xs font-semibold text-[#16A34A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span>{sol.status}</span>
              </div>
            </div>

            {/* REUSED CENTERPIECE EMPLOYEE JOURNEY PANEL */}
            <div className="mb-0">
              <EmployeeJourney />
            </div>

            {/* GLOBAL EXPANSION JOURNEY (CONTINUATION) */}
            <div className="mb-10 sm:mb-16">
              <GlobalExpansionJourney />
            </div>

          </div>
        </section>

        {/* 5. PLATFORM SECTION (#platform) - LESS ADMINISTRATION. MORE CONTROL. */}
        <PlatformSection />

        {/* 6. OUR COVERAGE SECTION (#coverage) */}
        <CoverageSection />

        {/* 7. RESOURCES SECTION (#resources) */}
        <ResourcesSection />


        {/* 9. FINAL STRATEGIC CTA & CONTACT (#contact) */}
        <ContactSection />

      </main>
    </>
  );
}
