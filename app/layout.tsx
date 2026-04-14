import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <GoogleTagManager gtmId="GTM-MZZRRFM7" />
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
