/**
 * JSON-LD structured data helpers (schema.org).
 *
 * Each helper returns a plain object that should be wrapped in:
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />
 *
 * Validate output with Google Rich Results Test.
 */
import type {
  StrapiArticle,
  StrapiGlobalSettings,
  StrapiProductSystem,
} from "../types/strapi";
import { mediaUrl } from "./strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trendhomes.pl";

export function articleJsonLd(a: StrapiArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    image: mediaUrl(a.coverImage, "xlarge"),
    datePublished: a.publishedDate,
    dateModified: a.updatedAt,
    author: { "@type": "Organization", name: a.author || "Trendhomes" },
    publisher: {
      "@type": "Organization",
      name: "Trendhomes",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${a.slug}` },
    articleSection: a.category?.name,
  };
}

export function productJsonLd(p: StrapiProductSystem, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.fullName,
    description: p.description,
    image: mediaUrl(p.mainImage, "large"),
    sku: p.slug,
    brand: p.manufacturer
      ? { "@type": "Brand", name: p.manufacturer.name }
      : undefined,
    category: p.productType,
    url: `${SITE_URL}${baseUrl}/${p.slug}`,
    additionalProperty: [
      p.uw && { "@type": "PropertyValue", name: "Uw", value: p.uw, unitText: "W/m²K" },
      p.depth && { "@type": "PropertyValue", name: "Depth", value: p.depth },
      p.glazing && { "@type": "PropertyValue", name: "Glazing", value: p.glazing },
      p.chambers && { "@type": "PropertyValue", name: "Chambers", value: p.chambers },
      p.layers && { "@type": "PropertyValue", name: "Layers", value: p.layers },
    ].filter(Boolean),
  };
}

export function localBusinessJsonLd(g: StrapiGlobalSettings) {
  const sameAs = [g.socialFacebook, g.socialInstagram].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: g.companyName,
    url: SITE_URL,
    telephone: g.phone,
    email: g.email,
    image: `${SITE_URL}/images/logo.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: g.addressStreet,
      addressLocality: g.addressCity,
      addressCountry: "PL",
    },
    openingHoursSpecification: [
      g.openingHoursWeekdays && {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        description: g.openingHoursWeekdays,
      },
      g.openingHoursSaturday && {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        description: g.openingHoursSaturday,
      },
    ].filter(Boolean),
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    taxID: g.nip ? `PL${g.nip}` : undefined,
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** Convenience: builds a <script> string for embedding in a page. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data, null, 0);
}
