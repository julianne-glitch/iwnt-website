"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, UserCheck } from "lucide-react";
import MiniUIPreview from "./MiniUIPreview";
import { useLanguage } from "@/app/context/LanguageContext";

export default function EmployeeJourney() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

  // Automatic gentle rotation across the 6 stages every 3.2 seconds
  useEffect(() => {
    if (reduceMotion) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3200);

    return () => clearInterval(timer);
  }, [reduceMotion]);

  const persona = t.solutionsPage.persona;
  const stages = t.solutionsPage.stages;

  return (
    <div className="w-full">
      {/* ======================================================
          DESKTOP HORIZONTAL JOURNEY PANEL (lg:block hidden)
          Single continuous panel directly under intro header
      ====================================================== */}
      <div className="hidden lg:block relative rounded-3xl border border-slate-200/80 bg-white p-6 lg:p-8 pt-7 lg:pt-8 shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden">
        
        {/* MAIN HORIZONTAL LIFECYCLE FLOW */}
        <div className="relative flex items-center justify-between gap-3 pt-2 pb-4">
          
          {/* BACKGROUND CONTINUOUS RESTING JOURNEY LINE */}
          <div className="absolute left-[135px] right-[145px] top-[74px] h-0.5 bg-slate-200 z-0" />

          {/* ACTIVE INTELWNT GREEN PROGRESS LINE */}
          <motion.div
            className="absolute left-[135px] top-[74px] h-0.5 bg-[#16A34A] z-0 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: reduceMotion ? 1 : (activeStep + 1) / 6 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeInOut" }}
            style={{ width: "calc(100% - 280px)" }}
          />

          {/* 1. LEFT SIDE: PERSONA INPUT (PROFESSIONAL CLOSE-UP PORTRAIT) */}
          <div className="relative z-10 flex flex-col items-center text-center w-[135px] shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-[#16A34A]/40 bg-slate-100">
              <Image
                src="/images/aissatou-diallo.png"
                alt={persona.name}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            <h4 className="mt-3 text-xs font-bold text-[#0D1B2E]">{persona.name}</h4>
            <p className="text-[10.5px] font-medium text-slate-600">{persona.role}</p>
            <p className="text-[9.5px] text-slate-400">{persona.location}</p>
          </div>

          {/* 2. THE 6 LIFECYCLE STAGES */}
          {stages.map((stage, idx) => {
            const isActive = idx <= activeStep;
            const isCurrent = idx === activeStep;

            return (
              <div
                key={stage.num}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center text-center cursor-pointer group flex-1"
              >
                {/* MINI UI PREVIEW */}
                <div className="mb-3">
                  <MiniUIPreview stageIndex={idx} isActive={isActive} />
                </div>

                {/* CONNECTION NODE */}
                <div className="relative flex items-center justify-center my-1">
                  <motion.div
                    className={`h-4.5 w-4.5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isActive
                        ? "border-[#16A34A] bg-[#16A34A] text-white shadow-[0_0_12px_rgba(22,163,74,0.45)]"
                        : "border-slate-300 bg-white"
                    }`}
                    animate={{ scale: isCurrent ? 1.25 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </motion.div>
                </div>

                {/* STAGE NUMBER & TITLE */}
                <div className="mt-1.5 space-y-0.5 max-w-[130px]">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[11px] font-bold text-[#16A34A]">{stage.num}</span>
                    <span className="text-xs font-bold text-[#0D1B2E]">{stage.title}</span>
                  </div>
                  <p className="text-[10px] leading-tight text-slate-500 line-clamp-2">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 3. RIGHT SIDE: ACTIVE EMPLOYEE OUTPUT (SAME PERSONA PORTRAIT) */}
          <div className="relative z-10 flex flex-col items-center text-center w-[145px] shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-[#16A34A]/40 bg-slate-100">
              <Image
                src="/images/aissatou-diallo.png"
                alt={persona.name}
                fill
                priority
                className="object-cover object-center"
              />
              <motion.div
                className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-[#16A34A] border-2 border-white text-white flex items-center justify-center shadow-xs"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
              </motion.div>
            </div>

            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#16A34A]/10 px-2.5 py-0.5 text-[9.5px] font-bold text-[#16A34A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
              {persona.activeStatus}
            </span>
            <p className="mt-1.5 text-[10px] font-semibold text-[#0D1B2E]">
              {persona.syncedTextLine1}
            </p>
            <p className="text-[9.5px] text-[#16A34A] font-medium">
              {persona.syncedTextLine2}
            </p>
          </div>
        </div>

        {/* BOTTOM CAPTION */}
        <div className="mt-5 border-t border-slate-100 pt-3 text-center">
          <p className="text-xs font-medium text-slate-500">
            We tell the story of an employee from hire to pay - showing how everything works together.
          </p>
        </div>
      </div>

      {/* ======================================================
          MOBILE VERTICAL JOURNEY TIMELINE (lg:hidden block)
          Tightened padding and continuous vertical flow
      ====================================================== */}
      <div className="block lg:hidden rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 pt-5 shadow-xs">
        
        {/* PERSONA HEADER CARD (WITH PROFESSIONAL PORTRAIT) */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 mb-5">
          <div className="relative h-13 w-13 overflow-hidden rounded-full border-2 border-white shadow-xs shrink-0 ring-2 ring-[#16A34A]/30">
            <Image
              src="/images/aissatou-diallo.png"
              alt={persona.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#0D1B2E]">{persona.name}</h4>
            <p className="text-[11px] text-slate-600">{persona.role} • {persona.location}</p>
            <span className="text-[9.5px] text-[#16A34A] font-semibold">Illustrative persona</span>
          </div>
        </div>

        {/* VERTICAL TIMELINE CONTAINER */}
        <div className="relative pl-6 space-y-5">
          
          {/* VERTICAL BACKGROUND LINE */}
          <div className="absolute left-2.5 top-2 bottom-6 w-0.5 bg-slate-200" />

          {/* VERTICAL ACTIVE PROGRESS LINE */}
          <motion.div
            className="absolute left-2.5 top-2 w-0.5 bg-[#16A34A] origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: reduceMotion ? 1 : (activeStep + 1) / 6 }}
            transition={{ duration: 0.5 }}
            style={{ height: "calc(100% - 32px)" }}
          />

          {/* 6 VERTICAL STAGE ITEMS */}
          {stages.map((stage, idx) => {
            const isActive = idx <= activeStep;

            return (
              <div
                key={`mobile-stage-${stage.num}`}
                onClick={() => setActiveStep(idx)}
                className="relative flex items-start gap-3 cursor-pointer"
              >
                {/* NODE */}
                <div
                  className={`absolute -left-6 top-1 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isActive
                      ? "border-[#16A34A] bg-[#16A34A] text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>

                {/* CONTENT */}
                <div className="flex-1 rounded-xl border border-slate-100 p-3 bg-white shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#16A34A]">{stage.num}</span>
                      <span className="text-xs font-bold text-[#0D1B2E]">{stage.title}</span>
                    </div>
                    <UserCheck className={`w-3.5 h-3.5 ${isActive ? "text-[#16A34A]" : "text-slate-300"}`} />
                  </div>
                  
                  <p className="text-[11px] text-slate-600 mb-2.5 leading-snug">{stage.desc}</p>
                  
                  {/* MINI UI PREVIEW */}
                  <div className="pt-1">
                    <MiniUIPreview stageIndex={idx} isActive={isActive} />
                  </div>
                </div>
              </div>
            );
          })}

          {/* FINAL MOBILE ACTIVE STATUS CARD */}
          <div className="relative pl-0 pt-1">
            <div className="rounded-xl border border-[#16A34A]/30 bg-[#16A34A]/5 p-3.5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white shadow-2xs shrink-0">
                <Image
                  src="/images/aissatou-diallo.png"
                  alt={persona.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#16A34A] px-2 py-0.5 text-[9px] font-bold text-white mb-1">
                  {persona.activeStatus}
                </span>
                <p className="text-[11px] font-semibold text-[#0D1B2E]">
                  {persona.syncedTextLine1} {persona.syncedTextLine2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
