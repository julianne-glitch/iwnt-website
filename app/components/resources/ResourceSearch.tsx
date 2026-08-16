"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Search } from "lucide-react";

export default function ResourceSearch() {
  const { t } = useLanguage();
  const res = t.resourcesHub;
  
  const popularSearches = ["CNPS", "Payroll", "Hiring", "Compliance", "Employment Contracts"];
  
  return (
    <div className="w-full max-w-2xl mt-8 mb-12 sm:mb-16">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#16A34A] transition-colors">
          <Search className="w-5 h-5" />
        </div>
        <input 
          type="text" 
          placeholder={res.searchPlaceholder}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all text-slate-800 text-base"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4 text-[13px]">
        <span className="text-slate-500 font-medium">{res.popularSearchesLabel}</span>
        {popularSearches.map((term, idx) => (
          <button key={idx} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-[#16A34A] hover:border-emerald-200 transition-colors cursor-pointer">
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
