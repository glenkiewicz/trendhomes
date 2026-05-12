/**
 * Slim DTOs for content served by the Strapi v5 CMS. Only the fields the
 * frontend actually reads are listed here — keeps coupling loose so schema
 * tweaks in Strapi don't ripple here unless they affect a consumed field.
 */

export type StrapiMedia = {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: Record<string, { url: string; width: number; height: number }>;
};

export type StrapiSEO = {
  metaTitle: string;
  metaDescription: string;
  keywords?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: StrapiMedia | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
  structuredData?: unknown;
};

export type StrapiCategory = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
};

export type StrapiArticle = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readingTime: number | null;
  author: string;
  coverImage: StrapiMedia;
  category: StrapiCategory | null;
  seo: StrapiSEO;
  publishedAt: string;
  updatedAt: string;
};

export type StrapiList<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

export type StrapiOne<T> = { data: T };
