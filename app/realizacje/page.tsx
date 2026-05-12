import type { StrapiRealization } from "../types/strapi";
import RealizacjeContent, { type RealizationItem } from "./RealizacjeContent";
import { listRealizations, mediaUrl } from "../lib/strapi";
import { MOCKUP_DATA } from "../lib/mockup-data";

const meta = MOCKUP_DATA.pages.realizacje;

export const metadata = {
  title: "Realizacje Trendhomes – portfolio okien, drzwi i pergoli",
  description: meta.hero.description,
};

function toRealItem(r: StrapiRealization): RealizationItem {
  return {
    title: r.subtitle ? `${r.title}\n${r.subtitle}` : r.title,
    image: mediaUrl(r.image, "medium"),
  };
}

export default async function RealizacjePage() {
  const [residential, pergola, business] = await Promise.all([
    listRealizations("residential"),
    listRealizations("pergola"),
    listRealizations("b2b"),
  ]);

  return (
    <RealizacjeContent
      residential={residential.map(toRealItem)}
      pergola={pergola.map(toRealItem)}
      business={business.map(toRealItem)}
    />
  );
}
