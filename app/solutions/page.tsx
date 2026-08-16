"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import EmployeeJourney from "@/app/components/solutions/EmployeeJourney";
import GlobalExpansionJourney from "@/app/components/solutions/GlobalExpansionJourney";
import { useLanguage } from "@/app/context/LanguageContext";

export default function SolutionsPage() {
  const { t } = useLanguage();
  const sol = t.solutionsPage;

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-[#0D1B2E] antialiased">


      <main className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* ======================================================
              SECTION 1: COMPACT SOLUTIONS INTRO HEADER
          ====================================================== */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            
            {/* SMALL EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                {sol.eyebrow}
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-4"
            >
              {sol.headline}
            </motion.h1>

            {/* SUPPORTING COPY */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5"
            >
              {sol.subtitle}
            </motion.p>

            {/* DEVELOPMENT STATUS INDICATOR */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#16A34A]/10 px-3.5 py-1 text-xs font-semibold text-[#16A34A]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span>{sol.status}</span>
            </motion.div>
          </div>

          {/* ======================================================
              SECTION 2: MAIN EMPLOYEE JOURNEY CENTERPIECE PANEL
          ====================================================== */}
          <div className="mb-0">
            <EmployeeJourney />
          </div>

          {/* ======================================================
              SECTION 3: GLOBAL EXPANSION JOURNEY
          ====================================================== */}
          <div className="mb-16 sm:mb-24">
            <GlobalExpansionJourney />
          </div>

          {/* ======================================================
              SECTION 4: POST-JOURNEY TRANSITION CTA & SOLUTION PILLS
          ====================================================== */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B2E] mb-6">
              {sol.exploreHeading}
            </h3>

            {/* 6 COMPACT SOLUTION PILLS */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8">
              {sol.solutionPills.map((pill, idx) => (
                <div
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0D1B2E] hover:border-[#16A34A] hover:bg-[#16A34A]/5 hover:text-[#16A34A] transition-all cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-[#16A34A]">0{idx + 1}</span>
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact?intent=partnership"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm hover:shadow-md transition-all group"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </main>


    </div>
  );
}
