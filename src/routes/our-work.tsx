import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Star,
  Shield,
  Camera,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export const Route = createFileRoute("/our-work")({
  component: OurWorkPage,
  head: () => ({
    meta: [
      {
        title: "Our Work | Project Gallery | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "View our portfolio of parking lot striping, sealcoating, and warehouse marking projects across the Mid-South. Quality work backed by a 1-Year warranty.",
      },
    ],
  }),
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
      <section className="relative overflow-hidden bg-asphalt-950 pb-32 pt-40">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-stripe-500/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-electric-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-spotlight opacity-50" />

        <div className="container-section relative">
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

            {/* Trust indicators */}
            <div className="flex animate-fade-in-up stagger-3 flex-wrap items-center justify-center gap-8 text-asphalt-300">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-stripe-500 text-stripe-500"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  {BUSINESS_INFO.googleRating} on Google
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success-400" />
                <span className="text-sm font-medium">
                  {BUSINESS_INFO.warranty} Warranty
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-stripe-400" />
                <span className="text-sm font-medium">1000+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="relative -mt-16 pb-24 lg:pb-32">
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
                {/* Image placeholder */}
                <div className="relative aspect-4/3 bg-asphalt-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-asphalt-300">Project Photo</span>
                  </div>
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
            {[
              {
                quote:
                  "Alex is great to work with and communicates thoroughly. Will highly recommend A-line to friends and family!",
                author: "Tori S.",
                role: "Business Owner",
              },
              {
                quote:
                  "Professional, sincere, honest and has always done quality work for us. You will not go wrong if you give A-Line Striping a call.",
                author: "Steven L.",
                role: "15-Year Client",
              },
              {
                quote:
                  "Amazing team! They saved us from an unfinished job and were quick, accurate, and friendly!",
                author: "First Baptist Church",
                role: "Olive Branch, MS",
              },
            ].map((testimonial, index) => (
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

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-stripe-500 via-stripe-400 to-stripe-500" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Ready to start
              <br />
              your project?
            </h2>
            <p className="mb-10 text-xl text-asphalt-800">
              Join our growing list of satisfied clients. Get a free,
              no-obligation quote today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="bg-asphalt-900 text-white shadow-xl hover:bg-asphalt-800"
              >
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-asphalt-900 text-asphalt-900 hover:bg-asphalt-900/10"
              >
                <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                  <Phone className="mr-2 h-5 w-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
