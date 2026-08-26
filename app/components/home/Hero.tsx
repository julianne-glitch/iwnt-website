"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import AfricaNetwork from "./AfricaNetwork";
import MarketTimeCard, { CROSS_BORDER_PAIRS } from "./MarketTimeCard";
import HeroCapabilities from "./HeroCapabilities";

export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  // Orchestrate synchronized paired market switching loop (7.5 seconds per pairing)
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setCurrentPairIndex((prev) => (prev + 1) % CROSS_BORDER_PAIRS.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const activeDestinationNodeId =
    CROSS_BORDER_PAIRS[currentPairIndex % CROSS_BORDER_PAIRS.length].destination.nodeId || "cameroon";

  return (
    <section className="relative overflow-hidden bg-white pt-18 sm:pt-20 lg:pt-0">
      <div className="relative mx-auto max-w-[1680px]">
        {/* ======================================================
            DESKTOP HERO COMPOSITION (44% COPY / 56% VISUAL STAGE)
        ====================================================== */}
        <div className="relative hidden lg:block h-[740px] xl:h-[760px]">

          {/* LAYER 1: SMOOTH CONTINUOUS GRADIENT TRANSITION (WHITE -> PALE BLUE -> NAVY) */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white via-42% via-[#0F172A]/90 via-55% to-[#070E1B] pointer-events-none" />

          {/* LAYER 2: SUBTLE CODED GRID ATMOSPHERE ON RIGHT NAVY STAGE */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-[56%] z-5 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* LAYER 3: CODED SVG AFRICA MAP (REDUCED 25%, CENTERED BETWEEN PEOPLE) */}
          <div className="absolute right-0 top-0 h-full w-[56%] z-10 pointer-events-none">
            <AfricaNetwork activeNodeId={activeDestinationNodeId} />
          </div>

          {/* LAYER 4: PROMINENT PEOPLE PHOTOGRAPHY (20% LARGER, MOVED UPWARD FOR HIGH FOCAL POINT) */}
          <div className="absolute right-0 bottom-0 h-[95%] xl:h-[98%] w-[56%] xl:w-[58%] z-20 pointer-events-none">
            <Image
              src="/images/iwnt-people-hero.webp"
              alt="IntelWNT international employer connected with African workforce operations"
              fill
              priority
              quality={100}
              draggable={false}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="select-none object-contain object-bottom"
            />
          </div>

          {/* LAYER 5 & 6: ANIMATED BEZIER ROUTE & LIVE LOCATION CARDS */}
          <div className="absolute right-0 top-0 h-full w-[56%] z-30 pointer-events-none">
            <MarketTimeCard currentPairIndex={currentPairIndex} />
          </div>

          {/* LEFT CONTENT AREA (Clean White Text Surface — 44% width) */}
          <div className="relative z-40 flex h-full items-center px-12 xl:px-16 2xl:px-20 w-[44%]">
            <div className="w-full max-w-[620px]">
              {/* EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mb-5 flex items-center gap-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#18A94B]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#18A94B]">
                  {t.hero.eyebrow}
                </span>
              </motion.div>

              {/* PRIMARY HEADLINE */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <h1 className="text-[50px] xl:text-[56px] font-black leading-[0.98] tracking-[-0.045em] text-[#0D1B2E]">
                  {t.hero.headlineLine1}
                </h1>
                <h2 className="mt-2 text-[44px] xl:text-[50px] font-black leading-[1.02] tracking-[-0.04em] text-[#0D1B2E]">
                  {t.hero.headlineLine2}{" "}
                  <span className="text-[#18A94B]">
                    {t.hero.headlineLine2Emphasis}
                  </span>
                </h2>
              </motion.div>

              {/* APPROVED SUBHEADLINE */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-3.5"
              >
                <p className="text-[21px] xl:text-[23px] font-extrabold leading-snug tracking-tight text-[#0D1B2E]">
                  {t.hero.subheadline}
                </p>
              </motion.div>

              {/* BODY COPY */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="mt-4 max-w-[550px] text-[15.5px] xl:text-[16px] leading-[1.65] text-[#4B5B6F]"
              >
                {t.hero.body}
              </motion.p>

              {/* APPROVED TAGLINE WITH VISUAL SEPARATION */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 }}
                className="mt-3.5 pt-3 border-t border-slate-200/80 max-w-[550px]"
              >
                <span className="text-[13.5px] font-bold text-[#18A94B] tracking-tight">
                  {t.hero.tagline}
                </span>
              </motion.div>

              {/* ACTION CTAS */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.6 }}
                className="mt-7 flex flex-row gap-3"
              >
                <Link
                  href="#partner"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[12px] bg-[#18A94B] px-7 text-[15.5px] font-bold text-white shadow-[0_8px_24px_rgba(24,169,75,0.18)] transition hover:bg-[#148D40]"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#vision"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[12px] border border-[#D5DEE8] bg-white px-7 text-[15.5px] font-semibold text-[#0D1B2E] transition hover:border-[#AAB8C7] hover:bg-[#F8FAFC]"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ChevronRight className="h-4 w-4 text-[#77869A] transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ======================================================
            DELIBERATE MOBILE & TABLET HERO EXPERIENCE (block lg:hidden)
            Order: Eyebrow -> Headline -> Subheadline -> Body -> Tagline -> CTAs -> Visual Stage
        ====================================================== */}
        <div className="block lg:hidden px-5 sm:px-8 pt-4 sm:pt-6 pb-6">
          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#18A94B] shrink-0" />
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#18A94B]">
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-[34px] sm:text-[42px] font-black leading-[1.03] tracking-[-0.04em] text-[#0D1B2E]">
              {t.hero.headlineLine1}
            </h1>
            <h2 className="mt-1.5 sm:mt-2 text-[32px] sm:text-[40px] font-black leading-[1.05] tracking-[-0.035em] text-[#0D1B2E]">
              {t.hero.headlineLine2}{" "}
              <span className="text-[#18A94B]">
                {t.hero.headlineLine2Emphasis}
              </span>
            </h2>
          </motion.div>

          {/* SUBHEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-2.5 text-[17px] sm:text-[19px] font-extrabold text-[#0D1B2E] tracking-tight"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* BODY COPY */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#4B5B6F]"
          >
            {t.hero.body}
          </motion.p>

          {/* TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-2.5 pt-2 border-t border-slate-200/80"
          >
            <span className="text-[12.5px] font-bold text-[#18A94B]">
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* ACTION CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 w-full"
          >
            <Link
              href="#partner"
              className="group flex flex-1 min-h-[50px] items-center justify-center gap-2 rounded-[10px] bg-[#18A94B] px-6 text-[15px] font-bold text-white shadow-xs transition active:bg-[#148D40]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#vision"
              className="group flex flex-1 min-h-[50px] items-center justify-center gap-2 rounded-[10px] border border-[#D5DEE8] bg-white px-6 text-[15px] font-semibold text-[#0D1B2E] transition active:bg-[#F8FAFC]"
            >
              <span>{t.hero.secondaryCta}</span>
              <ChevronRight className="h-4 w-4 text-[#77869A]" />
            </Link>
          </motion.div>

          {/* LAYERED MOBILE VISUAL STAGE (DEEP NAVY ENVIRONMENT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-7 sm:mt-8 min-h-[390px] w-full overflow-hidden rounded-[20px] border border-slate-700/60 bg-gradient-to-b from-[#0B172A] to-[#070E1B]"
          >
            {/* CODED AFRICA MAP */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-80">
              <AfricaNetwork activeNodeId={activeDestinationNodeId} isMobileOnly={true} />
            </div>

            {/* PEOPLE IMAGE */}
            <div className="absolute inset-x-0 bottom-0 h-[240px] sm:h-[280px] z-20 pointer-events-none">
              <Image
                src="/images/iwnt-people-hero.webp"
                alt="IntelWNT cross-border professionals"
                fill
                priority
                quality={100}
                draggable={false}
                sizes="100vw"
                className="select-none object-contain object-bottom"
              />
            </div>

            {/* LIVE LOCATION CARDS & MICRO-SIGNAL */}
            <div className="relative z-30 pt-3">
              <MarketTimeCard currentPairIndex={currentPairIndex} isMobileOnly={true} />
            </div>
          </motion.div>
        </div>

        {/* CAPABILITIES STRIP */}
        <div className="relative z-50 mx-4 sm:mx-8 lg:mx-12 xl:mx-16 -mt-3 rounded-[18px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
          <HeroCapabilities />
        </div>
      </div>
    </section>
  );
}