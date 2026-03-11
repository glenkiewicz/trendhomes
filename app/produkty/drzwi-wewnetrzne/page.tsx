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
      "Drzwi wewnętrzne Erkado to szeroki wybór wzorów, oklein i kolorów, które łatwo dopasować do podłóg, ścian i mebli. W ofercie znajdziesz wersje pełne, łazienkowe i przeszklone, a do każdego modelu można dobrać pasującą klamkę i ościeżnicę. To marka, którą często proponujemy klientom szukającym solidnych drzwi w rozsądnym budżecie.",
    features: [
      {
        name: "Dużo oklein i kolorów",
        description:
          "Erkado oferuje szeroką gamę oklein i kolorów, dzięki czemu łatwo dopasować drzwi do podłóg, ścian i mebli w każdym wnętrzu.",
      },
      {
        name: "Wersje pełne, łazienkowe i przeszklone",
        description:
          "W ofercie znajdziesz modele pełne do sypialni, łazienkowe z odpowiednią wentylacją oraz przeszklone, które doświetlają wnętrza.",
      },
      {
        name: "Dopasowanie klamek do modelu drzwi",
        description:
          "Do każdego modelu Erkado można dobrać pasującą klamkę i ościeżnicę, żeby całość wyglądała spójnie.",
      },
    ],
  },
  {
    id: "voster",
    name: "Voster",
    description:
      "Voster to drzwi, które często wykorzystujemy w nowoczesnych wnętrzach. Charakteryzują się prostymi liniami, pionowymi lub poziomymi podziałami i dobrym wykończeniem powierzchni. Dobrze komponują się z minimalistycznymi aranżacjami, stylem skandynawskim i nowoczesnymi podłogami.",
    features: [
      {
        name: "Pionowe i poziome podziały",
        description:
          "Drzwi Voster wyróżniają się charakterystycznymi pionowymi lub poziomymi podziałami, które nadają im nowoczesny charakter.",
      },
      {
        name: "Styl nowoczesny i skandynawski",
        description:
          "Proste linie i dobre wykończenie sprawiają, że drzwi Voster świetnie pasują do minimalistycznych i skandynawskich aranżacji.",
      },
    ],
  },
  {
    id: "intenso",
    name: "Intenso",
    description:
      "Drzwi Intenso to propozycja dla osób, które oczekują najwyższej jakości wykończenia i trwałości. Marka oferuje praktyczne modele o prostych, eleganckich wzorach, które dobrze sprawdzają się zarówno w mieszkaniach, jak i domach jednorodzinnych.",
    features: [
      {
        name: "Praktyczne modele",
        description:
          "Intenso stawia na funkcjonalność i trwałość, oferując drzwi, które wytrzymują codzienne użytkowanie przez wiele lat.",
      },
      {
        name: "Proste, eleganckie wzory",
        description:
          "Minimalistyczne wzornictwo sprawia, że drzwi Intenso pasują do większości stylów wnętrz, od klasycznych po nowoczesne.",
      },
    ],
  },
  {
    id: "dre",
    name: "DRE",
    description:
      "DRE to marka, którą często polecamy klientom szukającym ciekawszego wyglądu drzwi wewnętrznych. W ofercie znajdziesz zarówno kolekcje klasyczne, jak i nowoczesne, z opcją ukrytych zawiasów i nietypowych przeszkleń. To dobry wybór, jeśli drzwi mają być widocznym elementem aranżacji.",
    features: [
      {
        name: "Kolekcje klasyczne i nowoczesne",
        description:
          "DRE oferuje zarówno klasyczne wzory z frezowaniami, jak i nowoczesne modele z gładkimi powierzchniami i przeszkleniami.",
      },
      {
        name: "Ukryte zawiasy",
        description:
          "Opcja ukrytych zawiasów sprawia, że drzwi wyglądają minimalistycznie i nowocześnie, bez widocznych elementów montażowych.",
      },
    ],
  },
];

const whyItems = [
  {
    icon: "/images/icon-profile.svg",
    title: "Kilku producentów, jeden wykonawca",
    description:
      "Pracujemy z Erkado, Voster, Intenso i DRE, dzięki czemu możemy dobrać drzwi do wnętrza, budżetu i stylu, a nie wciskać jednego katalogu.",
  },
  {
    icon: "/images/icon-measure.svg",
    title: "Patrzymy na całe wnętrze, nie tylko na pojedyncze skrzydło",
    description:
      "Dobieramy drzwi razem z podłogami, listwami i kolorystyką ścian, żeby całość wyglądała spójnie i nie trzeba było potem niczego poprawiać.",
  },
  {
    icon: "/images/icon-helmet.svg",
    title: "Pomoc przy „technicznych" decyzjach",
    description:
      "Ościeżnice regulowane czy stałe, kierunek otwierania, podcięcia wentylacyjne, przesuwki – pomagamy ogarnąć detale, żebyś nie musiał się w to wgryzać.",
  },
  {
    icon: "/images/icon-profile.svg",
    title: "Lokalny montaż i serwis",
    description:
      "Przyjeżdżamy z ekipą montażową, montujemy drzwi w umówionym terminie i wracamy, kiedy trzeba coś wyregulować. Nie znikamy po odbiorze.",
  },
];

const forWhom = [
  {
    label: "Nowy dom jednorodzinny",
    text: "Jeśli wykańczasz nowy dom, drzwi muszą zagrać z podłogami, listwami, kolorystyką ścian i stylem całego wnętrza. Pomagamy dobrać modele, ościeżnice i klamki tak, żeby całość wyglądała spójnie od samego początku.",
  },
  {
    label: "Remont mieszkania lub domu",
    text: "Przy remoncie często trzeba wpasować nowe drzwi w stare ściany, nierówne otwory i istniejące podłogi. Dobieramy ościeżnice regulowane i modele, które da się zamontować bez przerabiania połowy korytarza.",
  },
  {
    label: "Mieszkanie od dewelopera",
    text: "Jeśli odbierasz lokal „pod biały montaż", pomagamy szybko przejść od katalogu do konkretnych modeli, które pasują do metrażu, rozkładu i planowanej aranżacji.",
  },
  {
    label: "Biuro lub lokal usługowy",
    text: "W biurach i lokalach drzwi wewnętrzne muszą wytrzymać więcej otwierania, a czasem też spełniać dodatkowe wymagania akustyczne lub przeciwpożarowe. Dobieramy rozwiązania dopasowane do charakteru działalności.",
  },
];

const doorTypes = [
  "drzwi pokojowe pełne i z przeszkleniami",
  "drzwi łazienkowe z podcięciami i tulejami wentylacyjnymi",
  "drzwi do garderoby i pomieszczeń gospodarczych",
  "drzwi przesuwne na systemach naściennych i w kasecie",
  "drzwi z ościeżnicami stałymi i regulowanymi",
];

const montazSteps = [
  {
    number: "1",
    title: "Pomiar i weryfikacja otworów",
  },
  {
    number: "2",
    title: "Dobór modeli i ościeżnic",
  },
  {
    number: "3",
    title: "Montaż w umówionym terminie",
  },
  {
    number: "4",
    title: "Regulacja i ewentualne poprawki",
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

export default function DrzwiWewnetrznePage() {
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
          alt="Drzwi wewnętrzne z montażem od Trendhomes"
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
            <span className="text-white">Drzwi Wewnętrzne</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Drzwi wewnętrzne
            <br />
            z montażem
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Drzwi wewnętrzne mają trzymać klimat we wnętrzu, pasować do
            podłóg i ścian, a przy tym po prostu wygodnie działać na co
            dzień. W Trendhomes dobieramy drzwi do gotowych aranżacji i
            nowych projektów, pomagamy ogarnąć ościeżnice regulowane,
            kierunek otwierania, przesuwki i detale wykończeniowe. Na końcu
            przyjeżdża ekipa, montuje wszystko w umówionym terminie i
            zostawia mieszkanie w takim stanie, żeby dało się normalnie
            funkcjonować.
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
              lines={["Dla kogo są nasze", "drzwi wewnętrzne"]}
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
                "drzwi wewnętrzne w Trendhomes",
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
                "Producenci drzwi wewnętrznych,",
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

      {/* Door Types */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={[
                "Jakie rodzaje drzwi",
                "wewnętrznych montujemy",
              ]}
            />

            <ul className="mt-8 space-y-4 md:mt-12">
              {doorTypes.map((type, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-dark md:text-xl">
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
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={[
                "Jak wygląda montaż",
                "drzwi wewnętrznych",
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
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-base leading-relaxed text-dark md:text-xl">
                Wykańczasz dom albo remontujesz mieszkanie i potrzebujesz
                drzwi wewnętrznych z montażem? Dobierzemy modele z oferty
                Erkado, Voster, Intenso i DRE tak, żeby pasowały do Twojego
                wnętrza, planu prac i budżetu.
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
