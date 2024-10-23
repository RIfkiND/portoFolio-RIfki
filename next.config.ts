import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tools-api.webcrumbs.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
