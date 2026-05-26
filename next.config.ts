import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 384],
    // Next.js 16 wymaga jawnej listy dopuszczonych poziomów jakości.
    // Browser żąda różnych q dla retina/standard — bez tego dostaje 400
    // INVALID_IMAGE_OPTIMIZE_REQUEST i obrazek znika do następnego refresh.
    qualities: [25, 50, 75, 90, 100],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "http", hostname: "127.0.0.1", port: "1337", pathname: "/uploads/**" },
      { protocol: "http", hostname: "localhost", port: "1337", pathname: "/uploads/**" },
      { protocol: "https", hostname: "*.up.railway.app", pathname: "/uploads/**" },
    ],
  },
};

export default nextConfig;
