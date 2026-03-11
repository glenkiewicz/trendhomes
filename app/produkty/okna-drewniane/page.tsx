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

const systems = [
  {
    name: "Naturo 68",
    description:
      "Naturo 68 traktujemy jako solidny punkt startowy wśród okien drewnianych. Profil o głębokości 68 mm, wykonany z klejonego warstwowo drewna, dobrze sprawdza się w klasycznych domach i modernizowanych budynkach. To propozycja dla inwestorów, którzy chcą mieć drewnianą stolarkę o porządnych parametrach bez wchodzenia od razu w najwyższe systemy. Jeśli budynek nie wymaga ekstremalnej izolacyjności, a zależy Ci na naturalnym wyglądzie okien – Naturo 68 będzie rozsądnym wyborem na start.",
  },
  {
    name: "Naturo 68 ALU",
    description:
      "Naturo 68 ALU to ten sam drewniany rdzeń, ale z zewnętrzną nakładką aluminiową. Od środka wciąż widzisz naturalne drewno, a od strony elewacji pracuje aluminium, które nie wymaga malowania i lepiej znosi warunki atmosferyczne. To rozwiązanie dla klientów, którzy lubią drewno w środku, ale nie chcą się martwić o konserwację od zewnątrz. Sprawdza się szczególnie w budynkach narażonych na silne opady, nasłonecznienie lub tam, gdzie dostęp do okien od strony elewacji jest utrudniony.",
  },
  {
    name: "Naturo 80",
    description:
      "Naturo 80 jest rozwinięciem systemu 68 – z większą głębokością profilu i możliwością zastosowania szerszych pakietów szybowych. Dzięki temu okna lepiej izolują cieplnie i akustycznie, co ma znaczenie w domach z pompą ciepła lub w lokalizacjach, gdzie liczy się cisza. Wybieramy ten system, gdy budynek wymaga lepszych parametrów niż podstawowa klasa, ale inwestor nie potrzebuje jeszcze najgrubszego profilu 92 mm.",
  },
  {
    name: "Naturo 80 ALU",
    description:
      "Naturo 80 ALU łączy wyższy standard cieplny z ochroną drewna przez nakładkę aluminiową po stronie zewnętrznej. To kompromis między komfortem użytkowania drewna wewnątrz a trwałością i bezobsługowością od strony pogody. Polecamy go w domach, gdzie zależy na dobrym Uw okna, a jednocześnie inwestor nie chce wracać do tematu malowania ram co kilka lat.",
  },
  {
    name: "Naturo 92",
    description:
      "Naturo 92 to system z najwyższej półki w linii Naturo. Grubość profilu 92 mm pozwala na montaż potrójnych pakietów szybowych o bardzo dobrych parametrach cieplnych i akustycznych. To rozwiązanie kierujemy do domów energooszczędnych, budynków pasywnych lub inwestycji, w których stolarka ma realnie wpływać na bilans energetyczny. Jeśli projektujesz dom z myślą o niskich kosztach ogrzewania w dłuższej perspektywie – Naturo 92 będzie jednym z pierwszych systemów, które zaproponujemy.",
  },
  {
    name: "Esperia Life 74 ALU",
    description:
      "Esperia Life 74 ALU to system dla klientów, którzy oczekują od stolarki drewnianej bardziej wyrafinowanego wyglądu i smuklejszych profili. Konstrukcja drewniano-aluminiowa daje czystą, nowoczesną linię od zewnątrz, zachowując ciepło drewna w środku. Sprawdza się w projektach architektonicznych, gdzie liczy się proporcja i detal – np. w domach z dużymi przeszkleniami, minimalistycznymi elewacjami lub tam, gdzie stolarka ma współgrać z aluminiowymi elementami budynku.",
  },
  {
    name: "Esperia Life 80",
    description:
      "Esperia Life 80 to linia premium wśród drewnianych okien producenta. Głębszy profil pozwala na jeszcze lepsze parametry cieplne i akustyczne, a linia Esperia Life wyróżnia się smukłymi kształtami i dopracowanymi detalami. Ten system wybieramy do domów, w których stolarka ma być nie tylko funkcjonalna, ale też stanowić widoczny element architektury. Dobrze współgra z nowoczesnymi projektami, dużymi formatami okien i inwestycjami, gdzie jakość wykończenia ma kluczowe znaczenie.",
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
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h4 className="text-lg font-bold text-dark md:text-xl">
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
          <p className="pb-5 text-base leading-relaxed text-dark/80 md:text-lg">
            {system.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OknaDrewnianePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Okna drewniane od Trendhomes"
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
            <span className="text-white">Okna Drewniane</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Okna drewniane
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Okna drewniane są dla klientów, którzy chcą połączyć solidne
            parametry techniczne z naturalnym materiałem i bardziej
            \u201Eprzytulnym\u201D wyglądem stolarki. Dobrze sprawdzają się w domach
            jednorodzinnych, budynkach z historią oraz wszędzie tam, gdzie
            drewno pojawia się już w elewacji albo wewnątrz. Pracujemy na
            siedmiu systemach drewnianych jednego z największych producentów
            na rynku – seriach Naturo i Esperia Life.
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

      {/* Systems Section with Accordion */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <AnimateOnScroll>
            <SectionHeading
              lines={["Systemy okien drewnianych,", "na których pracujemy"]}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="mt-6 max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
              Pracujemy na siedmiu systemach drewnianych z linii Naturo
              i Esperia Life. Każdy z nich różni się głębokością profilu,
              parametrami cieplnymi i konstrukcją – od klasycznych ram
              drewnianych po rozwiązania drewniano-aluminiowe. Na podstawie
              projektu, standardu energetycznego domu i budżetu dobieramy
              konkretny system do Twojej inwestycji.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-8 md:mt-12">
              <div className="border-t border-dark/10">
                {systems.map((system) => (
                  <SystemAccordion key={system.name} system={system} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Summary Section */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Podsumowanie –", "okna drewniane Naturo i Esperia Life"]}
            />

            <p className="mt-6 max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
              Okna drewniane z linii Naturo i Esperia Life to rozwiązanie dla
              inwestorów, którzy chcą połączyć naturalny materiał, dobry
              standard techniczny i dopasowanie do charakteru budynku. Na
              podstawie projektu, standardu energetycznego domu i budżetu
              dobieramy 2–3 konkretne systemy, zamiast zasypywać Cię pełnym
              katalogiem.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-base leading-relaxed text-dark md:text-xl">
                Prześlij nam rzut domu lub kilka zdjęć budynku –
                przygotujemy propozycję drewnianych okien Naturo lub
                Esperia Life dopasowaną do Twojego projektu.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="btn-pink h-[52px] px-[42px] text-base"
                >
                  Wyślij zapytanie
                </Link>
              </div>

              <p className="mt-10 text-base leading-relaxed text-dark md:text-xl">
                Zadzwoń lub napisz, a podpowiemy, który z 7 systemów
                drewnianych będzie rozsądnym wyborem do Twojego domu.
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

      {/* Contact */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>

      <MapSection />
      <Footer />
    </>
  );
}
