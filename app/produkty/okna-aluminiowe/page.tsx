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

const page = MOCKUP_DATA.pages.produktyOknaAluminiowe;

export default function OknaAluminiowePage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* ── Hero ── */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src={page.hero.image}
          alt={page.hero.imageAlt}
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
              {page.hero.breadcrumbs[0]}
            </Link>
            <span>|</span>
            <span>{page.hero.breadcrumbs[1]}</span>
            <span>|</span>
            <span className="text-white">{page.hero.breadcrumbs[2]}</span>
          </nav>
          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {page.hero.heading}
          </h1>
          <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/90 sm:text-sm md:mt-6 md:text-base">
            {page.hero.description}
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              {page.hero.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Dla kogo są okna aluminiowe ── */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.forWhom.heading}
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:gap-8">
              {page.forWhom.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="flex h-full flex-col bg-section-light p-5 md:p-6">
                    <span className="mb-4 flex size-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.title}
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

      {/* ── Dlaczego czasem warto wybrać aluminium zamiast PVC ── */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.advantages.heading}
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:gap-8">
              {page.advantages.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-white p-5 md:p-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.title}
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

      {/* ── Jak pracujemy z oknami aluminiowymi ── */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.howWeWork.heading}
            />
            <div className="mt-8 max-w-[900px] md:mt-12">
              <p className="text-sm leading-relaxed text-dark md:text-lg">
                {page.howWeWork.description}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-dark/80 md:text-base">
                {page.howWeWork.descriptionSecondary}
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── CTA ── */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 text-center md:px-5">
            <p className="mx-auto max-w-[720px] text-base leading-relaxed text-dark md:text-xl">
              {page.cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {page.cta.ctaText}
              </Link>
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
