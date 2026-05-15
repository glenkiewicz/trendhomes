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
import { MOCKUP_DATA } from "../../lib/mockup-data";

const pageData = MOCKUP_DATA.pages.produktyDrzwiTarasowe;

export default function DrzwiTarasowePage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src={pageData.hero.image}
          alt={pageData.hero.imageAlt}
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
              {pageData.hero.breadcrumbs[0]}
            </Link>
            <span>|</span>
            <span>{pageData.hero.breadcrumbs[1]}</span>
            <span>|</span>
            <span className="text-white">{pageData.hero.breadcrumbs[2]}</span>
          </nav>
          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {pageData.hero.heading[0]}
            <br />
            {pageData.hero.heading[1]}
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            {pageData.hero.description}
          </p>
          <p className="mt-3 max-w-[552px] text-sm leading-relaxed text-white/80 sm:text-sm md:text-base">
            {pageData.hero.descriptionSecondary}
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              {pageData.hero.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={pageData.forWhom.heading} />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {pageData.forWhom.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="flex h-full items-start gap-3 bg-section-light p-4 md:p-5">
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-pink text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-dark md:text-base">
                      {item}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Typy systemów */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={pageData.systemTypes.heading}
            />
            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              {pageData.systemTypes.description}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:gap-8">
              {pageData.systemTypes.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-white p-5 md:p-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark/80 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* PCV vs Aluminium */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* PCV */}
              <div>
                <SectionHeading lines={pageData.pcv.heading} />
                <p className="mt-4 text-sm leading-relaxed text-dark md:text-base">
                  {pageData.pcv.description}
                </p>
                <h4 className="mt-6 text-base font-semibold text-dark">
                  {pageData.pcv.advantagesLabel}
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-dark/80 md:text-base">
                  {pageData.pcv.advantages.map((adv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                      {adv}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-dark/70 md:text-base">
                  {pageData.pcv.summary}
                </p>
              </div>

              {/* Aluminium */}
              <div>
                <SectionHeading
                  lines={pageData.aluminium.heading}
                />
                <p className="mt-4 text-sm leading-relaxed text-dark md:text-base">
                  {pageData.aluminium.description}
                </p>
                <h4 className="mt-6 text-base font-semibold text-dark">
                  {pageData.aluminium.advantagesLabel}
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-dark/80 md:text-base">
                  {pageData.aluminium.advantages.map((adv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                      {adv}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-dark/70 md:text-base">
                  {pageData.aluminium.summary}
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Na co patrzymy */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={pageData.considerations.heading}
            />
            <div className="mt-8 md:mt-12">
              {pageData.considerations.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-b border-dark/10 py-3 last:border-b-0 md:py-4"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-dark md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-sm leading-relaxed text-dark md:text-lg">
                {pageData.cta.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-dark/70 md:text-base">
                {pageData.cta.descriptionSecondary}
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[34px] text-sm"
                >
                  {pageData.cta.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
