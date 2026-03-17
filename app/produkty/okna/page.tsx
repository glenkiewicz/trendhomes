"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import CleanAirSection from "../../components/CleanAirSection";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { pvcSystems } from "../../lib/product-systems";
import { MOCKUP_DATA } from "../../lib/mockup-data";

const { produktyOkna } = MOCKUP_DATA.pages;
const { cta } = MOCKUP_DATA.global;

function ProductsGrid() {
  const [active, setActive] = useState<string>(produktyOkna.manufacturerFilters[0]);

  const filtered =
    active === produktyOkna.manufacturerFilters[0]
      ? pvcSystems
      : pvcSystems.filter((s) => s.manufacturer === active);

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <AnimateOnScroll>
          <SectionHeading lines={produktyOkna.productsHeading} />
        </AnimateOnScroll>

        {/* Manufacturer filter */}
        <AnimateOnScroll delay={100}>
          <div className="mt-8 bg-gray-200/50 md:mt-12">
            <div className="flex items-center gap-2 overflow-x-auto px-3 py-4 md:gap-6 md:px-5 md:py-5">
              {produktyOkna.manufacturerFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm transition-colors md:text-lg lg:text-xl ${
                    active === cat
                      ? "font-bold text-dark"
                      : "text-dark/60 hover:text-dark"
                  }`}
                >
                  <span
                    className={`flex size-4 shrink-0 items-center justify-center border transition-colors ${
                      active === cat
                        ? "border-pink bg-pink"
                        : "border-dark/30"
                    }`}
                  >
                    {active === cat && (
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 3.5L3.5 6L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Product cards grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-8">
          {filtered.map((system) => (
            <AnimateOnScroll key={system.slug}>
              <Link
                href={`/produkty/okna/${system.slug}`}
                className="group flex flex-col overflow-hidden bg-white shadow-[0_0_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={system.image}
                    alt={system.fullName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-dark md:text-2xl">
                    {system.name}
                  </h3>
                  <div className="mt-3 border-t border-dark/10 pt-3">
                    <p className="text-sm text-dark">
                      Głębokość zabudowy: {system.depth}
                    </p>
                    <p className="mt-1 text-sm text-dark">
                      Szklenie pakietami o szerokości {system.glazing}
                    </p>
                    <p className="mt-1 text-sm text-dark">
                      {system.seals} uszczelki, {system.chambers} komór
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OknaPage() {
  const { hero } = produktyOkna;

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
            <span>{hero.breadcrumb[1]}</span>
            <span>|</span>
            <span className="text-white">{hero.breadcrumb[2]}</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
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

      {/* Products Section */}
      <ProductsGrid />

      {/* Why Trendhomes */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={produktyOkna.why.heading}
            />

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
              {produktyOkna.why.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex flex-col">
                    <div className="relative size-[80px] md:size-[100px]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-dark md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark md:text-base">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-10 flex justify-start md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {cta.umowPomiar48h}
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Clean Air Banner */}
      <AnimateOnScroll>
        <CleanAirSection />
      </AnimateOnScroll>

      {/* For Whom */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={produktyOkna.forWhom.heading} />

            <div className="mt-8 md:mt-12">
              {produktyOkna.forWhom.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="grid grid-cols-1 gap-4 border-b border-dark/10 py-5 last:border-b-0 md:grid-cols-[240px_1fr] md:gap-8 md:py-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-dark md:text-xl">
                      {item.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {cta.skontaktujSie}
              </Link>
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
