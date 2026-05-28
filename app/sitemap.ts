import type { MetadataRoute } from "next";
import {
  listArticleSlugs,
  listPageSlugs,
  listProductCategoryPageSlugs,
  listProductSystemSlugs,
} from "./lib/strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trendhomes.pl";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, products, productCategoryPages, pages] = await Promise.all([
    listArticleSlugs().catch(() => []),
    listProductSystemSlugs().catch(() => []),
    listProductCategoryPageSlugs().catch(() => []),
    listPageSlugs().catch(() => []),
  ]);

  const now = new Date().toISOString();

  // Fixed top-level URLs
  const fixed: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: a.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => {
    const base =
      p.productType === "wooden" ? "/produkty/okna-drewniane" : "/produkty/okna";
    return {
      url: `${SITE_URL}${base}/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  const productCategoryEntries: MetadataRoute.Sitemap = productCategoryPages.map((p) => ({
    url: `${SITE_URL}/produkty/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const pageEntries: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly",
    priority: p.slug.startsWith("polityka") || p.slug === "regulamin" ? 0.3 : 0.6,
  }));

  return [
    ...fixed,
    ...articleEntries,
    ...productCategoryEntries,
    ...productEntries,
    ...pageEntries,
  ];
}
