import { useState, useEffect } from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Star,
  Shield,
  Camera,
  Sparkles,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { BUSINESS_INFO } from "@/lib/utils";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { TrustIndicators } from "@/components/layout/TrustIndicators";
import { TESTIMONIALS } from "@/lib/constants";

export const Route = createLazyFileRoute("/our-work")({
  component: OurWorkPage,
});

type ProjectCategory =
  | "all"
  | "parking"
  | "warehouse"
  | "sealcoating"
  | "signage";

const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "parking", label: "Parking Lots" },
  { id: "warehouse", label: "Warehouses" },
  { id: "signage", label: "Signage & Linework" },
  { id: "sealcoating", label: "Sealcoating" },
];

interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  services: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Venue Parking Lot",
    category: "parking",
    services: ["Line Striping", "Layout Design"],
  },
  {
    id: 2,
    title: "Stop Markings & Directional Arrows",
    category: "signage",
    services: ["Road Markings", "Stenciling"],
  },
  {
    id: 3,
    title: "ADA Parking at Commercial Building",
    category: "parking",
    services: ["ADA Markings", "Line Striping"],
  },
  {
    id: 4,
    title: "Do Not Enter Crosshatch Marking",
    category: "signage",
    services: ["Stenciling", "Safety Zones"],
  },
  {
    id: 5,
    title: "Church Parking Lot Striping",
    category: "parking",
    services: ["Line Striping", "Layout Design"],
  },
  {
    id: 6,
    title: "Warehouse Floor Zone Markings",
    category: "warehouse",
    services: ["Floor Striping", "Safety Zones"],
  },
  {
    id: 7,
    title: "Warehouse Stop Stencil",
    category: "warehouse",
    services: ["Stenciling", "Safety Markings"],
  },
  {
    id: 8,
    title: "School Parking Lot & Curb Paint",
    category: "parking",
    services: ["Line Striping", "Curb Paint", "Crosswalks"],
  },
  {
    id: 9,
    title: "Retail No-Parking Zone Markings",
    category: "parking",
    services: ["Safety Zones", "Crosshatch"],
  },
  {
    id: 10,
    title: "Warehouse Safety Lane Markings",
    category: "warehouse",
    services: ["Floor Striping", "Forklift Lanes"],
  },
  {
    id: 11,
    title: "Fresh Sealcoat with New Striping",
    category: "sealcoating",
    services: ["Sealcoating", "Re-Striping"],
  },
  {
    id: 12,
    title: "ADA Handicap Crosshatch Markings",
    category: "parking",
    services: ["ADA Markings", "Crosshatch"],
  },
  {
    id: 13,
    title: "Loading Dock Bay Striping",
    category: "warehouse",
    services: ["Dock Markings", "Safety Zones"],
  },
  {
    id: 14,
    title: "Commercial ADA Parking Spaces",
    category: "parking",
    services: ["ADA Markings", "Line Striping"],
  },
  {
    id: 15,
    title: "Large Commercial Lot Re-Striping",
    category: "parking",
    services: ["Line Striping", "Re-Striping"],
  },
  {
    id: 16,
    title: "Industrial Dock Numbered Bays",
    category: "warehouse",
    services: ["Dock Numbering", "Safety Zones"],
  },
  {
    id: 17,
    title: "Retail Parking No-Park Zones",
    category: "parking",
    services: ["Safety Zones", "Crosshatch"],
  },
  {
    id: 18,
    title: "Loading Dock Bay Numbering",
    category: "warehouse",
    services: ["Dock Numbering", "Custom Markings"],
  },
  {
    id: 19,
    title: "ADA Crosshatch on Fresh Asphalt",
    category: "parking",
    services: ["ADA Markings", "Crosshatch"],
  },
  {
    id: 20,
    title: "Handicap Parking Yellow Markings",
    category: "parking",
    services: ["ADA Markings", "Line Striping"],
  },
  {
    id: 21,
    title: "Numbered Commercial Parking Spaces",
    category: "parking",
    services: ["Numbering", "Line Striping"],
  },
  {
    id: 22,
    title: "Drive-Through Parking Layout",
    category: "parking",
    services: ["Layout Design", "Line Striping"],
  },
  {
    id: 23,
    title: "Drive Lane Directional Arrows",
    category: "parking",
    services: ["Directional Arrows", "Line Striping"],
  },
  {
    id: 24,
    title: "No Parking Fire Lane Markings",
    category: "signage",
    services: ["Fire Lanes", "Stenciling"],
  },
  {
    id: 25,
    title: "Drive Up Directional Markings",
    category: "signage",
    services: ["Custom Text", "Directional Arrows"],
  },
  {
    id: 26,
    title: "ADA Handicap Symbols — Fresh Lot",
    category: "parking",
    services: ["ADA Markings", "Line Striping"],
  },
  {
    id: 27,
    title: "Park Area Fresh Lot Striping",
    category: "parking",
    services: ["Line Striping", "Layout Design"],
  },
  {
    id: 28,
    title: "Speed Bump Safety Painting",
    category: "signage",
    services: ["Safety Markings", "Speed Bump Paint"],
  },
  {
    id: 29,
    title: "Facility Stop Marking & Speed Bump",
    category: "signage",
    services: ["Stenciling", "Safety Markings"],
  },
  {
    id: 30,
    title: "Fresh Sealcoat & Line Striping",
    category: "sealcoating",
    services: ["Sealcoating", "Re-Striping"],
  },
  {
    id: 31,
    title: "Warehouse Green Safety Lanes",
    category: "warehouse",
    services: ["Floor Striping", "Pedestrian Paths"],
  },
  {
    id: 32,
    title: "Large Warehouse Floor Markings",
    category: "warehouse",
    services: ["Floor Striping", "Safety Zones"],
  },
  {
    id: 33,
    title: "Retail Lot Crosshatch Zones",
    category: "parking",
    services: ["Safety Zones", "Crosshatch"],
  },
  {
    id: 34,
    title: "Open Lot Striping in Progress",
    category: "parking",
    services: ["Line Striping", "Layout Design"],
  },
  {
    id: 35,
    title: "Industrial Gate Entry Markings",
    category: "warehouse",
    services: ["Custom Markings", "Safety Zones"],
  },
];

function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const lightboxProject =
    lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  const navigateLightbox = (direction: -1 | 1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + direction;
      if (next < 0 || next >= filteredProjects.length) return prev;
      return next;
    });
  };

  const closeLightbox = () => setLightboxIndex(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex animate-fade-in-up">
            <Badge variant="glass" className="px-4 py-2 text-sm">
              <Camera className="mr-2 h-4 w-4 text-stripe-400" />
              <span className="text-white/90">Project Gallery</span>
            </Badge>
          </div>

          <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our
            <br />
            <span className="gradient-text">Work</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
            Browse our portfolio of completed projects across the Mid-South.
            Every project showcases our commitment to quality, precision, and
            customer satisfaction.
          </p>

          <TrustIndicators
            className="animate-fade-in-up stagger-3"
            showStars
            items={[
              {
                icon: Shield,
                text: `${BUSINESS_INFO.warranty} Warranty`,
                iconClassName: "text-success-400",
              },
              { icon: CheckCircle2, text: "1000+ Projects" },
            ]}
          />
        </div>
      </PageHero>

      {/* Project Gallery */}
      <section className="relative pt-16 pb-24 lg:pb-32">
        <div className="container-section">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`border-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-stripe-500 focus:ring-offset-2 ${
                  activeCategory === category.id
                    ? "border-stripe-500 bg-stripe-500 text-asphalt-950"
                    : "border-asphalt-300 bg-white text-asphalt-700 hover:border-stripe-500 hover:bg-stripe-50 hover:text-stripe-600"
                }`}
              >
                {category.label}
                {activeCategory === category.id && category.id !== "all" && (
                  <span className="ml-2 text-xs font-bold">
                    ({filteredProjects.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                variant="elevated"
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-asphalt-100">
                  <ResponsiveImage
                    src={`/images/projects/${project.id}.webp`}
                    alt={project.title}
                    widths={[400]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-150 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-asphalt-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <Expand className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category === "parking"
                        ? "Parking Lot"
                        : project.category === "warehouse"
                          ? "Warehouse"
                          : project.category === "signage"
                            ? "Signage"
                            : "Sealcoating"}
                    </Badge>
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-asphalt-900">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="bg-asphalt-100 px-2.5 py-1 text-xs font-medium text-asphalt-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-asphalt-600">
              Want to see more of our work? Contact us for detailed case studies
              and references.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Request More Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Client Testimonials
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              What our clients
              <br />
              <span className="gradient-text">say about us</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="glass-dark border-2 border-asphalt-700 border-t-4 border-t-stripe-500 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-stripe-500 text-stripe-500"
                    />
                  ))}
                </div>
                <p className="mb-4 text-white/90">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-asphalt-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={
          <>
            Ready to start
            <br />
            your project?
          </>
        }
        description="Join our growing list of satisfied clients. Get a free, no-obligation quote today."
      />

      {/* Lightbox */}
      {lightboxProject && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-asphalt-950/95"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxProject.title}
        >
          <div
            className="relative mx-4 flex max-h-[90vh] w-full max-w-5xl flex-col border-2 border-asphalt-700 bg-asphalt-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-asphalt-700 px-5 py-4">
              <div className="flex items-center gap-3">
                <Badge variant="glass" className="text-xs">
                  {lightboxProject.category === "parking"
                    ? "Parking Lot"
                    : lightboxProject.category === "warehouse"
                      ? "Warehouse"
                      : lightboxProject.category === "signage"
                        ? "Signage"
                        : "Sealcoating"}
                </Badge>
                <span className="text-sm text-asphalt-400">
                  {lightboxIndex + 1} / {filteredProjects.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="border-2 border-asphalt-600 p-2 text-asphalt-400 transition-colors hover:border-white hover:bg-white hover:text-asphalt-950 focus:outline-none focus:ring-2 focus:ring-stripe-500"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-asphalt-900 p-4">
              <img
                src={`/images/projects/${lightboxProject.id}.webp`}
                alt={lightboxProject.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />

              {/* Prev/Next buttons */}
              {lightboxIndex > 0 && (
                <button
                  onClick={() => navigateLightbox(-1)}
                  className="absolute left-3 border-2 border-asphalt-600 bg-asphalt-950/80 p-2 text-asphalt-300 transition-colors hover:border-stripe-500 hover:bg-stripe-500 hover:text-asphalt-950 focus:outline-none focus:ring-2 focus:ring-stripe-500"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
              {lightboxIndex < filteredProjects.length - 1 && (
                <button
                  onClick={() => navigateLightbox(1)}
                  className="absolute right-3 border-2 border-asphalt-600 bg-asphalt-950/80 p-2 text-asphalt-300 transition-colors hover:border-stripe-500 hover:bg-stripe-500 hover:text-asphalt-950 focus:outline-none focus:ring-2 focus:ring-stripe-500"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="border-t-2 border-asphalt-700 px-5 py-4">
              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {lightboxProject.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {lightboxProject.services.map((service) => (
                  <span
                    key={service}
                    className="border-2 border-asphalt-600 bg-asphalt-800 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-asphalt-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
