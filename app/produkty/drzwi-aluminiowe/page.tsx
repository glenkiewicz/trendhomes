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

const page = MOCKUP_DATA.pages.produktyDrzwiAluminiowe;

export default function DrzwiAluminiowePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
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
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
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

      {/* Dla kogo */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.forWhom.heading}
            />

            <div className="mt-8 md:mt-12">
              {page.forWhom.items.map((item, i) => (
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
                {MOCKUP_DATA.global.cta.skontaktujSie}
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Dlaczego warto */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.dlaczegoWarto.heading}
            />

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
              {page.dlaczegoWarto.items.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="rounded-sm bg-white p-5 md:p-6">
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

      {/* Przykładowe zastosowania */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.zastosowania.heading}
            />

            <div className="mt-8 md:mt-12">
              <ul className="space-y-4">
                {page.zastosowania.items.map((item, i) => (
                  <AnimateOnScroll key={i} delay={i * 60}>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-dark md:text-lg">
                      <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-pink" />
                      {item}
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Proces */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.processSteps.heading}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:grid-cols-5 md:gap-10">
              {page.processSteps.steps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex flex-col items-start">
                    <span className="flex size-[56px] items-center justify-center rounded-full bg-pink text-xl font-bold text-white">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-dark md:text-xl">
                      {step.title}
                    </h3>
                  </div>
                </AnimateOnScroll>
              ))}
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
                {page.cta.description}
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[34px] text-sm"
                >
                  {page.cta.ctaText}
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
