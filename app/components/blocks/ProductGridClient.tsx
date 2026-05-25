"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";
import { mediaUrl } from "../../lib/strapi";
import type { StrapiProductSystem } from "../../types/strapi";

type Props = {
  products: StrapiProductSystem[];
  showManufacturerFilter?: boolean;
};

const ALL = "Wszystkie";

export default function ProductGridClient({ products, showManufacturerFilter }: Props) {
  const manufacturers = useMemo(() => {
    const names = new Set<string>();
    for (const p of products) {
      const n = p.manufacturer?.name;
      if (n) names.add(n);
    }
    return [ALL, ...Array.from(names).sort()];
  }, [products]);

  const [active, setActive] = useState<string>(ALL);

  const visible = active === ALL
    ? products
    : products.filter((p) => p.manufacturer?.name === active);

  return (
    <>
      {showManufacturerFilter && manufacturers.length > 2 && (
        <div className="mt-6 flex flex-wrap gap-2 md:mt-10 md:gap-3">
          {manufacturers.map((name) => {
            const isActive = name === active;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActive(name)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors md:px-5 md:py-2.5 ${
                  isActive
                    ? "border-pink bg-pink text-white"
                    : "border-dark/15 bg-white text-dark hover:border-pink hover:text-pink"
                }`}
                aria-pressed={isActive}
              >
                {name}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
        {visible.map((p, i) => {
          const baseHref =
            p.productType === "wooden" ? "/produkty/okna-drewniane" : "/produkty/okna";
          return (
            <AnimateOnScroll key={p.slug} delay={i * 80}>
              <Link
                href={`${baseHref}/${p.slug}`}
                className="group flex cursor-pointer flex-col items-center bg-card pb-3 transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10 md:pb-6"
              >
                <div className="relative flex h-[180px] w-full items-center justify-center p-3 sm:h-[240px] sm:p-5 md:h-[300px] md:p-6">
                  <Image
                    src={mediaUrl(p.mainImage, "medium")}
                    alt={p.fullName}
                    width={300}
                    height={280}
                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 300px"
                    loading="lazy"
                    className="h-auto max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center text-lg font-bold text-dark transition-colors group-hover:text-pink sm:text-xl md:text-[26px]">
                  {p.name}
                </h3>
                {p.manufacturer?.name && (
                  <p className="mt-1 text-center text-xs uppercase tracking-wider text-dark/60">
                    {p.manufacturer.name}
                  </p>
                )}
              </Link>
            </AnimateOnScroll>
          );
        })}
      </div>
    </>
  );
}
