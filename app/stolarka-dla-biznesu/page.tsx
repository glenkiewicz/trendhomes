"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

const targetAudience = [
  {
    title: "Dla właścicieli lokali usługowych, sklepów, gabinetów czy biur",
    image: "/images/biznes-card-1.jpg",
  },
  {
    title: "Dla deweloperów i całych wspólnot mieszkaniowych",
    image: "/images/biznes-card-2.jpg",
  },
  {
    title: "Dla dużych inwestorów i obiektów publicznych m. in. szkół czy urzędów",
    image: "/images/biznes-card-3.jpg",
  },
  {
    title: "Dla architektów i biur projektowych szukających partnera do stolarki",
    image: "/images/biznes-card-4.jpg",
  },
];

const serviceCategories = [
  {
    title: "Lokale usługowe",
    intro:
      "W lokalach usługowych i biurach stolarka pracuje zupełnie inaczej niż w domu. Drzwi otwierają się setki razy dziennie, witryna ma przyciągać wzrok z ulicy, a całość musi spełnić wymagania techniczne budynku i zarządcy.",
    details: [
      "drzwi wejściowe aluminiowe (automatyczne i manualne)",
      "ściany aluminiowo-szklane wewnętrzne",
      "systemy przesuwne i składane",
      "okna i fasady z profili ciepłych lub zimnych, zależnie od przeznaczenia",
      "rolety zewnętrzne i wewnętrzne, żaluzje fasadowe",
    ],
  },
  {
    title: "Witryny",
    intro:
      "Witryna to wizytówka lokalu. Od tego, jak wygląda, zależy, czy klient zatrzyma się choć na chwilę przed Twoim miejscem. Jednocześnie witryna musi być bezpieczna, ciepła i zgodna z projektem budynku.",
    listTitle: "Jakie witryny realizujemy:",
    list: [
      "witryny sklepowe i usługowe w parterach budynków mieszkalnych",
      "przeszklenia wejść do galerii handlowych i pasaży",
      "przeszklone fasady w biurowcach i obiektach usługowych",
      "witryny w budynkach użyteczności publicznej (biblioteki, domy kultury, baseny)",
    ],
    considerTitle: "Przy projektowaniu witryn bierzemy pod uwagę:",
    considerations: [
      "funkcję lokalu (handel, usługi, gastronomia, medycyna, edukacja)",
      "wymagania co do izolacyjności cieplnej i akustycznej",
      "oczekiwania inwestora co do wyglądu i sposobu ekspozycji towaru",
      "kwestie bezpieczeństwa – rodzaj szyb, podziały, balustrady, zabezpieczenia antywłamaniowe",
    ],
  },
  {
    title: "Drzwi p.poż.",
    intro:
      "Drzwi przeciwpożarowe to przede wszystkim bezpieczeństwo i przepisy. W obiektach biznesowych i publicznych drzwi przeciwpożarowe nie są \u201Eopcją\u201D, tylko obowiązkiem. Dobór nieodpowiedniego systemu potrafi zablokować odbiór budynku. Dlatego ten temat traktujemy bardzo poważnie.",
  },
  {
    title: "Fasady",
    intro:
      "Przy większych inwestycjach często pojawia się potrzeba wykonania fasady aluminiowo-szklanej albo dużych przeszkleń łączących kilka kondygnacji. W takich miejscach stolarka jest ważnym elementem architektury budynku.",
  },
  {
    title: "Nietypowe realizacje",
    intro:
      "Część zleceń nie mieści się w prostych kategoriach. To są projekty, w których budynek ma trudną historię techniczną albo jest obiektem zabytkowym.",
  },
];

const processSteps = [
  {
    number: "1.",
    title: "Rozmowa i analiza obiektu",
    text: "Ustalamy typ budynku, jego funkcję, status formalny (nowy, modernizacja, zabytek), zakres potrzebnej stolarki oraz harmonogram inwestycji.",
    opacity: "",
  },
  {
    number: "2.",
    title: "Propozycja rozwiązań",
    text: "Przygotowujemy koncepcję: podział na lokale, witryny, drzwi p.poż., fasady, dodatkowe elementy. Omawiamy różne warianty techniczne i budżetowe.",
    opacity: "opacity-80",
  },
  {
    number: "3.",
    title: "Pomiar i doprecyzowanie detali",
    text: "Mierzymy otwory, weryfikujemy warunki techniczne, uzgadniamy podział prac i odpowiedzialności z innymi wykonawcami.",
    opacity: "opacity-60",
  },
];

const GAP_LG = 32;
const GAP_SM = 24;

function AudienceCarousel() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(GAP_LG);
  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, targetAudience.length - visibleCount);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const container = trackRef.current.parentElement;
    if (!container) return;
    const w = container.clientWidth;
    let cols = 3;
    let g = GAP_LG;
    if (w < 640) {
      cols = 1;
      g = GAP_SM;
    } else if (w < 1024) {
      cols = 2;
      g = GAP_SM;
    }
    setVisibleCount(cols);
    setGap(g);
    setItemWidth((w - g * (cols - 1)) / cols);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent((c) => (c < maxIndex ? c + 1 : 0));
  }, [maxIndex]);

  const totalDots = maxIndex + 1;

  return (
    <section className="bg-white pb-10 md:pb-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="flex items-end justify-between">
          <p className="text-xl font-semibold text-dark md:text-[26px]">
            Dla kogo jest ta oferta?
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Poprzedni"
              className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Następny"
              className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden md:mt-10">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(-${current * (itemWidth + gap)}px)`,
            }}
          >
            {targetAudience.map((item, i) => (
              <div
                key={i}
                className="group shrink-0 cursor-pointer overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
              >
                <div className="p-5 pb-0 md:p-8 md:pb-0">
                  <h3 className="text-[22px] font-bold leading-tight text-dark md:text-[26px]">
                    {item.title}
                  </h3>
                </div>
                <div className="relative mt-6 h-[160px] w-full overflow-hidden md:mt-8 md:h-[180px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalDots > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 md:mt-12">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Pozycja ${i + 1}`}
                className="flex h-6 items-center py-2"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-10 bg-pink"
                      : "w-6 bg-dark/20 hover:bg-dark/40"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof serviceCategories)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-dark/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left md:py-6"
      >
        <h3 className="text-xl font-bold text-dark md:text-[26px] md:leading-[42px]">
          {item.title}
        </h3>
        <span className="ml-4 flex shrink-0 items-center gap-2 text-sm text-dark">
          <span className="hidden sm:inline">
            {isOpen ? "Zwiń opis" : "Czytaj więcej"}
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M8 12L15 19L22 12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 md:pb-8">
            <p className="text-sm leading-relaxed text-dark md:text-lg">
              {item.intro}
            </p>

            {item.details && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-dark md:text-lg">
                  Co dostarczamy do lokali:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark md:text-lg">
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.listTitle && item.list && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-dark md:text-lg">
                  {item.listTitle}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark md:text-lg">
                  {item.list.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.considerTitle && item.considerations && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-dark md:text-lg">
                  {item.considerTitle}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-dark md:text-lg">
                  {item.considerations.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.title === "Witryny" && (
              <div className="mt-8">
                <Link
                  href="/realizacje"
                  className="btn-pink h-[52px] px-[34px] text-sm"
                >
                  Zobacz realizacje witryn
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StolarkaDlaBiznesuPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/biznes-hero.jpg"
          alt="Stolarka dla biznesu"
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
            <span className="text-white">stolarka dla biznesu</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            Stolarka dla biznesu
            <br />
            i instytucji publicznych
            <br />
            &ndash; od projektu do monta&#380;u
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            W biznesie stolarka nie jest tylko &bdquo;oknem w &#347;cianie&rdquo;.
            W&nbsp;Trendhomes doskonale o tym wiemy, dlatego od pierwszej koncepcji
            do odbioru technicznego masz po swojej stronie zesp&oacute;&#322;, kt&oacute;ry
            rozumie biznes, przepisy i budow&#281;.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              Um&oacute;w pomiar w 48 h
            </Link>
          </div>
        </div>
      </section>

      {/* Trendhomes dla biznesu */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={["Trendhomes", "dla biznesu"]} />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-xl">
              <p>
                Wiemy, &#380;e w biznesie stolarka okienna ma przyci&#261;ga&#263;
                klient&oacute;w, spe&#322;nia&#263; wymagania przepis&oacute;w,
                wsp&oacute;&#322;pracowa&#263; z systemami przeciwpo&#380;arowymi
                i wytrzyma&#263; intensywne u&#380;ytkowanie.
              </p>
              <p>
                W Trendhomes projektujemy i dostarczamy rozwi&#261;zania dla lokali
                us&#322;ugowych, biur, sklep&oacute;w, galerii handlowych, blok&oacute;w
                mieszkalnych, basen&oacute;w, budynk&oacute;w u&#380;yteczno&#347;ci
                publicznej, ko&#347;cio&#322;&oacute;w i szpitali. Pracujemy
                zar&oacute;wno z w&#322;a&#347;cicielami pojedynczych lokali, jak
                i z inwestorami oraz generalnymi wykonawcami.
              </p>
              <p className="font-semibold">Dla kogo jest ta oferta?</p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Target audience carousel */}
      <AudienceCarousel />

      {/* Stolarka w pełni dopasowana */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[
                "Stolarka w pełni dopasowana",
                "do potrzeb Twojej inwestycji",
              ]}
            />

            <div className="mt-10 md:mt-14">
              {serviceCategories.map((item, i) => (
                <AccordionItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
              <div className="border-t border-dark/10" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Jak wygląda współpraca */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[
                "Jak wygląda współpraca",
                "przy stolarce dla biznesu",
              ]}
            />

            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
              {processSteps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="border-t-2 border-pink/30 pt-5">
                    <span
                      className={`text-3xl font-black text-pink ${step.opacity}`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-light text-dark md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">
                      {step.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Trendhomes - Twój partner w biznesie */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading
                  lines={[
                    "Trendhomes – Twój",
                    "partner w biznesie",
                  ]}
                />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
                  <p>
                    &#321;&#261;czymy do&#347;wiadczenie z bud&oacute;w,
                    znajomo&#347;&#263; system&oacute;w stolarki i wymagania
                    przepis&oacute;w.
                  </p>
                  <p>
                    Napisz, jakiego obiektu dotyczy inwestycja i w jakim jeste&#347;
                    etapie &ndash; przygotujemy propozycj&#281; rozwi&#261;za&#324;
                    dla stolarki biznesowej i poka&#380;emy podobne realizacje
                    z naszej galerii.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/kontakt"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    Skontaktuj si&#281; z Nami
                  </Link>
                </div>
              </div>
              <div className="relative h-[240px] overflow-hidden sm:h-[300px] lg:h-[389px]">
                <Image
                  src="/images/biznes-partner.jpg"
                  alt="Partner w biznesie"
                  fill
                  className="object-cover"
                />
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
