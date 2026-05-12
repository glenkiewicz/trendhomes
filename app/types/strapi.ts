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

export type StrapiManufacturer = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  logo: StrapiMedia | null;
};

export type StrapiColorSwatch = {
  id: number;
  documentId: string;
  code: string;
  slug: string;
  name: string | null;
  image: StrapiMedia;
  paletteTag: "standard" | "wooden";
  sortOrder: number;
  manufacturer?: StrapiManufacturer | null;
};

export type StrapiFeatureBlock = {
  id: number;
  title: string;
  text: string;
  image: StrapiMedia | null;
};

export type StrapiFeatureSection = {
  id: number;
  headingLines: string[];
  blocks: StrapiFeatureBlock[];
};

export type StrapiFeatureRow = {
  id: number;
  label: string;
  value: string;
};

export type StrapiProductSystem = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  fullName: string;
  productType: "pvc" | "wooden" | "aluminum" | "steel";
  manufacturer: StrapiManufacturer | null;
  mainImage: StrapiMedia;
  crossSection: StrapiMedia | null;
  gallery: StrapiMedia[];
  depth: string | null;
  glazing: string | null;
  seals: string | null;
  chambers: string | null;
  layers: string | null;
  uw: string | null;
  uwNote: string | null;
  description: string;
  manufacturerDescription: string | null;
  features: StrapiFeatureRow[];
  featureSections: StrapiFeatureSection[];
  colors: StrapiColorSwatch[];
  ctaText: string | null;
  seo: StrapiSEO;
  publishedAt: string;
  updatedAt: string;
};

export type StrapiList<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

export type StrapiOne<T> = { data: T };
