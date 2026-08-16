"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/data/translations";

interface LanguageOption {
  code: Language;
  badge: "EN" | "FR";
  nativeLabel: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", badge: "EN", nativeLabel: "English" },
  { code: "fr", badge: "FR", nativeLabel: "Français" },
];

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/90 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-[#0E1B2E] transition-all hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.nav.languageLabel}
      >
        <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
        <span>{currentOption.badge}</span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-1.5 w-36 rounded-xl bg-white border border-slate-200/90 shadow-lg py-1.5 z-50 overflow-hidden"
          >
            <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              {t.nav.languageLabel}
            </div>
            {LANGUAGES.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-slate-50 font-bold text-[#16A34A]"
                      : "font-medium text-[#0E1B2E] hover:bg-slate-50/80"
                  }`}
                >
                  <div className="flex flex-col">
                    <span>{lang.nativeLabel}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{lang.badge}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#16A34A]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
