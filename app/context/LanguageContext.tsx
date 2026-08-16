"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TRANSLATIONS, TranslationSchema } from "@/app/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "iwnt_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language;
      if (savedLang === "en" || savedLang === "fr") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore read errors
    }
  }, []);

  // Synchronize <html lang="..."> attribute with active language
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore write errors
    }
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "en",
      setLanguage: () => {},
      t: TRANSLATIONS.en,
    };
  }
  return context;
}
