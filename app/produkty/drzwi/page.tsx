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

const manufacturers = [
  {
    id: "erkado",
    name: "Erkado",
    description:
      "Drzwi zewnętrzne Erkado dobrze sprawdzają się w domach jednorodzinnych i mieszkaniach, gdzie liczy się połączenie wyglądu z rozsądną ceną. W ofercie znajdziesz zarówno proste, klasyczne wzory, jak i bardziej nowoczesne skrzydła z przeszkleniami. Na etapie wyceny wybieramy kilka konkretnych modeli, które pasują do elewacji, koloru okien i bramy, zamiast przerzucać na Ciebie wybieranie z całego katalogu.",
    features: [
      {
        name: "Szeroki wybór kolorów i oklein",
        description:
          "Erkado oferuje szeroką gamę kolorów i oklein, dzięki czemu łatwo dopasować drzwi do elewacji, okien i bramy garażowej.",
      },
      {
        name: "Wersje z naświetlami bocznymi i górnymi",
        description:
          "Możliwość zamówienia drzwi z naświetlami bocznymi lub górnymi, co pozwala doświetlić wejście i optycznie powiększyć przestrzeń.",
      },
      {
        name: "Różne klasy wyposażenia pod kątem bezpieczeństwa",
        description:
          "Drzwi Erkado dostępne są w różnych klasach wyposażenia, co pozwala dobrać poziom bezpieczeństwa do potrzeb i budżetu.",
      },
    ],
  },
  {
    id: "setto",
    name: "Setto",
    description:
      "Setto to dobry kierunek dla inwestorów, którzy szukają drzwi zewnętrznych o nowocześniejszym wyglądzie, ale dalej w rozsądnym budżecie. Wzornictwo dobrze pasuje do prostych brył domów, popularnych projektów katalogowych i budynków modernizowanych.",
    features: [
      {
        name: "Różne warianty przeszkleń i listew ozdobnych",
        description:
          "Setto oferuje wiele wariantów przeszkleń i listew ozdobnych, dzięki czemu drzwi można dopasować do stylu budynku.",
      },
      {
        name: "Możliwość dopasowania klamek i pochwytów do stylu budynku",
        description:
          "Szeroki wybór klamek i pochwytów pozwala dopełnić wygląd drzwi i dopasować je do charakteru całej elewacji.",
      },
    ],
  },
  {
    id: "wegrzyn",
    name: "Węgrzyn",
    description:
      "Drzwi drewniane zewnętrzne Węgrzyn kierujemy głównie do klientów, którzy cenią solidny, bardziej tradycyjny charakter stolarki. Dobrze odnajdują się w domach o klasycznej architekturze, budynkach z dachem wielospadowym, elewacjami z cegły lub tynku strukturalnego.",
    features: [
      {
        name: "Mocniejszy, \u201Epełniejszy\u201D wygląd skrzydeł",
        description:
          "Drzwi Węgrzyn wyróżniają się solidną konstrukcją i pełnym, masywnym wyglądem, który dobrze komponuje się z tradycyjną architekturą.",
      },
      {
        name: "Dobre dopasowanie do tradycyjnej architektury i domów modernizowanych",
        description:
          "Wzornictwo i materiały idealnie pasują do domów o klasycznym charakterze oraz budynków poddawanych modernizacji.",
      },
    ],
  },
  {
    id: "doorsy",
    name: "Doorsy",
    description:
      "Doorsy to producent, którego drzwi zewnętrzne drewniane często wybieramy do nowoczesnych domów i bardziej wymagających wizualnie projektów. Charakterystyczne wzory, szerokie przeszklenia i dopracowane detale sprawiają, że samo wejście staje się ważnym elementem elewacji.",
    features: [
      {
        name: "Szeroka gama nowoczesnych wzorów",
        description:
          "Doorsy oferuje bogatą kolekcję nowoczesnych wzorów, które wyróżniają wejście do budynku i nadają mu indywidualny charakter.",
      },
      {
        name: "Opcje z dużymi pochwytami",
        description:
          "Możliwość wyposażenia drzwi w duże, efektowne pochwyty, które podkreślają nowoczesny styl i ułatwiają codzienne użytkowanie.",
      },
    ],
  },
  {
    id: "gerda",
    name: "Gerda",
    description:
      "Drzwi zewnętrzne Gerda polecamy szczególnie tam, gdzie priorytetem jest bezpieczeństwo i poczucie kontroli nad wejściem do budynku. To dobry wybór do mieszkań w blokach, domów w gęstej zabudowie oraz wszędzie tam, gdzie chcesz mieć wyższy standard zabezpieczeń.",
    features: [
      {
        name: "Modele z podwyższoną odpornością na włamanie",
        description:
          "Gerda oferuje drzwi o podwyższonej klasie antywłamaniowej, co zapewnia większe bezpieczeństwo domownikom.",
      },
      {
        name: "Możliwość dopasowania wyposażenia (zamki, wkładki, okucia)",
        description:
          "Szeroki wybór zamków, wkładek i okuć pozwala skonfigurować drzwi dokładnie pod indywidualne wymagania bezpieczeństwa.",
      },
    ],
  },
];

const whyItems = [
  {
    icon: "/images/icon-profile.svg",
    title: "Kilku producentów, jedno miejsce kontaktu",
    description:
      "Pracujemy na ofercie kilku marek, dzięki czemu możemy dobrać drzwi do konkretnej sytuacji, a nie wciskać jednego \u201Eulubionego\u201D katalogu.",
  },
  {
    icon: "/images/icon-measure.svg",
    title: "Dobór pod cały budynek, nie tylko pod otwór w ścianie",
    description:
      "Patrzymy na drzwi razem z oknami, roletami i bramą. Chodzi o to, żeby całość wyglądała spójnie i działała sensownie pod względem cieplnym.",
  },
  {
    icon: "/images/icon-helmet.svg",
    title: "Lokalna ekipa montażowa",
    description:
      "Przyjeżdżamy na pomiar, montujemy drzwi i wracamy, kiedy trzeba je wyregulować. Nie znikamy po odbiorze.",
  },
  {
    icon: "/images/icon-profile.svg",
    title: "Jasny zakres prac i odpowiedzialności",
    description:
      "Już w ofercie rozpisujemy, co dokładnie obejmuje montaż: demontaż starych drzwi, przygotowanie otworu, obróbki, wykończenie. Dzięki temu nie ma \u201Eukrytych\u201D pozycji.",
  },
];

const forWhom = [
  {
    label: "Dom jednorodzinny – nowy lub remontowany",
    text: "Dobieramy drzwi, które pasują do elewacji, okien i bramy, a przy tym spełniają wymagania cieplne i bezpieczeństwa. Ustalamy termin montażu tak, żeby nie blokować ekip wykończeniowych ani Twoich planów z przeprowadzką.",
  },
  {
    label: "Mieszkanie w bloku",
    text: "W mieszkaniach liczy się wygoda, akustyka i poczucie bezpieczeństwa. Proponujemy drzwi, które poprawią komfort na klatce schodowej, nie będą kłócić się z wytycznymi wspólnoty, a montaż postaramy się zamknąć w jednym dniu.",
  },
  {
    label: "Lokal usługowy / biuro",
    text: "Drzwi muszą dobrze wyglądać od ulicy, wytrzymać intensywne użytkowanie i ułatwiać klientom wejście do środka. Dobieramy rozwiązania z myślą o charakterze biznesu, godzinach pracy i ruchu klientów.",
  },
  {
    label: "Inwestor, który chce mieć święty spokój",
    text: "To opcja dla osób, które wolą powierzyć temat jednemu wykonawcy: od doboru modelu, przez montaż, po serwis. Ustalamy zakres, termin i po prostu dowozimy.",
  },
];

const montazSteps = [
  {
    number: "1",
    title: "Pomiar na miejscu",
  },
  {
    number: "2",
    title: "Oferta z jasno opisanym zakresem",
  },
  {
    number: "3",
    title: "Montaż w umówionym terminie",
  },
  {
    number: "4",
    title: "Regulacja i opieka po montażu",
  },
];

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
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h4 className="text-lg font-bold text-dark md:text-xl">
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
          <p className="pb-5 text-base leading-relaxed text-dark/80 md:text-lg">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DrzwiPage() {
  const [activeTab, setActiveTab] = useState(0);

  const activeManufacturer = manufacturers[activeTab];

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Drzwi zewnętrzne z montażem od Trendhomes"
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
            <span className="text-white">Drzwi</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Drzwi zewnętrzne
            <br />
            z montażem
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Drzwi zewnętrzne to pierwsza rzecz, z którą spotykają się
            domownicy, goście i klienci. W Trendhomes pomagamy dobrać drzwi do
            domu jednorodzinnego, mieszkania w bloku albo lokalu usługowego, a
            potem bierzemy na siebie pomiar, montaż i późniejszą regulację.
            Pracujemy na sprawdzonych producentach, dzięki czemu możesz dobrać
            wygląd, parametry i budżet do swojej inwestycji, a nie odwrotnie.
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

      {/* For Whom */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Dla kogo są nasze", "drzwi zewnętrzne"]}
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

      {/* Why Trendhomes */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={[
                "Dlaczego warto zamówić",
                "drzwi zewnętrzne w Trendhomes",
              ]}
            />

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
              {whyItems.map((item, i) => (
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
                    <h3 className="mt-6 text-xl font-bold text-dark md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-dark md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-10 flex justify-start md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[42px] text-base"
              >
                Umów pomiar w 48 h
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Manufacturers Tabs Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <AnimateOnScroll>
            <SectionHeading
              lines={[
                "Producenci drzwi zewnętrznych,",
                "z którymi pracujemy",
              ]}
            />
          </AnimateOnScroll>

          {/* Manufacturer Tabs */}
          <AnimateOnScroll delay={100}>
            <div className="mt-8 overflow-x-auto scrollbar-hide md:mt-12">
              <div className="flex min-w-max items-center gap-1 bg-card px-3 py-3 md:gap-2 md:px-4">
                {manufacturers.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveTab(i)}
                    className={`whitespace-nowrap rounded-sm px-5 py-3 text-base transition-all duration-200 md:px-6 md:py-3.5 md:text-xl ${
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
                <h3 className="text-2xl font-bold text-dark md:text-[32px]">
                  {activeManufacturer.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-dark/80 md:text-lg">
                  {activeManufacturer.description}
                </p>
                <div className="mt-6">
                  <Link
                    href="/kontakt"
                    className="btn-pink h-[52px] px-[42px] text-base"
                  >
                    Napisz do nas
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-dark/60 uppercase tracking-wide md:text-base">
                  Cechy wyróżniające
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

      {/* Montaz i Serwis */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={[
                "Montaż i serwis",
                "drzwi zewnętrznych",
              ]}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
              {montazSteps.map((step, i) => (
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
                Szukasz drzwi zewnętrznych do domu, mieszkania albo lokalu w
                Sanoku i okolicy? Przygotujemy dla Ciebie propozycje na bazie
                drzwi Erkado, Setto, Węgrzyn, Doorsy i Gerda, dopasowane do
                budynku, budżetu i terminu inwestycji.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[42px] text-base"
                >
                  Umów pomiar w 48 h
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
