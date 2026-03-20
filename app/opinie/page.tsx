import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ReviewsSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { MOCKUP_DATA } from "../lib/mockup-data";

const opinie = MOCKUP_DATA.pages.opinie;
const cta = MOCKUP_DATA.global.cta;

export default function OpiniePage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[714px]">
        <Image
          src={opinie.hero.image}
          alt={opinie.hero.titleLines.join(" ")}
          fill
          sizes="100vw"
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
              {opinie.hero.breadcrumb[0]}
            </Link>
            <span>|</span>
            <span className="text-white">{opinie.hero.breadcrumb[1]}</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {opinie.hero.titleLines[0]}
            <br />
            {opinie.hero.titleLines[1]}
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            {opinie.hero.description}
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="#kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              {cta.skontaktujSie}
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews carousel */}
      <AnimateOnScroll>
        <ReviewsSection />
      </AnimateOnScroll>

      {/* B2B testimonials */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={opinie.b2b.heading}
            />

            <div className="mt-10 flex flex-col gap-12 md:mt-16 md:gap-16">
              {opinie.b2b.testimonials.map((item, i) => {
                const imageBlock = (
                  <div
                    key="img"
                    className="relative h-[260px] overflow-hidden sm:h-[320px] md:h-[389px]"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.name} ${item.role}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                );

                const textBlock = (
                  <div key="text" className="flex gap-6 p-3 md:p-5">
                    <div className="hidden w-px shrink-0 bg-pink md:block" />
                    <div className="flex flex-col gap-6">
                      <p className="text-sm leading-relaxed text-dark whitespace-pre-line md:text-lg">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="hidden h-px w-14 bg-pink md:block" />
                        <div>
                          <p className="text-base font-bold text-dark md:text-xl">
                            {item.name}
                          </p>
                          <p className="text-base font-bold text-dark md:text-xl">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <AnimateOnScroll
                    key={i}
                    delay={i * 100}
                    direction={i % 2 === 0 ? "left" : "right"}
                  >
                    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
                      {i % 2 === 0 ? (
                        <>
                          {imageBlock}
                          {textBlock}
                        </>
                      ) : (
                        <>
                          <div className="order-1 lg:order-2">{imageBlock}</div>
                          <div className="order-2 lg:order-1">{textBlock}</div>
                        </>
                      )}
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ */}
      <AnimateOnScroll>
        <FaqSection />
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
