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
    label: "Dom z ogrodem i tarasem",
    text: "Masz taras, ale w praktyce korzystasz z niego tylko w kilka najcieplejszych tygodni w roku. Chcesz mieć miejsce, gdzie można spokojnie napić się kawy, zjeść kolację, posiedzieć z gośćmi, nawet kiedy słońce świeci zbyt mocno albo wieje.",
  },
  {
    label: "Dom z pięknym widokiem (Bieszczady, okolice Sanoka)",
    text: "Widok z okien aż się prosi, żeby go wykorzystać, ale pogoda nie zawsze współpracuje. Ogród zimowy pozwala siedzieć „w ogrodzie”, nawet kiedy jest chłodniej, a deszcz stuka w szyby.",
  },
  {
    label: "Rodziny z dziećmi",
    text: "Pergola lub ogród zimowy to bezpieczna przestrzeń do zabawy blisko domu, gdzie można rozłożyć zabawki, stolik czy wygodne fotele, bez wnoszenia wszystkiego do środka przy każdej zmianie pogody.",
  },
  {
    label: "Osoby, które lubią zapraszać gości",
    text: "Grille, spotkania, wieczory przy winie – dobrze zaprojektowana strefa zadaszonego tarasu robi ogromną różnicę. To po prostu dodatkowy salon na zewnątrz.",
  },
];

const solutions = [
  {
    title: "Pergole przyścienne nad tarasem",
    text: "Montowane bezpośrednio przy elewacji domu, tworzą naturalne przedłużenie salonu lub jadalni. Dzięki regulowanym lamelom lub tkaninie możesz kontrolować ilość światła i cienia, a odprowadzanie wody chroni przed deszczem. To najczęściej wybierane rozwiązanie przy domach jednorodzinnych w naszym regionie.",
  },
  {
    title: "Pergole wolnostojące w ogrodzie",
    text: "Dobre rozwiązanie, kiedy chcesz mieć dodatkową strefę wypoczynku trochę dalej od domu – na przykład przy jacuzzi, grillu lub nad stawem. Konstrukcja stoi niezależnie, więc nie ingeruje w elewację i można ją postawić w dowolnym miejscu ogrodu.",
  },
  {
    title: "Zabudowy tarasów – lekkie ogrody zimowe",
    text: "Przeszklone konstrukcje, które pozwalają korzystać z tarasu od wczesnej wiosny do późnej jesieni. Szyby osłaniają przed wiatrem i deszczem, a systemy wentylacji zapewniają komfort w cieplejsze dni. To świetna alternatywa dla tych, którzy chcą więcej niż pergolę, ale nie potrzebują pełnego ogrodu zimowego.",
  },
  {
    title: "Ogrody zimowe całoroczne",
    text: "Rozwiązania projektowane z myślą o użytkowaniu także zimą. Izolowane termicznie profile, szyby zespolone i ogrzewanie sprawiają, że ogród zimowy działa jak pełnoprawny pokój – możesz w nim pracować, czytać albo po prostu siedzieć z kawą, patrząc na zaśnieżony ogród.",
  },
];

const projectFactors = [
  "Położenie domu i kierunki świata",
  "Sposób, w jaki obecnie korzystasz z tarasu i ogrodu",
  "Różnice poziomów, istniejące schody, balustrady",
  "Bryłę domu i kolorystykę elewacji oraz stolarki",
  "Budżet i etap prac",
];

export default function PergolePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image src="/images/pergola-banner.jpg" alt="Pergole i ogrody zimowe od Trendhomes" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(27,27,27,0.72) 15%, rgba(27,27,27,0.58) 43%, rgba(107,101,98,0.24) 79%, rgba(255,240,229,0) 100%)" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm uppercase text-white/80 md:text-base">
            <Link href="/" className="transition-colors hover:text-white">home</Link><span>|</span><span>Produkty</span><span>|</span><span className="text-white">Pergole</span>
          </nav>
          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">Pergole i ogrody zimowe</h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Taras i ogród to dziś pełnoprawna część domu, a nie tylko miejsce na suszarkę do prania. Dobrze zaprojektowana pergola albo ogród zimowy pozwalają korzystać z tej przestrzeni dużo dłużej niż tylko w lipcu i sierpniu. W Trendhomes pomagamy zamienić zwykły taras w strefę wypoczynku, jadalnię na świeżym powietrzu albo domowe „spa” z widokiem na Bieszczady.
          </p>
          <p className="mt-3 max-w-[552px] text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            Zamiast katalogu systemów skupiamy się na Twoim domu, ogrodzie i sposobie, w jaki faktycznie chcesz z tej przestrzeni korzystać.
          </p>
          <div className="mt-6 md:mt-8">
            <Link href="/kontakt" className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base">Umów pomiar w 48 h</Link>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading lines={["Dla kogo są pergole", "i ogrody zimowe"]} />
            <div className="mt-8 md:mt-12">
              {forWhom.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="grid grid-cols-1 gap-4 border-b border-dark/10 py-6 last:border-b-0 md:grid-cols-[300px_1fr] md:gap-8 md:py-8">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">{item.label}</h3>
                    <p className="text-base leading-relaxed text-dark md:text-2xl">{item.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Jakie rozwiązania projektujemy najczęściej */}
      <AnimateOnScroll>
        <section className="bg-card py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading lines={["Jakie rozwiązania", "projektujemy najczęściej"]} />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:gap-8">
              {solutions.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex flex-col bg-white p-6 shadow-[0_0_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)] md:p-8">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-dark md:text-xl">{item.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Co bierzemy pod uwagę */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading lines={["Co bierzemy pod uwagę", "przy projekcie"]} />
            <ul className="mt-8 space-y-4 md:mt-12">
              {projectFactors.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <li className="flex items-start gap-4 border-b border-dark/10 pb-4 last:border-b-0">
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">{i + 1}</span>
                    <p className="text-base leading-relaxed text-dark md:text-xl">{item}</p>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll>
        <section className="bg-card py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6 text-center">
            <p className="mx-auto max-w-[720px] text-base leading-relaxed text-dark md:text-2xl">
              Masz dom z tarasem lub ogrodem i czujesz, że ta przestrzeń mogłaby robić dużo więcej niż dziś? W Trendhomes projektujemy pergole i ogrody zimowe pod konkretny dom, widok i sposób życia domowników.
            </p>
            <div className="mt-8 flex justify-center md:mt-10">
              <Link href="/kontakt" className="btn-pink h-[52px] px-[42px] text-base">Skontaktuj się z nami</Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll><ContactSection /></AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
