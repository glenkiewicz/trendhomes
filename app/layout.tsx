import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trendhomes - Okna, drzwi i rolety z montażem",
  description:
    "Projektujemy, dostarczamy i montujemy stolarkę okienną oraz drzwiową dla nowych domów, remontów i lokali usługowych w Bieszczadach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
