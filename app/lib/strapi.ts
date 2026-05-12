import type {
  StrapiArticle,
  StrapiList,
  StrapiMedia,
  StrapiOne,
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
