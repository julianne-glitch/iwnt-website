"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import MarketTimeCard, { CROSS_BORDER_PAIRS } from "./MarketTimeCard";
import HeroCapabilities from "./HeroCapabilities";

/** Entrance timeline (seconds) — type H1 → H2 → sub → eyebrow last */
const T = {
  brush: 0,
  frame: 0.55,
  text: 1.05,
  media: 1.05,
  cardsAfterMedia: 0.4,
  buttonsAfterText: 0.25,
} as const;

const TYPE_MS = 22;

type TypedCopy = {
  eyebrow: string;
  line1: string;
  line2: string;
  emphasis: string;
  sub: string;
};

function useHeroTypewriter(
  copy: TypedCopy,
  reduceMotion: boolean | null,
  startDelaySec: number,
) {
  // Type order: H1 → H2 → sub → eyebrow (Employer of Record) last
  const full = useMemo(
    () => [copy.line1, copy.line2 + copy.emphasis, copy.sub, copy.eyebrow],
    [copy],
  );

  const [lineIdx, setLineIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  const copyKey = full.join("|");

  useEffect(() => {
    setLineIdx(0);
    setCharCount(0);
    setStarted(false);
    setDone(false);

    if (reduceMotion) {
      setLineIdx(full.length);
      setCharCount(full[full.length - 1]?.length ?? 0);
      setStarted(true);
      setDone(true);
      return;
    }

    const startId = window.setTimeout(
      () => setStarted(true),
      startDelaySec * 1000,
    );
    return () => window.clearTimeout(startId);
  }, [copyKey, reduceMotion, startDelaySec, full]);

  useEffect(() => {
    if (reduceMotion || !started || done) return;

    const current = full[lineIdx] ?? "";
    if (charCount >= current.length) {
      if (lineIdx >= full.length - 1) {
        setDone(true);
        return;
      }
      const nextId = window.setTimeout(() => {
        setLineIdx((i) => i + 1);
        setCharCount(0);
      }, 120);
      return () => window.clearTimeout(nextId);
    }

    const id = window.setTimeout(() => setCharCount((c) => c + 1), TYPE_MS);
    return () => window.clearTimeout(id);
  }, [started, done, lineIdx, charCount, full, reduceMotion]);

  const slice = (i: number) => {
    if (reduceMotion || lineIdx > i) return full[i];
    if (lineIdx < i) return "";
    return full[i].slice(0, charCount);
  };

  const line1 = slice(0);
  const line2Full = slice(1);
  const line2 = line2Full.slice(0, Math.min(line2Full.length, copy.line2.length));
  const emphasis =
    line2Full.length > copy.line2.length
      ? line2Full.slice(copy.line2.length)
      : "";
  const sub = slice(2);
  const eyebrow = slice(3);
  const activeLine = done ? -1 : lineIdx;

  return { eyebrow, line1, line2, emphasis, sub, activeLine, done, started };
}

function TypingCaret({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] bg-[#18A94B] align-baseline animate-pulse"
    />
  );
}

export default function Hero() {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [seqReady, setSeqReady] = useState(false);

  const copy = useMemo<TypedCopy>(
    () => ({
      eyebrow: t.hero.eyebrow,
      line1: t.hero.headlineLine1,
      line2: t.hero.headlineLine2,
      emphasis: t.hero.headlineLine2Emphasis,
      sub: t.hero.subheadline,
    }),
    [t, language],
  );

  const typed = useHeroTypewriter(copy, reduceMotion, T.text);

  useEffect(() => {
    if (reduceMotion) {
      setSeqReady(true);
      return;
    }
    if (!typed.started) {
      setSeqReady(false);
      return;
    }
    const id = window.setTimeout(
      () => setSeqReady(true),
      T.cardsAfterMedia * 1000,
    );
    return () => window.clearTimeout(id);
  }, [typed.started, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !seqReady) return;
    const interval = setInterval(() => {
      setCurrentPairIndex((prev) => (prev + 1) % CROSS_BORDER_PAIRS.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [reduceMotion, seqReady]);

  // Absolute delays from page load — media overlaps typing
  const mediaDelay = reduceMotion ? 0 : T.media;
  const cardsDelay = reduceMotion ? 0 : T.media + T.cardsAfterMedia;
  const buttonsDelay = reduceMotion ? 0 : T.buttonsAfterText;

  const showButtons = reduceMotion || typed.done;

  const ctaButtons = (
    <>
      <Link
        href="/contact?intent=pilot"
        className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-[12px] bg-[#18A94B] px-6 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(24,169,75,0.18)] transition hover:bg-[#148D40] whitespace-nowrap"
      >
        <span>{t.hero.primaryCta}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <Link
        href="/contact?intent=waitlist"
        className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-[12px] border border-[#D5DEE8] bg-white px-6 text-[15px] font-semibold text-[#0D1B2E] transition hover:border-[#AAB8C7] hover:bg-[#F8FAFC] whitespace-nowrap"
      >
        <span>{t.hero.secondaryCta}</span>
        <ChevronRight className="h-4 w-4 text-[#77869A] transition-transform group-hover:translate-x-1" />
      </Link>
    </>
  );

  const copyBlock = (opts: {
    eyebrowClass: string;
    line1Class: string;
    line2Class: string;
    subClass: string;
    subWrapClass?: string;
  }) => (
    <>
      <div className="flex min-h-[1.25rem] items-center gap-2.5 whitespace-nowrap">
        {(typed.eyebrow || reduceMotion) && (
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#18A94B]" />
        )}
        <span className={opts.eyebrowClass}>
          {typed.eyebrow}
          <TypingCaret show={typed.activeLine === 3} />
        </span>
      </div>

      <div className="min-w-0">
        <h1 className={opts.line1Class}>
          {typed.line1}
          <TypingCaret show={typed.activeLine === 0} />
        </h1>
        <h2 className={opts.line2Class}>
          {typed.line2}
          {typed.emphasis ? (
            <span className="text-[#18A94B]">{typed.emphasis}</span>
          ) : null}
          <TypingCaret show={typed.activeLine === 1} />
        </h2>
      </div>

      <p className={opts.subWrapClass ? `${opts.subClass} ${opts.subWrapClass}` : opts.subClass}>
        {typed.sub}
        <TypingCaret show={typed.activeLine === 2} />
      </p>
    </>
  );

  return (
    <section className="relative overflow-hidden bg-white pt-20 sm:pt-[5.25rem] lg:pt-24 xl:pt-[6.25rem] pb-10 sm:pb-12 lg:pb-16">
      {/* 1 — Brush */}
      <motion.div
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, scaleX: 0.15 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          delay: T.brush,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left center" }}
        className="pointer-events-none absolute inset-x-0 top-[5.5rem] sm:top-[5.75rem] lg:top-24 xl:top-[6.25rem] z-[5] hidden h-[634px] lg:block"
      >
        <div className="relative mx-auto h-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="absolute top-[8%] left-0 h-[28%] -translate-x-full overflow-visible lg:w-[calc((100vw-min(100vw,1440px))/2+2.5rem)] xl:w-[calc((100vw-min(100vw,1440px))/2+3rem)]">
            <div className="absolute inset-y-[8%] left-0 w-[72%] rounded-r-full bg-[radial-gradient(ellipse_at_left_center,rgba(31,58,103,0.55)_0%,rgba(31,58,103,0.32)_42%,rgba(56,189,248,0.2)_70%,transparent_100%)] blur-[18px]" />
            <div className="absolute inset-y-[18%] left-[8%] w-[58%] rounded-r-full bg-[radial-gradient(ellipse_at_left_center,rgba(56,189,248,0.4)_0%,rgba(31,58,103,0.22)_55%,transparent_100%)] blur-[12px]" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="wfFill" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(31,58,103,0.52)" />
                  <stop offset="55%" stopColor="rgba(31,58,103,0.28)" />
                  <stop offset="82%" stopColor="rgba(56,189,248,0.22)" />
                  <stop offset="100%" stopColor="rgba(56,189,248,0.08)" />
                </linearGradient>
              </defs>
              <path
                d="M0 8 L52 12 L68 28 L82 36 L100 48 L82 60 L68 68 L52 84 L0 92 Z"
                fill="url(#wfFill)"
              />
              <path
                d="M0 22 L48 26 L70 40 L88 46 L100 50 L88 54 L70 58 L48 72 L0 78 Z"
                fill="rgba(56,189,248,0.22)"
              />
              <path d="M70 44 L100 50 L70 56 Z" fill="rgba(31,58,103,0.55)" />
            </svg>
          </div>

          <div className="absolute top-[24%] left-0 h-[18%] -translate-x-full overflow-visible lg:w-[calc((100vw-min(100vw,1440px))/2+2.5rem)] xl:w-[calc((100vw-min(100vw,1440px))/2+3rem)]">
            <div className="absolute inset-y-[10%] left-0 w-[68%] rounded-r-full bg-[radial-gradient(ellipse_at_left_center,rgba(56,189,248,0.45)_0%,rgba(31,58,103,0.26)_50%,transparent_100%)] blur-[14px]" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 18 L55 24 L78 40 L100 50 L78 60 L55 76 L0 82 Z"
                fill="rgba(31,58,103,0.38)"
              />
              <path
                d="M0 32 L50 36 L78 46 L100 50 L78 54 L50 64 L0 68 Z"
                fill="rgba(56,189,248,0.2)"
              />
              <path d="M72 45 L100 50 L72 55 Z" fill="rgba(31,58,103,0.5)" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Desktop — full-bleed photo flush to border; copy overlays left */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            delay: T.frame,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden lg:block h-[634px] overflow-hidden rounded-[18px] border-[3px] border-[#1F3A67] bg-white origin-left"
        >
          {/* Photo — 80% width (less upscale/blur), full banner height, flush right border */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: mediaDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-y-0 right-0 z-0 w-[80%]"
          >
            <Image
              src="/images/iwnt-hero-banner.jpg"
              alt="IWNT professionals connected across African workforce markets"
              fill
              priority
              quality={80}
              sizes="(min-width: 1280px) 1100px, 80vw"
              className="select-none object-cover object-[58%_center]"
            />
          </motion.div>

          {/* Left wash for readable overlay copy — does not shrink the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-[min(52%,560px)] bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_42%,rgba(255,255,255,0.55)_72%,transparent_100%)]"
          />

          {/* Soft brush spots — pale blue / lavender */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-4 top-2 z-[15] h-[180px] w-[200px] rounded-full bg-[radial-gradient(ellipse_at_35%_40%,rgba(99,140,200,0.38)_0%,rgba(147,197,253,0.22)_45%,transparent_72%)] blur-[26px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-3 z-[15] h-[150px] w-[240px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_35%,rgba(167,139,250,0.36)_0%,rgba(125,211,252,0.22)_42%,transparent_70%)] blur-[24px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[40%] top-1/2 z-[15] h-[160px] w-[180px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_45%_50%,rgba(125,211,252,0.32)_0%,rgba(165,180,252,0.18)_48%,transparent_72%)] blur-[28px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 bottom-3 z-[15] h-[160px] w-[250px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_65%,rgba(129,140,248,0.34)_0%,rgba(147,197,253,0.2)_45%,transparent_72%)] blur-[26px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-2 bottom-2 z-[15] h-[170px] w-[190px] rounded-full bg-[radial-gradient(ellipse_at_40%_55%,rgba(125,211,252,0.34)_0%,rgba(191,219,254,0.2)_48%,transparent_72%)] blur-[26px]"
          />

          {/* Copy — overlaid; does not reserve a white column that pushes the photo */}
          <div className="absolute inset-y-0 left-0 z-40 flex w-[min(480px,46%)] flex-col justify-center gap-4 overflow-visible pl-8 pr-4 xl:pl-10 xl:pr-6">
            {copyBlock({
              eyebrowClass:
                "relative z-50 whitespace-nowrap text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#18A94B]",
              line1Class:
                "relative z-50 m-0 whitespace-nowrap text-[clamp(1.7rem,2.35vw,2.55rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#0D1B2E]",
              line2Class:
                "relative z-50 mt-1 whitespace-nowrap text-[clamp(1.55rem,2.15vw,2.35rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#0D1B2E]",
              subClass:
                "relative z-50 whitespace-nowrap text-[15px] xl:text-[17px] font-extrabold leading-snug tracking-tight text-[#0D1B2E]",
            })}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={
                showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{
                duration: 0.45,
                delay: showButtons ? buttonsDelay : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-50 flex flex-nowrap items-center gap-3"
            >
              {ctaButtons}
            </motion.div>
          </div>

          {/* Cards stay over the photo region (right ~70%) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: cardsDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-y-0 left-[28%] right-0 z-20"
          >
            <MarketTimeCard currentPairIndex={currentPairIndex} />
          </motion.div>
        </motion.div>

        {/* Mobile / tablet */}
        <div className="block lg:hidden pt-4 sm:pt-6 pb-2">
          <div className="flex flex-col gap-2.5">
            {copyBlock({
              eyebrowClass:
                "whitespace-nowrap text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.06em] text-[#18A94B]",
              line1Class:
                "m-0 whitespace-nowrap text-[clamp(1.5rem,6.2vw,2.25rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#0D1B2E]",
              line2Class:
                "mt-1 whitespace-nowrap text-[clamp(1.4rem,5.8vw,2.1rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#0D1B2E]",
              subClass:
                "whitespace-nowrap text-[16px] sm:text-[18px] font-extrabold text-[#0D1B2E] tracking-tight",
              subWrapClass: "mt-0",
            })}
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: mediaDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-6 mx-auto w-full max-w-[1024px] overflow-hidden rounded-[18px] border-[3px] border-[#1F3A67] bg-white"
          >
            {/* Soft brush spots — pale blue / lavender */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-3 top-2 z-[15] h-[120px] w-[130px] rounded-full bg-[radial-gradient(ellipse_at_35%_40%,rgba(99,140,200,0.36)_0%,rgba(147,197,253,0.2)_45%,transparent_72%)] blur-[20px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-2 z-[15] h-[100px] w-[160px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_35%,rgba(167,139,250,0.34)_0%,rgba(125,211,252,0.2)_42%,transparent_70%)] blur-[20px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-[48%] top-1/2 z-[15] h-[105px] w-[120px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_45%_50%,rgba(125,211,252,0.3)_0%,rgba(165,180,252,0.16)_48%,transparent_72%)] blur-[22px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 bottom-2 z-[15] h-[105px] w-[170px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_65%,rgba(129,140,248,0.32)_0%,rgba(147,197,253,0.18)_45%,transparent_72%)] blur-[22px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-2 bottom-2 z-[15] h-[110px] w-[125px] rounded-full bg-[radial-gradient(ellipse_at_40%_55%,rgba(125,211,252,0.32)_0%,rgba(191,219,254,0.18)_48%,transparent_72%)] blur-[20px]"
            />
            <div className="relative w-full aspect-[1024/579]">
              <Image
                src="/images/iwnt-hero-banner.jpg"
                alt="IWNT professionals connected across African workforce markets"
                width={1024}
                height={579}
                priority
                quality={80}
                sizes="(max-width: 640px) 100vw, 560px"
                className="h-full w-full select-none object-cover object-left"
              />
              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: cardsDelay,
                }}
                className="absolute inset-0"
              >
                <MarketTimeCard
                  currentPairIndex={currentPairIndex}
                  isMobileOnly={true}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={
              showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            transition={{
              duration: 0.45,
              delay: showButtons ? buttonsDelay : 0,
            }}
            className="mt-6 flex flex-nowrap items-center gap-2.5 w-full overflow-x-auto"
          >
            {ctaButtons}
          </motion.div>
        </div>

        <div className="relative mt-10 sm:mt-12 lg:mt-14 mb-0">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[20%] top-1/2 z-0 hidden h-[200px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_45%,rgba(31,58,103,0.42)_0%,rgba(56,189,248,0.2)_40%,transparent_68%)] blur-[32px] lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[80%] top-1/2 z-0 hidden h-[190px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_45%_50%,rgba(56,189,248,0.3)_0%,rgba(31,58,103,0.26)_45%,transparent_70%)] blur-[32px] lg:block"
          />

          <div className="relative z-10 rounded-[18px] border border-slate-200/80 bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-[2px]">
            <HeroCapabilities />
          </div>
        </div>
      </div>
    </section>
  );
}
