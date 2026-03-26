import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import SectionHeading from "../../../components/SectionHeading";
import ContactSection from "../../../components/ContactSection";
import MapSection from "../../../components/MapSection";
import Footer from "../../../components/Footer";
import {
  pvcSystems,
  getSystemBySlug,
  getRelatedSystems,
} from "../../../lib/product-systems";
import ColorCarousel from "../../../components/ColorCarousel";
import ProductImageTabs from "../../../components/ProductImageTabs";

export function generateStaticParams() {
  return pvcSystems.map((s) => ({ system: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ system: string }>;
}) {
  const { system: slug } = await params;
  const system = getSystemBySlug(slug);
  if (!system) return {};
  return {
    title: `${system.fullName} – Okna PVC | Trendhomes`,
    description: system.description,
  };
}

export default async function SystemDetailPage({
  params,
}: {
  params: Promise<{ system: string }>;
}) {
  const { system: slug } = await params;
  const system = getSystemBySlug(slug);
  if (!system) notFound();

  const related = getRelatedSystems(slug);

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      <main className="bg-white">
        {/* Breadcrumb + Heading */}
        <section className="pt-6 md:pt-10">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <nav className="flex items-center gap-2 text-xs uppercase text-dark/50 md:text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-dark"
              >
                Produkty
              </Link>
              <span>|</span>
              <Link
                href="/produkty/okna"
                className="transition-colors hover:text-dark"
              >
                Okna PVC
              </Link>
              <span>|</span>
              <span className="text-dark">{system.name}</span>
            </nav>

            <SectionHeading
              lines={[system.manufacturer, system.name]}
            />
          </div>
        </section>

        {/* Tech Specs + Image */}
        <section className="py-6 md:py-10">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: specs */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-full w-[3px] shrink-0 bg-pink" />
                  <div>
                    <h3 className="text-xl font-bold text-dark md:text-2xl">
                      Dane techniczne
                      <br />
                      {system.name.toLowerCase()}
                    </h3>

                    <div className="mt-6 flex flex-col gap-4 md:mt-8 md:gap-5">
                      {system.features.map((f, i) => (
                        <p
                          key={i}
                          className="text-sm text-dark md:text-base"
                        >
                          <span className="font-bold">
                            {f.label}
                          </span>
                          : {f.value}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 md:mt-10">
                      <Link
                        href="/kontakt"
                        className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-8 sm:text-base"
                      >
                        Umów pomiar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: image with tab toggle */}
              <ProductImageTabs
                image={system.image}
                alt={system.fullName}
                crossSection={system.crossSection}
              />
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gray-200/50">
          <div className="mx-auto grid max-w-[1440px] grid-cols-3 divide-x divide-dark/10 px-3 py-6 md:px-5 md:py-8">
            <div className="flex flex-col items-center gap-1 px-2 text-center md:gap-2">
              <span className="text-2xl font-black text-pink md:text-[32px]">
                {system.uw}
              </span>
              <span className="text-xs text-dark md:text-sm">
                {system.uwNote}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 px-2 text-center md:gap-2">
              <span className="text-2xl font-black text-pink md:text-[32px]">
                {system.seals}
              </span>
              <span className="text-xs text-dark md:text-sm">
                Uszczelki
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 px-2 text-center md:gap-2">
              <span className="text-2xl font-black text-pink md:text-[32px]">
                {system.chambers}
              </span>
              <span className="text-xs text-dark md:text-sm">
                Komór
              </span>
            </div>
          </div>
        </section>

        {/* Dostępne kolory */}
        {system.colors.length > 0 && (
          <section className="py-10 md:py-20">
            <div className="mx-auto max-w-[1440px] px-3 md:px-5">
              <SectionHeading lines={["Dostępne kolory"]} />
              <div className="mt-8 md:mt-12">
                <ColorCarousel colors={system.colors} />
              </div>
            </div>
          </section>
        )}

        {/* Feature Sections */}
        <section className="py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={system.featureSections.heading} />

            <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-0">
              {system.featureSections.blocks.map((block, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 gap-6 border-t border-dark/10 py-6 md:grid-cols-2 md:gap-12 md:py-8 ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-light text-dark md:text-2xl lg:text-[28px]">
                      {block.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark md:text-base">
                      {block.text}
                    </p>
                  </div>
                  <div className="relative h-[200px] w-full overflow-hidden bg-gray-50 md:h-[212px]">
                    <Image
                      src={system.image}
                      alt={block.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturer Info */}
        <section className="py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="text-2xl font-bold italic text-pink md:text-3xl">
                  {system.manufacturer.toUpperCase()}
                </h3>
                <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-dark md:text-base">
                  {system.manufacturerDescription}
                </p>
                <div className="mt-8">
                  <Link
                    href="/kontakt"
                    className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-8 sm:text-base"
                  >
                    {system.ctaText}
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-full">
                <Image
                  src={system.image}
                  alt={system.manufacturer}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={["Sprawdź nasze", "pozostałe produkty"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/produkty/okna/${rel.slug}`}
                  className="group flex flex-col overflow-hidden bg-white shadow-[0_0_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                    <Image
                      src={rel.image}
                      alt={rel.fullName}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-dark md:text-2xl">
                      {rel.name}
                    </h3>
                    <div className="mt-3 border-t border-dark/10 pt-3">
                      <p className="text-sm text-dark">
                        Głębokość zabudowy: {rel.depth}
                      </p>
                      <p className="mt-1 text-sm text-dark">
                        Szklenie pakietami o szerokości{" "}
                        {rel.glazing}
                      </p>
                      <p className="mt-1 text-sm text-dark">
                        {rel.seals} uszczelki, {rel.chambers} komór
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
        <MapSection />
      </main>

      <Footer />
    </>
  );
}
