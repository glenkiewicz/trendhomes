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

const page = MOCKUP_DATA.pages.produktyDrzwiWewnetrzne;

function FeatureAccordion({
  feature,
}: {
  feature: { name: string; description: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <h4 className="text-base font-bold text-dark md:text-lg">
          {feature.name}
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
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DrzwiWewnetrznePage() {
  const [activeTab, setActiveTab] = useState(0);

  const activeManufacturer = page.manufacturers.items[activeTab];

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

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
            {(page.hero.heading as readonly string[]).map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
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

      {/* For Whom */}
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

      {/* Why Trendhomes */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.whyTrendhomes.heading}
            />

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
              {page.whyTrendhomes.items.map((item, i) => (
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
                {MOCKUP_DATA.global.cta.umowPomiar48h}
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Manufacturers Tabs Section */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading
              lines={page.manufacturers.heading}
            />
          </AnimateOnScroll>

          {/* Manufacturer Tabs */}
          <AnimateOnScroll delay={100}>
            <div className="mt-8 overflow-x-auto scrollbar-hide md:mt-12">
              <div className="flex min-w-max items-center gap-1 bg-card px-2.5 py-2.5 md:gap-2 md:px-3">
                {page.manufacturers.items.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveTab(i)}
                    className={`whitespace-nowrap rounded-sm px-4 py-2.5 text-sm transition-all duration-200 md:px-5 md:py-2.5.5 md:text-lg ${
                      activeTab === i
                        ? "bg-white font-semibold text-dark shadow-sm"
                        : "text-dark/50 hover:bg-white/60 hover:text-dark/80"
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Active Manufacturer Content */}
          <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="text-xl font-bold text-dark md:text-[26px]">
                  {activeManufacturer.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-dark/80 md:text-base">
                  {activeManufacturer.description}
                </p>
                <div className="mt-6">
                  <Link
                    href="/kontakt"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    {MOCKUP_DATA.global.cta.napisz}
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-base font-semibold text-dark/60 uppercase tracking-wide md:text-sm">
                  {page.manufacturers.featuresLabel}
                </h4>
                <div className="border-t border-dark/10">
                  {activeManufacturer.features.map((feature) => (
                    <FeatureAccordion key={feature.name} feature={feature} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.doorTypes.heading}
            />

            <ul className="mt-8 space-y-4 md:mt-12">
              {page.doorTypes.items.map((type, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-dark md:text-lg">
                    <span className="mt-1.5 block size-2.5 shrink-0 rounded-full bg-pink" />
                    {type}
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Montaz Steps */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={page.montaz.heading}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
              {page.montaz.steps.map((step, i) => (
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
        <section className="bg-section-light py-10 md:py-20">
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
