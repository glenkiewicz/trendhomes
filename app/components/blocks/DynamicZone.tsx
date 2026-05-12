/**
 * Dynamic Zone renderer.
 *
 * Maps a Strapi block's `__component` string to a frontend React component.
 * Blocks that don't yet have a CMS-driven implementation fall back to the
 * existing MOCKUP_DATA-backed section component, so the page keeps rendering
 * while individual sections migrate to CMS one by one.
 */
import type { AnyBlock } from "../../types/strapi";
import CtaBannerBlock from "./CtaBannerBlock";
import FaqBlock from "./FaqBlock";

// Section fallbacks (still read from MOCKUP_DATA — migrate gradually).
import Hero from "../Hero";
import SolutionsSection from "../SolutionsSection";
import ProductsSection from "../ProductsSection";
import WhySection from "../WhySection";
import StepsSection from "../StepsSection";
import RealizationsSection from "../RealizationsSection";
import BlogSection from "../BlogSection";
import BrandsSection from "../BrandsSection";
import ContactSection from "../ContactSection";

type Props = {
  sections: AnyBlock[];
  reviewsRender?: (block: Extract<AnyBlock, { __component: "blocks.reviews-carousel" }>) => React.ReactNode;
};

export default function DynamicZone({ sections, reviewsRender }: Props) {
  return (
    <>
      {sections.map((block, idx) => {
        const key = `${block.__component}-${block.id ?? idx}`;
        switch (block.__component) {
          case "blocks.hero":
            // Hero still reads MOCKUP_DATA — see TODO in Phase 4b
            return <Hero key={key} />;
          case "blocks.feature-grid":
            if (block.variant === "solutions") return <SolutionsSection key={key} />;
            if (block.variant === "why") return <WhySection key={key} />;
            return null;
          case "blocks.product-grid":
            return <ProductsSection key={key} />;
          case "blocks.cta-banner":
            return <CtaBannerBlock key={key} block={block} />;
          case "blocks.steps-list":
            return <StepsSection key={key} />;
          case "blocks.realizations-grid":
            return <RealizationsSection key={key} />;
          case "blocks.reviews-carousel":
            return reviewsRender ? <div key={key}>{reviewsRender(block)}</div> : null;
          case "blocks.blog-list":
            return <BlogSection key={key} />;
          case "blocks.faq":
            return <FaqBlock key={key} block={block} />;
          case "blocks.two-column":
            // Used for home "about" section — fallback to BrandsSection for now
            return <BrandsSection key={key} />;
          case "blocks.contact-form":
            return <ContactSection key={key} />;
          default:
            return null;
        }
      })}
    </>
  );
}
