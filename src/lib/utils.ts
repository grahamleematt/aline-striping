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
  facebookUrl:
    "https://www.facebook.com/people/A-Line-Striping/100053403776315/",
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
export interface ServiceArea {
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  cities: string[];
  description: string;
}

export const SERVICE_AREA_DATA: ServiceArea[] = [
  {
    name: "DeSoto County",
    slug: "desoto-county-ms",
    state: "Mississippi",
    stateAbbr: "MS",
    cities: [
      "Horn Lake",
      "Southaven",
      "Olive Branch",
      "Hernando",
      "Walls",
      "Nesbit",
    ],
    description:
      "Our home base. DeSoto County is one of the fastest-growing counties in Mississippi, and we keep its commercial properties, churches, and retail lots looking sharp with precision striping and sealcoating.",
  },
  {
    name: "Marshall County",
    slug: "marshall-county-ms",
    state: "Mississippi",
    stateAbbr: "MS",
    cities: ["Byhalia", "Holly Springs", "Potts Camp"],
    description:
      "From Holly Springs to Byhalia, we provide parking lot striping, warehouse marking, and sealcoating services throughout Marshall County.",
  },
  {
    name: "Panola County",
    slug: "panola-county-ms",
    state: "Mississippi",
    stateAbbr: "MS",
    cities: ["Batesville", "Sardis", "Como", "Pope"],
    description:
      "We serve businesses and property owners across Panola County with professional striping, layout design, and pavement protection.",
  },
  {
    name: "Tate County",
    slug: "tate-county-ms",
    state: "Mississippi",
    stateAbbr: "MS",
    cities: ["Senatobia", "Coldwater", "Independence", "Strayhorn"],
    description:
      "Tate County businesses trust A-Line Striping for durable parking lot markings, ADA compliance, and sealcoating services.",
  },
  {
    name: "Bolivar County",
    slug: "bolivar-county-ms",
    state: "Mississippi",
    stateAbbr: "MS",
    cities: ["Cleveland", "Shelby", "Rosedale", "Merigold"],
    description:
      "We bring the same precision and quality to the Mississippi Delta, serving Bolivar County with full striping and sealcoating services.",
  },
  {
    name: "Lafayette County",
    slug: "lafayette-county-ms",
    state: "Mississippi",
    stateAbbr: "MS",
    cities: ["Oxford", "Abbeville", "Taylor"],
    description:
      "Home of Ole Miss and a growing commercial hub, Lafayette County relies on A-Line Striping for professional parking lot and facility marking.",
  },
  {
    name: "Shelby County",
    slug: "shelby-county-tn",
    state: "Tennessee",
    stateAbbr: "TN",
    cities: [
      "Memphis",
      "Collierville",
      "Bartlett",
      "Germantown",
      "Lakeland",
      "Arlington",
    ],
    description:
      "Our largest service area. From downtown Memphis to the suburbs of Collierville and Germantown, we provide parking lot striping, warehouse marking, and sealcoating across the entire county.",
  },
  {
    name: "Crittenden County",
    slug: "crittenden-county-ar",
    state: "Arkansas",
    stateAbbr: "AR",
    cities: ["West Memphis", "Marion", "Earle", "Turrell"],
    description:
      "Just across the river from Memphis, we serve Crittenden County businesses with the same quality and reliability our Mid-South clients expect.",
  },
];

export const SERVICE_AREAS = {
  mississippi: SERVICE_AREA_DATA.filter((a) => a.stateAbbr === "MS").map(
    (a) => ({
      name: a.name,
      slug: a.slug,
    }),
  ),
  tennessee: SERVICE_AREA_DATA.filter((a) => a.stateAbbr === "TN").map((a) => ({
    name: a.name,
    slug: a.slug,
  })),
  arkansas: SERVICE_AREA_DATA.filter((a) => a.stateAbbr === "AR").map((a) => ({
    name: a.name,
    slug: a.slug,
  })),
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
