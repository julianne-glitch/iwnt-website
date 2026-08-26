"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, Globe2, Network, ArrowDown, ShieldCheck, Cpu, Layers } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import AfricaNetwork from "@/app/components/home/AfricaNetwork";
import CredibilitySection from "@/app/components/about/CredibilitySection";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  if (!a) return null;

  return (
    <main className="w-full pt-32 lg:pt-36 pb-20 bg-white min-h-screen">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* TOP HERO / OPENING STORY SECTION */}
        <section className="relative w-full rounded-[28px] bg-gradient-to-r from-white via-white via-42% via-[#0F172A]/90 via-55% to-[#070E1B] border border-slate-200/80 overflow-hidden flex flex-col lg:flex-row min-h-[580px] lg:h-[780px] shadow-sm">
          
          {/* RIGHT VISUAL STAGE (DEEP NAVY ENVIRONMENT) */}
          <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
            <div className="relative w-full lg:w-[56%] h-full">
              {/* Fade gradient from left white text area into right navy visual stage */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              {/* Fade gradient from bottom for mobile */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070E1B] to-transparent z-10 lg:hidden" />
              
              {/* CODED ATMOSPHERIC GRID */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
                  backgroundSize: "28px 28px",
                }}
              />

              {/* REDUCED ELEGANT AFRICA NETWORK MAP */}
              <div className="absolute inset-0 z-10 opacity-70 p-6">
                <AfricaNetwork activeNodeId="cameroon" />
              </div>

              {/* INTEL HRC -> IWNT EVOLUTION VISUAL CUE */}
              <div className="absolute left-[8%] top-[14%] z-20 hidden lg:flex items-center gap-2 rounded-full border border-slate-700/60 bg-[#0B1528]/90 px-3.5 py-1.5 backdrop-blur-md shadow-md">
                <span className="text-[9.5px] font-extrabold tracking-widest text-slate-400 uppercase">
                  OPERATIONAL HERITAGE
                </span>
                <span className="text-[10px] text-[#18A94B]">→</span>
                <span className="text-[9.5px] font-extrabold tracking-widest text-[#18A94B] uppercase">
                  IWNT PLATFORM
                </span>
              </div>

              {/* PROMINENT ELEVATED PEOPLE PHOTOGRAPHY (UPWARD POSITIONING, CRISP WEBP) */}
              <div className="absolute right-0 bottom-0 h-[92%] xl:h-[96%] w-[90%] xl:w-[94%] z-20">
                <Image
                  src="/images/iwnt-people-hero.webp"
                  alt="IWNT Connected Professionals"
                  fill
                  priority
                  quality={100}
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="select-none object-contain object-bottom z-20"
                />
              </div>

              {/* SINGLE REFINED ABOUT CREDIBILITY CARD */}
              <div className="absolute right-[6%] top-[14%] z-30 hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col gap-1.5 rounded-2xl border border-slate-700/60 bg-[#0B1528]/85 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md max-w-[210px]"
                >
                  <span className="text-[9px] font-extrabold tracking-widest text-emerald-400 uppercase">
                    FROM OPERATIONS TO PLATFORM
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xl font-black text-white">10+ Years</span>
                    <span className="text-[10px] font-semibold text-slate-400">Experience</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-[#18A94B]">8 Markets</span>
                    <span className="text-[10px] font-semibold text-slate-400">African Hubs</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT AREA (Clean White Surface — 44% width) */}
          <div className="relative z-30 w-full lg:w-[44%] p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center">
            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[#18A94B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#18A94B]">
                ABOUT IWNT
              </span>
            </motion.div>

            {/* HEADLINE WITH PRECISE CONTRAST & HIERARCHY */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] sm:text-[48px] lg:text-[52px] font-black text-[#0D1B2E] tracking-tight leading-[1.08] mb-6"
            >
              {a.hero.headlineLine1} <br />
              <span className="text-[#334155] font-extrabold">{a.hero.headlineLine2}</span>{" "}
              <span className="text-[#18A94B] font-black">
                {a.hero.headlineLine2Emphasis}
              </span>
            </motion.h1>

            {/* APPROVED BODY PARAGRAPHS (EXPANDED READABLE WIDTH: 560-620px) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="max-w-[580px] lg:max-w-[620px] mb-8"
            >
              <p className="text-[16.5px] sm:text-[17.5px] text-[#4B5B6F] leading-[1.7] font-medium whitespace-pre-line">
                {a.hero.body}
              </p>
            </motion.div>

            {/* RESTRAINED STATUS BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-slate-100/90 border border-slate-200/80 px-4 py-2 w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-[#18A94B] animate-pulse" />
              <span className="text-[10.5px] font-extrabold text-[#475569] tracking-wider uppercase">
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
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-[#18A94B] mb-3">
                {a.founder.label}
              </h3>
              <div className="w-6 h-[3px] rounded-full bg-[#18A94B] mb-6" />
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-[#0D1B2E] mb-5 tracking-tight leading-none">
                {a.founder.name}
              </h2>
              <p className="text-[14.5px] text-slate-600 leading-[1.7] max-w-[360px] font-medium">
                {a.founder.body}
              </p>
            </div>

            <div className="flex flex-row items-center gap-6 sm:gap-12 pt-8 border-t border-slate-100/80">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#18A94B]/5 flex items-center justify-center mb-4 border border-[#18A94B]/10">
                  <Calendar className="w-5 h-5 text-[#18A94B]" />
                </div>
                <div className="text-2xl font-black text-[#0D1B2E] mb-1">{a.metrics.val1}</div>
                <div className="text-[10px] font-semibold text-slate-500 w-20 leading-tight">{a.metrics.label1}</div>
              </div>

              <div className="w-px h-16 bg-slate-100" />

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#18A94B]/5 flex items-center justify-center mb-4 border border-[#18A94B]/10">
                  <Globe2 className="w-5 h-5 text-[#18A94B]" />
                </div>
                <div className="text-2xl font-black text-[#0D1B2E] mb-1">{a.metrics.val2}</div>
                <div className="text-[10px] font-semibold text-slate-500 w-16 leading-tight">{a.metrics.label2}</div>
              </div>

              <div className="w-px h-16 bg-slate-100" />

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#18A94B]/5 flex items-center justify-center mb-4 border border-[#18A94B]/10">
                  <Network className="w-5 h-5 text-[#18A94B]" />
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
              <h3 className="text-[9px] font-extrabold uppercase tracking-widest text-[#18A94B] mb-4">
                {a.vision.eyebrow}
              </h3>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.05] mb-5">
                {a.vision.headlineLine1} <br />
                {a.vision.headlineLine2} <span className="text-[#18A94B]">{a.vision.headlineLine2Emphasis}</span>
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
