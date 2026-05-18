"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";
import { mediaUrl } from "../../lib/strapi";
import type { BlockFeatureGrid } from "../../types/strapi";

const GAP_LG = 32;
const GAP_SM = 24;

export default function FeatureGridBlock({ block }: { block: BlockFeatureGrid }) {
  if (block.variant === "solutions") return <SolutionsCarousel block={block} />;
  if (block.variant === "why") return <WhyList block={block} />;
  if (block.variant === "audience") return <AudienceCarousel block={block} />;
  return <GenericGrid block={block} />;
}

function AudienceCarousel({ block }: { block: BlockFeatureGrid }) {
  const items = block.items;
  const subheading = block.headingLines?.[0] ?? "";
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(GAP_LG);
  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, items.length - visibleCount);

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
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  useEffect(() => { if (current > maxIndex) setCurrent(maxIndex); }, [maxIndex, current]);

  const prev = useCallback(() => setCurrent((c) => (c > 0 ? c - 1 : maxIndex)), [maxIndex]);
  const next = useCallback(() => setCurrent((c) => (c < maxIndex ? c + 1 : 0)), [maxIndex]);
  const totalDots = maxIndex + 1;

  return (
    <section className="bg-white pb-10 md:pb-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-end justify-between">
          <p className="text-xl font-semibold text-dark md:text-[26px]">{subheading}</p>
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Poprzedni" className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <button onClick={next} aria-label="Następny" className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden md:mt-10">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: `${gap}px`, transform: `translate3d(-${current * (itemWidth + gap)}px, 0, 0)`, willChange: "transform" }}
          >
            {items.map((it) => (
              <div
                key={it.id}
                className="group shrink-0 cursor-pointer overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="p-5 pb-0 md:p-8 md:pb-0">
                  <h3 className="text-[22px] font-bold leading-tight text-dark md:text-[26px]">{it.title}</h3>
                </div>
                {it.image && (
                  <div className="relative mt-6 h-[160px] w-full overflow-hidden md:mt-8 md:h-[180px]">
                    <Image src={mediaUrl(it.image, "medium")} alt={it.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
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
      </div>
    </section>
  );
}

function SolutionsCarousel({ block }: { block: BlockFeatureGrid }) {
  const items = block.items;
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(GAP_LG);
  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, items.length - visibleCount);

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
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  useEffect(() => { if (current > maxIndex) setCurrent(maxIndex); }, [maxIndex, current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c < maxIndex ? c + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prev = useCallback(() => setCurrent((c) => (c > 0 ? c - 1 : maxIndex)), [maxIndex]);
  const next = useCallback(() => setCurrent((c) => (c < maxIndex ? c + 1 : 0)), [maxIndex]);
  const totalDots = maxIndex + 1;

  return (
    <section id="rozwiazania" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-center justify-between">
          <SectionHeading lines={block.headingLines} />
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Poprzedni" className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <button onClick={next} aria-label="Następny" className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden md:mt-10">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: `${gap}px`, transform: `translate3d(-${current * (itemWidth + gap)}px, 0, 0)`, willChange: "transform" }}
          >
            {items.map((it) => (
              <div
                key={it.id}
                className="group flex shrink-0 cursor-pointer flex-col overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="flex-1 p-5 pb-0 md:p-8 md:pb-0">
                  <h3 className="whitespace-pre-line text-[22px] font-bold leading-tight text-dark md:text-[26px]">{it.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-dark md:mt-6 md:text-base">{it.description}</p>
                </div>
                {it.image && (
                  <div className="relative mt-6 h-[160px] w-full shrink-0 overflow-hidden md:h-[180px]">
                    <Image src={mediaUrl(it.image, "medium")} alt={it.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
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
      </div>
    </section>
  );
}

function WhyList({ block }: { block: BlockFeatureGrid }) {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />
        {block.intro && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
            {block.intro}
          </p>
        )}

        <div className="mt-10">
          {block.items.map((benefit, i) => {
            const textBlock = (
              <div className="flex flex-col gap-3 p-3 md:gap-6 md:p-5" key="text">
                <h3 className="text-xl font-light text-dark sm:text-2xl md:text-[29px]">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-dark/80 md:text-lg">{benefit.description}</p>
              </div>
            );
            const imageBlock = benefit.image ? (
              <div className="relative h-[200px] overflow-hidden md:h-[212px]" key="image">
                <Image src={mediaUrl(benefit.image, "medium")} alt={benefit.title} fill sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" className="object-cover" />
              </div>
            ) : null;

            return (
              <AnimateOnScroll key={benefit.id} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="grid grid-cols-1 border-t border-dark/10 md:grid-cols-2 items-center py-8">
                  <div className="md:hidden">{textBlock}{imageBlock}</div>
                  <div className="hidden md:contents">
                    {i % 2 === 0 ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {block.ctaLabel && block.ctaUrl && (
          <div className="mt-8 flex justify-center md:mt-14">
            <Link href={block.ctaUrl} className="btn-pink h-12 px-6 text-sm md:px-8">
              {block.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function GenericGrid({ block }: { block: BlockFeatureGrid }) {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />
        {block.intro && <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6">{block.intro}</p>}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-12 lg:gap-12">
          {block.items.map((it) => (
            <div key={it.id} className="flex flex-col">
              {(it.icon || it.image) && (
                <div className="relative size-[100px]">
                  <Image src={mediaUrl(it.icon ?? it.image, "small")} alt={it.title} fill sizes="100px" className="object-contain" />
                </div>
              )}
              <h3 className="mt-6 text-xl font-bold text-dark">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark md:text-lg">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
