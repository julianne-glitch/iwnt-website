"use client";

import dynamic from "next/dynamic";
import Hero from "@/app/components/home/Hero";
import TrustedCarousel from "@/app/components/home/TrustedCarousel";
import { useLanguage } from "@/app/context/LanguageContext";

const EmployeeJourney = dynamic(
  () => import("@/app/components/solutions/EmployeeJourney"),
  { loading: () => <div className="min-h-[320px]" aria-hidden="true" /> }
);
const GlobalExpansionJourney = dynamic(
  () => import("@/app/components/solutions/GlobalExpansionJourney"),
  { loading: () => <div className="min-h-[240px]" aria-hidden="true" /> }
);
const PlatformSection = dynamic(
  () => import("@/app/components/home/PlatformSection"),
  { loading: () => <div className="min-h-[480px]" aria-hidden="true" /> }
);
const CoverageSection = dynamic(
  () => import("@/app/components/home/CoverageSection"),
  { loading: () => <div className="min-h-[480px]" aria-hidden="true" /> }
);
const ResourcesSection = dynamic(
  () => import("@/app/components/home/ResourcesSection"),
  { loading: () => <div className="min-h-[320px]" aria-hidden="true" /> }
);
const ContactSection = dynamic(
  () => import("@/app/components/home/ContactSection"),
  { loading: () => <div className="min-h-[320px]" aria-hidden="true" /> }
);

export default function HomePage() {
  const { t } = useLanguage();
  const sol = t.solutionsPage;

  return (
    <>
      <main className="w-full">
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>

        {/* Hero body — above trusted / testimonials */}
        <p className="max-w-[760px] mx-auto px-5 sm:px-8 pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 text-center text-[14.5px] sm:text-[15.5px] xl:text-[16px] leading-[1.65] text-[#4B5B6F]">
          {t.hero.body}
        </p>

        <div className="pt-6 pb-12 sm:pt-8 sm:pb-14 bg-white border-b border-slate-100">
          <TrustedCarousel />
        </div>

        <section
          id="solutions"
          className="scroll-mt-24 py-14 sm:py-16 lg:py-20 bg-slate-50/60"
        >
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  {sol.eyebrow}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-3.5">
                {sol.headline}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                {sol.subtitle}
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#16A34A]/10 px-3.5 py-1 text-xs font-semibold text-[#16A34A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span>{sol.status}</span>
              </div>
            </div>

            <div className="mb-0">
              <EmployeeJourney />
            </div>

            <div className="mb-10 sm:mb-16">
              <GlobalExpansionJourney />
            </div>
          </div>
        </section>

        <PlatformSection />
        <CoverageSection />
        <ResourcesSection />
        <ContactSection />
      </main>
    </>
  );
}
