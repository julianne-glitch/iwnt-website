"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactEnquiry } from "@/app/actions/contact";
import { contactSchema, type ContactFormData } from "@/lib/schemas";

export default function ContactForm() {
  const { t } = useLanguage();
  const formT = t.contactPage.form;

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      company: "",
      countryRegion: "",
      helpTopic: "",
      message: "",
      consent: false,
    },
  });

  const consentChecked = watch("consent");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitContactEnquiry(data);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || formT.error);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#16A34A]/5 border border-[#16A34A]/20 rounded-[20px] p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="h-16 w-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0E1B2E] mb-3">
          {formT.success.headline}
        </h3>
        <p className="text-[#475569]">{formT.success.body}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-sm font-medium text-[#0E1B2E]">
            {formT.fullName}
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.fullName ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-[#16A34A] focus:ring-[#16A34A]/20"
            } outline-none transition-all shadow-xs`}
            aria-invalid={!!errors.fullName}
          />
          <AnimatePresence>
            {errors.fullName && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-red-500">
                {errors.fullName.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Work Email */}
        <div className="space-y-1.5">
          <label htmlFor="workEmail" className="block text-sm font-medium text-[#0E1B2E]">
            {formT.workEmail}
          </label>
          <input
            id="workEmail"
            type="email"
            {...register("workEmail")}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.workEmail ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-[#16A34A] focus:ring-[#16A34A]/20"
            } outline-none transition-all shadow-xs`}
            aria-invalid={!!errors.workEmail}
          />
          <AnimatePresence>
            {errors.workEmail && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-red-500">
                {errors.workEmail.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="block text-sm font-medium text-[#0E1B2E]">
            {formT.company}
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#16A34A] focus:ring-[#16A34A]/20 outline-none transition-all shadow-xs"
          />
        </div>

        {/* Country / Region */}
        <div className="space-y-1.5">
          <label htmlFor="countryRegion" className="block text-sm font-medium text-[#0E1B2E]">
            {formT.countryRegion}
          </label>
          <input
            id="countryRegion"
            type="text"
            {...register("countryRegion")}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.countryRegion ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-[#16A34A] focus:ring-[#16A34A]/20"
            } outline-none transition-all shadow-xs`}
            aria-invalid={!!errors.countryRegion}
          />
          <AnimatePresence>
            {errors.countryRegion && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-red-500">
                {errors.countryRegion.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Help Topic */}
      <div className="space-y-1.5">
        <label htmlFor="helpTopic" className="block text-sm font-medium text-[#0E1B2E]">
          {formT.helpTopic}
        </label>
        <div className="relative">
          <select
            id="helpTopic"
            {...register("helpTopic")}
            className={`w-full px-4 py-3 rounded-xl border appearance-none bg-white ${
              errors.helpTopic ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-[#16A34A] focus:ring-[#16A34A]/20"
            } outline-none transition-all shadow-xs`}
            aria-invalid={!!errors.helpTopic}
          >
            <option value="" disabled></option>
            <option value="workforce">{formT.topics.workforce}</option>
            <option value="hiring">{formT.topics.hiring}</option>
            <option value="payroll">{formT.topics.payroll}</option>
            <option value="compliance">{formT.topics.compliance}</option>
            <option value="employee">{formT.topics.employee}</option>
            <option value="platform">{formT.topics.platform}</option>
            <option value="market">{formT.topics.market}</option>
            <option value="general">{formT.topics.general}</option>
            <option value="other">{formT.topics.other}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {errors.helpTopic && (
            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-red-500">
              {errors.helpTopic.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-[#0E1B2E]">
          {formT.message}
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={`w-full px-4 py-3 rounded-xl border resize-none ${
            errors.message ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-[#16A34A] focus:ring-[#16A34A]/20"
          } outline-none transition-all shadow-xs`}
          aria-invalid={!!errors.message}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-red-500">
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <div className="flex items-center h-6">
          <input
            id="consent"
            type="checkbox"
            {...register("consent")}
            className="w-4 h-4 rounded border-slate-300 text-[#16A34A] focus:ring-[#16A34A]"
          />
        </div>
        <label htmlFor="consent" className="text-sm text-[#475569] leading-relaxed select-none">
          {formT.consent}
        </label>
      </div>
      <AnimatePresence>
        {errors.consent && (
          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-sm text-red-500">
            {errors.consent.message}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting" || !consentChecked}
        className="w-full sm:w-auto px-8 py-3.5 min-h-[44px] rounded-xl text-base font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] disabled:opacity-50 disabled:cursor-not-allowed shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <span>{formT.cta}</span>
        )}
      </button>
    </form>
  );
}
