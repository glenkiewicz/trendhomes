import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";
import { mediaUrl } from "../../lib/strapi";
import type { BlockCategoryGrid } from "../../types/strapi";

/**
 * Grid kategorii produktowych — 1:1 z prod sekcji "Poznaj nasze produkty"
 * na home page (https://trendhomes.pl/). 6 kafelków: Okna, Drzwi, Drzwi
 * Tarasowe, Rolety i Osłony, Pergole, Dla biznesu. Każdy z obrazkiem
 * + nazwa pod (centered) + link do strony kategorii.
 */
export default function CategoryGridBlock({ block }: { block: BlockCategoryGrid }) {
  return (
    <section id="produkty" className="bg-section-light py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
          {block.items.map((cat, i) => (
            <AnimateOnScroll key={cat.id} delay={i * 80}>
              <Link
                href={cat.href}
                className="group flex cursor-pointer flex-col items-center bg-card pb-3 transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10 md:pb-6"
              >
                <div className="relative flex h-[180px] w-full items-center justify-center p-3 sm:h-[240px] sm:p-5 md:h-[300px] md:p-6">
                  {cat.image && (
                    <Image
                      src={mediaUrl(cat.image, "medium")}
                      alt={cat.name}
                      width={300}
                      height={280}
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 300px"
                      loading="lazy"
                      className="h-auto max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="text-center text-lg font-bold text-dark transition-colors group-hover:text-pink sm:text-xl md:text-[26px]">
                  {cat.name}
                </h3>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {block.ctaLabel && block.ctaUrl && (
          <div className="mt-10 flex justify-center md:mt-14">
            <Link href={block.ctaUrl} className="btn-pink h-12 px-[34px] text-sm">
              {block.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
