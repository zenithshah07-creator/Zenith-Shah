import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/Zenith-Shah' : '',
  assetPrefix: isProd ? '/Zenith-Shah' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
