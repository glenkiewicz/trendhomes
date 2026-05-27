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

export type StrapiRealization = {
  id: number;
  documentId: string;
  title: string;
  subtitle: string | null;
  slug: string;
  description: string | null;
  location: string | null;
  category: "residential" | "pergola" | "b2b" | "various" | "office";
  image: StrapiMedia;
  gallery: StrapiMedia[];
  date: string | null;
  featured: boolean;
  sortOrder: number;
  publishedAt: string;
  updatedAt: string;
};

export type StrapiReview = {
  id: number;
  documentId: string;
  authorName: string;
  text: string;
  date: string;
  rating: number;
  source: "google" | "manual" | "b2b";
  featured: boolean;
  sortOrder: number;
  location: string | null;
  role: string | null;
  image: StrapiMedia | null;
  publishedAt: string;
  updatedAt: string;
};

// ─── Dynamic Zone block types ───────────────────────────────────────────────

export type BlockHero = {
  __component: "blocks.hero";
  id: number;
  slides: { id: number; image: StrapiMedia; titleLines: string[]; description: string }[];
  bottomTabs: string[] | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
};

export type BlockFeatureGrid = {
  __component: "blocks.feature-grid";
  id: number;
  variant: "solutions" | "why" | "investments" | "generic" | "audience" | "manufacturers" | "team" | "image-cards";
  headingLines: string[];
  intro: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  items: { id: number; title: string; description: string; image: StrapiMedia | null; icon: StrapiMedia | null }[];
};

export type BlockStepsList = {
  __component: "blocks.steps-list";
  id: number;
  headingLines: string[];
  subtitle: string | null;
  steps: { id: number; number: string; title: string; description: string }[];
  investmentsHeading: string[] | null;
  investments: { id: number; icon: StrapiMedia; title: string; description: string }[];
};

export type BlockCtaBanner = {
  __component: "blocks.cta-banner";
  id: number;
  variant: "cleanAir" | "pergola" | "generic" | "pinkStrip";
  headingLines: string[] | null;
  description: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  background: StrapiMedia | null;
};

export type BlockProductGrid = {
  __component: "blocks.product-grid";
  id: number;
  headingLines: string[];
  filter: "pvc" | "wooden" | "aluminum" | "steel" | "all";
  limit: number;
  selected: StrapiProductSystem[];
  ctaLabel: string | null;
  ctaUrl: string | null;
};

export type BlockRealizationsGrid = {
  __component: "blocks.realizations-grid";
  id: number;
  headingLines: string[];
  description: string | null;
  category: "residential" | "pergola" | "b2b" | "various" | "office" | "all";
  images: { id: number; image: StrapiMedia; alt: string; caption: string | null }[];
  ctaLabel: string | null;
  ctaUrl: string | null;
};

export type BlockReviewsCarousel = {
  __component: "blocks.reviews-carousel";
  id: number;
  headingLines: string[];
  subtitle: string | null;
  googleMapsUrl: string | null;
  source: "all" | "google" | "manual" | "b2b";
};

export type BlockBlogList = {
  __component: "blocks.blog-list";
  id: number;
  headingLines: string[];
  description: string | null;
  limit: number;
  ctaLabel: string | null;
  ctaUrl: string | null;
};

export type BlockFaq = {
  __component: "blocks.faq";
  id: number;
  headingLines: string[];
  ctaLabel: string | null;
  ctaUrl: string | null;
  items: { id: number; question: string; answer: string }[];
  emitJsonLd: boolean;
};

export type BlockBrandsStrip = {
  __component: "blocks.brands-strip";
  id: number;
  headingLines: string[] | null;
  description: string | null;
  logos: { id: number; name: string; logo: StrapiMedia; url: string | null }[];
};

export type BlockContactForm = {
  __component: "blocks.contact-form";
  id: number;
  variant: "default" | "business";
  headingLines: string[];
  description: string | null;
};

export type BlockTwoColumn = {
  __component: "blocks.two-column";
  id: number;
  image: StrapiMedia | null;
  imageAlt: string | null;
  imagePosition: "left" | "right";
  headingLines: string[];
  paragraphs: string[] | null;
  listItems: string[] | null;
  additionalText: string | null;
  mapEmbedUrl: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  compact: boolean | null;
};

export type BlockRichText = {
  __component: "blocks.rich-text";
  id: number;
  headingLines: string[] | null;
  body: string;
};

export type BlockGallery = {
  __component: "blocks.gallery";
  id: number;
  headingLines: string[] | null;
  columns: number;
  images: { id: number; image: StrapiMedia; alt: string; caption: string | null }[];
};

export type BlockColorCarousel = {
  __component: "blocks.color-carousel";
  id: number;
  headingLines: string[];
  wooden: boolean;
  manufacturerSlug: string | null;
};

export type BlockAccordion = {
  __component: "blocks.accordion";
  id: number;
  headingLines: string[];
  items: {
    id: number;
    title: string;
    body: string;
    ctaLabel: string | null;
    ctaUrl: string | null;
  }[];
};

export type BlockCategoryGrid = {
  __component: "blocks.category-grid";
  id: number;
  headingLines: string[];
  items: { id: number; name: string; href: string; image: StrapiMedia | null }[];
  ctaLabel: string | null;
  ctaUrl: string | null;
};

export type BlockMapEmbed = {
  __component: "blocks.map-embed";
  id: number;
  embedUrl: string;
  height: number | null;
  title: string | null;
};

export type AnyBlock =
  | BlockHero
  | BlockFeatureGrid
  | BlockStepsList
  | BlockCtaBanner
  | BlockProductGrid
  | BlockRealizationsGrid
  | BlockReviewsCarousel
  | BlockBlogList
  | BlockFaq
  | BlockBrandsStrip
  | BlockContactForm
  | BlockTwoColumn
  | BlockRichText
  | BlockGallery
  | BlockColorCarousel
  | BlockAccordion
  | BlockCategoryGrid
  | BlockMapEmbed;

export type StrapiHomePage = {
  id: number;
  documentId: string;
  title: string;
  sections: AnyBlock[];
  seo: StrapiSEO;
  publishedAt: string;
  updatedAt: string;
};

export type StrapiPage = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  kind: "standard" | "legal";
  heroImage: StrapiMedia | null;
  heroHeadingLines: string[] | null;
  heroDescription: string | null;
  heroCtaLabel: string | null;
  heroCtaUrl: string | null;
  breadcrumb: string[] | null;
  sections: AnyBlock[];
  seo: StrapiSEO;
  publishedAt: string;
  updatedAt: string;
};

export type StrapiProductCategoryPage = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  primaryProductType: string;
  heroImage: StrapiMedia | null;
  heroHeadingLines: string[] | null;
  heroDescription: string | null;
  heroCtaLabel: string | null;
  heroCtaUrl: string | null;
  breadcrumb: string[] | null;
  sections: AnyBlock[];
  seo: StrapiSEO;
  publishedAt: string;
  updatedAt: string;
};

// ─── Phase 5: GlobalSettings + Navigation ───────────────────────────────────

export type StrapiBranch = {
  id: number;
  name: string;
  label: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  googleMapsUrl: string | null;
};

export type StrapiSharedLink = {
  id: number;
  label: string;
  href: string;
  external: boolean;
  bold: boolean;
};

export type StrapiGlobalSettings = {
  id: number;
  documentId: string;
  companyName: string;
  phone: string;
  phoneMobile: string | null;
  email: string;
  addressStreet: string | null;
  addressCity: string | null;
  nip: string | null;
  regon: string | null;
  openingHoursWeekdays: string | null;
  openingHoursSaturday: string | null;
  socialFacebook: string | null;
  socialInstagram: string | null;
  googleMapsUrl: string | null;
  branches: StrapiBranch[];
  ctaUmowPomiar: string;
  ctaUmowPomiar48h: string;
  ctaSkontaktujSie: string;
  ctaNapisz: string;
  topBarLeft: string | null;
  topBarRight: string | null;
  footerDescription: string[] | null;
  footerBottomLinks: StrapiSharedLink[];
  copyright: string | null;
};

export type StrapiMenuItem = {
  id: number;
  label: string;
  href: string;
  hasDropdown: boolean;
  bold: boolean;
};

export type StrapiProductLink = {
  id: number;
  name: string;
  href: string;
  image: StrapiMedia | null;
};

export type StrapiMenuGroup = {
  id: number;
  group: string;
  items: StrapiProductLink[];
};

export type StrapiFooterColumn = {
  id: number;
  heading: string;
  links: StrapiSharedLink[];
};

export type StrapiNavigation = {
  id: number;
  documentId: string;
  mainMenu: StrapiMenuItem[];
  productCategories: StrapiMenuGroup[];
  mainProducts: StrapiProductLink[];
  footerColumns: StrapiFooterColumn[];
};

export type StrapiList<T> = {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
};

export type StrapiOne<T> = { data: T };
