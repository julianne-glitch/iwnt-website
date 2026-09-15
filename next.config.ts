import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    qualities: [75, 90, 95, 100],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "date-fns"],
  },
};

export default nextConfig;
