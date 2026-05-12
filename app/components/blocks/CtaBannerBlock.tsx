import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { mediaUrl } from "../../lib/strapi";
import type { BlockCtaBanner } from "../../types/strapi";

const VARIANT_BACKGROUNDS: Record<BlockCtaBanner["variant"], { image: string; alt: string; gradient: string }> = {
  pergola: {
    image: "/images/pergola-banner.jpg",
    alt: "Pergola ogrodowa",
    gradient:
      "linear-gradient(90deg, rgb(210, 36, 95) 0%, rgb(225, 79, 74) 27%, rgb(247, 143, 42) 52%, rgba(247, 143, 42, 0.9) 56%, rgba(247, 143, 42, 0.42) 68%, rgba(247, 143, 42, 0.06) 81%, rgba(247, 143, 42, 0) 93%)",
  },
  cleanAir: {
    image: "/images/czyste-powietrze-banner.jpg",
    alt: "Czyste Powietrze",
    gradient:
      "linear-gradient(90deg, rgb(77, 180, 231) 0%, rgba(77, 180, 231, 0.98) 56%, rgba(198, 231, 247, 0.32) 79%, rgba(255, 255, 255, 0) 100%)",
  },
  generic: {
    image: "",
    alt: "",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
  },
};

export default function CtaBannerBlock({ block }: { block: BlockCtaBanner }) {
  const variant = VARIANT_BACKGROUNDS[block.variant];
  const bgSrc = block.background ? mediaUrl(block.background) : variant.image;

  return (
    <section className="relative overflow-hidden">
      {bgSrc && (
        <div className="absolute inset-0">
          <Image
            src={bgSrc}
            alt={variant.alt}
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-right"
          />
        </div>
      )}
      <div className="absolute inset-0" style={{ backgroundImage: variant.gradient }} />
      <div className="relative mx-auto max-w-[1440px] px-3 py-10 md:px-5 md:py-16">
        <SectionHeading lines={block.headingLines} light />
        <p className="mt-6 max-w-[732px] text-base leading-relaxed text-white md:mt-8 md:text-xl">
          {block.description}
        </p>
        <div className="mt-8 flex items-center gap-8 md:mt-10">
          <Link href={block.ctaUrl} className="btn-light h-[52px] px-[34px] text-sm font-normal">
            {block.ctaLabel}
          </Link>
          {block.variant === "cleanAir" && (
            <div className="relative hidden h-[60px] w-[80px] sm:block">
              <Image
                src="/images/czyste-powietrze-badge.svg"
                alt="Czyste Powietrze - zdrowy wybór"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
