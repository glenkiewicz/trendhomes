import SectionHeading from "../SectionHeading";
import ColorCarousel from "../ColorCarousel";
import { listColorSwatches, mediaUrl } from "../../lib/strapi";
import type { BlockColorCarousel } from "../../types/strapi";

export default async function ColorCarouselBlock({ block }: { block: BlockColorCarousel }) {
  const colors = await listColorSwatches({
    paletteTag: block.wooden ? "wooden" : "standard",
    manufacturerSlug: block.manufacturerSlug ?? undefined,
  });
  if (colors.length === 0) return null;

  const items = colors.map((c) => ({ code: c.code, image: mediaUrl(c.image, "small") }));

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />
        <div className="mt-8 md:mt-12">
          <ColorCarousel colors={items} />
        </div>
      </div>
    </section>
  );
}
