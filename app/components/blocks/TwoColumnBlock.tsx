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
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
        {block.paragraphs?.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        {block.listItems && block.listItems.length > 0 && (
          <ul className="list-disc space-y-2 pl-5">
            {block.listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        {block.additionalText && <p>{block.additionalText}</p>}
      </div>
      {block.ctaLabel && block.ctaUrl && (
        <Link href={block.ctaUrl} className="btn-pink mt-8 inline-flex h-[52px] items-center px-[34px] text-sm">
          {block.ctaLabel}
        </Link>
      )}
    </div>
  );

  // Right column: map iframe (jeśli mapEmbedUrl) lub obrazek (jeśli image) — albo nic.
  let rightColumn: React.ReactNode = null;
  if (block.mapEmbedUrl) {
    rightColumn = (
      <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[574px]">
        <iframe
          src={block.mapEmbedUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 border-0"
        />
      </div>
    );
  } else if (block.image) {
    // compact = mniejsze image (uzywane na /rozwiazania-dla-ciebie solutions);
    // default = tall (uzywane na /o-nas about, outro).
    const heightClass = block.compact
      ? "h-[200px] sm:h-[260px] md:h-[212px]"
      : "h-[300px] sm:h-[400px] lg:h-[634px]";
    rightColumn = (
      <div className={`relative overflow-hidden ${heightClass}`}>
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
  }

  // Bez prawej kolumny — pełna szerokość tylko tekst.
  if (!rightColumn) {
    return (
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">{textColumn}</div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
          {imageOnRight ? (
            <>
              {textColumn}
              {rightColumn}
            </>
          ) : (
            <>
              {rightColumn}
              {textColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
