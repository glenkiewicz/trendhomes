import { listRealizations } from "../../lib/strapi";
import type { BlockRealizationsGrid } from "../../types/strapi";
import RealizationsCarousel from "./RealizationsCarousel";

export type RealizationsCarouselImage = {
  id: number;
  image: BlockRealizationsGrid["images"][number]["image"];
  alt: string;
};

export default async function RealizationsGridBlock({ block }: { block: BlockRealizationsGrid }) {
  let imgs: RealizationsCarouselImage[] = block.images.map((i) => ({
    id: i.id,
    image: i.image,
    alt: i.alt,
  }));

  if (imgs.length === 0) {
    const category = block.category && block.category !== "all" ? block.category : undefined;
    const list = await listRealizations(category);
    imgs = list.map((r) => ({
      id: r.id,
      image: r.image,
      alt: r.subtitle ? `${r.title} ${r.subtitle}` : r.title,
    }));
    if (imgs.length === 0) return null;
  }

  return (
    <RealizationsCarousel
      headingLines={block.headingLines}
      description={block.description ?? null}
      ctaLabel={block.ctaLabel ?? null}
      ctaUrl={block.ctaUrl ?? null}
      imgs={imgs}
    />
  );
}
