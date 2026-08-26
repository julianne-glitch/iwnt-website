"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/data/translations";

export interface MarketLocation {
  id: string;
  city: string;
  country: Record<Language, string>;
  timeZone: string;
  flagSvg: string;
  nodeId?: string;
}

export interface ConnectionPair {
  id: string;
  origin: MarketLocation;
  destination: MarketLocation;
}

export const CROSS_BORDER_PAIRS: ConnectionPair[] = [
  {
    id: "paris-douala",
    origin: {
      id: "paris",
      city: "Paris",
      country: { en: "France", fr: "France" },
      timeZone: "Europe/Paris",
      flagSvg: "https://flagcdn.com/fr.svg",
    },
    destination: {
      id: "cameroon",
      city: "Douala",
      country: { en: "Cameroon", fr: "Cameroun" },
      timeZone: "Africa/Douala",
      flagSvg: "/flags/cm.svg",
      nodeId: "cameroon",
    },
  },
  {
    id: "london-abidjan",
    origin: {
      id: "london",
      city: "London",
      country: { en: "UK", fr: "Royaume-Uni" },
      timeZone: "Europe/London",
      flagSvg: "https://flagcdn.com/gb.svg",
    },
    destination: {
      id: "cote-divoire",
      city: "Abidjan",
      country: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
      timeZone: "Africa/Abidjan",
      flagSvg: "/flags/ci.svg",
      nodeId: "cote-divoire",
    },
  },
  {
    id: "newyork-dakar",
    origin: {
      id: "newyork",
      city: "New York",
      country: { en: "USA", fr: "États-Unis" },
      timeZone: "America/New_York",
      flagSvg: "https://flagcdn.com/us.svg",
    },
    destination: {
      id: "senegal",
      city: "Dakar",
      country: { en: "Senegal", fr: "Sénégal" },
      timeZone: "Africa/Dakar",
      flagSvg: "/flags/sn.svg",
      nodeId: "senegal",
    },
  },
  {
    id: "berlin-kinshasa",
    origin: {
      id: "berlin",
      city: "Berlin",
      country: { en: "Germany", fr: "Allemagne" },
      timeZone: "Europe/Berlin",
      flagSvg: "https://flagcdn.com/de.svg",
    },
    destination: {
      id: "drc",
      city: "Kinshasa",
      country: { en: "DR Congo", fr: "RDC" },
      timeZone: "Africa/Kinshasa",
      flagSvg: "/flags/cd.svg",
      nodeId: "drc",
    },
  },
  {
    id: "dubai-accra",
    origin: {
      id: "dubai",
      city: "Dubai",
      country: { en: "UAE", fr: "Émirats Arabes Unis" },
      timeZone: "Asia/Dubai",
      flagSvg: "https://flagcdn.com/ae.svg",
    },
    destination: {
      id: "ghana",
      city: "Accra",
      country: { en: "Ghana", fr: "Ghana" },
      timeZone: "Africa/Accra",
      flagSvg: "/flags/gh.svg",
      nodeId: "ghana",
    },
  },
  {
    id: "toronto-bamako",
    origin: {
      id: "toronto",
      city: "Toronto",
      country: { en: "Canada", fr: "Canada" },
      timeZone: "America/Toronto",
      flagSvg: "https://flagcdn.com/ca.svg",
    },
    destination: {
      id: "mali",
      city: "Bamako",
      country: { en: "Mali", fr: "Mali" },
      timeZone: "Africa/Bamako",
      flagSvg: "/flags/ml.svg",
      nodeId: "mali",
    },
  },
];

interface MarketTimeCardProps {
  currentPairIndex: number;
  isMobileOnly?: boolean;
}

export default function MarketTimeCard({
  currentPairIndex,
  isMobileOnly = false,
}: MarketTimeCardProps) {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [times, setTimes] = useState<Record<string, string>>({});
  const [signalToggle, setSignalToggle] = useState(false);

  const activePair = CROSS_BORDER_PAIRS[currentPairIndex % CROSS_BORDER_PAIRS.length];

  const getFormattedTime = (timeZone: string, lang: Language) => {
    try {
      const formatter = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: lang !== "fr",
      });
      return formatter.format(new Date());
    } catch {
      return lang === "fr" ? "10:19" : "10:19 AM";
    }
  };

  useEffect(() => {
    setMounted(true);
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      CROSS_BORDER_PAIRS.forEach((pair) => {
        newTimes[pair.origin.id] = getFormattedTime(pair.origin.timeZone, language);
        newTimes[pair.destination.id] = getFormattedTime(pair.destination.timeZone, language);
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, [language]);

  // Toggle micro-signal midway through the pair duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setSignalToggle((prev) => !prev);
    }, 3800);
    return () => clearTimeout(timer);
  }, [currentPairIndex]);

  const originTime = mounted
    ? times[activePair.origin.id] || getFormattedTime(activePair.origin.timeZone, language)
    : "10:19 AM";

  const destTime = mounted
    ? times[activePair.destination.id] || getFormattedTime(activePair.destination.timeZone, language)
    : "10:19 AM";

  const labels = {
    employer: language === "fr" ? "EMPLOYEUR INTERNATIONAL" : "GLOBAL EMPLOYER",
    workforce: language === "fr" ? "EFFECTIFS AFRIQUE" : "AFRICAN WORKFORCE",
    sigOnboarding: language === "fr" ? "✓ Intégration locale prête" : "✓ Local onboarding ready",
    sigPayroll: language === "fr" ? "✓ Paie coordonnée" : "✓ Payroll coordinated",
  };

  if (isMobileOnly) {
    return (
      <div className="relative w-full px-2 py-2 flex flex-col items-center gap-2.5 pointer-events-none">
        {/* INTERNATIONAL CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mob-orig-${activePair.id}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="w-auto flex items-center gap-2 rounded-xl border border-slate-700/60 bg-[#0B1528]/90 px-3 py-1.5 shadow-md backdrop-blur-md pointer-events-auto"
          >
            <div className="relative h-3.5 w-5 overflow-hidden rounded-[2px] border border-slate-600/80 shrink-0">
              <Image
                src={activePair.origin.flagSvg}
                alt={`${activePair.origin.city} flag`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold tracking-wider text-slate-400 uppercase">
                {labels.employer}
              </span>
              <span className="text-[11px] font-bold text-white leading-tight">
                {activePair.origin.city}, {activePair.origin.country[language]}
              </span>
            </div>
            <span suppressHydrationWarning className="ml-2 font-mono text-[10px] font-semibold text-[#38BDF8]">
              {originTime}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* CONNECTED BADGE */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0B1528]/95 border border-emerald-500/40 shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[9px] font-extrabold tracking-wider text-emerald-400 uppercase">
            IWNT NETWORK CONNECTED
          </span>
        </div>

        {/* AFRICAN CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mob-dest-${activePair.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-auto flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-[#0B1528]/90 px-3 py-1.5 shadow-md backdrop-blur-md pointer-events-auto"
          >
            <div className="relative h-3.5 w-5 overflow-hidden rounded-[2px] border border-slate-600/80 shrink-0">
              <Image
                src={activePair.destination.flagSvg}
                alt={`${activePair.destination.city} flag`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold tracking-wider text-emerald-400 uppercase">
                {labels.workforce}
              </span>
              <span className="text-[11px] font-bold text-white leading-tight">
                {activePair.destination.city}, {activePair.destination.country[language]}
              </span>
            </div>
            <span suppressHydrationWarning className="ml-2 font-mono text-[10px] font-semibold text-[#22C55E]">
              {destTime}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* SINGLE CONTEXTUAL MICRO SIGNAL CARD */}
        <div className="mt-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-sig-${activePair.id}-${signalToggle}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-[#0B1528]/90 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 shadow-sm backdrop-blur-md"
            >
              <span>{signalToggle ? labels.sigPayroll : labels.sigOnboarding}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {/* CARD A — INTERNATIONAL EMPLOYER (UPPER-LEFT, BREATHING ROOM BELOW NAVBAR) */}
      <div className="absolute left-[3%] xl:left-[5%] top-[12%] xl:top-[14%] z-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-origin-${activePair.id}`}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="pointer-events-auto flex items-center gap-3.5 rounded-2xl border border-slate-700/60 bg-[#0B1528]/85 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
          >
            <div className="relative h-4.5 w-6.5 overflow-hidden rounded-[3px] border border-slate-600/80 shrink-0 shadow-xs">
              <Image
                src={activePair.origin.flagSvg}
                alt={`${activePair.origin.city} flag`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
                  {labels.employer}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
              </div>
              <span className="text-[13px] font-extrabold text-white leading-tight">
                {activePair.origin.city}, {activePair.origin.country[language]}
              </span>
            </div>

            <div className="ml-2 pl-3.5 border-l border-slate-700/70 flex flex-col justify-center">
              <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">LOCAL TIME</span>
              <span suppressHydrationWarning className="font-mono text-[11.5px] font-bold text-[#38BDF8]">
                {originTime}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CARD B — AFRICAN WORKFORCE (UPPER-RIGHT, BREATHING ROOM BELOW NAVBAR) */}
      <div className="absolute right-[3%] xl:right-[5%] top-[12%] xl:top-[14%] z-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-dest-${activePair.id}`}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
            className="pointer-events-auto flex items-center gap-3.5 rounded-2xl border border-emerald-500/40 bg-[#0B1528]/85 px-4 py-3 shadow-[0_12px_32px_rgba(24,169,75,0.18)] backdrop-blur-md"
          >
            <div className="relative h-4.5 w-6.5 overflow-hidden rounded-[3px] border border-slate-600/80 shrink-0 shadow-xs">
              <Image
                src={activePair.destination.flagSvg}
                alt={`${activePair.destination.city} flag`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-extrabold tracking-widest text-emerald-400 uppercase">
                  {labels.workforce}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] shrink-0 animate-pulse" />
              </div>
              <span className="text-[13px] font-extrabold text-white leading-tight">
                {activePair.destination.city}, {activePair.destination.country[language]}
              </span>
            </div>

            <div className="ml-2 pl-3.5 border-l border-emerald-500/30 flex flex-col justify-center">
              <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">LOCAL TIME</span>
              <span suppressHydrationWarning className="font-mono text-[11.5px] font-bold text-[#22C55E]">
                {destTime}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CENTRAL IWNT NETWORK BADGE */}
      <div className="absolute left-[58%] -translate-x-1/2 top-[7%] z-40">
        <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-[#0B1528]/90 px-4 py-1.5 shadow-md backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
          <span className="text-[10px] font-extrabold tracking-wider text-white uppercase">
            IWNT NETWORK <span className="text-[#22C55E]">● CONNECTED</span>
          </span>
        </div>
      </div>

      {/* SINGLE CONTEXTUAL MICRO-CARD (FLOATING NEAR AFRICAN DESTINATION SIDE) */}
      <div className="absolute right-[4%] xl:right-[6%] top-[30%] xl:top-[32%] z-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={`sig-card-${activePair.id}-${signalToggle}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-[#0B1528]/85 px-3.5 py-1.5 text-[11.5px] font-semibold text-white shadow-md backdrop-blur-md"
          >
            <span className="text-[#22C55E] font-bold">✓</span>
            <span className="text-emerald-300 font-medium">
              {signalToggle ? labels.sigPayroll : labels.sigOnboarding}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}