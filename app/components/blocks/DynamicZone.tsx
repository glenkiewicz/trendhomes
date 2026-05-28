/**
 * Dynamic Zone renderer — maps every Strapi `__component` to its frontend block.
 *
 * Reviews carousel is provided via the `reviewsRender` callback because it
 * needs server-side review data + a heading override; the host page fetches
 * reviews and passes them down.
 *
 * Contact form receives GlobalSettings (address, phones, opening hours, socials)
 * forwarded from the host page's already-fetched global.
 */
import type { AnyBlock, StrapiGlobalSettings } from "../../types/strapi";
import AccordionBlock from "./AccordionBlock";
import BlogListBlock from "./BlogListBlock";
import CategoryGridBlock from "./CategoryGridBlock";
import MapEmbedBlock from "./MapEmbedBlock";
import NumberedListBlock from "./NumberedListBlock";
import BrandsStripBlock from "./BrandsStripBlock";
import ColorCarouselBlock from "./ColorCarouselBlock";
import CtaBannerBlock from "./CtaBannerBlock";
import FaqBlock from "./FaqBlock";
import FeatureGridBlock from "./FeatureGridBlock";
import GalleryBlock from "./GalleryBlock";
import HeroBlock from "./HeroBlock";
import ProductGridBlock from "./ProductGridBlock";
import RealizationsGridBlock from "./RealizationsGridBlock";
import RichTextBlock from "./RichTextBlock";
import StepsListBlock from "./StepsListBlock";
import TwoColumnBlock from "./TwoColumnBlock";

import ContactSection from "../ContactSection";

type Props = {
  sections: AnyBlock[];
  global: StrapiGlobalSettings;
  reviewsRender?: (block: Extract<AnyBlock, { __component: "blocks.reviews-carousel" }>) => React.ReactNode;
};

export default function DynamicZone({ sections, global, reviewsRender }: Props) {
  return (
    <>
      {sections.map((block, idx) => {
        const key = `${block.__component}-${block.id ?? idx}`;
        switch (block.__component) {
          case "blocks.hero":
            return <HeroBlock key={key} block={block} />;
          case "blocks.feature-grid":
            return <FeatureGridBlock key={key} block={block} />;
          case "blocks.product-grid":
            return <ProductGridBlock key={key} block={block} />;
          case "blocks.cta-banner":
            return <CtaBannerBlock key={key} block={block} />;
          case "blocks.steps-list":
            return <StepsListBlock key={key} block={block} />;
          case "blocks.realizations-grid":
            return <RealizationsGridBlock key={key} block={block} />;
          case "blocks.reviews-carousel":
            return reviewsRender ? <div key={key}>{reviewsRender(block)}</div> : null;
          case "blocks.blog-list":
            return <BlogListBlock key={key} block={block} />;
          case "blocks.faq":
            return <FaqBlock key={key} block={block} />;
          case "blocks.brands-strip":
            return <BrandsStripBlock key={key} block={block} />;
          case "blocks.two-column":
            return <TwoColumnBlock key={key} block={block} />;
          case "blocks.rich-text":
            return <RichTextBlock key={key} block={block} />;
          case "blocks.gallery":
            return <GalleryBlock key={key} block={block} />;
          case "blocks.color-carousel":
            return <ColorCarouselBlock key={key} block={block} />;
          case "blocks.contact-form":
            return <ContactSection key={key} global={global} />;
          case "blocks.accordion":
            return <AccordionBlock key={key} block={block} />;
          case "blocks.category-grid":
            return <CategoryGridBlock key={key} block={block} />;
          case "blocks.map-embed":
            return <MapEmbedBlock key={key} block={block} />;
          case "blocks.numbered-list":
            return <NumberedListBlock key={key} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
