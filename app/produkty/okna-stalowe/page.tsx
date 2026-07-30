import { notFound } from "next/navigation";
import { getProductCategoryPageBySlug } from "../../lib/strapi";
import { toMetadata } from "../../lib/seo";
import PageRenderer from "../../components/blocks/PageRenderer";

const SLUG = "okna-stalowe";

export async function generateMetadata() {
  const page = await getProductCategoryPageBySlug(SLUG);
  if (!page) return {};
  return toMetadata(page.seo, `/produkty/${SLUG}`, { fallbackImage: page.heroImage });
}

export default async function Page() {
  const page = await getProductCategoryPageBySlug(SLUG);
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
