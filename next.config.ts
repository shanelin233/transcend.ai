import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath for Cloudflare Pages (custom domain)
};

export default nextConfig;
