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

const forWhom = [
  {
    label: "Adaptacje budynków z historią i obiektów przemysłowych",
    text: "Stalowe drzwi doskonale wpisują się w charakter kamienic, dawnych fabryk czy magazynów, gdzie ważne jest zachowanie klimatu budynku przy jednoczesnym spełnieniu współczesnych wymagań.",
  },
  {
    label: "Nowoczesne domy i mieszkania w stylu loft",
    text: "Loftowe drzwi przeszklone dzielą przestrzeń, nie zabierając światła. Sprawdzają się w salonach z antresolą, garderobach, domowych biurach i wszędzie tam, gdzie zależy Ci na industrialnym charakterze wnętrza.",
  },
  {
    label: "Biura, showroomy, lokale premium",
    text: "Stalowe konstrukcje nadają wnętrzom reprezentacyjny charakter i dobrze znoszą intensywne użytkowanie. Idealne do przestrzeni, które mają robić wrażenie na klientach i gościach.",
  },
  {
    label: "Inwestorzy i architekci szukający niestandardowych rozwiązań",
    text: "Jeśli standardowa stolarka nie spełnia wymagań projektu, drzwi stalowe pozwalają na realizację nietypowych gabarytów, kształtów i podziałów przeszkleń.",
  },
];

const realizacje = [
  "drzwi stalowe zewnętrzne do budynków usługowych",
  "drzwi stalowe wewnętrzne w ciągach komunikacyjnych",
  "drzwi loftowe do mieszkań i domów",
  "przeszklone zabudowy stalowe",
  "drzwi do pomieszczeń technicznych",
];

const processSteps = [
  { number: "1", title: "Rozmowa i koncepcja" },
  { number: "2", title: "Dobór systemu i wstępna wycena" },
  { number: "3", title: "Ustalenie szczegółów technicznych" },
  { number: "4", title: "Produkcja i montaż" },
  { number: "5", title: "Odbiór i ewentualne regulacje" },
];

export default function DrzwiStalowePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Drzwi stalowe i loftowe od Trendhomes"
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
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm uppercase text-white/80 md:text-base">
            <Link href="/" className="transition-colors hover:text-white">
              home
            </Link>
            <span>|</span>
            <span>Produkty</span>
            <span>|</span>
            <span className="text-white">Drzwi Stalowe</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Drzwi stalowe
            <br />
            i loftowe na wymiar
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Drzwi stalowe i loftowe to rozwiązania dla inwestorów, którym zależy
            na konkretnym efekcie wizualnym albo na wytrzymałej konstrukcji
            dopasowanej do budynku. W Trendhomes realizujemy takie projekty
            w oparciu o systemy stalowe Forster (drzwi zewnętrzne i wewnętrzne)
            oraz rozwiązania loftowe stosowane wewnątrz budynków, również we
            współpracy z firmą Furmaniak.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
            >
              Zapytaj o wycenę
            </Link>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Dla kogo są drzwi", "stalowe i loftowe"]}
            />

            <div className="mt-8 md:mt-12">
              {forWhom.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="grid grid-cols-1 gap-4 border-b border-dark/10 py-6 last:border-b-0 md:grid-cols-[240px_1fr] md:gap-8 md:py-8">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">
                      {item.label}
                    </h3>
                    <p className="text-base leading-relaxed text-dark md:text-2xl">
                      {item.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[42px] text-base"
              >
                Skontaktuj się z Nami
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Systemy */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Systemy, na których", "pracujemy"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
              <AnimateOnScroll delay={0}>
                <div className="rounded-sm bg-white p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-dark md:text-[32px]">
                    Forster
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-dark/80 md:text-lg">
                    Systemy stalowe Forster stosujemy zarówno w drzwiach
                    zewnętrznych, jak i wewnętrznych. To rozwiązania
                    zaprojektowane do konstrukcji o podwyższonych wymaganiach
                    użytkowych, wytrzymałościowych i estetycznych. Dobieramy
                    konkretny system dopiero po analizie projektu i warunków
                    montażu.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="rounded-sm bg-white p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-dark md:text-[32px]">
                    Furmaniak
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-dark/80 md:text-lg">
                    Rozwiązania loftowe firmy Furmaniak stosujemy wewnątrz
                    budynków. Sprawdzają się w mieszkaniach, domach i lokalach,
                    gdzie zależy na przeszklonych ścianach i drzwiach
                    w industrialnym stylu. Lekkie profile, duże tafle szkła
                    i spójny wygląd z resztą wnętrza.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Jakie realizacje wykonujemy */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Jakie realizacje", "wykonujemy"]}
            />

            <div className="mt-8 md:mt-12">
              <ul className="space-y-4">
                {realizacje.map((item, i) => (
                  <AnimateOnScroll key={i} delay={i * 60}>
                    <li className="flex items-start gap-3 text-base leading-relaxed text-dark md:text-xl">
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
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Jak wygląda", "proces realizacji"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:grid-cols-5 md:gap-10">
              {processSteps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex flex-col items-start">
                    <span className="flex size-[56px] items-center justify-center rounded-full bg-pink text-2xl font-bold text-white">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-dark md:text-2xl">
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
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-base leading-relaxed text-dark md:text-xl">
                Masz w głowie projekt drzwi stalowych lub loftowych do domu,
                mieszkania albo lokalu? Napisz do nas, dołącz rzut lub zdjęcia
                miejsca – przygotujemy indywidualną propozycję i wycenę.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[42px] text-base"
                >
                  Napisz do nas
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
