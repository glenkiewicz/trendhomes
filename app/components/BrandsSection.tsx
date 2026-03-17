import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.brands;

export default function BrandsSection() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <SectionHeading
              lines={[...d.heading]}
            />

            {d.paragraphs.map((text, i) => (
              <p key={i} className="mt-6 text-sm leading-relaxed text-dark md:text-lg">
                {text}
              </p>
            ))}

            <a
              href="#kontakt"
              className="btn-pink mt-8 h-12 px-[34px] text-sm"
            >
              {d.cta}
            </a>
          </div>

          {/* Right — image */}
          <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[634px]">
            <Image
              src={d.image.src}
              alt={d.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
