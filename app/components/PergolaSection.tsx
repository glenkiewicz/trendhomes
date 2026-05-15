import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.pergola;

export default function PergolaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pergola-banner.jpg"
          alt="Pergola ogrodowa"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-right"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(210, 36, 95) 0%, rgb(225, 79, 74) 27%, rgb(247, 143, 42) 52%, rgba(247, 143, 42, 0.9) 56%, rgba(247, 143, 42, 0.42) 68%, rgba(247, 143, 42, 0.06) 81%, rgba(247, 143, 42, 0) 93%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-3 py-10 md:px-5 md:py-16">
        <SectionHeading
          lines={[...d.heading]}
          light
        />

        <p className="mt-6 max-w-[732px] text-base leading-relaxed text-white md:mt-8 md:text-xl">
          {d.description}
        </p>

        <a
          href="#kontakt"
          className="btn-light mt-8 h-[52px] px-[34px] text-sm font-normal md:mt-10"
        >
          {MOCKUP_DATA.global.cta.umowPomiar}
        </a>
      </div>
    </section>
  );
}
