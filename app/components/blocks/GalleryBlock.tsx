import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { mediaUrl, mediaAlt } from "../../lib/strapi";
import type { BlockGallery } from "../../types/strapi";

const GRID_CLASSES: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 lg:grid-cols-5",
  6: "grid-cols-2 lg:grid-cols-6",
};

export default function GalleryBlock({ block }: { block: BlockGallery }) {
  const cols = GRID_CLASSES[block.columns] ?? GRID_CLASSES[3];
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        {block.headingLines && <SectionHeading lines={block.headingLines} />}
        <div className={`mt-8 grid gap-4 md:mt-12 md:gap-6 ${cols}`}>
          {block.images.map((img) => (
            <div key={img.id} className="relative aspect-square overflow-hidden">
              <Image
                src={mediaUrl(img.image, "medium")}
                alt={mediaAlt(img.image, img.alt, img.caption)}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
