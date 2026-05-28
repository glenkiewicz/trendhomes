import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Custom loader = direct URL bez Vercel /_next/image proxy.
    // Strapi już zwraca preoptymalizowane warianty (small/medium/large)
    // i lokalne /images/* też nie wymagają proxy — eliminujemy race
    // conditions, 400 INVALID_IMAGE_OPTIMIZE_REQUEST i timeouts.
    loader: "custom",
    loaderFile: "./app/image-loader.ts",
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
