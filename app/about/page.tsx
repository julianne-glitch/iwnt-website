"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, Globe2, Network, ArrowDown } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import AfricaNetwork from "@/app/components/home/AfricaNetwork";
import CredibilitySection from "@/app/components/about/CredibilitySection";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  if (!a) return null;

  return (
    <main className="w-full pt-32 lg:pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* TOP HERO SECTION */}
        <section className="relative w-full rounded-[24px] bg-white overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          
          {/* Background Image Container (Right aligned) */}
          <div className="absolute inset-0 z-0 flex justify-end">
            <div className="relative w-full lg:w-[65%] h-full opacity-60 lg:opacity-100">
              {/* Fade gradient from left to right to blend with white background */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent z-10" />
              {/* Fade gradient from bottom for mobile */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent z-10 lg:hidden" />
              
              <Image
                src="/images/iwnt-hero-new.jpg"
                alt="IWNT Network"
                fill
                priority
                className="object-cover object-right"
              />
            </div>
          </div>

          {/* Content (Left aligned) */}
          <div className="relative z-20 w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-8 bg-[#16A34A]/10 px-4 py-2 rounded-full w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#16A34A]">
                {a.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#0D1B2E] tracking-tight leading-[1.1] mb-6"
            >
              {a.hero.headlineLine1} <br />
              <span className="text-slate-300 font-medium">{a.hero.headlineLine2}</span>{" "}
              <span className="text-[#16A34A]">
                {a.hero.headlineLine2Emphasis}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[15px] text-slate-600 leading-[1.7] max-w-[420px] font-medium mb-10"
            >
              {a.hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-full bg-[#16A34A]/10 px-6 py-3 border border-[#16A34A]/20 w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-[11px] font-bold text-[#16A34A] tracking-widest uppercase">
                {a.hero.status}
              </span>
            </motion.div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="relative w-full bg-white rounded-[24px] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          <div className="relative w-full lg:w-[42%] min-h-[450px] shrink-0 bg-slate-50">
            <Image
              src="/images/derick-nzo-fonderson-v2.jpg"
              alt={a.founder.name}
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="relative w-full lg:w-[58%] p-10 lg:p-14 flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-[#16A34A] mb-3">
                {a.founder.label}
              </h3>
              <div className="w-6 h-[3px] rounded-full bg-[#16A34A] mb-6" />
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-[#0D1B2E] mb-5 tracking-tight leading-none">
                {a.founder.name}
              </h2>
              <p className="text-[14.5px] text-slate-600 leading-[1.7] max-w-[360px] font-medium">
                {a.founder.body}
              </p>
            </div>

            <div className="flex flex-row items-center gap-6 sm:gap-12 pt-8 border-t border-slate-100/80">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16A34A]/5 flex items-center justify-center mb-4 border border-[#16A34A]/10">
                  <Calendar className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div className="text-2xl font-black text-[#0D1B2E] mb-1">{a.metrics.val1}</div>
                <div className="text-[10px] font-semibold text-slate-500 w-20 leading-tight">{a.metrics.label1}</div>
              </div>

              <div className="w-px h-16 bg-slate-100" />

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16A34A]/5 flex items-center justify-center mb-4 border border-[#16A34A]/10">
                  <Globe2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div className="text-2xl font-black text-[#0D1B2E] mb-1">{a.metrics.val2}</div>
                <div className="text-[10px] font-semibold text-slate-500 w-16 leading-tight">{a.metrics.label2}</div>
              </div>

              <div className="w-px h-16 bg-slate-100" />

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#16A34A]/5 flex items-center justify-center mb-4 border border-[#16A34A]/10">
                  <Network className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div className="text-2xl font-black text-[#0D1B2E] mb-1">{a.metrics.val3}</div>
                <div className="text-[10px] font-semibold text-slate-500 w-20 leading-tight">{a.metrics.label3}</div>
              </div>
            </div>
          </div>
        </section>

        {/* UNIFIED PREMIUM BOTTOM BLOCK: Credibility + Final Vision */}
        <section className="relative w-full rounded-[24px] bg-gradient-to-b from-[#070D19] to-[#040914] overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-800/60 mb-20 flex flex-col">
          
          {/* Unified Background Ambience */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
          </div>

          {/* TOP HALF: CREDIBILITY */}
          <CredibilitySection />

          {/* BOTTOM HALF: FINAL VISION */}
          <div className="relative w-full flex flex-col lg:flex-row items-center min-h-[380px] z-10 pb-8 lg:pb-0">
            <div className="relative z-20 w-full lg:w-[50%] px-8 pb-8 pt-0 sm:px-12 sm:pb-12 sm:pt-4 lg:p-16">
            <h3 className="text-[9px] font-extrabold uppercase tracking-widest text-[#16A34A] mb-4">
              {a.vision.eyebrow}
            </h3>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.05] mb-5">
              {a.vision.headlineLine1} <br />
              {a.vision.headlineLine2} <span className="text-[#16A34A]">{a.vision.headlineLine2Emphasis}</span>
            </h2>
            <p className="text-[13px] text-slate-400 leading-[1.7] max-w-sm mb-0 font-medium">
              {a.vision.body}
            </p>
          </div>

          <div className="relative w-full lg:w-[60%] h-[320px] lg:h-[450px] lg:absolute lg:right-[-8%] lg:top-[5%] opacity-90 pointer-events-none">
             <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#040914] via-[#040914]/80 to-transparent z-20" />
             <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#040914] to-transparent z-20" />
             <AfricaNetwork activeMarketIds={["cameroon", "senegal", "mali", "cote-divoire", "chad", "drc"]} />
          </div>

          <div className="absolute bottom-8 right-8 z-30">
            <button className="w-11 h-11 rounded-full bg-slate-200/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors group">
              <ArrowDown className="w-5 h-5 text-[#0D1B2E] group-hover:translate-y-px transition-transform" />
            </button>
          </div>
          </div>
        </section>

      </div>
    </main>
  );
}
