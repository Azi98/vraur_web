import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zsyghzovbafkpxabhktz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
