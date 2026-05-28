import type { Metadata } from "next";
import type { StrapiSEO } from "../types/strapi";
import { mediaUrl } from "./strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trendhomes.pl";
const DEFAULT_OG = `${SITE_URL}/images/og-default.jpg`;

export function toMetadata(seo: StrapiSEO, fallbackPath: string): Metadata {
  const url = seo.canonicalUrl || `${SITE_URL}${fallbackPath}`;
  const ogImage = seo.ogImage ? mediaUrl(seo.ogImage) : DEFAULT_OG;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords || undefined,
    alternates: { canonical: url },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    },
    openGraph: {
      type: "website",
      url,
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      siteName: "Trendhomes",
      locale: "pl_PL",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [ogImage],
    },
  };
}
