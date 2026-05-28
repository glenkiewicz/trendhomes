"use client";

import Link from "next/link";
import { useState } from "react";
import SectionHeading from "../SectionHeading";
import type { BlockAccordion } from "../../types/strapi";

/**
 * Akordeon — układ 1:1 z prod https://trendhomes.pl/stolarka-dla-biznesu
 * sekcja "Stolarka w pełni dopasowana…".
 *
 * Każdy item ma border-t/border-b, button toggle z chevron rotującym 180°
 * gdy open + animowane rozwijanie content przez grid-rows trick.
 */
export default function AccordionBlock({ block }: { block: BlockAccordion }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />

        <div className="mt-10 md:mt-14">
          {block.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.id} className="border-t border-dark/10 last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-5 text-left md:py-6"
                >
                  <h3 className="text-xl font-bold text-dark md:text-[26px] md:leading-[42px]">
                    {item.title}
                  </h3>
                  <span className="ml-4 flex shrink-0 items-center gap-2 text-sm text-dark">
                    <span className="hidden sm:inline">{isOpen ? "Zwiń" : "Czytaj więcej"}</span>
                    <svg
                      width="30" height="30" viewBox="0 0 30 30" fill="none"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M8 12L15 19L22 12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 md:pb-8">
                      <div
                        className="text-sm leading-relaxed text-dark md:text-lg
                          [&_p]:mb-4 [&_p:last-child]:mb-0
                          [&_strong]:font-semibold
                          [&_p+p]:mt-0
                          [&_p+ul]:mt-2
                          [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5
                          [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5
                          [&_li]:leading-relaxed
                          [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:text-sm [&_h4]:font-semibold md:[&_h4]:text-lg
                          [&_a]:text-pink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-pink/80"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                      {item.ctaLabel && item.ctaUrl && (
                        <div className="mt-8">
                          <Link href={item.ctaUrl} className="btn-pink h-[52px] px-[34px] text-sm">
                            {item.ctaLabel}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
