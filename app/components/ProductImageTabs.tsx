"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageTabsProps {
  image: string;
  alt: string;
  crossSection?: string;
}

export default function ProductImageTabs({
  image,
  alt,
  crossSection,
}: ProductImageTabsProps) {
  const [activeTab, setActiveTab] = useState<"product" | "crossSection">(
    "product",
  );

  if (!crossSection) {
    return (
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6"
          priority
        />
      </div>
    );
  }

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b border-dark/10">
        <button
          onClick={() => setActiveTab("product")}
          className={`relative px-5 py-3 text-sm font-bold transition-colors md:px-6 md:text-base ${
            activeTab === "product"
              ? "text-dark"
              : "text-dark/40 hover:text-dark/70"
          }`}
        >
          Produkt
          {activeTab === "product" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-pink" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("crossSection")}
          className={`relative px-5 py-3 text-sm font-bold transition-colors md:px-6 md:text-base ${
            activeTab === "crossSection"
              ? "text-dark"
              : "text-dark/40 hover:text-dark/70"
          }`}
        >
          Przekrój profilu
          {activeTab === "crossSection" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-pink" />
          )}
        </button>
      </div>

      {/* Image area */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={activeTab === "product" ? image : crossSection}
          alt={
            activeTab === "product" ? alt : `Przekrój profilu ${alt}`
          }
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6 transition-opacity duration-300"
          priority
        />
      </div>
    </div>
  );
}
