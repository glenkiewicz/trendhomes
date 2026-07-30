import type { Metadata } from "next";
import type { StrapiMedia, StrapiSEO } from "../types/strapi";
import { mediaUrl } from "./strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trendhomes.pl";
const DEFAULT_OG = `${SITE_URL}/api/og-default`;

type ToMetadataOptions = {
  /** Fallback image used when seo.ogImage is empty in Strapi.
   *  Chain: seo.ogImage → fallbackImage → generated default. */
  fallbackImage?: StrapiMedia | null;
  /** og:type. Articles should override to "article". */
  ogType?: "website" | "article";
  /** Article-only OG metadata (publishedTime, author) — surfaced when ogType="article". */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
};

export function toMetadata(
  seo: StrapiSEO,
  fallbackPath: string,
  options: ToMetadataOptions = {},
): Metadata {
  const url = seo.canonicalUrl || `${SITE_URL}${fallbackPath}`;
  const ogImage = seo.ogImage
    ? mediaUrl(seo.ogImage)
    : options.fallbackImage
      ? mediaUrl(options.fallbackImage, "xlarge")
      : DEFAULT_OG;
  const ogType = options.ogType ?? "website";
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
      type: ogType,
      url,
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      siteName: "Trendhomes",
      locale: "pl_PL",
      ...(ogType === "article" && options.article
        ? {
            publishedTime: options.article.publishedTime,
            modifiedTime: options.article.modifiedTime,
            authors: options.article.author ? [options.article.author] : undefined,
            section: options.article.section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      images: [ogImage],
    },
  };
}
