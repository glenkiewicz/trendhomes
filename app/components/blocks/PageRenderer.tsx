/**
 * Renders a Page or ProductCategoryPage: chrome + hero + Dynamic Zone sections.
 *
 * Hero is rendered inline from the entity's heroImage/heroHeadingLines fields
 * rather than as a block, because every page has exactly one hero and the
 * shape is consistent. Sections drive everything below the hero.
 */
import Image from "next/image";
import Link from "next/link";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AnimateOnScroll from "../AnimateOnScroll";
import ReviewsSection from "../ReviewsSection";
import DynamicZone from "./DynamicZone";
import { listReviews, mediaUrl } from "../../lib/strapi";
import type { StrapiPage, StrapiProductCategoryPage } from "../../types/strapi";
import { MOCKUP_DATA } from "../../lib/mockup-data";

const reviewsCopy = MOCKUP_DATA.home.reviews;

type Props = { page: StrapiPage | StrapiProductCategoryPage };

export default async function PageRenderer({ page }: Props) {
  const reviews = await listReviews({ featured: true });

  const heroImageUrl = page.heroImage ? mediaUrl(page.heroImage, "xlarge") : null;
  const titleLines = page.heroHeadingLines ?? [page.title];
  const breadcrumb = page.breadcrumb ?? [];

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {heroImageUrl && (
        <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
          <Image
            src={heroImageUrl}
            alt={titleLines.join(" ")}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(27,27,27,0.72) 15%, rgba(27,27,27,0.58) 43%, rgba(107,101,98,0.24) 79%, rgba(255,240,229,0) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-3 md:px-5">
            {breadcrumb.length > 0 && (
              <nav className="mb-6 flex items-center gap-2 text-sm uppercase text-white/80 md:text-sm">
                {breadcrumb.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i > 0 && <span>|</span>}
                    {i === 0 ? (
                      <Link href="/" className="transition-colors hover:text-white">
                        {item}
                      </Link>
                    ) : (
                      <span className={i === breadcrumb.length - 1 ? "text-white" : "text-white/80"}>
                        {item}
                      </span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>

            {page.heroDescription && (
              <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white md:mt-6 md:text-lg">
                {page.heroDescription}
              </p>
            )}

            {page.heroCtaLabel && page.heroCtaUrl && (
              <div className="mt-6 md:mt-8">
                <Link
                  href={page.heroCtaUrl}
                  className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
                >
                  {page.heroCtaLabel}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      <DynamicZone
        sections={page.sections}
        reviewsRender={(block) => (
          <AnimateOnScroll>
            <ReviewsSection
              heading={block.headingLines as readonly string[]}
              subtitle={block.subtitle ?? reviewsCopy.subtitle}
              googleMapsUrl={block.googleMapsUrl ?? reviewsCopy.googleMapsUrl}
              reviews={reviews.map((r) => ({
                name: r.authorName,
                text: r.text,
                date: r.date,
                rating: r.rating,
              }))}
            />
          </AnimateOnScroll>
        )}
      />

      <Footer />
    </>
  );
}
