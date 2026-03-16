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

const forWhomItems = [
  {
    title: "Budynki użyteczności publicznej i biurowce",
    description:
      "Aluminium dobrze znosi intensywne użytkowanie, zmiany temperatury i większe obciążenia konstrukcyjne. Dlatego wykorzystuje się je w budynkach, które muszą być trwałe i bezpieczne przez lata, przy dużej liczbie użytkowników.",
  },
  {
    title: "Lokale usługowe i witryny",
    description:
      "W lokalach usługowych i na parterach budynków okna aluminiowe pozwalają uzyskać duże, stabilne przeszklenia i wąskie profile. Dzięki temu witryna lepiej eksponuje wnętrze, a stolarka jest bardziej odporna na uszkodzenia mechaniczne niż standardowe okna domowe.",
  },
  {
    title: "Nowoczesne domy z dużymi przeszkleniami",
    description:
      "W części projektów rezydencjonalnych aluminium wykorzystuje się do dużych, często sięgających od podłogi do sufitu przeszkleń. To rozwiązanie droższe niż PVC, ale pozwalające uzyskać efekt wizualny, którego nie da się łatwo osiągnąć na klasycznych systemach.",
  },
];

const advantages = [
  {
    title: "Stabilność przy dużych gabarytach",
    description:
      "Aluminium lepiej znosi duże wymiary skrzydeł i ciężkie pakiety szybowe, co ma znaczenie przy witrynach, fasadach i przeszkleniach w lokalach usługowych.",
  },
  {
    title: "Odporność mechaniczna",
    description:
      "Profile aluminiowe są bardziej odporne na uszkodzenia mechaniczne niż typowa stolarka okienna w domach. To ważne w miejscach o większym natężeniu ruchu.",
  },
  {
    title: "Nowoczesny wygląd",
    description:
      "Aluminium daje możliwość uzyskania bardzo wąskich ram i nowoczesnego, minimalistycznego efektu. Dobrze komponuje się z nowoczesną architekturą i dużą ilością szkła.",
  },
];

export default function OknaAluminiowePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Okna aluminiowe od Trendhomes"
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
            <span className="text-white">Okna Aluminiowe</span>
          </nav>
          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            Okna aluminiowe
          </h1>
          <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-white/90 sm:text-sm md:mt-6 md:text-base">
            Okna aluminiowe wybieramy przede wszystkim tam, gdzie liczy się duża
            wytrzymałość, sztywność profili i możliwość wykonania większych
            przeszkleń. Sprawdzają się w budynkach użyteczności publicznej,
            biurowcach, lokalach usługowych oraz w nowoczesnych domach z dużymi
            powierzchniami szkła. To rozwiązanie bardziej inwestycyjne niż
            masowe, z wyższej półki cenowej niż standardowe okna PCV.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              Umów pomiar w 48&nbsp;h
            </Link>
          </div>
        </div>
      </section>

      {/* ── Dla kogo są okna aluminiowe ── */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={["Dla kogo są", "okna aluminiowe"]}
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:gap-8">
              {forWhomItems.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="flex h-full flex-col bg-section-light p-5 md:p-6">
                    <span className="mb-4 flex size-7 shrink-0 items-center justify-center rounded-full bg-pink text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark/80 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── Dlaczego czasem warto wybrać aluminium zamiast PVC ── */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[
                "Dlaczego czasem warto wybrać",
                "aluminium zamiast PVC",
              ]}
            />
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 lg:gap-8">
              {advantages.map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-white p-5 md:p-6">
                    <h3 className="text-lg font-bold text-dark md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark/80 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── Jak pracujemy z oknami aluminiowymi ── */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={[
                "Jak pracujemy",
                "z oknami aluminiowymi",
              ]}
            />
            <div className="mt-8 max-w-[900px] md:mt-12">
              <p className="text-sm leading-relaxed text-dark md:text-lg">
                Okna aluminiowe proponujemy tam, gdzie ich potencjał naprawdę
                robi różnicę — w nowoczesnych projektach, dużych przeszkleniach
                i inwestycjach wymagających maksymalnej trwałości oraz sztywności
                konstrukcji. Na etapie rozmowy analizujemy projekt i pomagamy
                dobrać rozwiązanie, które najlepiej spełni wymagania inwestycji
                — czy będzie to aluminium, wysokiej klasy PVC, czy inny system.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-dark/80 md:text-base">
                Jeśli aluminium jest najlepszym wyborem, dobieramy odpowiedni
                system profili, technologię montażu i przygotowujemy ofertę
                z pełnym zakresem prac.
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ── CTA ── */}
      <AnimateOnScroll>
        <section className="bg-section-light py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 text-center md:px-5">
            <p className="mx-auto max-w-[720px] text-base leading-relaxed text-dark md:text-xl">
              Szukasz okien aluminiowych do biura, lokalu usługowego albo
              nowoczesnego domu z dużymi przeszkleniami? Napisz do nas,
              przygotujemy propozycję dopasowaną do Twojej inwestycji.
            </p>
            <div className="mt-8 flex justify-center">
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

      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
