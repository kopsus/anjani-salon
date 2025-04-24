import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "framerusercontent.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
