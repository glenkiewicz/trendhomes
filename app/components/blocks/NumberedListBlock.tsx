import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";
import type { BlockNumberedList } from "../../types/strapi";

/**
 * Lista z numerowanymi pink badge'ami (rounded-full, h-7 w-7, bg-pink,
 * biała cyfra) + tekst per element. 1:1 z prod /produkty/dla-biznesu
 * sekcja "Dla kogo jest ta oferta".
 */
export default function NumberedListBlock({ block }: { block: BlockNumberedList }) {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />
        <ul className="mt-8 space-y-4 md:mt-12">
          {block.items.map((it, i) => (
            <AnimateOnScroll key={it.id} delay={i * 80}>
              <li className="flex items-start gap-4 border-b border-dark/10 pb-3 last:border-b-0 last:pb-0">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-dark md:text-lg">{it.text}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
