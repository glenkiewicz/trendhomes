import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { mediaUrl } from "../../lib/strapi";
import type { BlockTwoColumn } from "../../types/strapi";

export default function TwoColumnBlock({ block }: { block: BlockTwoColumn }) {
  const imageOnRight = block.imagePosition === "right";

  const textColumn = (
    <div>
      <SectionHeading lines={block.headingLines} />
      {block.paragraphs?.map((text, i) => (
        <p key={i} className="mt-6 text-sm leading-relaxed text-dark md:text-lg">
          {text}
        </p>
      ))}
      {block.ctaLabel && block.ctaUrl && (
        <Link href={block.ctaUrl} className="btn-pink mt-8 inline-flex h-12 items-center px-[34px] text-sm">
          {block.ctaLabel}
        </Link>
      )}
    </div>
  );

  const imageColumn = (
    <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[634px]">
      <Image
        src={mediaUrl(block.image, "large")}
        alt={block.imageAlt ?? ""}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading="lazy"
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-2">
          {imageOnRight ? (
            <>
              {textColumn}
              {imageColumn}
            </>
          ) : (
            <>
              {imageColumn}
              {textColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
