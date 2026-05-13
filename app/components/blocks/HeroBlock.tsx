"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { mediaUrl } from "../../lib/strapi";
import type { BlockHero } from "../../types/strapi";

const AUTO_PLAY_MS = 10000;

export default function HeroBlock({ block }: { block: BlockHero }) {
  const slides = block.slides;
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(goNext, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [goNext, slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className="relative h-[480px] w-full overflow-hidden sm:h-[560px] md:h-[650px] lg:h-[714px]">
      {slides.map((slide, i) => (
        <div
          key={slide.id ?? i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <Image
            src={mediaUrl(slide.image, "xlarge")}
            alt={slide.titleLines.join(" ")}
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(27,27,27,0.72) 15%, rgba(27,27,27,0.58) 43%, rgba(107,101,98,0.24) 79%, rgba(255,240,229,0) 100%)",
            }}
          />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-3 md:px-5">
        <div className="flex max-w-[928px] flex-col gap-4 md:gap-6">
          <h1 className="text-[26px] font-semibold leading-tight text-white sm:text-[32px] md:text-[42px] lg:text-[52px]">
            {slides[current].titleLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-[552px] text-sm leading-relaxed text-white md:text-base lg:text-lg">
            {slides[current].description}
          </p>
          {block.ctaLabel && block.ctaUrl && (
            <div>
              <Link href={block.ctaUrl} className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-8 sm:text-base">
                {block.ctaLabel}
              </Link>
            </div>
          )}
        </div>
      </div>

      {block.bottomTabs && block.bottomTabs.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-3 gap-px">
              {block.bottomTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`px-4 py-3 text-xs uppercase tracking-wider transition-colors md:py-4 md:text-sm ${
                    i === current ? "bg-pink text-white" : "bg-white/80 text-dark hover:bg-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {slides.length > 1 && (
        <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slajd ${i + 1}`}
              className={`h-1 transition-all duration-300 ${i === current ? "w-10 bg-pink" : "w-6 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
