"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Globe, Building, Target, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GlobalExpansionJourney() {
  const { t, language } = useLanguage();
  const exp = t.globalExpansion;

  // The icons for each stage
  const icons = [
    <Globe key="icon-0" className="w-5 h-5" />,
    <Building key="icon-1" className="w-5 h-5" />,
    <Target key="icon-2" className="w-5 h-5" />,
    <Users key="icon-3" className="w-5 h-5" />,
    <ShieldCheck key="icon-4" className="w-5 h-5" />,
    <Globe key="icon-5" className="w-6 h-6 text-[#16A34A]" />
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden pt-0 pb-10">
      
      {/* 1. THE STORYTELLING TRANSITION FROM THE EMPLOYEE JOURNEY */}
      <div className="flex flex-col items-center justify-center mb-8 relative">
        <div className="absolute top-0 w-0.5 h-10 bg-gradient-to-b from-[#16A34A] to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 text-center space-y-1"
        >
          <p className="text-sm sm:text-base font-bold text-[#16A34A]">
            {exp.transitionLine1}
          </p>
          <p className="text-sm sm:text-base font-bold text-[#0D1B2E]">
            {exp.transitionLine2}
          </p>
        </motion.div>
      </div>

      {/* 2. SECTION HEADER */}
      <div className="relative z-10 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#16A34A]">
            {exp.eyebrow}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-4 max-w-lg"
        >
          {exp.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-xl"
        >
          {exp.subtitle}
        </motion.p>
      </div>

      {/* 3. THE JOURNEY VISUALIZATION */}
      <div className="relative w-full z-10">
        
        {/* SUBTLE BACKGROUND WORLD MAP */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] -z-10 flex items-start justify-center pt-10">
          <svg viewBox="0 0 1000 500" className="w-full max-w-4xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 150 Q160 140 180 180 T240 220 T280 190" stroke="#0D1B2E" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M450 120 Q500 140 520 200 T580 260 T620 220" stroke="#0D1B2E" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="180" cy="180" r="3" fill="#0D1B2E" />
            <circle cx="520" cy="200" r="3" fill="#0D1B2E" />
            <path d="M800 100 Q820 120 850 150" stroke="#0D1B2E" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M480 300 Q500 350 530 400" stroke="#16A34A" strokeWidth="1.5" opacity="0.4" />
            <path d="M530 250 Q560 300 580 350" stroke="#16A34A" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>

        {/* DESKTOP HORIZONTAL JOURNEY (lg:flex) */}
        <div className="hidden lg:flex items-start justify-between relative pt-8 pb-10">
          
          {/* THE ORGANIC CONNECTION PATH (Desktop) */}
          <div className="absolute top-[56px] left-[8%] right-[8%] h-20 -z-10 overflow-visible">
            <svg width="100%" height="100%" viewBox="0 0 1000 100" className="overflow-visible" preserveAspectRatio="none">
              <path
                d="M 0,20 C 150,0 250,80 400,40 S 600,0 800,40 S 950,80 1000,10"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="2"
              />
              <motion.path
                d="M 0,20 C 150,0 250,80 400,40 S 600,0 800,40 S 950,80 1000,10"
                fill="none"
                stroke="#16A34A"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {exp.stages.map((stage: any, idx: number) => {
            const isFirst = idx === 0;
            const isLast = idx === exp.stages.length - 1;
            
            return (
              <motion.div
                key={`desktop-stage-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 * idx }}
                className="relative flex flex-col items-center w-40"
              >
                {/* NODE */}
                <div className={`relative w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-sm mb-4 bg-white z-10 ${
                  isLast ? 'border-[#16A34A] shadow-[0_0_15px_rgba(22,163,74,0.3)]' : 'border-[#16A34A]'
                }`}>
                  {isLast && <div className="absolute inset-0 rounded-full bg-[#16A34A]/10 animate-pulse" />}
                  <div className={`${isLast ? 'text-[#16A34A]' : 'text-[#16A34A]'}`}>
                    {icons[idx]}
                  </div>
                  {/* Floating badge for numbers */}
                  {!isFirst && !isLast && (
                    <div className="absolute -top-2 -right-2 bg-[#16A34A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      {stage.num}
                    </div>
                  )}
                </div>

                {/* CARD CONTENT */}
                <div className={`text-center ${isLast ? 'mt-2' : ''}`}>
                  <h4 className="text-sm font-extrabold text-[#0D1B2E] mb-1">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 whitespace-pre-line mb-3 min-h-[34px]">
                    {stage.desc}
                  </p>
                  
                  <div className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                    isFirst || isLast 
                      ? 'bg-emerald-50 text-[#16A34A] border-emerald-100'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}>
                    {stage.status}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE & TABLET VERTICAL JOURNEY (block lg:hidden) */}
        <div className="block lg:hidden relative pt-6 pb-12">
          
          {/* THE VERTICAL CONNECTION LINE (Mobile) */}
          <div className="absolute left-[43px] sm:left-[51px] top-10 bottom-10 w-0.5 bg-slate-200 z-0">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-[#16A34A] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{ height: "100%" }}
            />
          </div>

          <div className="space-y-8 relative z-10">
            {exp.stages.map((stage: any, idx: number) => {
              const isFirst = idx === 0;
              const isLast = idx === exp.stages.length - 1;
              
              return (
                <motion.div
                  key={`mobile-stage-${idx}`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 * idx }}
                  className="flex items-center gap-4 sm:gap-6 relative"
                >
                  {/* NODE */}
                  <div className={`relative shrink-0 w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-sm bg-white ml-4 sm:ml-6 ${
                    isLast ? 'border-[#16A34A] shadow-[0_0_15px_rgba(22,163,74,0.3)]' : 'border-[#16A34A]'
                  }`}>
                    {isLast && <div className="absolute inset-0 rounded-full bg-[#16A34A]/10 animate-pulse" />}
                    <div className={`${isLast ? 'text-[#16A34A]' : 'text-[#16A34A]'}`}>
                      {icons[idx]}
                    </div>
                    {/* Floating badge for numbers */}
                    {!isFirst && !isLast && (
                      <div className="absolute -top-2 -right-2 bg-[#16A34A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        {stage.num}
                      </div>
                    )}
                  </div>

                  {/* CARD CONTENT */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs mr-4 sm:mr-8">
                    <h4 className="text-sm font-extrabold text-[#0D1B2E] mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-[12px] text-slate-500 whitespace-pre-line mb-4">
                      {stage.desc}
                    </p>
                    
                    <div className={`inline-flex px-3 py-1.5 rounded-full text-[11px] font-semibold border ${
                      isFirst || isLast 
                        ? 'bg-emerald-50 text-[#16A34A] border-emerald-100'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      {stage.status}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
