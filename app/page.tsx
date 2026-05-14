import AnimateOnScroll from "./components/AnimateOnScroll";
import MapSection from "./components/MapSection";
import ReviewsSection from "./components/ReviewsSection";
import DynamicZone from "./components/blocks/DynamicZone";
import { getHomePage, listReviews } from "./lib/strapi";
import { toMetadata } from "./lib/seo";
import { MOCKUP_DATA } from "./lib/mockup-data";

const reviewsCopy = MOCKUP_DATA.home.reviews;

export async function generateMetadata() {
  const home = await getHomePage();
  if (!home?.seo) {
    return { title: "Trendhomes - Okna, drzwi i rolety z montażem" };
  }
  return toMetadata(home.seo, "/");
}

export default async function Home() {
  const [home, reviews] = await Promise.all([
    getHomePage(),
    listReviews({ featured: true }),
  ]);

  const sections = home?.sections ?? [];

  return (
    <>
      <DynamicZone
        sections={sections}
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

      <MapSection />
    </>
  );
}
