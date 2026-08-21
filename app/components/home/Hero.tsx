"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import HeroChatBubbles from "./HeroChatBubbles";
import MarketTimeCard from "./MarketTimeCard";
import HeroCapabilities from "./HeroCapabilities";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white pt-18 sm:pt-20 lg:pt-0">
      <div className="relative mx-auto max-w-[1680px]">
        {/* ======================================================
            DESKTOP HERO COMPOSITION (100% UNTOUCHED - lg:block)
        ====================================================== */}
        <div className="relative hidden lg:block h-[720px]">
          {/* STATIC HERO PHOTOGRAPH */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/iwnt-hero-new.jpg"
              alt="IntelWNT professionals connected across African markets"
              fill
              priority
              quality={95}
              draggable={false}
              sizes="100vw"
              className="select-none object-cover object-center brightness-[1.03] contrast-[1.03] saturate-[1.05]"
            />
            {/* PERFECT WHITE BLEND GRADIENT FOR TEXT AREA */}
            <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          </div>

          {/* LEFT CONTENT (Copy, Eyebrow, CTAs - 44% width) */}
          <div className="relative z-30 flex h-full items-center px-12 xl:px-16 2xl:px-20 w-[44%]">
            <div className="w-full max-w-[610px]">
              {/* EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mb-5 flex items-center gap-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#18A94B]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#18A94B]">
                  {t.hero.eyebrow}
                </span>
              </motion.div>

              {/* HEADLINES */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <h1 className="text-[54px] xl:text-[60px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#0D1B2E]">
                  {t.hero.headlineLine1}
                </h1>
                <h2 className="mt-2.5 text-[48px] xl:text-[54px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0D1B2E]">
                  {t.hero.headlineLine2}{" "}
                  <span className="text-[#18A94B]">
                    {t.hero.headlineLine2Emphasis}
                  </span>
                </h2>
              </motion.div>

              {/* BODY COPY */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="mt-6 max-w-[560px] text-[16.5px] leading-[1.65] text-[#4B5B6F]"
              >
                {t.hero.body}
              </motion.p>

              {/* DEVELOPMENT STATUS INDICATOR */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 }}
                className="mt-5 flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#18A94B] shadow-[0_0_0_3px_rgba(24,169,75,0.15)] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#475569]">
                  {t.hero.status}
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
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[10px] bg-[#18A94B] px-7 text-[15.5px] font-semibold text-white shadow-[0_8px_24px_rgba(24,169,75,0.16)] transition hover:bg-[#148D40]"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#vision"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[10px] border border-[#D5DEE8] bg-white px-7 text-[15.5px] font-semibold text-[#0D1B2E] transition hover:border-[#AAB8C7] hover:bg-[#F8FAFC]"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ChevronRight className="h-4 w-4 text-[#77869A] transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT-SIDE MOTION GRAPHICS ZONE */}
          <div className="absolute right-0 top-0 h-full w-[56%] z-20 pointer-events-none">
            {/* Network SVG removed because background image already has the network lines */}
            <MarketTimeCard />
            <HeroChatBubbles />
          </div>
        </div>

        {/* ======================================================
            DELIBERATE MOBILE HERO EXPERIENCE (block lg:hidden)
            Order: Eyebrow -> Headline -> Body -> CTAs -> Photo (AFTER CTAs)
        ====================================================== */}
        <div className="block lg:hidden px-5 sm:px-8 pt-4 sm:pt-6 pb-6">
          {/* STEP 1: EYEBROW */}
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

          {/* STEP 2: HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-[34px] sm:text-[42px] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#0D1B2E]">
              {t.hero.headlineLine1}
            </h1>
            <h2 className="mt-1.5 sm:mt-2 text-[32px] sm:text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0D1B2E]">
              {t.hero.headlineLine2}{" "}
              <span className="text-[#18A94B]">
                {t.hero.headlineLine2Emphasis}
              </span>
            </h2>
          </motion.div>

          {/* STEP 3: SUPPORTING BODY PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#4B5B6F]"
          >
            {t.hero.body}
          </motion.p>

          {/* STEP 4: ACTION CTAS (PLACED BEFORE THE PHOTO!) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 w-full"
          >
            <Link
              href="#partner"
              className="group flex flex-1 min-h-[50px] items-center justify-center gap-2 rounded-[10px] bg-[#18A94B] px-6 text-[15px] font-semibold text-white shadow-xs transition active:bg-[#148D40]"
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

          {/* STEP 5: CINEMATIC HERO VISUAL (CROP SHOWING MAN AND WOMAN CLEARLY) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-7 sm:mt-8 aspect-[4/3] max-h-[360px] w-full overflow-hidden rounded-[16px] sm:rounded-[18px] border border-slate-100/60 shadow-none"
          >
            {/* STATIC PHOTOGRAPH (PRECISE CROP CENTERING MAN & WOMAN IN MOBILE VIEW) */}
            <Image
              src="/images/iwnt-hero-new.jpg"
              alt="IntelWNT professionals connected across African markets"
              fill
              priority
              quality={95}
              draggable={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="select-none object-cover object-[68%_35%] xs:object-[66%_35%] sm:object-[64%_35%] brightness-[1.03] contrast-[1.03] saturate-[1.05]"
            />

            {/* SOFT WHITE-TO-IMAGE TOP FADE GRADIENT OVERLAY */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white via-white/20 to-transparent z-10 pointer-events-none" />

            {/* SINGLE ACTIVE DELICATE ANNOTATION CARD & MAP MOTION OVERLAY */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <MarketTimeCard isMobileOnly={true} />
              <HeroChatBubbles />
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