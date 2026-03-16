"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import CleanAirSection from "../../components/CleanAirSection";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll";

const manufacturers = [
  {
    id: "salamander",
    name: "Salamander",
    description:
      "Salamander to wiodący producent profili okiennych PVC, którego systemy doskonale sprawdzają się tam, gdzie równie istotne jak parametry techniczne są estetyka oraz harmonijne dopasowanie do elewacji budynku. Profile tej marki często wybierane są do nowoczesnych domów jednorodzinnych oraz obiektów, w których kluczową rolę odgrywa efekt dużych, eleganckich przeszkleń. To rozwiązanie dla klientów ceniących nie tylko funkcjonalność i trwałość, ale także dbałość o detale i spójny wygląd całej bryły budynku.",
    cta: "Chcesz zobaczyć, jak okna Salamander wyglądają w realizacjach w Sanoku i okolicy? Zostaw maila, prześlemy Ci krótkie zestawienie.",
    systems: [
      {
        name: "System 76",
        description:
          "System 76 mm Salamander to opcja dla inwestycji, w których szukasz solidnego okna o dobrych parametrach w rozsądnym budżecie. Sprawdza się w mieszkaniach, domach modernizowanych oraz przy standardowych projektach nowych budynków. To bezpieczny wybór, jeśli chcesz poprawić komfort bez wchodzenia w najwyższą półkę systemów.",
      },
      {
        name: "System 82",
        description:
          "System 82 mm to krok wyżej pod względem izolacyjności i możliwości konfiguracji. Często stosujemy go w nowych domach, gdzie ważne jest połączenie energooszczędności z estetyką elewacji i stolarki. Dobrze współgra z roletami zewnętrznymi i pozostałymi elementami nowoczesnej architektury.",
      },
      {
        name: "System 92",
        description:
          "System 92 mm Salamander kierujemy do klientów, którzy planują budynek o bardzo wysokim standardzie cieplnym. Taki profil pozwala mocniej ograniczyć straty energii przez okna, co ma znaczenie przy rosnących kosztach ogrzewania. To rozwiązanie, które warto rozważyć w projektach, gdzie stolarka ma realnie \u201Epracować\u201D na bilans energetyczny domu.",
      },
    ],
  },
  {
    id: "rehau",
    name: "Rehau",
    description:
      "Rehau to jedna z marek, które najczęściej wybieramy przy domach jednorodzinnych i bardziej wymagających inwestycjach. Systemy tej firmy dobrze łączą parametry cieplne z solidnym wykonaniem profili, dzięki czemu sprawdzają się zarówno w standardowych projektach, jak i przy większych przeszkleniach. To dobry wybór, jeśli zależy Ci na spokojnym użytkowaniu przez wiele lat.",
    cta: "Zostaw maila, wyślemy Ci pełną ofertę okien PCV Rehau w systemach 76, 82 i 92 z przykładowymi konfiguracjami.",
    systems: [
      {
        name: "System SYNEGO",
        description:
          "System SYNEGO to propozycja skierowana do wymagających inwestorów, którzy oczekują wysokiej jakości, trwałości i realnych oszczędności energii. Przemyślana konstrukcja profili zapewnia doskonałą izolację termiczną oraz bardzo dobre właściwości akustyczne, spełniając jednocześnie aktualne i przyszłe standardy budownictwa energooszczędnego. Dodatkowym atutem jest potwierdzona certyfikatami odporność na włamanie, zwiększająca bezpieczeństwo użytkowników.",
      },
    ],
  },
  {
    id: "aluplast",
    name: "Aluplast",
    description:
      "Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym. Daje szerokie możliwości konfiguracji – od prostszych okien do mieszkań, po większe przeszklenia w domach. To dobry wybór, gdy zależy Ci na elastyczności i dopasowaniu do konkretnego budynku.",
    cta: "Zostaw maila, a wyślemy Ci porównanie systemów Aluplast 76, 82 i 92 z przykładowymi konfiguracjami okien.",
    systems: [
      {
        name: "Ideal 4000",
        description:
          "System 70 mm Aluplast dobrze sprawdza się przy wymianach okien w blokach oraz w standardowych domach. Jest kompromisem między ceną a parametrami, dzięki czemu często proponujemy go klientom, którzy chcą poprawić komfort cieplny bez mocnego podnoszenia kosztów inwestycji. To rozsądna baza dla wielu typowych realizacji.",
      },
      {
        name: "Ideal Neo",
        description:
          "System 76 mm daje lepsze możliwości izolacji cieplnej i akustycznej, co docenią szczególnie mieszkańcy domów przy ruchliwych ulicach lub w chłodniejszych lokalizacjach. Wybieramy go tam, gdzie stolarka ma realnie poprawić komfort codziennego użytkowania budynku. Sprawdza się w nowych domach i bardziej wymagających modernizacjach.",
      },
      {
        name: "Ideal 8000",
        description:
          "System 85 mm kierujemy do klientów, którzy chcą maksymalnie ograniczyć straty energii przez okna. Ma sens przy domach projektowanych z myślą o niskich kosztach eksploatacji w dłuższej perspektywie. To rozwiązanie, które warto rozważyć w inwestycjach z nowoczesnymi źródłami ogrzewania.",
      },
    ],
  },
  {
    id: "ekosun",
    name: "EkoSun",
    description:
      "Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku. To często rozwiązanie dla klientów, którzy chcą \u201Epo prostu mieć dobre okna\u201D, nie wchodząc w najwyższe widełki cenowe. Dobrze sprawdza się zarówno w domach, jak i mieszkaniach.",
    cta: "Napisz do nas, a dobierzemy system EkoSun (76, 82 albo 92) do Twojego domu lub mieszkania na podstawie krótkiego wywiadu.",
    systems: [
      {
        name: "EkoSun 70",
        description:
          "System 70 mm EkoSun to dobra baza dla wielu standardowych realizacji – od mieszkań po domy jednorodzinne. Pozwala poprawić komfort cieplny i akustyczny bez dużego obciążenia budżetu. To częsty wybór przy remontach, gdzie trzeba pogodzić zakres prac z możliwościami finansowymi.",
      },
      {
        name: "EkoSun 6",
        description:
          "System 81 mm celuje w inwestycje, w których chcesz mieć wyraźnie lepszą izolacyjność okien niż podstawowa. Dobrze współgra z nowoczesnymi instalacjami grzewczymi i rekuperacją, bo pomaga lepiej utrzymać ciepło wewnątrz. Polecamy go przy nowych domach i bardziej \u201Eświadomych\u201D remontach.",
      },
      {
        name: "EkoSun 7",
        description:
          "System 81 mm EkoSun stosujemy wtedy, gdy stolarka ma być jednym z filarów energooszczędności budynku. Większa głębokość profilu umożliwia zaawansowane konfiguracje, które przekładają się na mniejsze straty ciepła. To opcja do rozważenia, jeśli planujesz dom z wyższej półki pod względem standardu cieplnego.",
      },
    ],
  },
  {
    id: "gealan",
    name: "Gealan",
    description:
      "Systemy Gealan często wybieramy przy nowoczesnych projektach, w których pojawiają się większe przeszklenia i wyraźnie zarysowana architektura. To profile, które dobrze wypadają zarówno pod względem parametrów, jak i wizualnie. Sprawdzają się w domach, mieszkaniach oraz wybranych realizacjach w lokalach usługowych.",
    cta: "Jeśli interesują Cię okna Gealan i chcesz zobaczyć, który system pasuje do Twojej inwestycji, zostaw maila – przygotujemy wstępne propozycje.",
    systems: [
      {
        name: "S8000",
        description:
          "System 74 mm Gealan to uniwersalne rozwiązanie do wielu typów budynków. Dobrze spisuje się przy remontach oraz w standardowych nowych domach, gdzie chcesz poprawić komfort i wygląd okien. To rozsądna propozycja tam, gdzie liczy się porządny produkt bez konieczności wchodzenia na najwyższe poziomy cenowe.",
      },
      {
        name: "S9000",
        description:
          "System 82,5 mm kierujemy do inwestycji, w których oczekujesz bardzo dobrego balansu między parametrami cieplnymi, akustyką i designem. Często stosujemy go w nowoczesnych domach, gdzie duże przeszklenia mają być jednocześnie estetyczne i funkcjonalne. To dobre rozwiązanie dla osób, które myślą długoterminowo o komfortowym użytkowaniu budynku.",
      },
    ],
  },
];

const whyItems = [
  {
    icon: "/images/icon-profile.svg",
    title: "Pracujemy na sprawdzonych systemach profili",
    description:
      "Korzystamy z rozwiązań takich producentów jak Rehau, Salamander, Aluplast, EkoSun i Gealan w kilku głębokościach systemów (76, 82, 92). Dzięki temu możemy dobrać okno zarówno do standardowego remontu, jak i do bardziej wymagających projektów.",
  },
  {
    icon: "/images/icon-measure.svg",
    title: "Dobór pod konkretną sytuację, nie z katalogu",
    description:
      "Inaczej rozmawiamy z kimś, kto wchodzi do nowego domu, inaczej z kimś, kto wymienia okna w bloku, a jeszcze inaczej z właścicielem lokalu usługowego. Zawsze zaczynamy od krótkiego wywiadu i pomiaru.",
  },
  {
    icon: "/images/icon-helmet.svg",
    title: "Montaż i serwis lokalnej ekipy",
    description:
      "Nie sprzedajemy samych okien \u201Ena dostawę\u201D. Odpowiadamy za montaż, regulację i późniejszy serwis. Działamy lokalnie, więc w razie potrzeby łatwiej się z nami skontaktować.",
  },
  {
    icon: "/images/icon-profile.svg",
    title: "Jeden partner od okien i rolet",
    description:
      "Okna PVC łączymy od razu z roletami zewnętrznymi, dzięki czemu całość jest dobrze zgrana technicznie i terminowo.",
  },
];

const forWhom = [
  {
    label: "Budujesz nowy dom",
    text: "Potrzebujesz stolarki, która wpisze się w projekt, spełni wymagania cieplne i nie opóźni prac wykończeniowych. Dobieramy okna pod elewację, rolety i bramę, a termin montażu ustalamy tak, żeby nie blokować innych ekip.",
  },
  {
    label: "Remontujesz mieszkanie w bloku",
    text: "Przy wymianie 3–5 okien liczy się czas, porządek i spokój sąsiadów. Planujemy prace tak, żeby zamknąć montaż w 1 dzień, zabezpieczyć mieszkanie i klatkę schodową, a jak trzeba, to wywieźć stare okna i odpady po montażu.",
  },
  {
    label: "Odświeżasz dom jednorodzinny",
    text: "Przy remoncie domu zwykle wchodzą w grę okna, drzwi i czasem brama. Pomagamy ułożyć to w sensowny etap prac, tak żeby dało się normalnie funkcjonować w zamieszkałym domu.",
  },
  {
    label: "Prowadzisz biznes lub lokal usługowy",
    text: "W lokalach ważne są parametry, przepisy i termin otwarcia. Dobieramy okna PVC pod wymagania budynku i charakter działalności, a montaż planujemy tak, żeby ograniczyć przerwy w pracy.",
  },
];

function SystemAccordion({
  system,
}: {
  system: { name: string; description: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <h4 className="text-base font-bold text-dark md:text-lg">
          {system.name}
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
            {system.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OknaPage() {
  const [activeTab, setActiveTab] = useState(0);

  const activeManufacturer = manufacturers[activeTab];

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/okna-hero.png"
          alt="Okna PVC od Trendhomes"
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
            <span className="text-white">Okna PVC</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            Okna PVC
            <br />
            od Trendhomes
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            Wymieniamy i montujemy okna PVC w domach jednorodzinnych, mieszkaniach
            w blokach, lokalach usługowych, czy na inwestycjach deweloperskich w
            Sanoku i okolicy. Dobieramy system profili do projektu, budżetu i
            tego, jak naprawdę korzystasz z domu czy mieszkania, a potem dowozimy
            montaż w umówionym terminie.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              Umów pomiar w 48 h
            </Link>
          </div>
        </div>
      </section>

      {/* Systems Section with Tabs */}
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <AnimateOnScroll>
            <SectionHeading
              lines={["Systemy okien PVC,", "na których pracujemy"]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="mt-6 max-w-[900px] text-sm leading-relaxed text-dark md:text-lg">
              Pracujemy na systemach profili kilku sprawdzonych producentów. Każdy
              z nich oferuje różne głębokości systemów – od 54 mm aż do
              120 mm – co pozwala dobrać okno do standardu budynku, budżetu oraz
              oczekiwań dotyczących energooszczędności. Na tej podstawie
              dobieramy konkretne rozwiązanie do Twojej inwestycji – inny system
              polecimy do mieszkania w bloku, a inny do nowego domu z pompą
              ciepła.
            </p>
          </AnimateOnScroll>

          {/* Manufacturer Tabs */}
          <AnimateOnScroll delay={200}>
            <div className="mt-8 overflow-x-auto scrollbar-hide md:mt-12">
              <div className="flex min-w-max items-center gap-1 bg-card px-2.5 py-2.5 md:gap-2 md:px-3">
                {manufacturers.map((m, i) => (
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
                <div className="mt-6 rounded-sm bg-section-light p-4 text-sm leading-relaxed text-dark/80 md:p-5 md:text-base">
                  {activeManufacturer.cta}
                </div>
                <div className="mt-6">
                  <Link
                    href="/kontakt"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    Napisz do nas
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-base font-semibold text-dark/60 uppercase tracking-wide md:text-sm">
                  Dostępne systemy
                </h4>
                <div className="border-t border-dark/10">
                  {activeManufacturer.systems.map((system) => (
                    <SystemAccordion key={system.name} system={system} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trendhomes */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={["Dlaczego warto zamówić", "okna PVC w Trendhomes"]}
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
                Umów pomiar w 48 h
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Clean Air Banner */}
      <AnimateOnScroll>
        <CleanAirSection />
      </AnimateOnScroll>

      {/* For Whom */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={["Dla kogo są nasze", "okna PVC"]} />

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

      {/* Contact */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>

      <MapSection />
      <Footer />
    </>
  );
}
