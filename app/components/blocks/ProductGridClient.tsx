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
        <div className="mt-8 bg-gray-200/50 md:mt-12">
          <div className="flex items-center gap-2 overflow-x-auto px-3 py-4 md:gap-6 md:px-5 md:py-5">
            {manufacturers.map((name) => {
              const isActive = name === active;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActive(name)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm transition-colors md:text-lg lg:text-xl ${
                    isActive ? "font-bold text-dark" : "text-dark/60 hover:text-dark"
                  }`}
                >
                  <span
                    className={`flex size-4 shrink-0 items-center justify-center border transition-colors ${
                      isActive ? "border-pink bg-pink" : "border-dark/30"
                    }`}
                  >
                    {isActive && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-8">
        {visible.map((p, i) => {
          const baseHref =
            p.productType === "wooden" ? "/produkty/okna-drewniane" : "/produkty/okna";
          return (
            <AnimateOnScroll key={p.slug} delay={i * 60}>
              <Link
                href={`${baseHref}/${p.slug}`}
                className="group flex flex-col overflow-hidden bg-white shadow-[0_0_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={mediaUrl(p.mainImage, "medium")}
                    alt={p.fullName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-dark md:text-2xl">{p.name}</h3>
                  {(p.depth || p.glazing || p.seals || p.chambers) && (
                    <div className="mt-3 border-t border-dark/10 pt-3">
                      {p.depth && (
                        <p className="text-sm text-dark">Głębokość zabudowy: {p.depth}</p>
                      )}
                      {p.glazing && (
                        <p className="mt-1 text-sm text-dark">
                          Szklenie pakietami o szerokości {p.glazing}
                        </p>
                      )}
                      {(p.seals || p.chambers) && (
                        <p className="mt-1 text-sm text-dark">
                          {p.seals && <>{p.seals} uszczelki</>}
                          {p.seals && p.chambers && <>, </>}
                          {p.chambers && <>{p.chambers} komór</>}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </AnimateOnScroll>
          );
        })}
      </div>
    </>
  );
}
