import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { mediaUrl } from "../../lib/strapi";
import type { BlockBrandsStrip } from "../../types/strapi";

export default function BrandsStripBlock({ block }: { block: BlockBrandsStrip }) {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        {block.headingLines && <SectionHeading lines={block.headingLines} />}
        {block.description && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-lg">
            {block.description}
          </p>
        )}
        <div className="mt-8 grid grid-cols-3 gap-6 items-center sm:grid-cols-4 md:mt-12 md:grid-cols-5 lg:grid-cols-6 lg:gap-10">
          {block.logos.map((logo) => {
            const img = (
              <div className="relative h-12 w-full grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
                <Image
                  src={mediaUrl(logo.logo)}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  loading="lazy"
                  className="object-contain"
                />
              </div>
            );
            return logo.url ? (
              <a key={logo.id} href={logo.url} target="_blank" rel="noopener noreferrer">
                {img}
              </a>
            ) : (
              <div key={logo.id}>{img}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
