import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { listProductSystems } from "../../lib/strapi";
import type { BlockProductGrid } from "../../types/strapi";
import ProductGridClient from "./ProductGridClient";

export default async function ProductGridBlock({ block }: { block: BlockProductGrid }) {
  let products = block.selected ?? [];
  if (products.length === 0 && block.filter !== "all") {
    products = await listProductSystems(block.filter);
  } else if (products.length === 0) {
    products = await listProductSystems("pvc");
  }
  if (block.limit) products = products.slice(0, block.limit);

  // Manufacturer filter available where multiple producers compete on the same page (PVC).
  const showManufacturerFilter = block.filter === "pvc";

  return (
    <section id="produkty" className="bg-section-light py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />

        <ProductGridClient
          products={products}
          showManufacturerFilter={showManufacturerFilter}
        />

        {block.ctaLabel && block.ctaUrl && (
          <div className="mt-10 flex justify-center md:mt-14">
            <Link href={block.ctaUrl} className="btn-pink h-12 px-[34px] text-sm">
              {block.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
