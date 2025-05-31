import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "framerusercontent.com",
      },
      {
        hostname: "anjani-beauty-center.my.id",
      },
      {
        hostname: "gliqpwvogkqnlrwksymz.supabase.co",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
