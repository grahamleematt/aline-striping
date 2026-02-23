/**
 * SEO utilities for generating Open Graph, Twitter Card, and canonical meta tags.
 * Used by route head() functions to avoid duplication across 15+ route files.
 */

const SITE_URL = "https://www.alinestripinginc.com";
const SITE_NAME = "A-Line Striping, Inc.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;
const TWITTER_HANDLE = undefined; // Add if/when a Twitter account exists

interface SeoMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
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
  ogType = "website",
}: SeoMetaOptions) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      ...(TWITTER_HANDLE
        ? [{ name: "twitter:site", content: TWITTER_HANDLE }]
        : []),
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
