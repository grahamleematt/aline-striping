import { Link, useLocation } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  ChevronDown,
  X,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import {
  cn,
  BUSINESS_INFO,
  NAV_ITEMS,
  formatPhoneLink,
  trackPhoneClick,
} from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50",
        "transition-all duration-300 ease-out",
        isScrolled
          ? "bg-white/95 shadow-lg shadow-asphalt-950/5 backdrop-blur-xl"
          : "bg-white/0",
      )}
    >
      <nav className="container-section" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80 md:gap-3"
          >
            <ResponsiveImage
              src="/images/logo.webp"
              alt="A-Line Striping Inc."
              width={320}
              height={114}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="h-9 w-auto md:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in item && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {"children" in item ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                        "text-asphalt-700 hover:bg-asphalt-100 hover:text-asphalt-900",
                        openDropdown === item.label && "bg-asphalt-50",
                      )}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          openDropdown === item.label && "rotate-180",
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "absolute left-0 top-full z-50 min-w-[220px] pt-2",
                        "transition-all duration-200 ease-out",
                        openDropdown === item.label
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0",
                      )}
                    >
                      <div className="rounded-xl border border-asphalt-100 bg-white p-1.5 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-asphalt-700 transition-all duration-150 hover:bg-asphalt-50 hover:text-asphalt-900 active:scale-[0.98] active:bg-asphalt-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
                      "text-asphalt-700 hover:bg-asphalt-100 hover:text-asphalt-900",
                      "active:scale-[0.98] active:bg-asphalt-200",
                      "[&.active]:bg-asphalt-100 [&.active]:text-asphalt-900",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Trust badges + CTA + Mobile menu */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Trust badges - desktop only */}
            <div className="hidden items-center gap-3 xl:flex">
              <div className="flex items-center gap-1 text-xs font-medium text-asphalt-600">
                <Shield className="h-3.5 w-3.5 text-success-500" />
                {BUSINESS_INFO.warranty} Warranty
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-asphalt-600">
                <Star className="h-3.5 w-3.5 fill-stripe-500 text-stripe-500" />
                {BUSINESS_INFO.googleRating}/5
              </div>
            </div>

            {/* Phone - visible on tablet+ */}
            <a
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              onClick={trackPhoneClick}
              className="hidden items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-asphalt-700 transition-colors hover:bg-asphalt-100 hover:text-asphalt-900 md:flex lg:hidden xl:flex"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
            </a>

            {/* CTA Button - always visible */}
            <Button asChild variant="primary" size="sm">
              <Link to="/contact">
                <span className="hidden md:inline">Get Quote</span>
                <span className="md:hidden">Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                "text-asphalt-700 hover:bg-asphalt-100",
                isMobileMenuOpen && "bg-asphalt-100",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-200",
                    isMobileMenuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-200",
                    isMobileMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-asphalt-950/50 backdrop-blur-sm lg:hidden",
          "transition-opacity duration-300",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl lg:hidden",
          "transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-asphalt-100 px-4 md:h-20 md:px-6">
          <span className="font-display text-lg font-bold text-asphalt-900">
            Menu
          </span>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-asphalt-700 transition-colors hover:bg-asphalt-100"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-4rem)] flex-col overflow-y-auto p-4 md:h-[calc(100%-5rem)] md:p-6">
          <div className="flex-1 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {"children" in item ? (
                  <div className="py-2">
                    <div className="mb-2 px-3 text-xs font-bold uppercase tracking-widest text-asphalt-500">
                      {item.label}
                    </div>
                    <div className="space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-asphalt-700 transition-all duration-150 hover:bg-asphalt-50 hover:text-asphalt-900 active:scale-[0.99] active:bg-asphalt-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-asphalt-700 transition-all duration-150 hover:bg-asphalt-50 hover:text-asphalt-900 active:scale-[0.99] active:bg-asphalt-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-4 border-t border-asphalt-100 pt-6">
            <a
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              onClick={trackPhoneClick}
              className="flex items-center gap-3 rounded-lg bg-asphalt-50 px-4 py-3 font-medium text-asphalt-900 transition-colors hover:bg-asphalt-100"
            >
              <Phone className="h-5 w-5 text-stripe-500" />
              {BUSINESS_INFO.phone}
            </a>
            <Button asChild variant="primary" size="lg" className="w-full">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Request a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
