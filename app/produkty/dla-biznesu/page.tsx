"use client";

import { useState } from "react";
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

const PAGE = MOCKUP_DATA.pages.produktyDlaBiznesu;

export default function DlaBiznesuPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* -- Hero -- */}
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
          <h1 className="max-w-[760px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {PAGE.hero.heading[0]}
            <br />{PAGE.hero.heading[1]}
          </h1>
          <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/90 sm:text-sm md:mt-6 md:text-base">
            {PAGE.hero.description}
          </p>
          <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-white/75 sm:text-sm md:text-sm">
            {PAGE.hero.descriptionSecondary}
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

      {/* -- Dla kogo jest ta oferta -- */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading
              lines={[...PAGE.forWhom.heading]}
            />
          </AnimateOnScroll>

          <ul className="mt-8 space-y-4 md:mt-12">
            {PAGE.forWhom.items.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <li className="flex items-start gap-4 border-b border-dark/10 pb-3 last:border-b-0 last:pb-0">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-dark md:text-lg">
                    {item}
                  </p>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* -- Uslugi - Accordion -- */}
      <section className="bg-[#f7f5f3] py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading
              lines={[...PAGE.services.heading]}
            />
          </AnimateOnScroll>

          <div className="mt-8 md:mt-12">
            {PAGE.services.items.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="border-b border-pink/30">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left md:py-5"
                  >
                    <span className="text-base font-bold text-dark md:text-xl">
                      {item.title}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`shrink-0 text-pink transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
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
                      openIndex === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-sm leading-relaxed text-dark md:pb-5 md:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* -- Jak wyglada wspolpraca -- */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading
              lines={[...PAGE.processSteps.heading]}
            />
          </AnimateOnScroll>

          <div className="mt-8 space-y-6 md:mt-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {PAGE.processSteps.steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="flex flex-col">
                  <span className="text-[26px] font-bold leading-none text-pink md:text-[38px]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-dark md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark/80">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <AnimateOnScroll>
        <section className="bg-[#f7f5f3] py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 text-center md:px-5">
            <p className="mx-auto max-w-[720px] text-base leading-relaxed text-dark md:text-xl">
              {PAGE.cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {PAGE.cta.ctaText}
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
