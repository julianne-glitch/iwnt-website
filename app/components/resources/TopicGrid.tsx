"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { RESOURCE_TOPICS } from "@/app/data/resourcesData";
import { Users, Banknote, ShieldPlus, Scale, FileText, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Banknote: <Banknote className="w-5 h-5" />,
  ShieldPlus: <ShieldPlus className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
};

export default function TopicGrid() {
  const { t } = useLanguage();
  const res = t.resourcesHub;

  return (
    <div className="w-full mb-16 sm:mb-24">
      <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B2E] mb-6">{res.exploreTopicsHeading}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {RESOURCE_TOPICS.map((topic, idx) => {
          const translatedLabel = res.topics[topic.translationKey];
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link 
                href={`/resources/topics/${topic.id}`}
                className="group flex items-center justify-between p-3 sm:p-4 bg-white rounded-2xl border border-slate-200 hover:border-[#16A34A] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-500 group-hover:bg-emerald-50 group-hover:text-[#16A34A] transition-colors duration-300">
                    {ICON_MAP[topic.iconName]}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#0D1B2E] transition-colors leading-tight">
                    {translatedLabel}
                  </span>
                </div>
                <ArrowRight className="shrink-0 w-4 h-4 text-slate-300 group-hover:text-[#16A34A] transform group-hover:translate-x-1 transition-all duration-300 hidden sm:block" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
