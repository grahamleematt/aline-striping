import { createLazyFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Shield,
  Award,
  Paintbrush,
  Star,
  Heart,
  Target,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { BUSINESS_INFO } from "@/lib/utils";

export const Route = createLazyFileRoute("/why-us")({
  component: WhyUsPage,
});

const qualityStandards = [
  "DOT-approved, commercial-grade paints",
  "Pre-formed thermoplastics for durability",
  "Superior adhesion and high visibility",
  "Weather and UV resistance",
  "Designed for high-traffic environments",
];

const differentiators = [
  {
    icon: Paintbrush,
    title: "Industry-Leading Quality",
    description:
      "DOT-approved, commercial-grade paints, thermoplastics, and surface prep products selected for high visibility, adhesion, and weather resistance.",
  },
  {
    icon: Target,
    title: "Professional Craftsmanship",
    description:
      "Exact measurements, consistent line thickness, crisp edges, and reliable execution from a team that treats every project like our reputation depends on it.",
  },
  {
    icon: CheckCircle2,
    title: "Safety & ADA Compliance",
    description:
      "ADA-compliant layouts, traffic flow planning, fire lanes, crosswalks, loading zones, and high-visibility markings completed with safety first.",
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    description:
      "A partner committed to durability, compliance, aesthetics, clear communication, and the long-term success of your property.",
  },
];

const testimonials = [
  {
    quote:
      "Alex is great to work with and communicates thoroughly. Will highly recommend A-line to friends and family!",
    author: "Tori S.",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote:
      "Professional, sincere, honest and has always done quality work for us.",
    author: "Steven L.",
    role: "15-Year Client",
    rating: 5,
  },
  {
    quote:
      "Fantastic Job!!! I am an artist, and this is ART to me!!! Quality Work.",
    author: "Rick M.",
    role: "Verified Customer",
    rating: 5,
  },
];

function WhyUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero showSpotlight={false}>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="glass" className="mb-6">
            <Heart className="mr-1.5 h-3.5 w-3.5" />
            Women-Owned Since {BUSINESS_INFO.founded}
          </Badge>

          <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Built on trust,
            <br />
            <span className="gradient-text">driven by craftsmanship</span>
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-asphalt-300">
            Founded in {BUSINESS_INFO.founded}, our company began as a small
            striping operation driven by a simple promise: deliver quality work
            with honesty and care. For over {BUSINESS_INFO.yearsExperience}{" "}
            years, that promise has guided everything we do.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Badge variant="rating">
              <Star className="mr-1.5 h-4 w-4 fill-current" />
              {BUSINESS_INFO.googleRating}/5 Rating
            </Badge>
            <Badge variant="glass-dark">
              <Award className="mr-1.5 h-4 w-4" />
              BBB A+ Accredited
            </Badge>
            <Badge variant="warranty">
              <Shield className="mr-1.5 h-4 w-4" />
              {BUSINESS_INFO.warranty} Warranty
            </Badge>
          </div>
        </div>
      </PageHero>

      {/* Story Section */}
      <section className="relative pt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
            <Card variant="elevated" className="p-5 sm:p-8 lg:p-12">
              <h2 className="mb-6 font-display text-3xl font-bold text-asphalt-900">
                Our Story
              </h2>
              <div className="space-y-4 text-asphalt-600">
                <p>
                  Founded in {BUSINESS_INFO.founded}, our company began as a
                  small striping operation driven by a simple promise: deliver
                  quality work with honesty and care. For over 20 years, that
                  promise has guided our growth into a trusted provider of
                  parking lot striping, sealcoating, and pavement maintenance
                  services.
                </p>
                <p>
                  As a women-owned, family-run business, our work is personal.
                  We pride ourselves on the craftsmanship we bring to every
                  project and the relationships we build with the communities we
                  serve. Based in Horn Lake, MS, we understand how much a safe,
                  well-marked parking lot means for a business.
                </p>
                <p>
                  Our story is rooted in dedication and strengthened by the
                  customers who trust us. Even as we&apos;ve grown, our mission
                  has remained the same: deliver reliable, high-quality
                  solutions that make every property safer, cleaner, and more
                  welcoming.
                </p>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <Card key={item.title} variant="elevated" className="group p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-stripe-500/20 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-asphalt-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-asphalt-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="bg-asphalt-50 py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <Zap className="mr-1.5 h-3.5 w-3.5" />
                Why Choose A-Line
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900">
                More than pavement.
                <br />
                <span className="gradient-text">
                  An investment worth protecting.
                </span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                At A-Line Striping Inc., we believe your pavement is more than a
                surface. It&apos;s an investment in safety, accessibility, and
                the lasting value of your property. Our mission is to deliver
                reliable, long-lasting striping, layout, and maintenance
                solutions backed by our 1-year workmanship warranty, clear
                communication, and premium materials.
              </p>
              <ul className="space-y-3">
                {qualityStandards.map((standard) => (
                  <li key={standard} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
                    <span className="text-asphalt-700">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card variant="elevated" className="p-5 sm:p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Paintbrush className="h-8 w-8 text-stripe-500" />
                <h3 className="font-display text-2xl font-bold text-asphalt-900">
                  Professional Craftsmanship You Can Trust
                </h3>
              </div>
              <p className="text-asphalt-600">
                Our skilled technicians bring years of experience in line
                striping, layout design, ADA compliance, and facility safety
                planning. Precision is our priority, from exact measurements and
                alignment to consistent line thickness and crisp edges.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center bg-linear-to-br from-stripe-500 to-stripe-400">
                  <span className="font-display text-2xl font-bold text-asphalt-900">
                    {BUSINESS_INFO.yearsExperience}+
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-asphalt-900">
                    Years Experience
                  </p>
                  <p className="text-sm text-asphalt-600">
                    Serving the Mid-South
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-stripe-500 text-stripe-500"
                />
              ))}
            </div>
            <h2 className="mb-4 font-display text-4xl font-bold text-white">
              What our customers say
            </h2>
            <p className="text-lg text-asphalt-300">
              Our reputation is built on the trust of businesses across the
              Mid-South.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-dark border-2 border-asphalt-700 border-t-4 border-t-stripe-500 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-stripe-500 text-stripe-500"
                    />
                  ))}
                </div>
                <p className="mb-6 text-white/90">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-asphalt-300">
                      {testimonial.role}
                    </p>
                  </div>
                  <Badge variant="glass-dark">Verified</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading={
          <>
            Ready to work with a team
            <br />
            that cares?
          </>
        }
        description="Whether you're managing a commercial lot, industrial facility, municipality, or residential community, you deserve a team who cares as much about the result as you do."
        primaryButtonText="Request a Free Quote"
      />
    </div>
  );
}
