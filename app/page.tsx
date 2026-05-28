import AnimateOnScroll from "./components/AnimateOnScroll";
import MapSection from "./components/MapSection";
import ReviewsSection from "./components/ReviewsSection";
import DynamicZone from "./components/blocks/DynamicZone";
import { getGlobalSettings, getHomePage, listReviews } from "./lib/strapi";
import { toMetadata } from "./lib/seo";

export async function generateMetadata() {
  const home = await getHomePage();
  if (!home?.seo) {
    return { title: "Trendhomes - Okna, drzwi i rolety z montażem" };
  }
  return toMetadata(home.seo, "/");
}

export default async function Home() {
  const [home, reviews, global] = await Promise.all([
    getHomePage(),
    listReviews({ featured: true }),
    getGlobalSettings(),
  ]);

  if (!global) {
    return <p className="p-10">Global settings missing — check Strapi.</p>;
  }

  const sections = home?.sections ?? [];

  return (
    <>
      <DynamicZone
        sections={sections}
        global={global}
        reviewsRender={(block) => (
          <AnimateOnScroll>
            <ReviewsSection
              heading={block.headingLines as readonly string[]}
              subtitle={block.subtitle ?? ""}
              googleMapsUrl={block.googleMapsUrl ?? ""}
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
