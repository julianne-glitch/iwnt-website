"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import EmployeeJourney from "@/app/components/solutions/EmployeeJourney";
import GlobalExpansionJourney from "@/app/components/solutions/GlobalExpansionJourney";
import { useLanguage } from "@/app/context/LanguageContext";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";

export default function SolutionsPage() {
  const { t } = useLanguage();
  const sol = t.solutionsPage;

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-[#0D1B2E] antialiased">
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
          <Breadcrumbs
            className="mb-8"
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
            ]}
          />
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
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

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-4"
            >
              {sol.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-5"
            >
              {sol.subtitle}
            </motion.p>

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

          <div className="mb-0">
            <EmployeeJourney />
          </div>

          <div className="mb-12 sm:mb-16">
            <GlobalExpansionJourney />
          </div>

          <section className="max-w-5xl mx-auto mb-12 sm:mb-16 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#16A34A] mb-3">
              {sol.workflow.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1B2E] tracking-tight mb-3">
              {sol.workflow.headline}
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-8 max-w-3xl">
              {sol.workflow.body}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sol.workflow.steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
                >
                  <div className="text-[11px] font-bold text-[#16A34A] mb-2">0{idx + 1}</div>
                  <h3 className="text-[15px] font-bold text-[#0D1B2E] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-12 sm:mb-16 rounded-3xl border border-slate-800 bg-[#070D19] p-8 sm:p-12 text-white">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#4ADE80] mb-3">
              {sol.architecture.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              {sol.architecture.headline}
            </h2>
            <p className="text-[14.5px] text-slate-400 leading-relaxed mb-8 max-w-3xl">
              {sol.architecture.body}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sol.architecture.points.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] font-medium text-slate-200"
                >
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 text-center shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B2E] mb-6">
              {sol.exploreHeading}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8">
              {sol.solutionPills.map((pill, idx) => (
                <div
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs sm:text-sm font-semibold text-[#0D1B2E]"
                >
                  <span className="text-[11px] font-bold text-[#16A34A]">0{idx + 1}</span>
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact?intent=pilot"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm hover:shadow-md transition-all group"
              >
                <span>{sol.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact?intent=waitlist"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-[#0D1B2E] border border-slate-200 hover:border-[#16A34A] hover:text-[#16A34A] transition-all"
              >
                <span>{sol.ctaSecondary}</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
