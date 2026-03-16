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
    label: "Lokale usługowe i sklepy",
    text: "Drzwi aluminiowe wytrzymują intensywny ruch klientów, dobrze wyglądają od strony ulicy i pozwalają na duże przeszklenia, które eksponują wnętrze lokalu.",
  },
  {
    label: "Biura i budynki usługowe",
    text: "W budynkach biurowych liczy się stabilność, estetyka i możliwość integracji z systemami kontroli dostępu. Aluminium dobrze sprawdza się w takich zastosowaniach.",
  },
  {
    label: "Nowoczesne domy jednorodzinne",
    text: "Coraz więcej domów powstaje z dużymi przeszkleniami i prostą bryłą. Drzwi aluminiowe z wąskimi profilami idealnie pasują do takiej architektury i dobrze współgrają z oknami aluminiowymi.",
  },
  {
    label: "Wejścia narażone na trudniejsze warunki",
    text: "Tam, gdzie drzwi muszą wytrzymać wiatr, deszcz, częste otwieranie i zamykanie lub duże gabaryty, aluminium jest bardziej stabilne niż PCV.",
  },
];

const dlaczegoWarto = [
  {
    title: "Stabilność przy większych gabarytach",
    description:
      "Aluminiowe profile utrzymują sztywność nawet przy dużych wymiarach skrzydeł, co pozwala na realizację szerokich i wysokich drzwi bez ryzyka odkształceń.",
  },
  {
    title: "Odporność na intensywne użytkowanie",
    description:
      "Aluminium nie odkształca się, nie pęcznieje i nie wymaga malowania. Sprawdza się tam, gdzie drzwi otwiera się dziesiątki razy dziennie.",
  },
  {
    title: "Nowoczesny wygląd i wąskie profile",
    description:
      "Wąskie ramy aluminiowe maksymalizują powierzchnię przeszklenia i nadają drzwiom lekki, współczesny charakter, który dobrze komponuje się z nowoczesnymi elewacjami.",
  },
  {
    title: "Dopasowanie do reszty stolarki",
    description:
      "Drzwi aluminiowe można zestawić kolorystycznie i stylistycznie z oknami, fasadami i bramami, tworząc spójny wygląd całego budynku.",
  },
];

const zastosowania = [
  "drzwi aluminiowe do lokali usługowych, biur i gabinetów",
  "drzwi wejściowe aluminiowe do domów jednorodzinnych",
  "drzwi aluminiowe z dużymi przeszkleniami",
  "drzwi w zabudowach witrynowych i fasadach",
  "drzwi z przygotowaniem pod automatykę",
];

const processSteps = [
  { number: "1", title: "Rozpoznanie potrzeb i obiektu" },
  { number: "2", title: "Dobór systemu i wstępna wycena" },
  { number: "3", title: "Pomiar na miejscu" },
  { number: "4", title: "Produkcja i montaż" },
  { number: "5", title: "Odbiór i serwis" },
];

export default function DrzwiAluminiowePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Drzwi aluminiowe od Trendhomes"
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
              home
            </Link>
            <span>|</span>
            <span>Produkty</span>
            <span>|</span>
            <span className="text-white">Drzwi Aluminiowe</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            Drzwi aluminiowe
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            Drzwi aluminiowe wybiera się tam, gdzie liczy się wytrzymałość,
            stabilność konstrukcji i nowoczesny wygląd. Sprawdzają się
            w wejściach do lokali usługowych, biur, budynków użyteczności
            publicznej, a także w części nowoczesnych domów jednorodzinnych.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              Zapytaj o wycenę
            </Link>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={["Dla kogo są drzwi", "aluminiowe"]}
            />

            <div className="mt-8 md:mt-12">
              {forWhom.map((item, i) => (
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
                Skontaktuj się z Nami
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
              lines={["Dlaczego warto wybrać", "drzwi aluminiowe"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
              {dlaczegoWarto.map((item, i) => (
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
              lines={["Przykładowe", "zastosowania"]}
            />

            <div className="mt-8 md:mt-12">
              <ul className="space-y-4">
                {zastosowania.map((item, i) => (
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
              lines={["Jak wygląda", "proces realizacji"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:grid-cols-5 md:gap-10">
              {processSteps.map((step, i) => (
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
                Potrzebujesz drzwi aluminiowych do lokalu, biura albo
                nowoczesnego domu w Sanoku i okolicach? Dobierzemy rozwiązanie
                dopasowane do budynku, ruchu klientów i Twojego budżetu.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[34px] text-sm"
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
