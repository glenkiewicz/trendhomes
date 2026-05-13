"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading";
import { mediaUrl } from "../../lib/strapi";
import type { BlockStepsList } from "../../types/strapi";

const GAP_LG = 32;
const GAP_SM = 24;

export default function StepsListBlock({ block }: { block: BlockStepsList }) {
  const steps = block.steps;
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(GAP_LG);
  const [visibleCount, setVisibleCount] = useState(2);

  const maxIndex = Math.max(0, steps.length - visibleCount);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const container = trackRef.current.parentElement;
    if (!container) return;
    const w = container.clientWidth;
    let cols = 2;
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
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-start justify-between">
          <SectionHeading lines={block.headingLines} />
          <div className="mt-6 flex items-center gap-3 md:mt-8">
            <button onClick={prev} aria-label="Poprzedni krok" className="flex size-[30px] items-center justify-center rounded-full border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <button onClick={next} aria-label="Następny krok" className="flex size-[30px] items-center justify-center rounded-full border border-pink transition-colors hover:bg-pink/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="#d2245f" strokeWidth="1.5" /></svg>
            </button>
          </div>
        </div>

        {block.subtitle && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
            {block.subtitle}
          </p>
        )}

        <div className="mt-8 overflow-hidden md:mt-12">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: `${gap}px`, transform: `translate3d(-${current * (itemWidth + gap)}px, 0, 0)`, willChange: "transform" }}
          >
            {steps.map((step, i) => (
              <div
                key={step.id}
                className="shrink-0"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-3xl font-black text-pink"
                    style={{ opacity: 1 - i * 0.2 > 0.3 ? 1 - i * 0.2 : 0.3 }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-xl font-light text-dark md:text-[29px]">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">{step.description}</p>
                <div className="mt-6 h-[3px] w-full bg-pink" />
              </div>
            ))}
          </div>
        </div>

        {totalDots > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 md:mt-12">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Krok ${i + 1}`} className="flex h-6 items-center py-2">
                <span className={`block h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-10 bg-pink" : "w-6 bg-dark/20 hover:bg-dark/40"}`} />
              </button>
            ))}
          </div>
        )}

        {block.investments && block.investments.length > 0 && block.investmentsHeading && (
          <div className="mt-16 md:mt-24">
            <SectionHeading lines={block.investmentsHeading} />
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-12">
              {block.investments.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="relative size-[100px]">
                    <Image
                      src={mediaUrl(item.icon)}
                      alt={item.title}
                      fill
                      sizes="100px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-dark md:text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
