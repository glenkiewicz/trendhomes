import Image from "next/image";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

export default function RealizationsSection() {
  return (
    <section id="realizacje" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <SectionHeading
          lines={["Realizacje Trendhomes", "w południowej Polsce"]}
        />

        <p className="mt-4 max-w-[867px] text-lg leading-relaxed text-dark md:mt-6 md:text-2xl">
          Każdy projekt to inny dom, inne mieszkanie i inne potrzeby. Zobacz
          wybrane realizacje Trendhomes w Sanoku i okolicach – od nowych domów
          jednorodzinnych, przez mieszkania w blokach, aż po lokale usługowe i
          pergole w ogrodzie.
        </p>

        {/* Row 1 — 3 equal */}
        <AnimateOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
              <Image
                src="/images/real-1.jpg"
                alt="Realizacja – nowoczesny dom"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
              <Image
                src="/images/real-2.jpg"
                alt="Realizacja – dom z pergolą"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:col-span-1 lg:h-[464px]">
              <Image
                src="/images/real-3.jpg"
                alt="Realizacja – drzwi wejściowe"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Row 2 — 1 small + 1 wide */}
        <AnimateOnScroll delay={150}>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
              <Image
                src="/images/real-4.jpg"
                alt="Realizacja – klamka drzwi"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:h-[464px]">
              <Image
                src="/images/real-5.jpg"
                alt="Realizacja – okna w domu"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Row 3 — 1 small + 1 wide */}
        <AnimateOnScroll delay={300}>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
              <Image
                src="/images/real-6.jpg"
                alt="Realizacja – okno z widokiem"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:h-[464px]">
              <Image
                src="/images/real-7.jpg"
                alt="Realizacja – ściana szklana w biurze"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA button */}
        <AnimateOnScroll delay={100}>
          <div className="mt-10 flex justify-center md:mt-14">
            <a
              href="#kontakt"
              className="btn-pink h-12 px-[42px] text-base"
            >
              Zobacz więcej realizacji
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
