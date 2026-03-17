import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { MOCKUP_DATA } from "../lib/mockup-data";

const { hero, about, howWeWork, whyTrendhomes, whereWeWork } =
  MOCKUP_DATA.pages.oNas;
const { cta } = MOCKUP_DATA.global;

const stepOpacities = ["", "opacity-80", "opacity-60"];

export default function ONasPage() {
  return (
    <>
      <TopBar />
      <Navbar />

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
            {hero.breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>|</span>}
                {i === 0 ? (
                  <Link
                    href="/"
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                ) : (
                  <span className="text-white">{item}</span>
                )}
              </span>
            ))}
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            {hero.titleLines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            {hero.description}
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

      {/* About section - Ludzie od stolarki */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading lines={about.heading} />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
                  {about.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <ul className="list-disc space-y-2 pl-5">
                    {about.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href="#kontakt"
                    className="btn-pink h-12 px-[34px] text-sm"
                  >
                    Poznaj nasz zespół
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[672px]">
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Jak pracujemy */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={howWeWork.heading} />
            <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
              {howWeWork.description}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
              {howWeWork.steps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="border-t-2 border-pink/30 pt-5">
                    <span
                      className={`text-3xl font-black text-pink ${stepOpacities[i] || ""}`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-light text-dark md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">
                      {step.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Dlaczego warto wybrać Trendhomes */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={whyTrendhomes.heading} />
            <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
              {whyTrendhomes.description}
            </p>

            <div className="mt-10 space-y-0 md:mt-14">
              {whyTrendhomes.team.map((member, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div
                    className={`grid grid-cols-1 gap-6 border-b border-dark/10 py-6 last:border-b-0 md:grid-cols-[1fr_342px] md:gap-10 md:py-8 ${
                      i === 1 ? "md:grid-cols-[342px_1fr]" : ""
                    }`}
                  >
                    <div
                      className={
                        i === 1 ? "order-2 md:order-2" : "order-2 md:order-1"
                      }
                    >
                      <h3 className="text-xl font-light text-dark md:text-3xl">
                        {member.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">
                        {member.text}
                      </p>
                    </div>
                    <div
                      className={`relative h-[220px] overflow-hidden sm:h-[284px] ${
                        i === 1 ? "order-1 md:order-1" : "order-1 md:order-2"
                      }`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:mt-14">
              <Link
                href="#kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                {cta.skontaktujSie}
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Zobacz gdzie działamy */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading lines={whereWeWork.heading} />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
                  {whereWeWork.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <ul className="list-disc space-y-2 pl-5">
                    {whereWeWork.listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p>{whereWeWork.additionalText}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href="#kontakt"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    {cta.umowPomiar48h}
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[574px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82954.3!2d22.1!3d49.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4b0f1e2b8c0f%3A0x3c4e7b8a4e8e1e0!2sSanok!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
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
