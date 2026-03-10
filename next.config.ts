import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/Zenith-Shah',
  assetPrefix: '/Zenith-Shah',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
