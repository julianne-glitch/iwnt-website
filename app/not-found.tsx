import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.notFound);

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-slate-50 px-4 py-28 sm:py-36">
      <div className="max-w-lg w-full text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#16A34A] mb-4">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0D1B2E] mb-4">
          Page not found
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
          The page you are looking for does not exist, was moved, or is no longer
          available. Head back to IWNT to continue exploring our platform and
          African workforce coverage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#16A34A] px-6 text-sm font-bold text-white hover:bg-[#148D40] transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-[#0D1B2E] hover:border-slate-300 transition-colors"
          >
            Contact IWNT
          </Link>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
          <li>
            <Link href="/solutions" className="hover:text-[#16A34A]">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/platform" className="hover:text-[#16A34A]">
              Platform
            </Link>
          </li>
          <li>
            <Link href="/coverage" className="hover:text-[#16A34A]">
              Coverage
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-[#16A34A]">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#16A34A]">
              About
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
