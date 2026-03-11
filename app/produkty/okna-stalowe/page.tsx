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

export default function OknaStalowePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Okna stalowe i loftowe od Trendhomes"
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
            <span className="text-white">Okna Stalowe</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Okna stalowe
            <br />
            i loftowe
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Stalowe okna i konstrukcje loftowe to rozwiązania, które traktujemy
            jako projekty indywidualne, a nie gotowe produkty z cennika.
            Wykorzystuje się je tam, gdzie stolarka ma być czymś więcej niż
            tylko &bdquo;ramą do szyby&rdquo; - jest ważnym elementem architektury,
            nawiązuje do przemysłowego charakteru budynku albo ma spełnić
            wymagania techniczne, których nie udźwigną standardowe systemy PCV
            czy aluminium.
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

      {/* Zastosowanie na zewnątrz */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Zastosowanie", "na zewnątrz"]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
                Na zewnątrz stal pojawia się między innymi w obiektach z historią,
                budynkach poprzemysłowych, adaptowanych magazynach czy bardziej
                wymagających projektach architektonicznych. Takie konstrukcje muszą
                połączyć trwałość, bezpieczeństwo i określony wygląd fasady.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Zastosowanie we wnętrzach */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Zastosowanie", "we wnętrzach"]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
                We wnętrzach stalowe profile wykorzystujemy do lekkich,
                przeszklonych ścian i drzwi w stylu loftowym - dzielą przestrzeń,
                ale nie zabierają światła. Dobrze sprawdzają się w salonach
                z antresolą, domowych biurach, garderobach czy mieszkaniach
                urządzonych w industrialnym klimacie.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Systemy Forster */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Systemy stalowe", "firmy Forster"]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
                Wszystkie tego typu realizacje wykonujemy w oparciu o systemy
                stalowe firmy Forster. To rozwiązania zaprojektowane specjalnie
                do drzwi, okien i przeszkleń o podwyższonych wymaganiach
                użytkowych. Dobieramy konkretny system i sposób wykonania dopiero
                po analizie projektu.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Czego potrzebujemy */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Czego potrzebujemy,", "żeby przygotować wycenę"]}
            />

            <div className="mt-8 md:mt-12">
              <p className="max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
                Żeby przygotować sensowną propozycję, potrzebujemy od Ciebie
                kilku informacji: krótkiego opisu pomysłu, podstawowych wymiarów
                oraz, jeśli to możliwe, rzutów lub zdjęć budynku czy wnętrza.
              </p>
            </div>

            <div className="mt-8 rounded-sm bg-white p-6 md:p-8">
              <p className="text-base font-semibold text-dark md:text-xl">
                Wycena indywidualna - prosimy o kontakt
              </p>
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
                Planujesz stalowe okna lub loftowe przeszklenia w domu,
                mieszkaniu albo lokalu? Napisz do nas i opisz swój projekt -
                przygotujemy indywidualną wycenę w oparciu o systemy Forster.
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

            <div className="mx-auto mt-12 max-w-[800px] text-center md:mt-16">
              <p className="text-base leading-relaxed text-dark md:text-xl">
                Nie wiesz, czy stolarka stalowa zmieści się w Twoim budżecie?
                Prześlij rzut lub zdjęcia wnętrza, a podpowiemy, jakie
                rozwiązania są realne do wykonania.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[42px] text-base"
                >
                  Prześlij zdjęcia lub rzut
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
