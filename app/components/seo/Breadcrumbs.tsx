"use client";

import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          items.map((item) => ({ name: item.name, path: item.href }))
        )}
      />
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-[#0D1B2E]">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#16A34A] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
