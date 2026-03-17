"use client";

import Image from "next/image";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ColorCarousel from "../../components/ColorCarousel";
import { MOCKUP_DATA } from "../../lib/mockup-data";
import { woodenSystems, woodenWindowColors } from "../../lib/product-systems";

const PAGE = MOCKUP_DATA.pages.produktyOknaDrewniane;

export default function OknaDrewnianePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src={PAGE.hero.image}
          alt={PAGE.hero.imageAlt}
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
              {PAGE.hero.breadcrumbs[0]}
            </Link>
            <span>|</span>
            <span>{PAGE.hero.breadcrumbs[1]}</span>
            <span>|</span>
            <span className="text-white">{PAGE.hero.breadcrumbs[2]}</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {PAGE.hero.heading}
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            {PAGE.hero.description}
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              {PAGE.hero.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Systems Section with Product Cards */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading lines={[...PAGE.systems.heading]} />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              {PAGE.systems.description}
            </p>
          </AnimateOnScroll>

          {/* Product cards grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-8">
            {woodenSystems.map((system) => (
              <AnimateOnScroll key={system.slug}>
                <Link
                  href={`/produkty/okna-drewniane/${system.slug}`}
                  className="group flex flex-col overflow-hidden bg-white shadow-[0_0_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                    <Image
                      src={system.image}
                      alt={system.name}
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
                        {system.seals} uszczelki, {system.layers} warstwy
                        drewna
                      </p>
                      <p className="mt-1 text-sm font-bold text-pink">
                        Uw {system.uw}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dostępne kolory */}
      <section className="bg-section-light py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading lines={["Dostępne kolory"]} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="mt-8 md:mt-12">
              <ColorCarousel colors={woodenWindowColors} />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Summary Section */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={[...PAGE.summary.heading]} />

            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              {PAGE.summary.description}
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-sm leading-relaxed text-dark md:text-lg">
                {PAGE.cta.description}
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[34px] text-sm"
                >
                  {PAGE.cta.ctaText}
                </Link>
              </div>

              <p className="mt-10 text-sm leading-relaxed text-dark md:text-lg">
                {PAGE.cta.descriptionSecondary}
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[34px] text-sm"
                >
                  {PAGE.cta.ctaTextSecondary}
                </Link>
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
