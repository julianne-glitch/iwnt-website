"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { OPERATIONAL_MARKETS, MarketNode } from "@/app/data/markets";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/data/translations";

type TimeMap = Record<string, string>;

interface MarketTimeCardProps {
  isMobileOnly?: boolean;
}

export default function MarketTimeCard({
  isMobileOnly = false,
}: MarketTimeCardProps) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [times, setTimes] = useState<TimeMap>({});

  // Indices across anchor slots (slot 0: Card A (Man), slot 1: Card B (Woman))
  const [slotIndices, setSlotIndices] = useState<[number, number]>([0, 2]);

  const getFormattedTime = (timeZone: string, lang: Language) => {
    try {
      if (lang === "fr") {
        return new Intl.DateTimeFormat("fr-FR", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
      }
      return new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
    } catch {
      return lang === "fr" ? "09:15" : "09:15 AM";
    }
  };

  useEffect(() => {
    const updateTimes = () => {
      const nextTimes: TimeMap = {};
      OPERATIONAL_MARKETS.forEach((market) => {
        nextTimes[market.id] = getFormattedTime(market.timeZone, language);
      });
      setTimes(nextTimes);
    };

    updateTimes();
    const clockInterval = window.setInterval(updateTimes, 15000);

    if (reduceMotion) {
      return () => window.clearInterval(clockInterval);
    }

    let activeSlotToChange = 0;

    // Rotation interval (rotates 1 slot at a time every 4.5s)
    const rotationInterval = window.setInterval(() => {
      setSlotIndices((current) => {
        const next = [...current] as [number, number];
        const slotToUpdate = activeSlotToChange;
        activeSlotToChange = (activeSlotToChange + 1) % 2;

        let candidate = (next[slotToUpdate] + 1) % OPERATIONAL_MARKETS.length;
        while (candidate === next[0] || candidate === next[1]) {
          candidate = (candidate + 1) % OPERATIONAL_MARKETS.length;
        }

        next[slotToUpdate] = candidate;
        return next;
      });
    }, 4500);

    return () => {
      window.clearInterval(clockInterval);
      window.clearInterval(rotationInterval);
    };
  }, [reduceMotion, language]);

  const market0 = OPERATIONAL_MARKETS[slotIndices[0]];
  const market1 = OPERATIONAL_MARKETS[slotIndices[1]];

  // Effect removed since onActiveMarketsChange is no longer needed

  // MOBILE VIEW: 2 CARDS ON 390px/412px/430px (min-[385px]:block), 1 CARD FALLBACK ON NARROW (<385px)
  if (isMobileOnly) {
    return (
      <div
        aria-label="Operational market cards"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        {/* SVG CONNECTION LINE BETWEEN MOBILE CARDS */}
        <div className="absolute inset-0 -z-10 hidden min-[385px]:block overflow-hidden">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-60">
            <motion.path
              d="M 38 18 Q 50 42 66 65"
              fill="none"
              stroke="#18A94B"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
          {/* Pulses at the ends of the connection */}
          <motion.div 
            className="absolute left-[38%] top-[18%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18A94B]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div 
            className="absolute left-[66%] top-[65%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18A94B]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          />
        </div>

        {/* CARD A: UPPER-LEFT OF AFRICA MAP (Visible on all mobile screens: 360px, 375px, 390px, 430px) */}
        <div className="absolute left-[18%] top-[8%] sm:left-[22%] sm:top-[10%]">
          <AnimatePresence mode="wait">
            <RefinedCard
              key={`mobile-slotA-${market0.id}-${language}`}
              market={market0}
              time={times[market0.id] || getFormattedTime(market0.timeZone, language)}
              language={language}
              reduceMotion={Boolean(reduceMotion)}
              isMobile={true}
            />
          </AnimatePresence>
        </div>

        {/* CARD B: MID-RIGHT OF AFRICA MAP ABOVE LAPTOP & CLEAR OF FACES (Visible on 390px, 412px & 430px viewports >= 385px; hidden on narrow <385px) */}
        <div className="absolute right-[4%] bottom-[24%] min-[385px]:block hidden">
          <AnimatePresence mode="wait">
            <RefinedCard
              key={`mobile-slotB-${market1.id}-${language}`}
              market={market1}
              time={times[market1.id] || getFormattedTime(market1.timeZone, language)}
              language={language}
              reduceMotion={Boolean(reduceMotion)}
              isMobile={true}
            />
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // DESKTOP VIEW: 2 CONNECTED ANCHOR SLOTS
  return (
    <div
      aria-label="Operational market cards"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      {/* ANCHOR A (Man's Country - top left, connecting to his chat bubble) */}
      <div className="absolute left-[8%] top-[14%] sm:left-[12%] sm:top-[16%] lg:left-[16%] lg:top-[18%] xl:left-[18%] xl:top-[20%]">
        <AnimatePresence mode="wait">
          <RefinedCard
            key={`anchorA-${market0.id}-${language}`}
            market={market0}
            time={times[market0.id] || getFormattedTime(market0.timeZone, language)}
            language={language}
            reduceMotion={Boolean(reduceMotion)}
          />
        </AnimatePresence>
      </div>

      {/* ANCHOR B (Woman's Country - near woman's ear/shoulder) */}
      <div className="absolute right-[2%] top-[55%] sm:right-[2%] sm:top-[52%] hidden sm:block">
        <AnimatePresence mode="wait">
          <RefinedCard
            key={`anchorB-${market1.id}-${language}`}
            market={market1}
            time={times[market1.id] || getFormattedTime(market1.timeZone, language)}
            language={language}
            reduceMotion={Boolean(reduceMotion)}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

interface RefinedCardProps {
  market: MarketNode;
  time: string;
  language: Language;
  reduceMotion: boolean;
  isMobile?: boolean;
}

function RefinedCard({ market, time, language, reduceMotion, isMobile = false }: RefinedCardProps) {
  const countryName = market.country[language] || market.country.en;

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 5, scale: 0.97 }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: -3, scale: 0.98 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={
        isMobile
          ? "pointer-events-auto flex min-h-[32px] w-max max-w-[145px] items-center gap-1.5 rounded-[6px] border border-white/80 bg-white/90 px-2 py-0.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "pointer-events-auto flex min-h-[42px] w-max max-w-[220px] items-center gap-2.5 rounded-[10px] border border-white/70 bg-white/90 px-3 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.08)] backdrop-blur-md hover:shadow-[0_6px_20px_rgba(15,23,42,0.12)] transition-shadow"
      }
    >
      {/* REAL CRISP VECTOR SVG FLAG */}
      <div
        className={
          isMobile
            ? "relative h-[9px] w-[13px] shrink-0 overflow-hidden rounded-[1.5px] border border-slate-200/60"
            : "relative h-[12px] w-[16px] shrink-0 overflow-hidden rounded-[2px] border border-slate-200/60"
        }
      >
        <Image
          src={market.flagSvg}
          alt={`${countryName} flag`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* FULL LOCALIZED LOCATION NAME & LIVE LOCAL TIME */}
      <div className="flex flex-col min-w-0 flex-1 justify-center leading-tight">
        <div className="flex items-center gap-1">
          <span
            className={
              isMobile
                ? "whitespace-nowrap text-[8.5px] font-semibold text-[#0D1B2E]"
                : "whitespace-nowrap text-[10.5px] font-semibold text-[#0D1B2E]"
            }
          >
            {market.city}, {countryName}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#18A94B] shrink-0" />
        </div>
        <span
          suppressHydrationWarning
          className={
            isMobile
              ? "mt-0.5 font-mono text-[7.5px] font-medium text-[#64748B] tabular-nums"
              : "mt-0.5 font-mono text-[9px] font-medium text-[#64748B] tabular-nums"
          }
        >
          {time}
        </span>
      </div>
    </motion.div>
  );
}