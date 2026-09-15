"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const STORAGE_KEY = "iwnt_cookie_consent";

export default function CookieNotice() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore storage failures
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[80] p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.16)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-[13px] text-slate-600 leading-relaxed flex-1">
          {t.cookie.message}{" "}
          <Link href="/privacy" className="font-semibold text-[#16A34A] hover:underline">
            {t.cookie.learnMore}
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 inline-flex items-center justify-center rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
        >
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
}
