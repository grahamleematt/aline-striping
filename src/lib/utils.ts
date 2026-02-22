import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 * Handles conditional classes and deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Format phone number for tel: link
 */
export function formatPhoneLink(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

/**
 * Business information - Single source of truth
 */
export const BUSINESS_INFO = {
  name: "A-Line Striping, Inc.",
  phone: "(901) 335-8772",
  phoneRaw: "9013358772",
  address: {
    street: "6585 Wallace Lane",
    city: "Horn Lake",
    state: "MS",
    zip: "38637",
    full: "6585 Wallace Lane, Horn Lake, MS 38637",
  },
  hours: {
    weekday: "Mon - Sat: 5:00 AM - 5:00 PM",
    weekend: "Sun: Appointments Only",
  },
  founded: 2003,
  yearsExperience: new Date().getFullYear() - 2003,
  warranty: "1-Year",
  googleRating: 5.0,
  googleReviewUrl: "https://maps.app.goo.gl/bJQBiRLMoJ8UVvKF9",
} as const;

/**
 * Track click-to-call events in GA4
 */
export function trackPhoneClick() {
  window.gtag?.("event", "click_to_call", {
    event_category: "Contact",
    event_label: BUSINESS_INFO.phone,
  });
}

/**
 * Service area counties
 */
export const SERVICE_AREAS = {
  mississippi: [
    { name: "DeSoto County", slug: "desoto-county-ms" },
    { name: "Marshall County", slug: "marshall-county-ms" },
    { name: "Panola County", slug: "panola-county-ms" },
    { name: "Tate County", slug: "tate-county-ms" },
    { name: "Bolivar County", slug: "bolivar-county-ms" },
    { name: "Lafayette County", slug: "lafayette-county-ms" },
  ],
  tennessee: [{ name: "Shelby County", slug: "shelby-county-tn" }],
  arkansas: [{ name: "Crittenden County", slug: "crittenden-county-ar" }],
} as const;

/**
 * Navigation structure
 */
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Parking Lot Striping", href: "/services/parking-lot-striping" },
      {
        label: "Warehouse Floor Striping",
        href: "/services/warehouse-floor-striping",
      },
      { label: "Asphalt Sealcoating", href: "/services/asphalt-sealcoating" },
      { label: "Layout Design", href: "/services/layout-design" },
      {
        label: "Precision Linework & Signage",
        href: "/services/precision-linework-signage",
      },
    ],
  },
  { label: "Why Us", href: "/why-us" },
  {
    label: "Resources",
    children: [
      { label: "Service Areas", href: "/service-areas" },
      { label: "Our Work", href: "/our-work" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
] as const;

/**
 * Footer links
 */
export const FOOTER_LINKS = {
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;
