import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? "/EnglishHUB" : "",
  assetPrefix: isProd ? "/EnglishHUB/" : "",
  turbopack: {
    // Avoid picking parent directory when multiple lockfiles exist on a machine
    root: process.cwd(),
  },
};

export default nextConfig;
