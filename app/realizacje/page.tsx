"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { MOCKUP_DATA } from "../lib/mockup-data";

const { hero, newBuilds, banner, renovations, products, b2b } =
  MOCKUP_DATA.pages.realizacje;
const { cta } = MOCKUP_DATA.global;

const GAP_LG = 32;
const GAP_SM = 24;

function ProjectCarousel({
  items,
  heading,
}: {
  items: readonly { readonly title: string; readonly image: string }[];
  heading: readonly string[];
}) {
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
    if (w < 640) {
      cols = 1;
      g = GAP_SM;
    } else if (w < 1024) {
      cols = 2;
      g = GAP_SM;
    }
    setVisibleCount(cols);
    setGap(g);
    setItemWidth((w - g * (cols - 1)) / cols);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent((c) => (c < maxIndex ? c + 1 : 0));
  }, [maxIndex]);

  const totalDots = maxIndex + 1;

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-center justify-between">
          <SectionHeading lines={heading} />
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Poprzedni"
              className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 3L5 7L9 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Następny"
              className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 3L9 7L5 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden md:mt-10">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${current * (itemWidth + gap)}px)`,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="group shrink-0 cursor-pointer"
                style={{
                  width: itemWidth > 0 ? `${itemWidth}px` : "100%",
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 whitespace-pre-line text-lg font-bold leading-tight text-dark md:mt-6 md:text-xl lg:text-[26px] lg:leading-[42px]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {totalDots > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 md:mt-12">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Pozycja ${i + 1}`}
                className="flex h-6 items-center py-2"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-10 bg-pink"
                      : "w-6 bg-dark/20 hover:bg-dark/40"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function RealizacjePage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src={hero.image}
          alt={hero.titleLines.join(" ")}
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(27,27,27,0.72) 15%, rgba(27,27,27,0.58) 43%, rgba(107,101,98,0.24) 79%, rgba(255,240,229,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-3 md:px-5">
          <nav className="mb-6 flex items-center gap-2 text-sm uppercase text-white/80 md:text-sm">
            {hero.breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>|</span>}
                {i === 0 ? (
                  <Link
                    href="/"
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                ) : (
                  <span className="text-white">{item}</span>
                )}
              </span>
            ))}
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {hero.titleLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            {hero.description}
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              {cta.umowPomiar48h}
            </Link>
          </div>
        </div>
      </section>

      {/* Nowopowstałe obiekty */}
      <AnimateOnScroll>
        <ProjectCarousel
          items={newBuilds.items}
          heading={newBuilds.heading}
        />
      </AnimateOnScroll>

      {/* Pink banner: Rozwiązania all in one */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/realizacje-banner.png"
            alt=""
            fill
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #d32360 0%, #d32360 62%, rgba(211,35,96,0.88) 68%, rgba(211,35,96,0.64) 75%, rgba(211,35,96,0.42) 83%, rgba(211,35,96,0) 91%)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 py-16 md:px-5 md:py-24">
          <SectionHeading lines={banner.heading} light />
          <p className="mt-6 max-w-[728px] text-sm leading-relaxed text-white md:text-xl">
            {banner.description}
          </p>
          <div className="mt-8">
            <Link
              href="/produkty/okna"
              className="btn-light h-[52px] px-[34px] text-sm"
            >
              {banner.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Remonty i modernizacje */}
      <AnimateOnScroll>
        <ProjectCarousel
          items={renovations.items}
          heading={renovations.heading}
        />
      </AnimateOnScroll>

      {/* Produkty, które dopasowują się do Ciebie */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading lines={products.heading} />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-xl">
                  {products.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/produkty/okna"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    {products.cta}
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[600px]">
                <Image
                  src={products.image.src}
                  alt={products.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Realizacje B2B */}
      <AnimateOnScroll>
        <ProjectCarousel items={b2b.items} heading={b2b.heading} />
      </AnimateOnScroll>

      {/* Contact */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
