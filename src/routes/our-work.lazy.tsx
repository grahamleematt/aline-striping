import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Star,
  Shield,
  Camera,
  Sparkles,
  CheckCircle2,
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

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "parking", label: "Parking Lots" },
  { id: "warehouse", label: "Warehouses" },
  { id: "sealcoating", label: "Sealcoating" },
];

const projects = [
  {
    id: 1,
    title: "Shopping Center Striping",
    category: "parking",
    location: "Southaven, MS",
    description:
      "Complete re-striping of 400+ stall retail parking lot with ADA compliance updates.",
    services: ["Line Striping", "ADA Markings", "Fire Lanes"],
  },
  {
    id: 2,
    title: "Warehouse Floor Marking",
    category: "warehouse",
    location: "Memphis, TN",
    description:
      "Industrial floor striping for 50,000 sq ft distribution center with forklift lanes.",
    services: ["Floor Striping", "Safety Zones", "Pedestrian Paths"],
  },
  {
    id: 3,
    title: "Church Parking Lot",
    category: "parking",
    location: "Olive Branch, MS",
    description:
      "Full parking lot layout design and striping for growing congregation.",
    services: ["Layout Design", "Striping", "Handicap Signs"],
  },
  {
    id: 4,
    title: "Commercial Sealcoating",
    category: "sealcoating",
    location: "Horn Lake, MS",
    description:
      "Sealcoating and crack repair for office park with 200 parking spaces.",
    services: ["Sealcoating", "Crack Sealing", "Re-Striping"],
  },
  {
    id: 5,
    title: "Industrial Facility",
    category: "warehouse",
    location: "West Memphis, AR",
    description:
      "Complete interior and exterior marking for manufacturing plant.",
    services: ["Interior Striping", "Exterior Lot", "Safety Markings"],
  },
  {
    id: 6,
    title: "Retail Plaza Renovation",
    category: "parking",
    location: "Germantown, TN",
    description:
      "Parking lot renovation including sealcoating and fresh striping.",
    services: ["Sealcoating", "Striping", "Signage"],
  },
  {
    id: 7,
    title: "Distribution Center",
    category: "warehouse",
    location: "Hernando, MS",
    description: "OSHA-compliant floor markings for large logistics facility.",
    services: ["Floor Markings", "Hazard Zones", "Forklift Lanes"],
  },
  {
    id: 8,
    title: "Driveway Sealcoating",
    category: "sealcoating",
    location: "Collierville, TN",
    description: "Residential driveway sealcoating with crack repair.",
    services: ["Sealcoating", "Crack Filling", "Edge Sealing"],
  },
];

function OurWorkPage() {
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
                className="rounded-full border border-asphalt-200 bg-white px-5 py-2.5 text-sm font-medium text-asphalt-700 shadow-sm transition-all hover:border-stripe-500 hover:bg-stripe-50 hover:text-stripe-600 focus:outline-none focus:ring-2 focus:ring-stripe-500 focus:ring-offset-2"
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                variant="elevated"
                className="group overflow-hidden"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-asphalt-100">
                  <ResponsiveImage
                    src={`/images/projects/${project.id}.webp`}
                    alt={project.title}
                    widths={[400]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-asphalt-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category === "parking"
                        ? "Parking Lot"
                        : project.category === "warehouse"
                          ? "Warehouse"
                          : "Sealcoating"}
                    </Badge>
                    <span className="text-xs text-asphalt-600">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-asphalt-900">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-asphalt-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-asphalt-100 px-2.5 py-1 text-xs font-medium text-asphalt-600"
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
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

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
                className="glass-dark rounded-2xl border border-white/10 p-6"
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
    </div>
  );
}
