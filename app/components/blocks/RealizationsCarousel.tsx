"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import { mediaUrl, mediaAlt } from "../../lib/strapi";
import type { RealizationsCarouselImage } from "./RealizationsGridBlock";

const GAP_LG = 32;
const GAP_SM = 24;

type Props = {
  headingLines: string[];
  description: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  imgs: RealizationsCarouselImage[];
};

/**
 * Karuzela realizacji — 1:1 z prod https://trendhomes.pl/realizacje:
 * heading z prev/next nav po prawej + slidy aspect-square + tytuł pod
 * + dots pagination + opcjonalny CTA.
 */
export default function RealizationsCarousel({ headingLines, description, ctaLabel, ctaUrl, imgs }: Props) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(GAP_LG);
  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, imgs.length - visibleCount);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const container = trackRef.current.parentElement;
    if (!container) return;
    const w = container.clientWidth;
    let cols = 3;
    let g = GAP_LG;
    if (w < 640) { cols = 1; g = GAP_SM; }
    else if (w < 1024) { cols = 2; g = GAP_SM; }
    setVisibleCount(cols);
    setGap(g);
    setItemWidth((w - g * (cols - 1)) / cols);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => { if (current > maxIndex) setCurrent(maxIndex); }, [maxIndex, current]);

  const prev = useCallback(() => setCurrent((c) => (c > 0 ? c - 1 : maxIndex)), [maxIndex]);
  const next = useCallback(() => setCurrent((c) => (c < maxIndex ? c + 1 : 0)), [maxIndex]);
  const totalDots = maxIndex + 1;

  return (
    <section id="realizacje" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-center justify-between">
          <SectionHeading lines={headingLines} />
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Poprzedni" className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <button onClick={next} aria-label="Następny" className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          </div>
        </div>

        {description && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
            {description}
          </p>
        )}

        <div className="mt-6 overflow-hidden md:mt-10">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: `${gap}px`, transform: `translate3d(-${current * (itemWidth + gap)}px, 0, 0)`, willChange: "transform" }}
          >
            {imgs.map((img) => (
              <div
                key={img.id}
                className="group shrink-0 cursor-pointer"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={mediaUrl(img.image, "medium")}
                    alt={mediaAlt(img.image, img.alt, "Realizacja Trendhomes")}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 whitespace-pre-line text-lg font-bold leading-tight text-dark md:mt-6 md:text-xl lg:text-[26px] lg:leading-[42px]">
                  {img.alt}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {totalDots > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 md:mt-12">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Pozycja ${i + 1}`} className="flex h-6 items-center py-2">
                <span className={`block h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-10 bg-pink" : "w-6 bg-dark/20 hover:bg-dark/40"}`} />
              </button>
            ))}
          </div>
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
