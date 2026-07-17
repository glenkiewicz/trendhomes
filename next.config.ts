import type { NextConfig } from "next";

const legacyRedirects: Array<{ source: string; destination: string }> = [
  { source: "/okna-sanok", destination: "/produkty/okna" },
  { source: "/okna-sanok/aluminiowe", destination: "/produkty/okna-aluminiowe" },
  { source: "/okna-sanok/pcv/aluplast", destination: "/produkty/okna" },
  { source: "/okna-sanok/pcv/salamnder", destination: "/produkty/okna" },
  { source: "/okna-sanok/pcv/gealan", destination: "/produkty/okna" },
  { source: "/okna-sanok/pcv/eko-sun", destination: "/produkty/okna/ekosun-6" },
  { source: "/okna-sanok/drewniane/naruto-76", destination: "/produkty/okna-drewniane" },
  { source: "/drzwi-produkcja/wejsciowe-2", destination: "/produkty/drzwi" },
  { source: "/stolarka-aluminiowa/systemy-fasadowe", destination: "/produkty/dla-biznesu" },
  { source: "/stolarka-aluminiowa/systemy-okienno-drzwiowe-zimne", destination: "/produkty/dla-biznesu" },
  { source: "/stolarka-aluminiowa/systemy-przeciwpozarowe", destination: "/produkty/dla-biznesu" },
  { source: "/stolarka-aluminiowa/systemy-przesuwne-tarasowe", destination: "/produkty/drzwi-aluminiowe" },
  { source: "/stolarka-aluminiowa/systemy-specjalne", destination: "/produkty/dla-biznesu" },
  { source: "/plisy-rolety/plisy", destination: "/produkty/rolety" },
  { source: "/plisy-rolety/bramy", destination: "/produkty/rolety" },
  { source: "/2019/02/15/witaj-swiecie", destination: "/blog" },
  { source: "/2019/04/20/otwarcie-nowego-salonu", destination: "/blog" },
  { source: "/trendhomes", destination: "/" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.flatMap(({ source, destination }) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
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
