import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maison-whispers.lovable.app",
      },
    ],
  },
};

export default nextConfig;
