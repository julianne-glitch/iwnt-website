import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.privacy);

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
