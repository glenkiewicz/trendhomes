import type {
  StrapiArticle,
  StrapiGlobalSettings,
  StrapiHomePage,
  StrapiList,
  StrapiMedia,
  StrapiNavigation,
  StrapiOne,
  StrapiPage,
  StrapiProductCategoryPage,
  StrapiProductSystem,
  StrapiRealization,
  StrapiReview,
} from "../types/strapi";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

type Query = Record<string, string | number | boolean | undefined>;

function qs(query: Query): string {
  const parts: string[] = [];
  for (const [k, v] of Object.entries(query)) {
    if (v === undefined) continue;
    parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
  }
  return parts.length ? `?${parts.join("&")}` : "";
}

export async function strapiFetch<T>(
  path: string,
  opts: { query?: Query; tags?: string[]; revalidate?: number | false } = {}
): Promise<T> {
  if (!STRAPI_TOKEN) {
    throw new Error(
      "STRAPI_API_TOKEN missing. Set it in .env.local (frontend-read token from Strapi admin)."
    );
  }
  const url = `${STRAPI_URL}/api${path}${qs(opts.query || {})}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
    next: {
      tags: opts.tags,
      revalidate: opts.revalidate,
    },
  });
  if (!res.ok) {
    throw new Error(
      `Strapi ${path} ${res.status} ${res.statusText}: ${await res.text()}`
    );
  }
  return res.json() as Promise<T>;
}

/** Resolve a Strapi media URL — Strapi v5 returns relative paths from local provider. */
export function mediaUrl(media: StrapiMedia | null | undefined, format?: "small" | "medium" | "large" | "xlarge"): string {
  if (!media) return "";
  const candidate = format && media.formats?.[format]?.url
    ? media.formats[format].url
    : media.url;
  return candidate.startsWith("http") ? candidate : `${STRAPI_URL}${candidate}`;
}

const ARTICLE_POPULATE = {
  "populate[0]": "coverImage",
  "populate[1]": "category",
  "populate[2]": "seo",
  "populate[3]": "seo.ogImage",
} as const;

export async function listArticles(): Promise<StrapiArticle[]> {
  const data = await strapiFetch<StrapiList<StrapiArticle>>("/articles", {
    query: {
      ...ARTICLE_POPULATE,
      sort: "publishedDate:desc",
      "pagination[pageSize]": 100,
    },
    tags: ["articles"],
  });
  return data.data;
}

export async function getArticleBySlug(slug: string): Promise<StrapiArticle | null> {
  const data = await strapiFetch<StrapiList<StrapiArticle>>("/articles", {
    query: {
      ...ARTICLE_POPULATE,
      "filters[slug][$eq]": slug,
      "pagination[pageSize]": 1,
    },
    tags: [`article:${slug}`, "articles"],
  });
  return data.data[0] ?? null;
}

export async function listArticleSlugs(): Promise<{ slug: string; updatedAt: string }[]> {
  const data = await strapiFetch<StrapiList<Pick<StrapiArticle, "slug" | "updatedAt">>>("/articles", {
    query: {
      "fields[0]": "slug",
      "fields[1]": "updatedAt",
      "pagination[pageSize]": 1000,
    },
    tags: ["articles"],
  });
  return data.data;
}

/**
 * Polish date formatter for blog cards: ISO "2026-03-26" → "26.03.2026".
 * Matches the existing visual style without bringing a date library.
 */
export function formatPlDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

const PRODUCT_POPULATE = {
  "populate[0]": "mainImage",
  "populate[1]": "crossSection",
  "populate[2]": "gallery",
  "populate[3]": "manufacturer",
  "populate[4]": "manufacturer.logo",
  "populate[5]": "features",
  "populate[6]": "featureSections",
  "populate[7]": "featureSections.blocks",
  "populate[8]": "featureSections.blocks.image",
  "populate[9]": "colors",
  "populate[10]": "colors.image",
  "populate[11]": "seo",
  "populate[12]": "seo.ogImage",
} as const;

export async function getProductSystemBySlug(
  slug: string,
  productType?: "pvc" | "wooden" | "aluminum" | "steel"
): Promise<StrapiProductSystem | null> {
  const query: Record<string, string | number> = {
    ...PRODUCT_POPULATE,
    "filters[slug][$eq]": slug,
    "pagination[pageSize]": 1,
  };
  if (productType) query["filters[productType][$eq]"] = productType;
  const data = await strapiFetch<StrapiList<StrapiProductSystem>>("/product-systems", {
    query,
    tags: [`product:${slug}`, "products"],
  });
  return data.data[0] ?? null;
}

export async function listProductSystems(
  productType: "pvc" | "wooden" | "aluminum" | "steel"
): Promise<StrapiProductSystem[]> {
  const data = await strapiFetch<StrapiList<StrapiProductSystem>>("/product-systems", {
    query: {
      ...PRODUCT_POPULATE,
      "filters[productType][$eq]": productType,
      sort: "name:asc",
      "pagination[pageSize]": 100,
    },
    tags: ["products"],
  });
  return data.data;
}

export async function listProductSystemSlugs(
  productType?: "pvc" | "wooden" | "aluminum" | "steel"
): Promise<{ slug: string; productType: string; updatedAt: string }[]> {
  const query: Record<string, string | number> = {
    "fields[0]": "slug",
    "fields[1]": "productType",
    "fields[2]": "updatedAt",
    "pagination[pageSize]": 1000,
  };
  if (productType) query["filters[productType][$eq]"] = productType;
  const data = await strapiFetch<StrapiList<{ slug: string; productType: string; updatedAt: string }>>(
    "/product-systems",
    { query, tags: ["products"] }
  );
  return data.data;
}

export async function getRelatedProductSystems(
  excludeSlug: string,
  productType: "pvc" | "wooden" | "aluminum" | "steel",
  limit = 3
): Promise<StrapiProductSystem[]> {
  const data = await strapiFetch<StrapiList<StrapiProductSystem>>("/product-systems", {
    query: {
      ...PRODUCT_POPULATE,
      "filters[productType][$eq]": productType,
      "filters[slug][$ne]": excludeSlug,
      "pagination[pageSize]": limit,
      sort: "name:asc",
    },
    tags: ["products"],
  });
  return data.data;
}

export async function listRealizations(
  category?: "residential" | "pergola" | "b2b" | "various" | "office"
): Promise<StrapiRealization[]> {
  const query: Record<string, string | number> = {
    "populate[0]": "image",
    sort: "sortOrder:asc",
    "pagination[pageSize]": 200,
  };
  if (category) query["filters[category][$eq]"] = category;
  const data = await strapiFetch<StrapiList<StrapiRealization>>("/realizations", {
    query,
    tags: ["realizations", category ? `realizations:${category}` : "realizations"],
  });
  return data.data;
}

/** Sections populate — shared between any DZ-bearing entity.
 *  Uses Strapi v5's "on each component" syntax so each block type gets the
 *  populate path it actually needs. `*` at the deepest level pulls all media. */
const SECTIONS_POPULATE: Record<string, string> = {
  "populate[seo][populate]": "*",
  "populate[sections][on][blocks.hero][populate][slides][populate]": "*",
  "populate[sections][on][blocks.feature-grid][populate][items][populate]": "*",
  "populate[sections][on][blocks.steps-list][populate][steps][populate]": "*",
  "populate[sections][on][blocks.steps-list][populate][investments][populate]": "*",
  "populate[sections][on][blocks.cta-banner][populate]": "*",
  "populate[sections][on][blocks.product-grid][populate][selected][populate]": "*",
  "populate[sections][on][blocks.realizations-grid][populate][images][populate]": "*",
  "populate[sections][on][blocks.reviews-carousel][populate]": "*",
  "populate[sections][on][blocks.blog-list][populate]": "*",
  "populate[sections][on][blocks.faq][populate]": "*",
  "populate[sections][on][blocks.brands-strip][populate][logos][populate]": "*",
  "populate[sections][on][blocks.contact-form][populate]": "*",
  "populate[sections][on][blocks.two-column][populate]": "*",
  "populate[sections][on][blocks.rich-text][populate]": "*",
  "populate[sections][on][blocks.gallery][populate][images][populate]": "*",
  "populate[sections][on][blocks.color-carousel][populate]": "*",
};

/** Adds heroImage on top of sections populate — for Page + ProductCategoryPage. */
const PAGE_POPULATE: Record<string, string> = {
  ...SECTIONS_POPULATE,
  "populate[heroImage]": "true",
};

export async function getHomePage(): Promise<StrapiHomePage | null> {
  const data = await strapiFetch<StrapiOne<StrapiHomePage>>("/home-page", {
    query: SECTIONS_POPULATE,
    tags: ["home"],
  });
  return data.data ?? null;
}

export async function getPageBySlug(slug: string): Promise<StrapiPage | null> {
  const data = await strapiFetch<StrapiList<StrapiPage>>("/pages", {
    query: {
      ...PAGE_POPULATE,
      "filters[slug][$eq]": slug,
      "pagination[pageSize]": 1,
    },
    tags: [`page:${slug}`, "pages"],
  });
  return data.data[0] ?? null;
}

export async function getProductCategoryPageBySlug(slug: string): Promise<StrapiProductCategoryPage | null> {
  const data = await strapiFetch<StrapiList<StrapiProductCategoryPage>>("/product-category-pages", {
    query: {
      ...PAGE_POPULATE,
      "filters[slug][$eq]": slug,
      "pagination[pageSize]": 1,
    },
    tags: [`product-category-page:${slug}`, "product-category-pages"],
  });
  return data.data[0] ?? null;
}

export async function getGlobalSettings(): Promise<StrapiGlobalSettings | null> {
  const data = await strapiFetch<StrapiOne<StrapiGlobalSettings>>("/global-setting", {
    query: {
      "populate[branches]": "true",
      "populate[footerBottomLinks]": "true",
    },
    tags: ["global"],
  });
  return data.data ?? null;
}

export async function getNavigation(): Promise<StrapiNavigation | null> {
  const data = await strapiFetch<StrapiOne<StrapiNavigation>>("/navigation", {
    query: {
      "populate[mainMenu]": "true",
      "populate[productCategories][populate][items][populate]": "image",
      "populate[mainProducts][populate]": "image",
      "populate[footerColumns][populate]": "links",
    },
    tags: ["global"],
  });
  return data.data ?? null;
}

export async function listColorSwatches(
  opts: { paletteTag?: "standard" | "wooden"; manufacturerSlug?: string } = {}
): Promise<{ id: number; code: string; image: StrapiMedia; sortOrder: number }[]> {
  const query: Record<string, string | number> = {
    "populate[0]": "image",
    sort: "sortOrder:asc",
    "pagination[pageSize]": 500,
  };
  if (opts.paletteTag) query["filters[paletteTag][$eq]"] = opts.paletteTag;
  if (opts.manufacturerSlug)
    query["filters[manufacturer][slug][$eq]"] = opts.manufacturerSlug;
  const data = await strapiFetch<StrapiList<{ id: number; code: string; image: StrapiMedia; sortOrder: number }>>(
    "/color-swatches",
    { query, tags: ["colors"] }
  );
  return data.data;
}

export async function listReviews(
  opts: { featured?: boolean; source?: "google" | "manual" | "b2b"; limit?: number } = {}
): Promise<StrapiReview[]> {
  const query: Record<string, string | number | boolean> = {
    "populate[0]": "image",
    sort: "sortOrder:asc",
    "pagination[pageSize]": opts.limit ?? 100,
  };
  if (opts.featured !== undefined) query["filters[featured][$eq]"] = opts.featured;
  if (opts.source) query["filters[source][$eq]"] = opts.source;
  const data = await strapiFetch<StrapiList<StrapiReview>>("/reviews", {
    query,
    tags: ["reviews"],
  });
  return data.data;
}
