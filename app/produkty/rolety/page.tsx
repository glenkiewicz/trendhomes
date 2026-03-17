"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import { MOCKUP_DATA } from "../../lib/mockup-data";

const pageData = MOCKUP_DATA.pages.produktyRolety;

function AccordionItem({
  item,
}: {
  item: { name: string; description: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <h4 className="text-base font-bold text-dark md:text-lg">
          {item.name}
        </h4>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 5L7 9L11 5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-dark/80 md:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RoletyPage() {
  return (
    <>
      <TopBar />
      <Navbar />

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
          <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            {pageData.hero.description}
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
            <SectionHeading
              lines={pageData.forWhom.heading}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-8">
              {pageData.forWhom.cards.map((card, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-sm bg-section-light p-5 md:p-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark/80 md:text-base">
                      {card.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Rolety zewnętrzne */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={pageData.zewnetrzne.heading}
            />
            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              {pageData.zewnetrzne.description}
            </p>

            <div className="mt-8 md:mt-12">
              <div className="border-t border-dark/10">
                {pageData.zewnetrzne.items.map((item) => (
                  <AccordionItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-start md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {pageData.zewnetrzne.ctaText}
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Rolety wewnętrzne */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={pageData.wewnetrzne.heading}
            />
            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              {pageData.wewnetrzne.description}
            </p>

            <div className="mt-8 md:mt-12">
              <div className="border-t border-dark/10">
                {pageData.wewnetrzne.items.map((item) => (
                  <AccordionItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-start md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {pageData.wewnetrzne.ctaText}
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Dobór i montaż rolet wewnętrznych */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={pageData.dobor.heading}
            />
            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              {pageData.dobor.description}
            </p>

            <div className="mt-8 md:mt-12">
              {pageData.dobor.details.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="grid grid-cols-1 gap-4 border-b border-dark/10 py-5 last:border-b-0 md:grid-cols-[280px_1fr] md:gap-8 md:py-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-dark md:text-lg">
                      {item.text}
                    </p>
                  </div>
                </AnimateOnScroll>
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
              <h2 className="text-xl font-bold text-dark md:text-[29px] md:leading-[1.2]">
                {pageData.cta.heading}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-dark/80 md:text-lg">
                {pageData.cta.description}
              </p>
              <div className="mt-8 flex justify-center">
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

      {/* Contact & Map */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
