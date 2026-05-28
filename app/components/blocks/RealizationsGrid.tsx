import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";
import { mediaUrl } from "../../lib/strapi";
import type { RealizationsCarouselImage } from "./RealizationsGridBlock";

type Props = {
  headingLines: string[];
  description: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  imgs: RealizationsCarouselImage[];
};

/**
 * Asymetryczny grid realizacji — 1:1 z prod home page (https://trendhomes.pl/
 * sekcja "Realizacje Trendhomes w południowej Polsce"). 7 obrazków w 3 rzędach:
 *  Row 1: [A][B][C] (C span-2 na sm, span-1 na lg)
 *  Row 2: [D][E ──] (E span-2 zawsze)
 *  Row 3: [F][G ──]
 * Bez podpisów per kafelek, CTA "Zobacz więcej realizacji" na dole.
 */
export default function RealizationsGrid({ headingLines, description, ctaLabel, ctaUrl, imgs }: Props) {
  // 7 obrazków max — 3+2+2. Jeśli mniej, wypełniamy ile się da.
  const row1 = imgs.slice(0, 3);
  const row2 = imgs.slice(3, 5);
  const row3 = imgs.slice(5, 7);

  const renderImage = (img: RealizationsCarouselImage, className: string, i: number) => (
    <div key={img.id} className={`group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px] ${className}`}>
      <Image
        src={mediaUrl(img.image, "medium")}
        alt={img.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading={i === 0 ? "eager" : "lazy"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );

  return (
    <section id="realizacje" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={headingLines} />
        {description && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">{description}</p>
        )}

        {row1.length > 0 && (
          <AnimateOnScroll>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {row1.map((img, i) =>
                renderImage(img, i === 2 ? "sm:col-span-2 lg:col-span-1" : "", i)
              )}
            </div>
          </AnimateOnScroll>
        )}

        {row2.length > 0 && (
          <AnimateOnScroll>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
              {row2.map((img, i) =>
                renderImage(img, i === 1 ? "sm:col-span-2" : "", i + 3)
              )}
            </div>
          </AnimateOnScroll>
        )}

        {row3.length > 0 && (
          <AnimateOnScroll>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
              {row3.map((img, i) =>
                renderImage(img, i === 1 ? "sm:col-span-2" : "", i + 5)
              )}
            </div>
          </AnimateOnScroll>
        )}

        {ctaLabel && ctaUrl && (
          <div className="mt-10 flex justify-center md:mt-14">
            <Link href={ctaUrl} className="btn-pink h-12 px-[34px] text-sm">
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
