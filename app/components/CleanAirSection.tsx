import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.cleanAir;

export default function CleanAirSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/czyste-powietrze-banner.jpg"
          alt="Czyste Powietrze"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-right"
        />
      </div>

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(77, 180, 231) 0%, rgba(77, 180, 231, 0.98) 56%, rgba(198, 231, 247, 0.32) 79%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-3 py-10 md:px-5 md:py-16">
        <SectionHeading
          lines={[...d.heading]}
          light
        />

        <p className="mt-6 max-w-[728px] text-base leading-relaxed text-white md:mt-8 md:text-xl">
          {d.description}
        </p>

        <div className="mt-8 flex items-center gap-8 md:mt-10">
          <a
            href="#kontakt"
            className="btn-light h-[52px] px-[34px] text-sm font-normal"
          >
            {MOCKUP_DATA.global.cta.umowPomiar}
          </a>

          <div className="relative hidden h-[60px] w-[80px] sm:block">
            <Image
              src="/images/czyste-powietrze-badge.svg"
              alt="Czyste Powietrze - zdrowy wybór"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
