import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getGlobalSettings, getNavigation } from "./lib/strapi";
import { localBusinessJsonLd, jsonLdScript } from "./lib/jsonld";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d2245f",
};

export const metadata: Metadata = {
  title: "Trendhomes - Okna, drzwi i rolety z montażem",
  description:
    "Projektujemy, dostarczamy i montujemy stolarkę okienną oraz drzwiową dla nowych domów, remontów i lokali usługowych w Bieszczadach.",
  verification: {
    google: "iaevyNZvkLCyv6pH6NKGXcHDFmkN79cH6MXYAF0h1KA",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [global, navigation] = await Promise.all([
    getGlobalSettings(),
    getNavigation(),
  ]);

  return (
    <html lang="pl">
      <GoogleTagManager gtmId="GTM-MZZRRFM7" />
      <body className={`${inter.variable} antialiased`}>
        {global && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdScript(localBusinessJsonLd(global)) }}
          />
        )}
        {global && navigation && (
          <div className="sticky top-0 z-50">
            <TopBar global={global} />
            <Navbar global={global} navigation={navigation} />
          </div>
        )}
        {children}
        {global && navigation && <Footer global={global} navigation={navigation} />}
      </body>
    </html>
  );
}
