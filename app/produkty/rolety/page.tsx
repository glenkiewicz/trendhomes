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

const forWhomCards = [
  {
    title: "Budujesz nowy dom",
    text: "Dla osób budujących nowy dom i chcących od razu przewidzieć osłony okienne razem z oknami.",
  },
  {
    title: "Remontujesz mieszkanie",
    text: "Dla tych, którzy remontują mieszkanie w bloku i chcą poprawić komfort oraz prywatność.",
  },
  {
    title: "Masz dom jednorodzinny",
    text: "Dla właścicieli domów jednorodzinnych, którzy szukają lepszej ochrony przed słońcem, hałasem i włamaniem.",
  },
  {
    title: "Prowadzisz lokal lub biuro",
    text: "Dla właścicieli lokali usługowych i biur, w których trzeba pogodzić komfort klientów z pracą personelu przy ekranach.",
  },
];

const zewnetrzneItems = [
  {
    name: "Rolety adaptacyjne",
    description:
      "Rolety adaptacyjne to rozwiązanie, które najczęściej stosujemy przy: istniejących domach i mieszkaniach, gdzie elewacja jest już gotowa; remontach, kiedy nie ma możliwości ingerencji w ocieplenie; sytuacjach, w których inwestor chce założyć rolety „po fakcie”, bez dużych prac budowlanych. Kaseta montowana jest na zewnątrz okna, a prowadnice przykręca się do ościeżnicy lub ściany. Dobór koloru kasety i prowadnic do elewacji pozwala zachować estetykę budynku. Sterowanie może być ręczne (pasek, sprężyna) lub elektryczne (napęd rurowy z pilotem, integracja ze smart home).",
  },
  {
    name: "Rolety podtynkowe",
    description:
      "Rolety podtynkowe przewiduje się zazwyczaj na etapie projektu domu lub większej przebudowy. Kaseta schowana jest w warstwie ocieplenia, dzięki czemu po wykończeniu elewacji roleta jest praktycznie niewidoczna. Współpracujemy z ekipą budowlaną inwestora — ustalamy wymiary kasety, położenie prowadnic i trasowanie przewodów elektrycznych jeszcze przed tynkowaniem. To rozwiązanie wymaga planowania z wyprzedzeniem, ale efekt końcowy jest najbardziej estetyczny i trwały.",
  },
];

const wewnetrzneItems = [
  {
    name: "Rolety dzień-noc",
    description:
      "Rolety dzień-noc składają się z naprzemiennych pasów tkaniny przezroczystej i nieprzezroczystej. Przesuwając pasy względem siebie, płynnie regulujesz ilość światła wpadającego do pomieszczenia — od pełnego prześwitu, przez delikatne filtrowanie, aż po znaczące zaciemnienie. Dobrze sprawdzają się w salonach, sypialniach i kuchniach, gdzie natężenie światła zmienia się w ciągu dnia.",
  },
  {
    name: "Plisy okienne",
    description:
      "Plisy to tkanina złożona w harmonijkę, którą można przesuwać zarówno od góry, jak i od dołu. Dzięki temu zasłonisz dolną część okna, pozostawiając światło u góry — lub odwrotnie. Plisy są szczególnie popularne na oknach o niestandardowych kształtach: trójkątnych, trapezowych czy półokrągłych.",
  },
  {
    name: "Żaluzje drewniane",
    description:
      "Żaluzje drewniane (tzw. żaluzje bambusowe lub baswoodowe) nadają wnętrzu ciepły, naturalny charakter. Lamele o szerokości 25, 35 lub 50 mm można obracać, regulując ilość światła. Dobrze komponują się z wnętrzami w stylu skandynawskim, klasycznym i rustykalnym. Montujemy je na ramie okna, w świetle ościeżnicy lub na ścianie.",
  },
  {
    name: "Rolety na okna dachowe",
    description:
      "Okna dachowe wymagają dedykowanych systemów rolet, dopasowanych do kąta nachylenia i sposobu otwierania. Oferujemy rolety zaciemniające, plisy i markizy zewnętrzne na okna dachowe wiodących producentów. Każdy system dobieramy pod konkretny model okna i warunki montażu na poddaszu.",
  },
  {
    name: "Rolety blackout",
    description:
      "Rolety o podwyższonym stopniu zaciemnienia (blackout) blokują praktycznie 100% światła. Stosuje się je przede wszystkim w sypialniach, pokojach dziecięcych, salach konferencyjnych i pomieszczeniach, w których pracuje się przy projektorach. Dostępne są w systemach kasetowych z prowadnicami, które eliminują przenikanie światła po bokach tkaniny.",
  },
];

const doborDetails = [
  {
    label: "Sposób otwierania okna",
    text: "Okno rozwierno-uchylne, przesuwne czy stałe — każdy typ wymaga innego sposobu montażu rolety, żeby nie kolidować z klamką ani nie ograniczać otwierania.",
  },
  {
    label: "Rodzaj ramy okiennej",
    text: "Rama PVC, drewniana czy aluminiowa — od materiału i kształtu profilu zależy wybór uchwytu montażowego: klips, wkręt, taśma lub kaseta przyklejana.",
  },
  {
    label: "Głębokość ościeżnicy",
    text: "Przy płytkim wnęku może nie zmieścić się kaseta z roletą — wtedy proponujemy montaż na ścianie lub alternatywny system (np. plisy zamiast rolety kasetowej).",
  },
  {
    label: "Aranżacja wnętrza",
    text: "Kolor, faktura tkaniny i rodzaj kasety powinny współgrać ze stylem pomieszczenia. Pomagamy dobrać tkaninę z próbnika i podpowiadamy, co sprawdzi się w danym wnętrzu.",
  },
];

function AccordionItem({
  item,
}: {
  item: { name: string; description: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dark/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h4 className="text-lg font-bold text-dark md:text-xl">
          {item.name}
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
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RoletyPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg-2.jpg"
          alt="Rolety zewnętrzne i wewnętrzne z montażem"
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
            <span className="text-white">Rolety</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Rolety zewnętrzne
            <br />
            i wewnętrzne z montażem
          </h1>
          <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Rolety pełnią kilka ról naraz: chronią przed słońcem, poprawiają
            komfort cieplny, dają poczucie prywatności i bezpieczeństwa.
            W Trendhomes dobieramy osłony okienne do okien, elewacji i sposobu
            życia domowników, a potem bierzemy na siebie pomiar, montaż
            i regulację. Pracujemy zarówno na roletach zewnętrznych, jak
            i systemach wewnętrznych, dopasowanych do mieszkań, domów i lokali
            w Sanoku oraz okolicach Bieszczad.
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
            <SectionHeading
              lines={["Dla kogo są nasze", "rolety"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-8">
              {forWhomCards.map((card, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-sm bg-section-light p-6 md:p-8">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-dark/80 md:text-lg">
                      {card.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Rolety zewnętrzne */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Rolety", "zewnętrzne"]}
            />
            <p className="mt-6 max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
              Rolety zewnętrzne chronią przed słońcem, hałasem i próbami
              włamania. Dobieramy je pod typ budynku, sposób montażu
              i oczekiwania inwestora. Pracujemy na dwóch głównych systemach:
              adaptacyjnym i podtynkowym.
            </p>

            <div className="mt-8 md:mt-12">
              <div className="border-t border-dark/10">
                {zewnetrzneItems.map((item) => (
                  <AccordionItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-start md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[42px] text-base"
              >
                Zapytaj o rolety zewnętrzne
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Rolety wewnętrzne */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Rolety", "wewnętrzne"]}
            />
            <p className="mt-6 max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
              Rolety wewnętrzne pozwalają precyzyjnie sterować ilością
              światła, zapewniają prywatność i stanowią element aranżacji
              wnętrza. Oferujemy kilka systemów, które dobieramy pod typ okna,
              pomieszczenie i styl wnętrza.
            </p>

            <div className="mt-8 md:mt-12">
              <div className="border-t border-dark/10">
                {wewnetrzneItems.map((item) => (
                  <AccordionItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-start md:mt-14">
              <Link
                href="/kontakt"
                className="btn-pink h-[52px] px-[42px] text-base"
              >
                Zapytaj o rolety wewnętrzne
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Dobór i montaż rolet wewnętrznych */}
      <AnimateOnScroll>
        <section className="bg-section-light py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Dobór i montaż", "rolet wewnętrznych"]}
            />
            <p className="mt-6 max-w-[900px] text-base leading-relaxed text-dark md:text-xl">
              Przy doborze rolet wewnętrznych zwracamy uwagę na kilka
              elementów, które mają bezpośredni wpływ na wybór systemu
              i sposób montażu.
            </p>

            <div className="mt-8 md:mt-12">
              {doborDetails.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="grid grid-cols-1 gap-4 border-b border-dark/10 py-6 last:border-b-0 md:grid-cols-[280px_1fr] md:gap-8 md:py-8">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">
                      {item.label}
                    </h3>
                    <p className="text-base leading-relaxed text-dark md:text-xl">
                      {item.text}
                    </p>
                  </div>
                </AnimateOnScroll>
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
              <h2 className="text-2xl font-bold text-dark md:text-[36px] md:leading-[1.2]">
                Szukasz rolet do domu, mieszkania
                <br className="hidden md:block" /> albo lokalu w Sanoku?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-dark/80 md:text-xl">
                Szukasz rolet zewnętrznych lub wewnętrznych do domu, mieszkania
                albo lokalu w Sanoku i okolicach? Dobierzemy rozwiązanie
                dopasowane do Twoich okien, elewacji i sposobu użytkowania
                pomieszczeń, a potem zajmiemy się pomiarem i montażem.
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
          </div>
        </section>
      </AnimateOnScroll>

      {/* Contact & Map */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
