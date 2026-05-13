import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";
import { mediaUrl } from "../../lib/strapi";
import type { BlockRealizationsGrid } from "../../types/strapi";

export default function RealizationsGridBlock({ block }: { block: BlockRealizationsGrid }) {
  const imgs = block.images;
  if (imgs.length === 0) return null;

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
            {imgs.slice(0, 3).map((img, i) => (
              <div
                key={img.id}
                className={`group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px] ${
                  i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Image
                  src={mediaUrl(img.image, "medium")}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {imgs.length >= 5 && (
          <AnimateOnScroll delay={150}>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
              <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
                <Image
                  src={mediaUrl(imgs[3].image, "medium")}
                  alt={imgs[3].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:h-[464px]">
                <Image
                  src={mediaUrl(imgs[4].image, "large")}
                  alt={imgs[4].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </AnimateOnScroll>
        )}

        {imgs.length >= 7 && (
          <AnimateOnScroll delay={300}>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
              <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
                <Image
                  src={mediaUrl(imgs[5].image, "medium")}
                  alt={imgs[5].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:h-[464px]">
                <Image
                  src={mediaUrl(imgs[6].image, "large")}
                  alt={imgs[6].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </AnimateOnScroll>
        )}

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
