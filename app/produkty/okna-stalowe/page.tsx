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

const PAGE = MOCKUP_DATA.pages.produktyOknaStalowe;

export default function OknaStalowePage() {
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
            {PAGE.hero.heading[0]}
            <br />
            {PAGE.hero.heading[1]}
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

      {/* Zastosowanie na zewnatrz */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[...PAGE.zewnatrz.heading]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
                {PAGE.zewnatrz.description}
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Zastosowanie we wnetrzach */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[...PAGE.wnetrza.heading]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
                {PAGE.wnetrza.description}
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Systemy Forster */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[...PAGE.forster.heading]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
                {PAGE.forster.description}
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Czego potrzebujemy */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[...PAGE.wycena.heading]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
                {PAGE.wycena.description}
              </p>
            </div>

            <div className="mt-8 rounded-sm bg-white p-5 md:p-6">
              <p className="text-sm font-semibold text-dark md:text-lg">
                {PAGE.wycena.boxText}
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
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
            </div>

            <div className="mx-auto mt-12 max-w-[800px] text-center md:mt-16">
              <p className="text-sm leading-relaxed text-dark md:text-lg">
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
