"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageWrapper({
  en,
  fr,
}: {
  en: React.ReactNode;
  fr: React.ReactNode;
}) {
  const { language } = useLanguage();
  return <>{language === "fr" ? fr : en}</>;
}
