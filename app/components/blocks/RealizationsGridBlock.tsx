import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";
import { listRealizations, mediaUrl } from "../../lib/strapi";
import type { BlockRealizationsGrid } from "../../types/strapi";

type GridImage = { id: number; image: BlockRealizationsGrid["images"][number]["image"]; alt: string };

const DEFAULT_LIMIT = 14;

export default async function RealizationsGridBlock({ block }: { block: BlockRealizationsGrid }) {
  let imgs: GridImage[] = block.images.map((i) => ({ id: i.id, image: i.image, alt: i.alt }));

  if (imgs.length === 0) {
    const category = block.category && block.category !== "all" ? block.category : undefined;
    const list = await listRealizations(category);
    imgs = list.slice(0, DEFAULT_LIMIT).map((r) => ({ id: r.id, image: r.image, alt: r.title }));
    if (imgs.length === 0) return null;
  }

  return (
    <section id="realizacje" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />

        {block.description && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
            {block.description}
          </p>
        )}

        <AnimateOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {imgs.map((img, i) => (
              <div
                key={img.id}
                className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[400px]"
                style={{ animationDelay: `${Math.min(i, 5) * 80}ms` }}
              >
                <Image
                  src={mediaUrl(img.image, "medium")}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {img.alt && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/70 to-transparent px-4 py-3">
                    <p className="text-sm font-semibold text-white sm:text-base">{img.alt}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {block.ctaLabel && block.ctaUrl && (
          <AnimateOnScroll delay={100}>
            <div className="mt-10 flex justify-center md:mt-14">
              <Link href={block.ctaUrl} className="btn-pink h-12 px-[34px] text-sm">
                {block.ctaLabel}
              </Link>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
