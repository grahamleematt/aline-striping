import { createLazyFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Shield,
  Award,
  Paintbrush,
  Star,
  Heart,
  Target,
  Clock,
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
    icon: Shield,
    title: "1-Year Warranty",
    description:
      "Every project backed by our comprehensive workmanship guarantee",
  },
  {
    icon: Target,
    title: "Precision Work",
    description: "Expert craftsmanship with DOT-approved materials",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Evenings and weekends available to minimize disruption",
  },
  {
    icon: CheckCircle2,
    title: "ADA Compliant",
    description: "Full accessibility compliance on every project",
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
            <span className="gradient-text">driven by quality</span>
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-asphalt-300">
            For over {BUSINESS_INFO.yearsExperience} years, our simple promise
            has guided our growth: deliver quality work with honesty and care.
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Card variant="elevated" className="p-8 lg:p-12">
              <h2 className="mb-6 font-display text-3xl font-bold text-asphalt-900">
                Our Story
              </h2>
              <div className="space-y-4 text-asphalt-600">
                <p>
                  Founded in {BUSINESS_INFO.founded}, our company began as a
                  small striping operation driven by a simple promise: deliver
                  quality work with honesty and care.
                </p>
                <p>
                  As a women-owned, family-run business, our work is personal.
                  We pride ourselves on the craftsmanship we bring to every
                  project and the relationships we build with the communities we
                  serve.
                </p>
                <p>
                  Based in Horn Lake, MS, we understand how much a safe,
                  well-marked parking lot means for a business. It shapes first
                  impressions and protects everyone who uses it.
                </p>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <Card key={item.title} variant="elevated" className="group p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-stripe-500/10 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <Zap className="mr-1.5 h-3.5 w-3.5" />
                Quality Standards
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900">
                We only use
                <br />
                <span className="gradient-text">premium materials</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                We proudly use DOT-approved, commercial-grade paints, pre-formed
                thermoplastics, and surface preparation products designed for
                high-traffic environments and varied weather conditions.
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

            <Card variant="elevated" className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Paintbrush className="h-8 w-8 text-stripe-500" />
                <h3 className="font-display text-2xl font-bold text-asphalt-900">
                  Expert Craftsmanship
                </h3>
              </div>
              <p className="text-asphalt-600">
                Our skilled technicians bring years of experience in line
                striping, layout design, ADA compliance, and facility safety
                planning. Precision is our priority — from exact measurements
                and alignment to consistent line thickness and crisp edges.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-stripe-500 to-stripe-400">
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
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

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
                className="glass-dark rounded-2xl border border-white/10 p-6"
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
        description="Whether you're managing a commercial lot, industrial facility, or residential community, you deserve quality workmanship."
        primaryButtonText="Request a Free Quote"
      />
    </div>
  );
}
