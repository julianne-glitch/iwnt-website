import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.terms);

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
