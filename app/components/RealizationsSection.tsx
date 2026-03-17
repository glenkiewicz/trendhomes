import Image from "next/image";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.realizations;

export default function RealizationsSection() {
  return (
    <section id="realizacje" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading
          lines={[...d.heading]}
        />

        <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
          {d.description}
        </p>

        {/* Row 1 — 3 equal */}
        <AnimateOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {d.images.slice(0, 3).map((img, i) => (
              <div key={i} className={`group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px] ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Row 2 — 1 small + 1 wide */}
        <AnimateOnScroll delay={150}>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <div className="group relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[464px]">
              <Image
                src={d.images[3].src}
                alt={d.images[3].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:h-[464px]">
              <Image
                src={d.images[4].src}
                alt={d.images[4].alt}
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
                src={d.images[5].src}
                alt={d.images[5].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="group relative h-[280px] overflow-hidden sm:col-span-2 sm:h-[320px] lg:h-[464px]">
              <Image
                src={d.images[6].src}
                alt={d.images[6].alt}
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
              className="btn-pink h-12 px-[34px] text-sm"
            >
              {d.cta}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
