"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  FileSpreadsheet,
  FileText,
  MessageSquare,
  Mail,
  Users,
  CreditCard,
  ShieldCheck,
  BarChart3,
  Settings,
  TrendingUp,
  Globe2,
  Search,
  Bell,
  SlidersHorizontal,
  CheckCircle2,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PlatformSection() {
  const { t } = useLanguage();
  const p = t.platformSection;
  const reduceMotion = useReducedMotion();

  // 6 fanned document cards matching Block 1
  const docInputs = [
    { name: "Payroll_Final_V7.xlsx", icon: FileSpreadsheet, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Employee Contract.pdf", icon: FileText, color: "text-rose-500 bg-rose-50 border-rose-200" },
    { name: "Compliance Checklist.docx", icon: FileText, color: "text-blue-500 bg-blue-50 border-blue-200" },
    { name: "Onboarding List.xlsx", icon: FileSpreadsheet, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Client Request.msg", icon: Mail, color: "text-amber-500 bg-amber-50 border-amber-200" },
    { name: "WhatsApp Message", icon: MessageSquare, color: "text-teal-500 bg-teal-50 border-teal-200" },
  ];

  // Mobile Intake Stack State (Cycle 3 cards)
  const [mobileIntakeIndex, setMobileIntakeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIntakeIndex((prev) => (prev + 1) % docInputs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [docInputs.length]);

  // Scenario rotation state for Block 2 (Workforce Scenarios)
  const [scenarioIndex, setScenarioIndex] = useState(0);

  useEffect(() => {
    if (!p.block2Scenarios || p.block2Scenarios.length === 0) return;
    const interval = setInterval(() => {
      setScenarioIndex((prev) => (prev + 1) % p.block2Scenarios.length);
    }, 5500); // 5.5s to read each request
    return () => clearInterval(interval);
  }, [p.block2Scenarios]);
  
  const activeScenario = p.block2Scenarios?.[scenarioIndex] || {
    clientMsg: "Loading...",
    iwntMsg: "Loading...",
    node2Text: "Loading...",
    flag: "🌍"
  };

  return (
    <section id="platform" className="scroll-mt-24 py-8 sm:py-12 lg:py-14 bg-[#F8FAFC] border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            PLATFORM BLOCK 1 - DESKTOP & TABLET VERSION
        ========================================================================= */}
        <div className="hidden md:block max-w-[1300px] mx-auto py-2 lg:py-3 mb-10 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* LEFT COPY BLOCK (25% Width) */}
            <div className="lg:col-span-3 text-left space-y-4">
              
              {/* INTELWNT GREEN BRAND EYEBROW */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#16A34A]">
                  {p.block1Eyebrow}
                </span>
              </motion.div>

              {/* BOLD HEADLINE */}
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0D1B2E] leading-[1.08]"
              >
                {p.block1Headline1}
                <br />
                <span className="bg-gradient-to-r from-[#16A34A] to-emerald-400 bg-clip-text text-transparent drop-shadow-sm pb-1 block">
                  {p.block1Headline2}
                </span>
              </motion.h2>

              {/* BODY TEXT */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[290px]"
              >
                {p.block1Body}
              </motion.p>

              {/* STATUS TAG */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-1"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/60 px-3 py-1 text-[10.5px] font-bold text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span>{p.block1Status}</span>
                </span>
              </motion.div>
            </div>

            {/* CENTER & RIGHT (75% Width): CRISP DOCUMENT CARDS + CONVERGENCE FUNNEL + DASHBOARD */}
            <div className="lg:col-span-9 flex flex-row items-center gap-2 lg:gap-3 relative">
              
              {/* CRISP FANNED DOCUMENT STACK */}
              <div className="w-[215px] shrink-0 space-y-2 relative z-10">
                {docInputs.map((doc, idx) => {
                  const Icon = doc.icon;
                  const tilts = [-2.5, -1, 0, 1, 2, 3];
                  const tilt = tilts[idx % tilts.length];

                  return (
                    <motion.div
                      key={doc.name}
                      initial={{ opacity: 0, x: reduceMotion ? 0 : -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      style={{ transform: `rotate(${tilt}deg)` }}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white px-3 py-2 shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:shadow-md transition-all cursor-pointer group h-[40px]"
                    >
                      <div className={`p-1.5 rounded-lg border ${doc.color} shrink-0`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate text-xs font-bold text-[#0D1B2E] font-mono group-hover:text-[#16A34A] transition-colors">
                        {doc.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CONVERGENCE FUNNEL SVG */}
              <div className="flex items-center justify-center shrink-0 w-20 lg:w-24 h-[260px] relative z-0">
                <svg width="100%" height="100%" viewBox="0 0 90 260" fill="none" className="overflow-visible">
                  <path d="M 0 25 C 45 25, 60 130, 80 130" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <path d="M 0 70 C 45 70, 60 130, 80 130" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                  <path d="M 0 115 C 45 115, 60 130, 80 130" stroke="#16A34A" strokeWidth="2.2" opacity="0.9" />
                  <path d="M 0 155 C 45 155, 60 130, 80 130" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                  <path d="M 0 195 C 45 195, 60 130, 80 130" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <path d="M 0 220 C 45 220, 60 130, 80 130" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                  <polygon points="76,122 88,130 76,138" fill="#0D1B2E" />
                </svg>
              </div>

              {/* HIGH-FIDELITY IWNT WORKFORCE DASHBOARD MOCKUP */}
              <div className="flex-1 rounded-2xl border border-white/60 bg-white/90 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.03] overflow-hidden relative">
                {/* Subtle top glare effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                
                <div className="space-y-3.5 text-left relative z-10">
                  
                  {/* TOP HEADER BAR */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base font-extrabold tracking-tight text-[#0D1B2E]">iwnt</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {p.mockupRegion}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 border border-emerald-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                        <span className="text-[10px] font-bold text-[#16A34A]">{p.mockupLiveWorkspace}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Search className="w-3.5 h-3.5 hover:text-slate-700" />
                        <Bell className="w-3.5 h-3.5 hover:text-slate-700" />
                        <SlidersHorizontal className="w-3.5 h-3.5 hover:text-slate-700" />
                      </div>
                    </div>
                  </div>

                  {/* MAIN DASHBOARD CONTENT */}
                  <div className="grid grid-cols-12 gap-3">
                    
                    {/* LEFT SIDEBAR */}
                    <div className="col-span-3 border-r border-slate-100 pr-2 space-y-1">
                      <div className="flex items-center gap-2 rounded-xl bg-[#E2EBF6] px-2.5 py-1.5 text-xs font-extrabold text-[#0D1B2E]">
                        <BarChart3 className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>{p.mockupDashboard}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer">
                        <Users className="w-3.5 h-3.5" />
                        <span>{p.mockupEmployees}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer">
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>{p.mockupPayroll}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{p.mockupCompliance}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 cursor-pointer">
                        <Settings className="w-3.5 h-3.5" />
                        <span>{p.mockupSettings}</span>
                      </div>
                    </div>

                    {/* MAIN RIGHT PANEL */}
                    <div className="col-span-9 space-y-3">
                      
                      {/* STATS CARDS */}
                      <div className="grid grid-cols-4 gap-2">
                        <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                          <div className="text-[9.5px] font-bold text-slate-500">{p.mockupTotalEmployees}</div>
                          <div className="text-base font-extrabold text-[#0D1B2E]">2,418</div>
                          <div className="text-[9px] font-bold text-emerald-600 flex items-center gap-0.5">
                            <TrendingUp className="w-2.5 h-2.5" /> +14%
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                          <div className="text-[9.5px] font-bold text-slate-500">{p.mockupActiveCountries}</div>
                          <div className="text-base font-extrabold text-[#0D1B2E]">8</div>
                          <div className="text-[9px] font-bold text-emerald-600 flex items-center gap-0.5">
                            <Globe2 className="w-2.5 h-2.5" /> +1 Market
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                          <div className="text-[9.5px] font-bold text-slate-500">{p.mockupPayrollProcessed}</div>
                          <div className="text-base font-extrabold text-[#0D1B2E]">$4.3M</div>
                          <div className="text-[9px] font-bold text-emerald-600">+12.5%</div>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                          <div className="text-[9.5px] font-bold text-slate-500">{p.mockupComplianceRate}</div>
                          <div className="text-base font-extrabold text-[#0D1B2E]">98%</div>
                          <div className="text-[9px] font-bold text-emerald-600">✓ Verified</div>
                        </div>
                      </div>

                      {/* WORKFORCE BY COUNTRY & RECENT ACTIVITY */}
                      <div className="grid grid-cols-2 gap-2">
                        
                        {/* WORKFORCE BY COUNTRY */}
                        <div className="rounded-xl border border-slate-100 p-2.5 bg-white space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10.5px] font-bold text-[#0D1B2E]">{p.mockupWorkforceByCountry}</span>
                            <span className="text-[9px] font-bold text-blue-600 cursor-pointer hover:underline">{p.mockupViewAll}</span>
                          </div>

                          <div className="grid grid-cols-12 gap-2 items-center">
                            {/* AFRICA MAP */}
                            <div className="col-span-5 relative h-16 w-full rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center">
                              <svg viewBox="0 0 100 100" className="h-full w-full">
                                <path
                                  d="M 30,20 C 45,15 65,20 75,30 C 85,45 75,65 65,75 C 55,85 45,88 38,80 C 30,70 25,50 30,20 Z"
                                  fill="#E2E8F0"
                                  stroke="#CBD5E1"
                                  strokeWidth="1"
                                />
                                <path
                                  d="M 38,35 Q 48,32 50,42 Q 42,48 38,35 Z"
                                  fill="#2563EB"
                                  opacity="0.85"
                                />
                                <path
                                  d="M 45,45 Q 55,42 58,52 Q 48,58 45,45 Z"
                                  fill="#2563EB"
                                  opacity="0.85"
                                />
                                <circle cx="40" cy="40" r="3" fill="#16A34A" />
                                <circle cx="50" cy="48" r="3" fill="#16A34A" />
                              </svg>
                            </div>

                            {/* COUNTRY LIST */}
                            <div className="col-span-7 space-y-1 text-[9.5px]">
                              <div className="flex justify-between items-center text-slate-700">
                                <span>🇨🇲 Cameroon</span>
                                <span className="font-extrabold text-[#0D1B2E]">540</span>
                              </div>
                              <div className="flex justify-between items-center text-slate-700">
                                <span>🇨🇮 Côte d&apos;Ivoire</span>
                                <span className="font-extrabold text-[#0D1B2E]">310</span>
                              </div>
                              <div className="flex justify-between items-center text-slate-700">
                                <span>🇸🇳 Senegal</span>
                                <span className="font-extrabold text-[#0D1B2E]">585</span>
                              </div>
                              <div className="flex justify-between items-center text-slate-700">
                                <span>🇨🇩 DR Congo</span>
                                <span className="font-extrabold text-[#0D1B2E]">410</span>
                              </div>
                              <div className="flex justify-between items-center text-slate-700">
                                <span>🇲🇱 Mali</span>
                                <span className="font-extrabold text-[#0D1B2E]">210</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* RECENT ACTIVITY */}
                        <div className="rounded-xl border border-slate-100 p-2.5 bg-white space-y-2">
                          <div className="text-[10.5px] font-bold text-[#0D1B2E]">{p.mockupRecentActivity}</div>
                          <div className="space-y-1.5 text-[9.5px]">
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span className="truncate">{p.mockupActivity1}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span className="truncate">{p.mockupActivity2}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span className="truncate">{p.mockupActivity3}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                              <span className="truncate">{p.mockupActivity4}</span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================================
            PLATFORM BLOCK 1 - DEDICATED MOBILE VERSION (block md:hidden)
            Compact Animated Intake Queue + Dedicated Mobile Product-Preview Card
        ========================================================================= */}
        <div className="block md:hidden mb-12 space-y-6 text-left">
          
          {/* HEADER COPY */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#16A34A]">
                {p.block1Eyebrow}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-[#0D1B2E] leading-tight">
              {p.block1Headline1} {p.block1Headline2}
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              {p.block1Body}
            </p>

            <div className="pt-0.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/60 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span>{p.block1Status}</span>
              </span>
            </div>
          </div>

          {/* COMPACT ANIMATED DOCUMENT INTAKE STACK & PROCESSING INDICATOR */}
          <div className="space-y-3">
            <div className="relative h-[130px] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-2xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                <span>Document Intake Stack</span>
                <span className="text-[#16A34A]">Live Sync</span>
              </div>

              <div className="relative space-y-1.5">
                <AnimatePresence mode="popLayout">
                  {[0, 1, 2].map((offset) => {
                    const item = docInputs[(mobileIntakeIndex + offset) % docInputs.length];
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={`${item.name}-${offset}`}
                        layout
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1 - offset * 0.25, y: 0, scale: 1 - offset * 0.03 }}
                        exit={{ opacity: 0, y: -12, scale: 0.9 }}
                        transition={{ duration: 0.35 }}
                        className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 shadow-2xs"
                      >
                        <div className={`p-1 rounded-md border ${item.color} shrink-0`}>
                          <Icon className="w-3 h-3" />
                        </div>
                        <span className="truncate text-[11px] font-bold text-[#0D1B2E] font-mono">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* PROCESSING ARROW INDICATOR */}
            <div className="flex items-center justify-center gap-2 text-[10.5px] font-extrabold text-[#16A34A]">
              <span>{p.mobileIntakeProcessing}</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-90" />
              </motion.div>
            </div>
          </div>

          {/* DEDICATED MOBILE PRODUCT PREVIEW DASHBOARD CARD */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-md overflow-hidden space-y-3">
            
            {/* MOBILE DASHBOARD HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold tracking-tight text-[#0D1B2E]">iwnt</span>
                <span className="text-slate-300">|</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  WEST & CENTRAL AFRICA
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 border border-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span className="text-[9.5px] font-bold text-[#16A34A]">Live Workspace</span>
              </div>
            </div>

            {/* CLEAN 2 x 2 METRIC GRID */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                <div className="text-[9px] font-bold text-slate-500">{p.mobileDashboardEmployees}</div>
                <div className="text-sm font-extrabold text-[#0D1B2E]">2,418</div>
                <div className="text-[8.5px] font-bold text-emerald-600">+14%</div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                <div className="text-[9px] font-bold text-slate-500">{p.mobileDashboardCountries}</div>
                <div className="text-sm font-extrabold text-[#0D1B2E]">8</div>
                <div className="text-[8.5px] font-bold text-emerald-600">+1 Market</div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                <div className="text-[9px] font-bold text-slate-500">{p.mobileDashboardPayroll}</div>
                <div className="text-sm font-extrabold text-[#0D1B2E]">$4.3M</div>
                <div className="text-[8.5px] font-bold text-emerald-600">+12.5%</div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                <div className="text-[9px] font-bold text-slate-500">{p.mobileDashboardCompliance}</div>
                <div className="text-sm font-extrabold text-[#0D1B2E]">98%</div>
                <div className="text-[8.5px] font-bold text-emerald-600">✓ Verified</div>
              </div>
            </div>

            {/* RECENT ACTIVITY ROW */}
            <div className="rounded-xl border border-slate-100 bg-white p-2.5 space-y-1 text-left">
              <div className="text-[10px] font-bold text-[#0D1B2E]">Recent Activity</div>
              <div className="flex items-center gap-1.5 text-[9.5px] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate font-medium">Payroll completed - Cameroon</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9.5px] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="truncate font-medium">New hire onboarded - Senegal</span>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            PLATFORM BLOCK 2 - DESKTOP VERSION (UNCHANGED, hidden md:block)
        ========================================================================= */}
        <div className="hidden md:block max-w-[1220px] mx-auto text-left pt-1 pb-3">
          
          {/* TIGHTENED SECTION TITLE & SUBTITLE */}
          <div className="mb-5 sm:mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#0D1B2E]"
            >
              {p.block2Headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xs sm:text-[13px] font-medium text-slate-500 mt-0.5"
            >
              {p.block2Subtitle}
            </motion.p>
          </div>

          {/* DESKTOP WORKFLOW CANVAS (~1180px Wide, ~300px Height) */}
          <div className="grid grid-cols-12 gap-5 items-center my-2 relative min-h-[290px]">
            
            {/* LEFT ZONE (~25% Width): CHAT EXCHANGE */}
            <div className="col-span-3 shrink-0 space-y-2.5 flex flex-col justify-center">
              
              {/* INCOMING CLIENT CHAT BUBBLE */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative rounded-2xl rounded-tl-xs bg-white border border-slate-200/90 p-3.5 shadow-2xs max-w-[210px] min-h-[70px]"
              >
                <svg className="absolute -left-2 top-3 w-2.5 h-3 text-white fill-current drop-shadow-2xs" viewBox="0 0 10 12">
                  <path d="M10 0 L0 6 L10 12 Z" />
                </svg>

                <AnimatePresence mode="wait">
                  <motion.p 
                    key={scenarioIndex}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)", position: "absolute" }}
                    transition={{ duration: 0.4 }}
                    className="text-xs sm:text-[13px] font-bold text-[#0D1B2E] leading-snug"
                  >
                    {activeScenario.clientMsg}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* OUTGOING IWNT GREEN CHAT BUBBLE & TYPING INDICATOR */}
              <div className="relative flex justify-end w-full lg:ml-5">
                {/* TYPING INDICATOR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.8, delay: 0.6, times: [0, 0.1, 0.9, 1] }}
                  className="absolute top-0 right-0 rounded-2xl rounded-tr-xs bg-white border border-slate-200/90 p-3.5 shadow-xs flex items-center justify-center gap-1.5 h-10 px-4"
                >
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  <svg className="absolute -right-2 top-3 w-2.5 h-3 text-white fill-current drop-shadow-2xs" viewBox="0 0 10 12">
                    <path d="M0 0 L10 6 L0 12 Z" />
                  </svg>
                </motion.div>

                {/* ACTUAL BUBBLE */}
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 2.3, ease: [0.23, 1, 0.32, 1] }}
                  className="relative rounded-2xl rounded-tr-xs bg-[#16A34A] text-white p-3.5 shadow-xs max-w-[190px] min-h-[60px]"
                >
                  <svg className="absolute -right-2 top-3 w-2.5 h-3 text-[#16A34A] fill-current" viewBox="0 0 10 12">
                    <path d="M0 0 L10 6 L0 12 Z" />
                  </svg>

                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={scenarioIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, position: "absolute" }}
                      transition={{ duration: 0.4 }}
                      className="text-xs sm:text-[13px] font-bold leading-snug"
                    >
                      {activeScenario.iwntMsg}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              </div>

            </div>

            {/* CENTER ZONE (~38% Width): CONTINUOUS ROUTING RAIL PATH WITH 3 STAGES */}
            <div className="flex flex-col justify-center col-span-5 relative h-[220px] px-1">
              
              {/* FAINT ABSTRACT NETWORK BACKGROUND TEXTURE (4% Opacity) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" viewBox="0 0 340 220">
                <circle cx="30" cy="50" r="3" fill="#16A34A" />
                <circle cx="170" cy="110" r="3" fill="#16A34A" />
                <circle cx="310" cy="60" r="3" fill="#16A34A" />
                <line x1="30" y1="50" x2="170" y2="110" stroke="#16A34A" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="170" y1="110" x2="310" y2="60" stroke="#16A34A" strokeWidth="1" strokeDasharray="2 2" />
              </svg>

              {/* CONTINUOUS SVG ROUTING PATH FROM GREEN BUBBLE TIP TO EXPERT IMAGE */}
              <svg className="w-full h-full overflow-visible absolute inset-0" viewBox="0 0 350 220">
                <motion.path
                  d="M 0 110 L 350 110"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  opacity="0.85"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 2.45, ease: "easeInOut" }}
                />

                {/* LUMINOUS LIGHT PULSE TRAVELLING CONTINUOUSLY ALONG THE ENTIRE PATH */}
                {!reduceMotion && (
                  <motion.circle
                    r="4.5"
                    fill="#16A34A"
                    animate={{
                      cx: [0, 85, 175, 265, 350],
                      cy: [110, 110, 110, 110, 110],
                      opacity: [0, 1, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.1,
                      repeat: 0,
                      ease: "easeInOut",
                      delay: 2.45,
                    }}
                  />
                )}
              </svg>

              {/* 3 SOPHISTICATED STAGE NODES ATTACHED DIRECTLY TO THE CONTINUOUS PATH */}
              <div className="relative z-10 grid grid-cols-3 gap-1 text-center w-full">
                
                {/* STAGE 1: REQUEST RECEIVED (DOCUMENT ICON) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 2.6 }}
                  className="flex flex-col items-center space-y-1.5 group relative"
                >
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A] text-white ring-4 ring-emerald-100/90 shadow-2xs z-10">
                    <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 1.5, delay: 2.6, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 rounded-full bg-[#16A34A]" />
                    <FileText className="relative w-3 h-3 z-10" />
                  </div>
                  <div className="flex items-center gap-0.5 text-[10.5px] font-extrabold text-[#0D1B2E] leading-tight px-1">
                    <span>{p.block2Node1}</span>
                    <Check className="w-2.5 h-2.5 text-[#16A34A] inline shrink-0" />
                  </div>
                </motion.div>

                {/* STAGE 2: TEAM MATCHED */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 3.1 }}
                  className="flex flex-col items-center space-y-1.5 group relative"
                >
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A] text-white ring-4 ring-emerald-100/90 shadow-2xs z-10 overflow-hidden">
                    <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 1.5, delay: 3.1, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 rounded-full bg-[#16A34A]" />
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={scenarioIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0, position: "absolute" }}
                        className="relative text-[10px] z-10"
                      >
                        {activeScenario.flag}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-0.5 text-[10.5px] font-extrabold text-[#0D1B2E] leading-tight px-1 min-h-[20px]">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={scenarioIndex}
                        initial={{ opacity: 0, y: 2 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -2, position: "absolute" }}
                      >
                        {activeScenario.node2Text}
                      </motion.span>
                    </AnimatePresence>
                    <Check className="w-2.5 h-2.5 text-[#16A34A] inline shrink-0" />
                  </div>
                </motion.div>

                {/* STAGE 3: LOCAL EXPERT ASSIGNED (HEADSET ICON) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 3.6 }}
                  className="flex flex-col items-center space-y-1.5 group relative"
                >
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#16A34A] text-white ring-4 ring-emerald-100/90 shadow-2xs z-10">
                    <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 1.5, delay: 3.6, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 rounded-full bg-[#16A34A]" />
                    <Headphones className="relative w-3 h-3 z-10" />
                  </div>
                  <div className="flex items-center gap-0.5 text-[10.5px] font-extrabold text-[#0D1B2E] leading-tight px-1">
                    <span>{p.block2Node3}</span>
                    <Check className="w-2.5 h-2.5 text-[#16A34A] inline shrink-0" />
                  </div>
                </motion.div>

              </div>

            </div>

            {/* RIGHT ZONE (~37% Width): HUMAN EXPERT WITH ● CONNECTED BADGE & EDGE GLOW */}
            <div className="col-span-4 shrink-0 flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0.92, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  boxShadow: "0 0 20px rgba(22, 163, 74, 0.2)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 4.0 }}
                className="relative h-[220px] sm:h-[250px] lg:h-[255px] w-full max-w-[460px] overflow-hidden rounded-xl border border-slate-200/90 shadow-xs bg-slate-100 ring-2 ring-emerald-500/40"
              >
                <Image
                  src="/images/african-workforce-operations-candid.webp"
                  alt="IWNT Operations Specialist assisting client"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* TINY RESTRAINED STATUS BADGE (● CONNECTED) */}
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 4.15 }}
                  className="absolute top-2.5 right-2.5 rounded-md bg-[#0D1B2E]/85 backdrop-blur-xs px-2.5 py-1 text-[10px] font-extrabold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{p.block2Connected}</span>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* RESTRAINED CONCLUDING STATEMENT BELOW WORKFLOW */}
          <div className="pt-4 border-t border-slate-200/70 mt-4 text-center space-y-0.5">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2 }}
              className="text-xs sm:text-sm font-extrabold text-[#0D1B2E] flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>{p.block2TaglineMain}</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.3 }}
              className="text-[11px] sm:text-xs font-medium text-slate-500"
            >
              {p.block2TaglineSub}
            </motion.p>
          </div>

        </div>

        {/* =========================================================================
            PLATFORM BLOCK 2 - DEDICATED MOBILE VERSION (block md:hidden)
            QUESTION → IWNT RESPONSE → VERTICAL ROUTING TRACK → CINEMATIC EXPERT CARD
        ========================================================================= */}
        <div className="block md:hidden text-left space-y-6 overflow-hidden">
          
          {/* HEADING & SUBTITLE */}
          <div className="space-y-1">
            <h2 className="text-[22px] leading-tight font-extrabold tracking-tight text-[#0D1B2E]">
              {p.block2Headline}
            </h2>
            <p className="text-sm font-medium text-slate-500">
              {p.block2Subtitle}
            </p>
          </div>

          {/* VERTICAL STORYTELLING WORKFLOW */}
          <div className="relative pt-2 pb-2">
            
            {/* THE CONVERSATION */}
            <div className="space-y-3 z-10 relative">
              {/* INCOMING CLIENT CHAT BUBBLE */}
              <motion.div 
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative rounded-2xl rounded-tl-sm bg-white border border-slate-200/90 p-4 shadow-sm max-w-[85%] text-left min-h-[75px]"
              >
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={scenarioIndex}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)", position: "absolute" }}
                    transition={{ duration: 0.4 }}
                    className="text-[13px] font-bold text-[#0D1B2E] leading-relaxed"
                  >
                    {activeScenario.clientMsg}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* OUTGOING IWNT GREEN CHAT BUBBLE & TYPING INDICATOR */}
              <div className="relative flex justify-end w-full">
                {/* TYPING INDICATOR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.8, delay: 0.6, times: [0, 0.1, 0.9, 1] }}
                  className="absolute top-0 right-0 rounded-2xl rounded-tr-sm bg-white border border-slate-200/90 p-4 shadow-sm flex items-center justify-center gap-1.5 h-12 px-5 z-20"
                >
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                </motion.div>

                {/* ACTUAL BUBBLE */}
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 2.3, ease: [0.23, 1, 0.32, 1] }}
                  className="relative rounded-2xl rounded-tr-sm bg-[#16A34A] text-white p-4 shadow-md max-w-[88%] text-left z-20 min-h-[75px]"
                >
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={scenarioIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, position: "absolute" }}
                      transition={{ duration: 0.4 }}
                      className="text-[13px] font-bold leading-relaxed"
                    >
                      {activeScenario.iwntMsg}
                    </motion.p>
                  </AnimatePresence>
                  {/* Connection Line Anchor Point (Bottom Left of the green bubble) */}
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 rounded-full bg-[#16A34A] border-2 border-white shadow-sm z-30" />
                </motion.div>
              </div>
            </div>

            {/* THE WORKFLOW STAGES (Positioned along the line) */}
            <div className="relative z-10 mt-6 space-y-7">
              
              {/* VERTICAL SVG CONNECTION LINE */}
              {/* It needs to start slightly above the first node and end at the image */}
              <div className="absolute left-[38px] -top-8 bottom-[-40px] w-0.5 bg-slate-200/60 z-0">
                {!reduceMotion && (
                  <motion.div 
                    className="absolute top-0 left-0 right-0 bg-[#16A34A] shadow-[0_0_8px_rgba(22,163,74,0.6)] origin-top"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.8, delay: 2.6, ease: "easeInOut" }}
                  />
                )}
              </div>

              {/* STAGE 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 2.9 }}
                className="relative flex items-center gap-4 pl-6 pr-2"
              >
                <div className="relative w-7 h-7 shrink-0 rounded-full bg-[#16A34A] text-white border-2 border-[#16A34A] flex items-center justify-center z-10 shadow-sm">
                  <motion.div animate={{ scale: [1, 2.5], opacity: [0.5, 0] }} transition={{ duration: 1.5, delay: 2.9, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 rounded-full bg-[#16A34A]" />
                  <FileText className="relative w-3.5 h-3.5 text-white z-10" />
                </div>
                <div className="bg-white rounded-xl border border-slate-200/80 px-3.5 py-2.5 shadow-sm flex-1">
                  <span className="text-[12px] font-extrabold text-[#0D1B2E]">
                    {p.block2Node1}
                  </span>
                </div>
              </motion.div>

              {/* STAGE 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 3.3 }}
                className="relative flex items-center gap-4 pl-6 pr-2"
              >
                <div className="relative w-7 h-7 shrink-0 rounded-full bg-[#16A34A] text-white border-2 border-[#16A34A] flex items-center justify-center z-10 shadow-sm overflow-hidden">
                  <motion.div animate={{ scale: [1, 2.5], opacity: [0.5, 0] }} transition={{ duration: 1.5, delay: 3.3, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 rounded-full bg-[#16A34A]" />
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={scenarioIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0, position: "absolute" }}
                      className="relative text-[12px] leading-none z-10"
                    >
                      {activeScenario.flag}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="bg-white rounded-xl border border-slate-200/80 px-3.5 py-2.5 shadow-sm flex-1 min-h-[40px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={scenarioIndex}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5, position: "absolute" }}
                      className="text-[12px] font-extrabold text-[#0D1B2E]"
                    >
                      {activeScenario.node2Text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STAGE 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 3.7 }}
                className="relative flex items-center gap-4 pl-6 pr-2"
              >
                <div className="relative w-7 h-7 shrink-0 rounded-full bg-[#16A34A] text-white border-2 border-[#16A34A] flex items-center justify-center z-10 shadow-sm">
                  <motion.div animate={{ scale: [1, 2.5], opacity: [0.5, 0] }} transition={{ duration: 1.5, delay: 3.7, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 rounded-full bg-[#16A34A]" />
                  <Headphones className="relative w-3.5 h-3.5 text-white z-10" />
                </div>
                <div className="bg-white rounded-xl border border-slate-200/80 px-3.5 py-2.5 shadow-sm flex-1">
                  <span className="text-[12px] font-extrabold text-[#0D1B2E]">
                    {p.block2Node3}
                  </span>
                </div>
              </motion.div>

            </div>

            {/* CINEMATIC EXPERT CARD (16:10 ASPECT RATIO) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 4.1 }}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/90 shadow-lg bg-slate-100 ring-4 ring-emerald-50/50 mt-10 z-10"
            >
              <Image
                src="/images/african-workforce-operations-candid.webp"
                alt="IWNT Operations Specialist assisting client"
                fill
                priority
                className="object-cover object-center"
              />

              {/* TOP-LEFT CONNECTED BADGE (Where line ends) */}
              <div className="absolute top-4 left-4 rounded-lg bg-[#0D1B2E]/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-extrabold text-emerald-400 border border-emerald-500/30 flex items-center gap-2 shadow-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{p.block2Connected}</span>
              </div>
            </motion.div>
          </div>

          {/* RESTRAINED CONCLUDING TAGLINE */}
          <div className="pt-5 mt-2 border-t border-slate-200/70 text-center space-y-1">
            <div className="text-[13px] font-extrabold text-[#0D1B2E] flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>{p.block2TaglineMain}</span>
            </div>
            
            <p className="text-[11.5px] font-medium text-slate-500 max-w-[280px] mx-auto">
              {p.block2TaglineSub}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
