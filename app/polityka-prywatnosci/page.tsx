import { notFound } from "next/navigation";
import { getPageBySlug } from "../lib/strapi";
import { toMetadata } from "../lib/seo";
import PageRenderer from "../components/blocks/PageRenderer";

const SLUG = "polityka-prywatnosci";

export async function generateMetadata() {
  const page = await getPageBySlug(SLUG);
  if (!page) return {};
  return toMetadata(page.seo, `/${SLUG}`);
}

export default async function Page() {
  const page = await getPageBySlug(SLUG);
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
