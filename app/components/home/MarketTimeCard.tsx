"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/data/translations";

type TimeMap = Record<string, string>;

interface MarketTimeCardProps {
  isMobileOnly?: boolean;
}

export type DisplayMarket = {
  id: string;
  city: string;
  country: Record<Language, string>;
  timeZone: string;
  flagSvg: string;
};

// Rotating sequence of International -> African connections
const CONNECTIONS: { origin: DisplayMarket; destinationIndex: number }[] = [
  {
    origin: { id: "london", city: "London", country: { en: "United Kingdom", fr: "Royaume-Uni" }, timeZone: "Europe/London", flagSvg: "https://flagcdn.com/gb.svg" },
    destinationIndex: 0 // Cameroon
  },
  {
    origin: { id: "paris", city: "Paris", country: { en: "France", fr: "France" }, timeZone: "Europe/Paris", flagSvg: "https://flagcdn.com/fr.svg" },
    destinationIndex: 2 // Cote d'Ivoire
  },
  {
    origin: { id: "dubai", city: "Dubai", country: { en: "UAE", fr: "Émirats Arabes Unis" }, timeZone: "Asia/Dubai", flagSvg: "https://flagcdn.com/ae.svg" },
    destinationIndex: 1 // Senegal
  },
  {
    origin: { id: "newyork", city: "New York", country: { en: "USA", fr: "États-Unis" }, timeZone: "America/New_York", flagSvg: "https://flagcdn.com/us.svg" },
    destinationIndex: 3 // DRC
  },
  {
    origin: { id: "brussels", city: "Brussels", country: { en: "Belgium", fr: "Belgique" }, timeZone: "Europe/Brussels", flagSvg: "https://flagcdn.com/be.svg" },
    destinationIndex: 4 // Mali
  },
  {
    origin: { id: "toronto", city: "Toronto", country: { en: "Canada", fr: "Canada" }, timeZone: "America/Toronto", flagSvg: "https://flagcdn.com/ca.svg" },
    destinationIndex: 2 // Cote d'Ivoire
  }
];

export default function MarketTimeCard({
  isMobileOnly = false,
}: MarketTimeCardProps) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [times, setTimes] = useState<TimeMap>({});
  const [connectionIndex, setConnectionIndex] = useState(0);

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
      CONNECTIONS.forEach((c) => {
        nextTimes[c.origin.id] = getFormattedTime(c.origin.timeZone, language);
      });
      setTimes(nextTimes);
    };

    updateTimes();
    const clockInterval = window.setInterval(updateTimes, 15000);

    if (reduceMotion) {
      return () => window.clearInterval(clockInterval);
    }

    const rotationInterval = window.setInterval(() => {
      setConnectionIndex((current) => (current + 1) % CONNECTIONS.length);
    }, 4000); // 4 seconds to allow for full sequence

    return () => {
      window.clearInterval(clockInterval);
      window.clearInterval(rotationInterval);
    };
  }, [reduceMotion, language]);

  const activeConnection = CONNECTIONS[connectionIndex];
  const originMarket = activeConnection.origin;
  
  // Safely get the destination market
  const destIndex = activeConnection.destinationIndex % OPERATIONAL_MARKETS.length;
  const rawDestMarket = OPERATIONAL_MARKETS[destIndex];
  const destinationMarket: DisplayMarket = {
    id: rawDestMarket.id,
    city: rawDestMarket.city,
    country: rawDestMarket.country,
    timeZone: rawDestMarket.timeZone,
    flagSvg: rawDestMarket.flagSvg
  };

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
              key={`mob-path-${connectionIndex}`}
              d="M 38 18 Q 50 42 66 65"
              fill="none"
              stroke="#18A94B"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeInOut", delay: 0.4 }}
            />
          </svg>
          <motion.div 
            key={`mob-pulse1-${connectionIndex}`}
            className="absolute left-[38%] top-[18%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18A94B]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div 
            key={`mob-pulse2-${connectionIndex}`}
            className="absolute left-[66%] top-[65%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18A94B]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4 }}
          />
        </div>

        {/* CARD A: UPPER-LEFT */}
        <div className="absolute left-[18%] top-[8%] sm:left-[22%] sm:top-[10%]">
          <AnimatePresence mode="wait">
            <RefinedCard
              key={`mobile-slotA-${originMarket.id}-${language}`}
              market={originMarket}
              time={times[originMarket.id] || getFormattedTime(originMarket.timeZone, language)}
              language={language}
              reduceMotion={Boolean(reduceMotion)}
              isMobile={true}
              animationDelay={0}
            />
          </AnimatePresence>
        </div>

        {/* CARD B: MID-RIGHT */}
        <div className="absolute right-[4%] bottom-[24%] min-[385px]:block hidden">
          <AnimatePresence mode="wait">
            <RefinedCard
              key={`mobile-slotB-${destinationMarket.id}-${language}`}
              market={destinationMarket}
              time={times[destinationMarket.id] || getFormattedTime(destinationMarket.timeZone, language)}
              language={language}
              reduceMotion={Boolean(reduceMotion)}
              isMobile={true}
              animationDelay={1.4}
            />
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label="Operational market cards"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      {/* DESKTOP SVG NETWORK WITH TIMED ANIMATION */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none hidden sm:block"
        style={{ zIndex: 1 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#18A94B" stopOpacity="1" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arr-g" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#18A94B" />
          </marker>
        </defs>

        <motion.path
          key={`desktop-path-${connectionIndex}`}
          d="M 39 23 C 58 23, 58 58, 76 58"
          fill="none"
          stroke="url(#cg)"
          strokeWidth="0.4"
          strokeDasharray="0.8 1.2"
          filter="url(#glow)"
          markerEnd="url(#arr-g)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.0, ease: "easeInOut", delay: 0.4 }}
        />

        {/* Traveling pulse using animateMotion */}
        <motion.circle key={`desktop-dot-${connectionIndex}`} r="0.9" fill="#ffffff" filter="url(#glow)">
          <animateMotion dur="1.2s" begin="0.4s" repeatCount="1" fill="freeze" path="M 39 23 C 58 23, 58 58, 76 58" />
        </motion.circle>
      </svg>

      {/* ANCHOR A */}
      <div className="absolute left-[8%] top-[14%] sm:left-[12%] sm:top-[16%] lg:left-[16%] lg:top-[18%] xl:left-[18%] xl:top-[20%]">
        <AnimatePresence mode="wait">
          <RefinedCard
            key={`anchorA-${originMarket.id}-${language}`}
            market={originMarket}
            time={times[originMarket.id] || getFormattedTime(originMarket.timeZone, language)}
            language={language}
            reduceMotion={Boolean(reduceMotion)}
            animationDelay={0}
          />
        </AnimatePresence>
      </div>

      {/* ANCHOR B */}
      <div className="absolute right-[2%] top-[55%] sm:right-[2%] sm:top-[52%] hidden sm:block">
          <AnimatePresence mode="wait">
            <RefinedCard
              key={`anchorB-${destinationMarket.id}-${language}`}
              market={destinationMarket}
              time={times[destinationMarket.id] || getFormattedTime(destinationMarket.timeZone, language)}
              language={language}
              reduceMotion={Boolean(reduceMotion)}
              animationDelay={1.4}
            />
          </AnimatePresence>
      </div>
    </div>
  );
}

interface RefinedCardProps {
  market: DisplayMarket;
  time: string;
  language: Language;
  reduceMotion: boolean;
  isMobile?: boolean;
  animationDelay?: number;
}

function RefinedCard({ market, time, language, reduceMotion, isMobile = false, animationDelay = 0 }: RefinedCardProps) {
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
        delay: animationDelay,
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