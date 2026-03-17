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

const { hero, intro, targetAudience, services, process, partner } =
  MOCKUP_DATA.pages.stolarkaForBusiness;
const { cta } = MOCKUP_DATA.global;

const GAP_LG = 32;
const GAP_SM = 24;

function AudienceCarousel() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(GAP_LG);
  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, targetAudience.length - visibleCount);

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
    <section className="bg-white pb-10 md:pb-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-end justify-between">
          <p className="text-xl font-semibold text-dark md:text-[26px]">
            {intro.subheading}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Poprzedni"
              className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Następny"
              className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" />
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
            {targetAudience.map((item, i) => (
              <div
                key={i}
                className="group shrink-0 cursor-pointer overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="p-5 pb-0 md:p-8 md:pb-0">
                  <h3 className="text-[22px] font-bold leading-tight text-dark md:text-[26px]">
                    {item.title}
                  </h3>
                </div>
                <div className="relative mt-6 h-[160px] w-full overflow-hidden md:mt-8 md:h-[180px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
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

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof services.categories)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-dark/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left md:py-6"
      >
        <h3 className="text-xl font-bold text-dark md:text-[26px] md:leading-[42px]">
          {item.title}
        </h3>
        <span className="ml-4 flex shrink-0 items-center gap-2 text-sm text-dark">
          <span className="hidden sm:inline">
            {isOpen ? services.accordionLabels.open : services.accordionLabels.closed}
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M8 12L15 19L22 12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 md:pb-8">
            <p className="text-sm leading-relaxed text-dark md:text-lg">
              {item.intro}
            </p>

            {"details" in item && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-dark md:text-lg">
                  {services.detailsLabel}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark md:text-lg">
                  {item.details.map((d: string, i: number) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {"listTitle" in item && "list" in item && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-dark md:text-lg">
                  {item.listTitle as string}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark md:text-lg">
                  {(item.list as readonly string[]).map((l: string, i: number) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            )}

            {"considerTitle" in item && "considerations" in item && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-dark md:text-lg">
                  {item.considerTitle as string}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark md:text-lg">
                  {(item.considerations as readonly string[]).map((c: string, i: number) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.title === "Witryny" && (
              <div className="mt-8">
                <Link
                  href="/realizacje"
                  className="btn-pink h-[52px] px-[34px] text-sm"
                >
                  {services.vitrineCta}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StolarkaDlaBiznesuPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <TopBar />
      <Navbar />

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
            <Link href="/" className="transition-colors hover:text-white">
              {hero.breadcrumb[0]}
            </Link>
            <span>|</span>
            <span className="text-white">{hero.breadcrumb[1]}</span>
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

      {/* Trendhomes dla biznesu */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={intro.heading} />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-xl">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="font-semibold">{intro.subheading}</p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Target audience carousel */}
      <AudienceCarousel />

      {/* Stolarka w pełni dopasowana */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={services.heading} />

            <div className="mt-10 md:mt-14">
              {services.categories.map((item, i) => (
                <AccordionItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
              <div className="border-t border-dark/10" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Jak wygląda współpraca */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={process.heading} />

            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
              {process.steps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="border-t-2 border-pink/30 pt-5">
                    <span
                      className={`text-3xl font-black text-pink ${
                        i === 1 ? "opacity-80" : i === 2 ? "opacity-60" : ""
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-light text-dark md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">
                      {step.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Trendhomes - Twój partner w biznesie */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading lines={partner.heading} />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
                  {partner.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/kontakt"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    {cta.skontaktujSie}
                  </Link>
                </div>
              </div>
              <div className="relative h-[240px] overflow-hidden sm:h-[300px] lg:h-[389px]">
                <Image
                  src={partner.image.src}
                  alt={partner.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
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
