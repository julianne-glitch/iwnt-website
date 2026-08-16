"use client";

import { ShieldCheck, CheckCircle2, FileText, UserCheck, CreditCard, BarChart3, Clock } from "lucide-react";

interface MiniUIPreviewProps {
  stageIndex: number;
  isActive: boolean;
}

export default function MiniUIPreview({ stageIndex, isActive }: MiniUIPreviewProps) {
  // Common container styling based on active state
  const activeContainerStyle = isActive
    ? "border-[#16A34A]/50 bg-white shadow-[0_6px_20px_rgba(22,163,74,0.12)] scale-[1.02] -translate-y-0.5"
    : "border-slate-200/70 bg-white/80 shadow-xs opacity-75 grayscale-[0.2]";

  switch (stageIndex) {
    // 01 HIRE: Offer Accepted & Contract Created
    case 0:
      return (
        <div className={`w-[110px] sm:w-[130px] rounded-xl border p-2 sm:p-2.5 transition-all duration-300 ${activeContainerStyle}`}>
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <div className="flex items-center gap-1">
              <FileText className="w-3 h-3 text-[#16A34A]" />
              <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#0D1B2E]">Offer Letter</span>
            </div>
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-4/5 rounded-full bg-slate-100" />
            <div className="h-1.5 w-3/5 rounded-full bg-slate-100" />
          </div>
          <div className="mt-2 flex items-center justify-between rounded-md bg-[#16A34A]/10 px-1.5 py-0.5 text-[7.5px] sm:text-[8.5px] font-semibold text-[#16A34A]">
            <span>Accepted</span>
            <CheckCircle2 className="w-2.5 h-2.5 text-[#16A34A]" />
          </div>
        </div>
      );

    // 02 ONBOARD: Identity Verification & Checklist
    case 1:
      return (
        <div className={`w-[110px] sm:w-[130px] rounded-xl border p-2 sm:p-2.5 transition-all duration-300 ${activeContainerStyle}`}>
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <div className="flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-[#16A34A]" />
              <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#0D1B2E]">ID Verification</span>
            </div>
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
          </div>
          <div className="rounded-md border border-slate-100 bg-slate-50/70 p-1 space-y-1">
            <div className="flex items-center justify-between text-[7.5px] text-slate-600">
              <span>National ID</span>
              <span className="font-semibold text-[#16A34A]">Verified</span>
            </div>
            <div className="flex items-center justify-between text-[7.5px] text-slate-600">
              <span>Tax Reg.</span>
              <span className="font-semibold text-[#16A34A]">OK</span>
            </div>
          </div>
        </div>
      );

    // 03 MANAGE: Leave & Benefits Workflow
    case 2:
      return (
        <div className={`w-[110px] sm:w-[130px] rounded-xl border p-2 sm:p-2.5 transition-all duration-300 ${activeContainerStyle}`}>
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#16A34A]" />
              <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#0D1B2E]">Leave & Benefits</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[7.5px] font-medium text-slate-500">
              <span>Paid Time Off</span>
              <span className="text-[#0D1B2E] font-bold">14/15 Days</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[90%] rounded-full bg-[#16A34A]" />
            </div>
          </div>
        </div>
      );

    // 04 PAY: Payroll Calculated & Payment Sent
    case 3:
      return (
        <div className={`w-[110px] sm:w-[130px] rounded-xl border p-2 sm:p-2.5 transition-all duration-300 ${activeContainerStyle}`}>
          <div className="flex items-center justify-between gap-1 mb-1">
            <div className="flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-[#16A34A]" />
              <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#0D1B2E]">Monthly Payroll</span>
            </div>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#16A34A] mb-1.5 opacity-80" />
          <div className="flex items-center justify-between rounded-md bg-slate-50 p-1 text-[7.5px] sm:text-[8.5px]">
            <span className="font-medium text-slate-600">Net Salary</span>
            <span className="font-bold text-[#16A34A]">Sent ✓</span>
          </div>
        </div>
      );

    // 05 COMPLY: Local Compliance & Shield Check
    case 4:
      return (
        <div className={`w-[110px] sm:w-[130px] rounded-xl border p-2 sm:p-2.5 flex flex-col items-center justify-center transition-all duration-300 ${activeContainerStyle}`}>
          <div className="relative flex items-center justify-center h-8 w-8 rounded-full bg-[#16A34A]/15 text-[#16A34A] mb-1">
            <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-[#0D1B2E]">100% Compliant</span>
          <span className="text-[7px] text-slate-500 font-medium">Local Regulations</span>
        </div>
      );

    // 06 INSIGHT: Workforce Reporting Chart
    case 5:
      return (
        <div className={`w-[110px] sm:w-[130px] rounded-xl border p-2 sm:p-2.5 transition-all duration-300 ${activeContainerStyle}`}>
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <div className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3 text-[#16A34A]" />
              <span className="text-[8.5px] sm:text-[9.5px] font-bold text-[#0D1B2E]">Workforce Insights</span>
            </div>
          </div>
          <div className="flex items-end gap-1 h-5 pt-1 border-b border-slate-100 pb-0.5">
            <div className="w-1/4 h-[40%] rounded-t bg-slate-200" />
            <div className="w-1/4 h-[65%] rounded-t bg-slate-300" />
            <div className="w-1/4 h-[85%] rounded-t bg-[#16A34A]/60" />
            <div className="w-1/4 h-[100%] rounded-t bg-[#16A34A]" />
          </div>
        </div>
      );

    default:
      return null;
  }
}
