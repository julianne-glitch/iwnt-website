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
    const cardClass =
      "w-[clamp(9.5rem,42vw,12.5rem)] min-h-[clamp(2.75rem,8vw,3.25rem)] flex items-center gap-1.5 sm:gap-2 rounded-xl border bg-[#0B1528]/90 px-[clamp(0.4rem,1.5vw,0.65rem)] py-[clamp(0.3rem,1vw,0.45rem)] shadow-md backdrop-blur-md pointer-events-auto";

    return (
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* WESTERN — toward man's shoulder */}
        <div className="absolute left-[24%] sm:left-[26%] top-[46%] sm:top-[48%] z-40 -translate-x-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-orig-${activePair.id}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className={`${cardClass} border-slate-700/60`}
            >
              <div className="relative h-[clamp(0.7rem,2.2vw,0.9rem)] w-[clamp(1rem,3.2vw,1.25rem)] overflow-hidden rounded-[2px] border border-slate-600/80 shrink-0">
                <Image
                  src={activePair.origin.flagSvg}
                  alt={`${activePair.origin.city} flag`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-[clamp(0.4rem,1.6vw,0.48rem)] font-bold tracking-wider text-slate-400 uppercase truncate">
                  {labels.employer}
                </span>
                <span className="text-[clamp(0.6rem,2.4vw,0.72rem)] font-bold text-white leading-tight truncate">
                  {activePair.origin.city}
                </span>
              </div>
              <span
                suppressHydrationWarning
                className="font-mono text-[clamp(0.55rem,2vw,0.65rem)] font-semibold text-[#38BDF8] shrink-0"
              >
                {originTime}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* AFRICAN — toward woman's shoulder; kept clear of status */}
        <div className="absolute left-[82%] sm:left-[84%] top-[38%] sm:top-[40%] z-40 -translate-x-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-dest-${activePair.id}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className={`${cardClass} border-emerald-500/40`}
            >
              <div className="relative h-[clamp(0.7rem,2.2vw,0.9rem)] w-[clamp(1rem,3.2vw,1.25rem)] overflow-hidden rounded-[2px] border border-slate-600/80 shrink-0">
                <Image
                  src={activePair.destination.flagSvg}
                  alt={`${activePair.destination.city} flag`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-[clamp(0.4rem,1.6vw,0.48rem)] font-bold tracking-wider text-emerald-400 uppercase truncate">
                  {labels.workforce}
                </span>
                <span className="text-[clamp(0.6rem,2.4vw,0.72rem)] font-bold text-white leading-tight truncate">
                  {activePair.destination.city}
                </span>
              </div>
              <span
                suppressHydrationWarning
                className="font-mono text-[clamp(0.55rem,2vw,0.65rem)] font-semibold text-[#22C55E] shrink-0"
              >
                {destTime}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* STATUS — Africa map above SA; scales with viewport */}
        <div className="absolute left-[52%] top-[34%] sm:top-[35%] z-30 -translate-x-1/2 scale-[clamp(0.72,2.8vw,1)] origin-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-sig-${activePair.id}-${signalToggle}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-[clamp(0.2rem,0.8vw,0.35rem)]"
            >
              <div className="flex items-center gap-1.5 px-[clamp(0.45rem,1.8vw,0.7rem)] py-[clamp(0.2rem,0.7vw,0.35rem)] rounded-full bg-[#0B1528]/95 border border-emerald-500/40 shadow-xs">
                <span className="h-[clamp(0.3rem,1vw,0.4rem)] w-[clamp(0.3rem,1vw,0.4rem)] rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[clamp(0.45rem,1.7vw,0.55rem)] font-extrabold tracking-wider text-emerald-400 uppercase whitespace-nowrap">
                  IWNT ● CONNECTED
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-[#0B1528]/90 px-[clamp(0.45rem,1.8vw,0.7rem)] py-[clamp(0.2rem,0.7vw,0.35rem)] text-[clamp(0.5rem,1.9vw,0.65rem)] font-semibold text-emerald-400 shadow-sm backdrop-blur-md whitespace-nowrap">
                <span>{signalToggle ? labels.sigPayroll : labels.sigOnboarding}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  const desktopCardClass =
    "pointer-events-auto w-[clamp(10.5rem,14vw,13rem)] min-h-[clamp(2.85rem,3.8vw,3.35rem)] flex items-center gap-[clamp(0.35rem,0.6vw,0.55rem)] rounded-2xl border bg-[#0B1528]/85 px-[clamp(0.5rem,0.8vw,0.7rem)] py-[clamp(0.4rem,0.6vw,0.55rem)] shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md";

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {/* WESTERN — man's shoulder (image pane only) */}
      <div className="absolute left-[30%] top-[48%] xl:top-[49%] z-30 -translate-x-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-origin-${activePair.id}`}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`${desktopCardClass} border-slate-700/60`}
          >
            <div className="relative h-[clamp(0.85rem,1.1vw,1rem)] w-[clamp(1.2rem,1.6vw,1.5rem)] overflow-hidden rounded-[3px] border border-slate-600/80 shrink-0 shadow-xs">
              <Image
                src={activePair.origin.flagSvg}
                alt={`${activePair.origin.city} flag`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[clamp(0.45rem,0.65vw,0.5rem)] font-extrabold tracking-widest text-slate-400 uppercase truncate">
                  {labels.employer}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
              </div>
              <span className="text-[clamp(0.65rem,0.95vw,0.75rem)] font-extrabold text-white leading-tight truncate">
                {activePair.origin.city}, {activePair.origin.country[language]}
              </span>
            </div>

            <div className="pl-2 border-l border-slate-700/70 flex flex-col justify-center shrink-0">
              <span className="text-[clamp(0.4rem,0.55vw,0.48rem)] font-bold text-slate-400 uppercase tracking-wider">
                LOCAL TIME
              </span>
              <span
                suppressHydrationWarning
                className="font-mono text-[clamp(0.6rem,0.85vw,0.7rem)] font-bold text-[#38BDF8]"
              >
                {originTime}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* AFRICAN — raised above the woman */}
      <div className="absolute left-[84%] top-[34%] xl:top-[35%] z-30 -translate-x-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-dest-${activePair.id}`}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
            className={`${desktopCardClass} border-emerald-500/40 shadow-[0_12px_32px_rgba(24,169,75,0.18)]`}
          >
            <div className="relative h-[clamp(0.85rem,1.1vw,1rem)] w-[clamp(1.2rem,1.6vw,1.5rem)] overflow-hidden rounded-[3px] border border-slate-600/80 shrink-0 shadow-xs">
              <Image
                src={activePair.destination.flagSvg}
                alt={`${activePair.destination.city} flag`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[clamp(0.45rem,0.65vw,0.5rem)] font-extrabold tracking-widest text-emerald-400 uppercase truncate">
                  {labels.workforce}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] shrink-0 animate-pulse" />
              </div>
              <span className="text-[clamp(0.65rem,0.95vw,0.75rem)] font-extrabold text-white leading-tight truncate">
                {activePair.destination.city},{" "}
                {activePair.destination.country[language]}
              </span>
            </div>

            <div className="pl-2 border-l border-emerald-500/30 flex flex-col justify-center shrink-0">
              <span className="text-[clamp(0.4rem,0.55vw,0.48rem)] font-bold text-slate-400 uppercase tracking-wider">
                LOCAL TIME
              </span>
              <span
                suppressHydrationWarning
                className="font-mono text-[clamp(0.6rem,0.85vw,0.7rem)] font-bold text-[#22C55E]"
              >
                {destTime}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* STATUS — mid Africa map, clear of country cards */}
      <div className="absolute left-[58%] top-[30%] xl:top-[31%] z-20 -translate-x-1/2 scale-[clamp(0.75,1.05vw,0.95)] origin-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`sig-card-${activePair.id}-${signalToggle}`}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-[clamp(0.25rem,0.5vw,0.4rem)]"
          >
            <div className="flex items-center gap-[clamp(0.35rem,0.55vw,0.5rem)] rounded-full border border-slate-700/70 bg-[#0B1528]/90 px-[clamp(0.65rem,1vw,0.9rem)] py-[clamp(0.25rem,0.4vw,0.4rem)] shadow-md backdrop-blur-md">
              <span className="h-[clamp(0.4rem,0.55vw,0.5rem)] w-[clamp(0.4rem,0.55vw,0.5rem)] rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
              <span className="text-[clamp(0.5rem,0.7vw,0.6rem)] font-extrabold tracking-wider text-white uppercase whitespace-nowrap">
                IWNT <span className="text-[#22C55E]">● CONNECTED</span>
              </span>
            </div>
            <div className="flex items-center gap-[clamp(0.35rem,0.55vw,0.5rem)] rounded-xl border border-emerald-500/30 bg-[#0B1528]/85 px-[clamp(0.65rem,1vw,0.9rem)] py-[clamp(0.25rem,0.4vw,0.4rem)] text-[clamp(0.55rem,0.8vw,0.7rem)] font-semibold text-white shadow-md backdrop-blur-md">
              <span className="text-[#22C55E] font-bold">✓</span>
              <span className="text-emerald-300 font-medium whitespace-nowrap">
                {signalToggle ? labels.sigPayroll : labels.sigOnboarding}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}