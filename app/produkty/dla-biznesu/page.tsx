"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import AnimateOnScroll from "../../components/AnimateOnScroll";

const forWhomItems = [
  "Właściciele lokali usługowych, sklepów, restauracji, gabinetów i biur",
  "Deweloperzy i wspólnoty mieszkaniowe",
  "Inwestorzy i zarządcy obiektów publicznych (szkoły, przychodnie, urzędy, baseny, kościoły)",
  "Architekci i biura projektowe",
  "Generalni wykonawcy",
];

const serviceCategories = [
  {
    title: "Lokale – wejścia, okna i drzwi do biznesu",
    content:
      "Drzwi wejściowe, przeszklenia, przegrody wewnętrzne – to elementy, które definiują charakter lokalu i wpływają na komfort użytkowania. Analizujemy przepływ klientów, dopasowujemy rozwiązania do rodzaju działalności i minimalizujemy czas przestoju w trakcie montażu. Dobieramy stolarkę tak, żeby spełniała wymagania techniczne i jednocześnie budowała wizerunek Twojego biznesu. Każde wejście, każde przeszklenie i każda przegroda są zaprojektowane z myślą o konkretnym obiekcie i sposobie jego użytkowania.",
  },
  {
    title: "Witryny – szkło, które sprzedaje",
    content:
      "Witryny sklepowe, przeszklenia wejść do galerii, fasady – to nie tylko element wizualny, ale też funkcjonalny. Uwzględniamy wymagania termiczne i akustyczne, dobieramy szkło o odpowiednich parametrach bezpieczeństwa i trwałości. Witryna ma przyciągać wzrok, ale też spełniać normy – od izolacyjności cieplnej, przez ochronę przed włamaniem, po odporność na warunki atmosferyczne. Projektujemy przeszklenia, które pracują na Twój biznes każdego dnia.",
  },
  {
    title: "Drzwi przeciwpożarowe – bezpieczeństwo i przepisy",
    content:
      "Dobór klasy ognioodporności (EI30, EI60, EI90), zabezpieczenie dróg ewakuacyjnych, przygotowanie dokumentacji i współpraca z rzeczoznawcą p.poż. – to obszar, w którym nie ma miejsca na kompromisy. Pomagamy spełnić wymagania przepisów, dostarczamy certyfikowaną stolarkę i koordynujemy montaż tak, żeby obiekt przeszedł odbiór bez uwag. Każde drzwi przeciwpożarowe dobieramy indywidualnie do obiektu, układu pomieszczeń i wymagań ochrony przeciwpożarowej.",
  },
  {
    title: "Fasady i większe przeszklenia",
    content:
      "Koncepcja przeszkleń, dobór systemów profili aluminiowych, koordynacja z innymi branżami – fasady to projekty, które wymagają doświadczenia i precyzji. Realizujemy fasady słupowo-ryglowe, strukturalne i półstrukturalne. Współpracujemy z architektami i konstruktorami, żeby przeszklenia były nie tylko efektowne, ale też spełniały wymagania statyczne, termiczne i akustyczne.",
  },
  {
    title: "Inne – trudne realizacje i nietypowe obiekty",
    content:
      "Budynki z historią, obiekty zabytkowe, baseny, szpitale, kościoły, bloki mieszkalne – każdy z tych obiektów ma specyficzne wymagania. W basenach liczy się odporność na wilgoć i chlor. W szpitalach – higiena, dostępność i przepisy sanitarne. W kościołach – estetyka i akustyka. W obiektach zabytkowych – zgodność z wytycznymi konserwatora. Podejmujemy się realizacji, których inni unikają.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Rozmowa i analiza obiektu",
    description:
      "Zaczynamy od poznania obiektu, potrzeb i wymagań. Omawiamy przeznaczenie budynku, przepisy, harmonogram i budżet.",
  },
  {
    number: "02",
    title: "Propozycja rozwiązań",
    description:
      "Przygotowujemy warianty rozwiązań dopasowane do obiektu – z uwzględnieniem systemów profili, szkła, okucia i wymagań technicznych.",
  },
  {
    number: "03",
    title: "Pomiar i doprecyzowanie detali",
    description:
      "Wykonujemy dokładne pomiary na obiekcie i precyzujemy szczegóły techniczne – kolorystykę, okucia, progi, uszczelnienia i wykończenia.",
  },
  {
    number: "04",
    title: "Produkcja i montaż",
    description:
      "Stolarka trafia do produkcji, a montaż planujemy w uzgodnionym terminie – z uwzględnieniem harmonogramu budowy i działalności lokalu.",
  },
  {
    number: "05",
    title: "Odbiór i dokumentacja",
    description:
      "Po montażu przeprowadzamy odbiór techniczny, przekazujemy dokumentację i instrukcje użytkowania. Zostajemy w kontakcie – serwis i regulacje w ramach gwarancji.",
  },
];

export default function DlaBiznesuPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg-3.jpg"
          alt="Stolarka dla biznesu i obiektów użyteczności publicznej"
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
            <span className="text-white">Dla biznesu</span>
          </nav>
          <h1 className="max-w-[760px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Stolarka dla biznesu
            <br />i obiektów użyteczności publicznej
          </h1>
          <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/90 sm:text-base md:mt-6 md:text-lg">
            W biznesie stolarka nie jest tylko &bdquo;oknem w ścianie&rdquo;. Ma
            przyciągać klientów, spełniać wymagania przepisów,
            współpracować z systemami przeciwpożarowymi i wytrzymać
            intensywne użytkowanie. W Trendhomes projektujemy i dostarczamy
            rozwiązania dla lokali usługowych, biur, sklepów, galerii
            handlowych, bloków mieszkalnych, basenów, budynków użyteczności
            publicznej, kościołów i szpitali.
          </p>
          <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-white/75 sm:text-base md:text-base">
            Pracujemy zarówno z właścicielami pojedynczych lokali, jak
            i z inwestorami oraz generalnymi wykonawcami. Od pierwszej koncepcji
            do odbioru technicznego masz po swojej stronie zespół, który
            rozumie biznes, przepisy i budowę.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
            >
              Umów pomiar w 48&nbsp;h
            </Link>
          </div>
        </div>
      </section>

      {/* ── Dla kogo jest ta oferta ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <AnimateOnScroll>
            <SectionHeading
              lines={["Dla kogo jest", "ta oferta"]}
            />
          </AnimateOnScroll>

          <ul className="mt-8 space-y-4 md:mt-12">
            {forWhomItems.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <li className="flex items-start gap-4 border-b border-dark/10 pb-4 last:border-b-0 last:pb-0">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-dark md:text-xl">
                    {item}
                  </p>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Usługi – Accordion ── */}
      <section className="bg-[#f7f5f3] py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <AnimateOnScroll>
            <SectionHeading
              lines={["Co robimy", "dla biznesu"]}
            />
          </AnimateOnScroll>

          <div className="mt-8 md:mt-12">
            {serviceCategories.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="border-b border-pink/30">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left md:py-6"
                  >
                    <span className="text-lg font-bold text-dark md:text-2xl">
                      {item.title}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`shrink-0 text-pink transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
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
                      openIndex === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-base leading-relaxed text-dark md:pb-6 md:text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jak wygląda współpraca ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <AnimateOnScroll>
            <SectionHeading
              lines={[
                "Jak wygląda współpraca",
                "przy stolarce dla biznesu",
              ]}
            />
          </AnimateOnScroll>

          <div className="mt-8 space-y-6 md:mt-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="flex flex-col">
                  <span className="text-[40px] font-bold leading-none text-pink md:text-[48px]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-dark md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-dark/80">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <AnimateOnScroll>
        <section className="bg-[#f7f5f3] py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 text-center md:px-6">
            <p className="mx-auto max-w-[720px] text-lg leading-relaxed text-dark md:text-2xl">
              Szukasz partnera do stolarki w lokalu, galerii, obiekcie
              usługowym albo budynku użyteczności publicznej? W Trendhomes
              łączymy doświadczenie z budów, znajomość systemów stolarki
              i wymagania przepisów.
            </p>
            <div className="mt-8 flex justify-center">
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

      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
