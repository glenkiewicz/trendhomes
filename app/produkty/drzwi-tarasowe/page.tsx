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
  "dla osób, które chcą mieć możliwie szerokie, wygodne wyjście na taras lub do ogrodu",
  "dla osób budujących dom z dużymi przeszkleniami od strony ogrodu",
  "dla tych, którzy chcą zminimalizować barierę między salonem a tarasem (niski próg, duża szyba)",
  "dla inwestorów stawiających na nowoczesną bryłę, gdzie taras i salon tworzą jedną przestrzeń",
];

const systemTypes = [
  {
    name: "Systemy podnoszono-przesuwne",
    description:
      "Dobre przy większych gabarytach. Skrzydło unosi się i przesuwa wzdłuż prowadnicy, co pozwala na uzyskanie dużych powierzchni przeszklenia i wygodne otwarcie nawet przy ciężkich pakietach szybowych.",
  },
  {
    name: "Systemy uchylno-przesuwne",
    description:
      "Stosowane przy mniejszych otworach i bardziej klasycznym układzie pomieszczeń. Skrzydło uchyla się do wewnątrz, a następnie przesuwa. Dobre rozwiązanie tam, gdzie nie ma potrzeby stosowania najszerszych przejść.",
  },
  {
    name: "Rozwiązania z niskim progiem",
    description:
      "Ułatwiają wyjście na taras, szczególnie dla dzieci, osób starszych i osób z ograniczoną mobilnością. Próg bezbarierowy minimalizuje barierę między wnętrzem a tarasem.",
  },
  {
    name: "Warianty jedno- i dwuskrzydłowe",
    description:
      "Różne układy otwierania dopasowane do szerokości otworu, sposobu użytkowania i tego, w którą stronę ma się przesuwać skrzydło.",
  },
];

const considerations = [
  "wymiary otworu i nośność nadproża",
  "połączenie drzwi z posadzką tarasu i poziomami w środku",
  "sposób użytkowania (częstotliwość otwierania, obecność dzieci, kierunki ruchu)",
  "ekspozycja na wiatr i deszcz",
  "budżet oraz oczekiwany efekt wizualny",
];

export default function DrzwiTarasowePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Drzwi tarasowe od Trendhomes"
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
            <span className="text-white">Drzwi tarasowe</span>
          </nav>
          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Drzwi tarasowe
            <br />
            przesuwne
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Drzwi tarasowe to dziś jeden z najważniejszych elementów domu. To
            przez nie wpada najwięcej światła i to one decydują, czy z salonu
            faktycznie korzystasz razem z tarasem, czy tylko patrzysz na niego
            przez szybę. W Trendhomes dobieramy systemy przesuwne tak, żeby
            pasowały do projektu domu, wielkości otworu, stylu elewacji i
            budżetu inwestora.
          </p>
          <p className="mt-3 max-w-[552px] text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            Pracujemy zarówno na rozwiązaniach z PCV, jak i aluminium. Dzięki
            temu możemy dobrać drzwi tarasowe do różnych domów – od klasycznych
            po nowoczesne, z dużymi przeszkleniami.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
            >
              Umów pomiar w 48 h
            </Link>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading lines={["Dla kogo są", "drzwi przesuwne"]} />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
              {forWhom.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="flex h-full items-start gap-3 bg-section-light p-5 md:p-6">
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-pink text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-dark md:text-lg">
                      {item}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Typy systemów */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={[
                "Typy systemów przesuwnych,",
                "które najczęściej stosujemy",
              ]}
            />
            <p className="mt-6 max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
              Przy każdym projekcie dobieramy system do: szerokości i wysokości
              planowanego przeszklenia, tego, w którą stronę ma się otwierać
              skrzydło, oraz tego, czy w salonie będzie miejsce na meble przy
              ścianach z drzwiami.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:gap-8">
              {systemTypes.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-dark/80 md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* PCV vs Aluminium */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* PCV */}
              <div>
                <SectionHeading lines={["Drzwi tarasowe", "przesuwne PCV"]} />
                <p className="mt-4 text-base leading-relaxed text-dark md:text-lg">
                  Drzwi przesuwne z PCV dobrze sprawdzają się w domach
                  jednorodzinnych, w których okna są również w systemie PCV,
                  ważna jest dobra izolacyjność cieplna przy rozsądnym budżecie,
                  a inwestorowi zależy na prostym, sprawdzonym rozwiązaniu.
                </p>
                <h4 className="mt-6 text-lg font-semibold text-dark">
                  Zalety drzwi tarasowych z PCV:
                </h4>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-dark/80 md:text-lg">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                    dobre parametry cieplne przy korzystnej cenie
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                    możliwość dopasowania kolorystyki do pozostałych okien (biele,
                    szarości, okleiny drewnopodobne)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                    łatwa pielęgnacja i odporność na codzienne użytkowanie
                  </li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-dark/70 md:text-lg">
                  Drzwi tarasowe z PCV są dobrym wyborem, jeśli budujesz dom
                  w klasycznym lub nowoczesnym stylu i całą stolarkę planujesz
                  w PCV, chcesz mieć wygodne wyjście na taras bez wchodzenia
                  w najwyższe półki cenowe, albo zależy Ci na ogarnięciu tematu
                  okien i drzwi tarasowych u jednego producenta systemów.
                </p>
              </div>

              {/* Aluminium */}
              <div>
                <SectionHeading
                  lines={["Drzwi tarasowe", "przesuwne aluminiowe"]}
                />
                <p className="mt-4 text-base leading-relaxed text-dark md:text-lg">
                  Drzwi aluminiowe polecamy tam, gdzie planujesz naprawdę duże
                  przeszklenia z wąskimi profilami, bryła domu jest bardzo
                  nowoczesna z dużą ilością szkła, a ważna jest maksymalna
                  stabilność konstrukcji i sztywność przy dużych wymiarach.
                </p>
                <h4 className="mt-6 text-lg font-semibold text-dark">
                  Zalety drzwi tarasowych aluminiowych:
                </h4>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-dark/80 md:text-lg">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                    możliwość tworzenia większych przeszkleń niż w PCV
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                    smuklejsze profile, które dają więcej szkła i światła
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-pink" />
                    wysoka sztywność konstrukcji i dobra współpraca z dużymi
                    przeszkleniami stałymi
                  </li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-dark/70 md:text-lg">
                  To dobry kierunek, jeśli masz projekt domu z dużymi oknami
                  tarasowymi na całą wysokość kondygnacji, zależy Ci na bardzo
                  nowoczesnym efekcie wizualnym (wąskie ramy, duże tafle szkła),
                  albo myślisz o spójnym systemie aluminiowym w całym domu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Na co patrzymy */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Na co patrzymy", "przy doborze drzwi tarasowych"]}
            />
            <div className="mt-8 md:mt-12">
              {considerations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-b border-dark/10 py-4 last:border-b-0 md:py-5"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-dark md:text-xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-base leading-relaxed text-dark md:text-xl">
                Planujesz duże drzwi tarasowe w nowym domu albo wymianę starego
                wyjścia na taras na system przesuwny? Pomożemy dobrać odpowiedni
                system PCV lub aluminium, który udźwignie gabaryt, wpisze się
                w projekt domu i będzie wygodny w codziennym użytkowaniu.
              </p>
              <p className="mt-4 text-base leading-relaxed text-dark/70 md:text-lg">
                Prześlij nam fragment projektu z zaznaczonym wyjściem na taras lub
                zdjęcia obecnego przeszklenia – przygotujemy propozycję drzwi
                przesuwnych z wyceną.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[42px] text-base"
                >
                  Skontaktuj się z Nami
                </Link>
              </div>
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
