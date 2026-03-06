/**
 * SEO utilities for generating Open Graph, Twitter Card, and canonical meta tags.
 * Used by route head() functions to avoid duplication across 15+ route files.
 */

import type { FAQ } from "@/lib/constants";

const SITE_URL = "https://www.alinestripinginc.com";
const SITE_NAME = "A-Line Striping, Inc.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;
const TWITTER_HANDLE = undefined; // Add if/when a Twitter account exists

interface SeoMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article";
  robots?: string;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ServiceSchemaOptions {
  name: string;
  description: string;
  path: string;
  areaServed: readonly string[];
}

/**
 * Generate a complete set of meta tags for a route's head() function.
 * Includes title, description, Open Graph, Twitter Card, and canonical link.
 */
export function buildSeoMeta({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  ogType = "website",
  robots = "index, follow",
}: SeoMetaOptions) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageAlt = ogImageAlt ?? title;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: imageAlt },
      ...(TWITTER_HANDLE
        ? [{ name: "twitter:site", content: TWITTER_HANDLE }]
        : []),
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}

export function getAbsoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function createBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function createFaqSchema(faqs: readonly FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  path,
  areaServed,
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: getAbsoluteUrl(path),
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}
