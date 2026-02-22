import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, ChevronDown, X } from "lucide-react";
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
        "transition-all duration-150",
        isScrolled ? "bg-white border-b-4 border-black" : "bg-transparent",
      )}
    >
      <nav className="container-section" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5 md:gap-3">
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
          <div className="hidden items-center gap-1 lg:flex">
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
                        "flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide",
                        "border-b-4 border-transparent",
                        "hover:border-stripe-500",
                        isScrolled
                          ? "text-asphalt-900"
                          : "text-white hover:text-stripe-500",
                        openDropdown === item.label &&
                          (isScrolled
                            ? "border-stripe-500"
                            : "border-stripe-500 text-stripe-500"),
                      )}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-100",
                          openDropdown === item.label && "rotate-180",
                        )}
                        strokeWidth={2.5}
                      />
                    </button>

                    <div
                      className={cn(
                        "absolute left-0 top-full z-50 min-w-[240px] pt-2",
                        "transition-all duration-100",
                        openDropdown === item.label
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0",
                      )}
                    >
                      <div className="border-2 border-black bg-white p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-asphalt-900 hover:bg-stripe-500 hover:text-asphalt-950"
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
                      "inline-flex items-center px-3 py-2 text-sm font-bold uppercase tracking-wide",
                      "border-b-4 border-transparent",
                      "hover:border-stripe-500",
                      isScrolled
                        ? "text-asphalt-900"
                        : "text-white hover:text-stripe-500",
                      "[&.active]:border-stripe-500",
                      isScrolled
                        ? "[&.active]:text-asphalt-900"
                        : "[&.active]:text-stripe-500",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side — CALL NOW CTA + Mobile menu */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* CALL NOW — massive CTA */}
            <a
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              onClick={trackPhoneClick}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase tracking-wide",
                "bg-stripe-500 text-asphalt-950 border-b-4 border-black",
                "hover:bg-stripe-400",
                "active:border-b-0 active:translate-y-[4px]",
                "md:px-6 md:py-2.5 md:text-base",
              )}
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.5} />
              <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
              <span className="xl:hidden">CALL</span>
            </a>

            {/* Mobile menu button */}
            <button
              className={cn(
                "flex h-10 w-10 items-center justify-center border-2 lg:hidden",
                isScrolled
                  ? "border-black text-asphalt-900 hover:bg-stripe-500 hover:text-asphalt-950"
                  : "border-white text-white hover:bg-stripe-500 hover:border-stripe-500 hover:text-asphalt-950",
                isMobileMenuOpen &&
                  "bg-stripe-500 border-stripe-500 text-asphalt-950",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-100",
                    isMobileMenuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100",
                  )}
                  strokeWidth={2.5}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-100",
                    isMobileMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0",
                  )}
                  strokeWidth={2.5}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 lg:hidden",
          "transition-opacity duration-150",
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
          "fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white border-l-4 border-black shadow-2xl lg:hidden",
          "transition-transform duration-150",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b-4 border-black px-4 md:h-20 md:px-6">
          <span className="font-display text-lg font-bold uppercase tracking-wide text-asphalt-900">
            Menu
          </span>
          <button
            className="flex h-10 w-10 items-center justify-center border-2 border-black text-asphalt-900 hover:bg-stripe-500 hover:text-asphalt-950"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex h-[calc(100%-4rem)] flex-col overflow-y-auto p-4 md:h-[calc(100%-5rem)] md:p-6">
          <div className="flex-1 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {"children" in item ? (
                  <div className="py-2">
                    <div className="mb-2 px-3 text-xs font-black uppercase tracking-widest text-asphalt-500">
                      {item.label}
                    </div>
                    <div className="space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="flex items-center border-l-4 border-transparent px-3 py-3 text-sm font-bold uppercase tracking-wide text-asphalt-900 hover:border-stripe-500 hover:bg-asphalt-50"
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
                    className="flex items-center border-l-4 border-transparent px-3 py-3 text-sm font-bold uppercase tracking-wide text-asphalt-900 hover:border-stripe-500 hover:bg-asphalt-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-4 border-t-4 border-black pt-6">
            <a
              href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
              onClick={trackPhoneClick}
              className="flex items-center gap-3 border-2 border-black bg-asphalt-50 px-4 py-3 font-bold uppercase tracking-wide text-asphalt-900 hover:bg-asphalt-100"
            >
              <Phone className="h-5 w-5 text-stripe-500" strokeWidth={2.5} />
              {BUSINESS_INFO.phone}
            </a>
            <Button asChild variant="primary" size="lg" className="w-full">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                REQUEST A FREE QUOTE
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
