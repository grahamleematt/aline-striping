import {
  createRootRoute,
  HeadContent,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BUSINESS_INFO } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/constants";

export const Route = createRootRoute({
  component: RootLayout,
});

// Schema markup for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.alinestripinginc.com/#organization",
  name: BUSINESS_INFO.name,
  url: "https://www.alinestripinginc.com",
  logo: "https://www.alinestripinginc.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+1${BUSINESS_INFO.phoneRaw}`,
    contactType: "customer service",
    areaServed: ["US-MS", "US-TN", "US-AR"],
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/alinestripinginc",
    "https://g.page/alinestripinginc",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.alinestripinginc.com/#business",
  name: BUSINESS_INFO.name,
  image: "https://www.alinestripinginc.com/images/parking-lot-striping.webp",
  url: "https://www.alinestripinginc.com",
  telephone: `+1${BUSINESS_INFO.phoneRaw}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.9537,
    longitude: -90.0346,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "05:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS_INFO.googleRating,
    reviewCount: 50,
    bestRating: 5,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Mississippi",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tennessee",
    },
    {
      "@type": "AdministrativeArea",
      name: "Arkansas",
    },
  ],
  review: TESTIMONIALS.slice(0, 3).map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.quote,
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BUSINESS_INFO.name,
  url: "https://www.alinestripinginc.com",
};

/**
 * Navigation Progress Indicator
 * Shows a subtle progress bar at the top during route transitions
 */
function NavigationProgress({ isNavigating }: { isNavigating: boolean }) {
  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          className="fixed inset-x-0 top-0 z-100 h-1 bg-stripe-500"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{
            scaleX: 0.7,
            transition: { duration: 2, ease: "easeOut" },
          }}
          exit={{
            scaleX: 1,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" },
          }}
        />
      )}
    </AnimatePresence>
  );
}

function RootLayout() {
  const isNavigating = useRouterState({
    select: (s) => s.isLoading,
  });

  return (
    <>
      <HeadContent />
      <NavigationProgress isNavigating={isNavigating} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<PageLoadingFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

/**
 * Loading fallback for React Suspense
 * Shows subtle skeleton while route chunks load
 */
function PageLoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-stripe-500 border-t-transparent" />
        <p className="text-sm text-asphalt-500">Loading...</p>
      </div>
    </div>
  );
}
