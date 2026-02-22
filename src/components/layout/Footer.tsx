import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, ArrowUpRight } from "lucide-react";
import {
  BUSINESS_INFO,
  SERVICE_AREAS,
  FOOTER_LINKS,
  formatPhoneLink,
  trackPhoneClick,
  cn,
} from "@/lib/utils";

/**
 * Shared link styles for footer navigation
 * Includes hover, focus, and active states for smooth transitions
 */
const footerLinkStyles = cn(
  "text-sm transition-all duration-200",
  // Default state
  "text-asphalt-300",
  // Hover state
  "hover:text-white hover:translate-x-0.5",
  // Focus state (keyboard navigation)
  "focus-visible:text-white focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4",
  // Active/pressed state
  "active:text-stripe-400 active:scale-[0.98]",
);

const footerServices = [
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
];

const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/why-us" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Our Work", href: "/our-work" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const routerState = useRouterState();
  const isNavigating = routerState.isLoading;

  return (
    <footer className="relative overflow-hidden bg-asphalt-950 text-asphalt-300">
      {/* Gradient accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-stripe-500/50 to-transparent" />

      {/* Background elements */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-stripe-500/5 blur-[100px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-electric-500/5 blur-[120px]" />

      <div className="container-section relative">
        {/* Main footer content */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className={cn(
                "mb-6 inline-flex items-center gap-3",
                "transition-all duration-200",
                "hover:opacity-90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stripe-500 focus-visible:ring-offset-2 focus-visible:ring-offset-asphalt-950 focus-visible:rounded-lg",
                "active:scale-[0.98]",
                isNavigating && "pointer-events-none opacity-70",
              )}
            >
              <img
                src="/images/logo-white.svg"
                alt="A-Line Striping Inc."
                width={180}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-asphalt-300">
              Women-owned, family-run business serving the Mid-South since{" "}
              {BUSINESS_INFO.founded}. Professional parking lot striping,
              sealcoating, and warehouse marking services.
            </p>

            {/* Contact info */}
            <ul className="space-y-3">
              <li>
                <a
                  href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                  onClick={trackPhoneClick}
                  className="inline-flex items-center gap-3 text-white transition-colors hover:text-stripe-400"
                >
                  <Phone className="h-4 w-4 text-stripe-500" />
                  <span className="font-semibold">{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-stripe-500" />
                <span className="text-sm">{BUSINESS_INFO.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-stripe-500" />
                <div className="text-sm">
                  <p>{BUSINESS_INFO.hours.weekday}</p>
                  <p className="text-asphalt-400">
                    {BUSINESS_INFO.hours.weekend}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-asphalt-400">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className={cn(
                      footerLinkStyles,
                      isNavigating && "pointer-events-none opacity-70",
                    )}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-asphalt-400">
              Company
            </h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      footerLinkStyles,
                      isNavigating && "pointer-events-none opacity-70",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-asphalt-400">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                ...SERVICE_AREAS.mississippi.slice(0, 3),
                ...SERVICE_AREAS.tennessee,
              ].map((area) => (
                <Link
                  key={area.slug}
                  to="/service-areas"
                  className="rounded-full bg-asphalt-800/50 px-3 py-1.5 text-xs text-asphalt-300 transition-colors hover:bg-asphalt-700/50 hover:text-white"
                >
                  {area.name}
                </Link>
              ))}
              <Link
                to="/service-areas"
                className={cn(
                  "inline-flex items-center gap-1 rounded-full bg-stripe-500/10 px-3 py-1.5 text-xs text-stripe-400",
                  "transition-all duration-200",
                  "hover:bg-stripe-500/20 hover:text-stripe-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stripe-500 focus-visible:ring-offset-2 focus-visible:ring-offset-asphalt-950",
                  "active:scale-[0.97] active:bg-stripe-500/30",
                  isNavigating && "pointer-events-none opacity-70",
                )}
              >
                +
                {SERVICE_AREAS.mississippi.length +
                  SERVICE_AREAS.arkansas.length -
                  2}{" "}
                more
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 space-y-3">
              <a
                href={BUSINESS_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-stripe-500 text-stripe-500"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white">
                  {BUSINESS_INFO.googleRating}/5
                </span>
                <span className="text-xs text-asphalt-400">
                  Leave Us a Review
                </span>
              </a>
              <a
                href="https://www.bbb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-asphalt-800/50 px-3 py-2 transition-colors hover:bg-asphalt-700/50"
              >
                <img
                  src="/images/bbb-badge.svg"
                  alt="BBB A+ Accredited Business"
                  width={70}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-asphalt-800/50 py-6 sm:flex-row">
          <p className="text-sm text-asphalt-400">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-xs transition-all duration-200",
                  "text-asphalt-400 hover:text-white",
                  "focus-visible:text-white focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4",
                  "active:text-stripe-400 active:scale-[0.98]",
                  isNavigating && "pointer-events-none opacity-70",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
