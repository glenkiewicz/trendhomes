import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";
import { mainProducts } from "../lib/products-data";

export default function ProductsSection() {
  return (
    <section id="produkty" className="bg-section-light py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <SectionHeading lines={["Poznaj nasze", "produkty"]} />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
          {mainProducts.map((product, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <Link
                href={product.href}
                className="group flex cursor-pointer flex-col items-center bg-card pb-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10 md:pb-8"
              >
                <div className="relative flex h-[180px] w-full items-center justify-center p-4 sm:h-[240px] sm:p-6 md:h-[300px] md:p-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={280}
                    className="h-auto max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center text-xl font-bold text-dark transition-colors group-hover:text-pink sm:text-2xl md:text-[32px] lg:text-[40px]">
                  {product.name}
                </h3>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
