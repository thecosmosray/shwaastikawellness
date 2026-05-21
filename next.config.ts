import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    qualities: [75, 85, 88, 90, 92, 95, 100],
  },
};

export default nextConfig;
