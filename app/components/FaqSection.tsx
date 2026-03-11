"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqItems = [
  {
    question: "Czy zdążycie z montażem okien i drzwi przed przeprowadzką?",
    answer:
      "Terminy montażu ustalamy z wyprzedzeniem już na etapie wyceny i pomiaru. Bierzemy pod uwagę harmonogram innych ekip wykończeniowych i realne możliwości produkcji. W umowie wpisujemy konkretny termin montażu, dzięki czemu możesz dopiąć przeprowadzkę i kolejne etapy prac.",
  },
  {
    question:
      "Na jakim etapie budowy najlepiej montować okna i drzwi zewnętrzne?",
    answer:
      "Najlepszy moment to etap po zamknięciu stanu surowego otwartego, przed rozpoczęciem prac wykończeniowych. Okna chronią wnętrze przed warunkami atmosferycznymi i pozwalają kontynuować prace wewnątrz.",
  },
  {
    question:
      "Czy wymiana okien w mieszkaniu naprawdę może odbyć się w 1 dzień?",
    answer:
      "Tak – standardowa wymiana 3–4 okien w mieszkaniu trwa jeden dzień roboczy. Wieczorem możesz już normalnie korzystać z pomieszczeń.",
  },
  {
    question:
      "Jak wygląda kwestia kurzu i sprzątania po wymianie okien lub drzwi?",
    answer:
      "Zabezpieczamy strefę pracy folią, ograniczamy pylenie i po zakończeniu montażu sprzątamy po sobie. Dbamy o to, żeby uciążliwości były jak najmniejsze.",
  },
  {
    question: "Czy potrzebuję zgody wspólnoty na wymianę okien w bloku?",
    answer:
      "W większości przypadków wymiana okien na takie same lub zbliżone wizualnie nie wymaga zgody wspólnoty. Warto jednak sprawdzić regulamin i poinformować zarząd o planowanych pracach.",
  },
  {
    question:
      "Czy stolarka do lokalu usługowego musi spełniać specjalne wymagania?",
    answer:
      "Tak – w zależności od rodzaju działalności mogą obowiązywać przepisy ppoż., normy akustyczne lub wymagania związane z odbiorem technicznym. Dobieramy stolarkę zgodną z przepisami.",
  },
  {
    question:
      "Jak zorganizować montaż stolarki, żeby nie zatrzymać całkowicie pracy lokalu?",
    answer:
      "Planujemy montaż poza godzinami pracy lub etapami – tak, żeby ograniczyć przestój w biznesie do minimum.",
  },
  {
    question: "Czy wycena i pomiar są płatne?",
    answer:
      "Pomiar i wycena są bezpłatne. Przyjeżdżamy na miejsce inwestycji, wykonujemy dokładne pomiary i przygotowujemy szczegółową ofertę bez żadnych zobowiązań.",
  },
  {
    question:
      "Czy pod pergolę lub ogród zimowy potrzebny jest specjalny fundament?",
    answer:
      "To zależy od konstrukcji i podłoża. W wielu przypadkach wystarczy istniejąca nawierzchnia – oceniamy to na miejscu podczas pomiaru i doradzamy optymalne rozwiązanie.",
  },
  {
    question:
      "Czy z pergoli albo ogrodu zimowego można korzystać cały rok?",
    answer:
      "Pergole z ruchomymi lamelami i ogrzewaniem pozwalają na użytkowanie przez większość roku. Ogrody zimowe z odpowiednim przeszkleniem i ogrzewaniem sprawdzają się również zimą.",
  },
  {
    question: "Jak działa gwarancja i co obejmuje serwis po montażu?",
    answer:
      "Po zakończeniu prac nie znikamy. Zapewniamy gwarancję na produkty i montaż. Regulacje, drobne poprawki i serwis gwarancyjny – wystarczy telefon.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <SectionHeading lines={["Masz wątpliwości?", "Sprawdź FAQ"]} />

        {/* Accordion */}
        <div className="mx-auto mt-8 max-w-[954px] md:mt-12">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-pink/30">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left md:py-6"
              >
                <span className="text-lg text-dark md:text-2xl">
                  {item.question}
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
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href="#kontakt"
            className="btn-pink h-12 px-[42px] text-base"
          >
            Masz więcej pytań? Skontaktuj się
          </a>
        </div>
      </div>
    </section>
  );
}
