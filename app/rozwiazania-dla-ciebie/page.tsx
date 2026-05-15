import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import BrandsSection from "../components/BrandsSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { MOCKUP_DATA } from "../lib/mockup-data";

const { hero, solutions, businessCards, businessHeading, pergola } =
  MOCKUP_DATA.pages.rozwiazania;
const { cta } = MOCKUP_DATA.global;

export default function RozwiazaniaPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

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
            <span className="text-white">{hero.breadcrumb[1]}</span>
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
              href="#kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              {cta.umowPomiar48h}
            </Link>
          </div>
        </div>
      </section>

      {/* Solution sections */}
      {solutions.map((solution, i) => (
        <div key={i}>
          <AnimateOnScroll>
            <section className="bg-white py-10 md:py-20">
              <div className="mx-auto max-w-[1440px] px-3 md:px-5">
                <div
                  className={`grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2 ${
                    !solution.imageRight ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={solution.imageRight ? "order-1" : "order-1 lg:order-2"}>
                    <SectionHeading lines={solution.heading} />
                    <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
                      {solution.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative h-[200px] overflow-hidden sm:h-[260px] md:h-[212px] ${
                      solution.imageRight ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.heading[0]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Pink CTA banner */}
          <AnimateOnScroll>
            <div className="bg-pink">
              <div className="mx-auto max-w-[1440px] px-3 py-5 md:px-5 md:py-7">
                <p className="text-center text-base font-normal text-white md:text-[26px]">
                  {solution.banner}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      ))}

      {/* Business solutions grid */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={businessHeading} />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {businessCards.map((card, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="group flex flex-col bg-card">
                    <div className="p-5 pb-0 md:p-8 md:pb-0">
                      <h3 className="text-lg font-bold leading-tight text-dark md:text-[26px] md:leading-[42px]">
                        {card.title}
                      </h3>
                    </div>
                    <div className="relative mt-6 h-[180px] w-full overflow-hidden md:mt-8">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Pergola section */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading lines={pergola.heading} />
                <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
                  {pergola.description}
                </p>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[500px]">
                <Image
                  src={pergola.image}
                  alt="Pergola ogrodowa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Pergola CTA banner */}
      <AnimateOnScroll>
        <div className="bg-pink">
          <div className="mx-auto max-w-[1440px] px-3 py-5 md:px-5 md:py-7">
            <p className="text-center text-base font-normal text-white md:text-[26px]">
              {pergola.banner}
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Pergola gallery */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={pergola.galleryHeading} />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {pergola.gallery.map((img, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="group relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[464px]">
                    <Image
                      src={img}
                      alt={`Pergola realizacja ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* About section */}
      <AnimateOnScroll>
        <BrandsSection />
      </AnimateOnScroll>

      <Footer />
    </>
  );
}
