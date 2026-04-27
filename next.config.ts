import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid picking parent directory when multiple lockfiles exist on a machine
    root: process.cwd(),
  },
};

export default nextConfig;
