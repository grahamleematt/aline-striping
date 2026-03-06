import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Ruler,
  Car,
  MapPin,
  Zap,
  Sparkles,
  Target,
  TrendingUp,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";
import { SERVICE_FAQS } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { FAQSection } from "@/components/layout/FAQSection";
import { TrustIndicators } from "@/components/layout/TrustIndicators";

export const Route = createLazyFileRoute("/services/layout-design")({
  component: LayoutDesignPage,
});

const features = [
  {
    icon: Ruler,
    title: "Custom Parking Lot Layout Planning",
    description:
      "Completely customized layouts based on your lot size, property usage, traffic patterns, and unique business needs.",
  },
  {
    icon: Car,
    title: "Parking Space Optimization",
    description:
      "Maximize your parking capacity with strategic stall design, space allocation, and proper stall angles.",
  },
  {
    icon: Accessibility,
    title: "ADA-Compliant Parking Layouts",
    description:
      "Accessible stalls, loading aisles, signage, and designated routes that follow all ADA requirements for your lot size and usage.",
  },
  {
    icon: MapPin,
    title: "Safety & Pedestrian Route Planning",
    description:
      "Crosswalks, walkways, hazard zones, fire lanes, and safe pedestrian paths to reduce risk and ensure compliance.",
  },
  {
    icon: Target,
    title: "Re-Designs & Efficiency Upgrades",
    description:
      "Redesign outdated or inefficient lots to improve flow, capacity, and compliance.",
  },
  {
    icon: TrendingUp,
    title: "On-Site Evaluation & Measurement",
    description:
      "We measure your lot, inspect traffic usage, and develop a layout that fits your exact property and operational needs.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Visit & Assessment",
    description:
      "We visit your property to measure dimensions, evaluate terrain, and understand your specific needs and traffic patterns.",
  },
  {
    step: "02",
    title: "Custom Design Creation",
    description:
      "Our team creates an optimized layout that maximizes capacity while ensuring safe, efficient traffic flow.",
  },
  {
    step: "03",
    title: "Review & Refinement",
    description:
      "We present the design, gather your feedback, and make adjustments until you're completely satisfied.",
  },
  {
    step: "04",
    title: "Professional Execution",
    description:
      "Our experienced crew executes the design with precision striping that brings your new layout to life.",
  },
];

const benefits = [
  "Experienced designers who understand traffic engineering, ADA compliance, and real-world usage patterns",
  "Compliance-focused layouts that meet local codes and federal ADA standards",
  "Maximum-efficiency designs that prioritize smooth traffic flow and optimal space usage",
  "Accurate layout execution from design through final striping",
  "All layout and striping work backed by a full 1-year workmanship warranty",
];

function LayoutDesignPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex animate-fade-in-up">
            <Badge variant="glass" className="px-4 py-2 text-sm">
              <Ruler className="mr-2 h-4 w-4 text-stripe-400" />
              <span className="text-white/90">Horn Lake, MS & Mid-South</span>
            </Badge>
          </div>

          <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Parking Lot
            <br />
            <span className="gradient-text">Layout Design</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
            A-Line Striping, Inc. provides expert parking lot layout and design
            services for commercial properties, retail centers, industrial
            facilities, churches, schools, and multi-use lots. We create
            structured and optimized plans tailored to your property.
          </p>

          <div className="flex animate-fade-in-up stagger-3 flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="primary" size="xl">
              <Link to="/contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                <Phone className="mr-2 h-5 w-5" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>

          <TrustIndicators
            className="animate-fade-in-up stagger-4"
            showStars
            items={[
              {
                icon: Shield,
                text: `${BUSINESS_INFO.yearsExperience}+ Years Experience`,
                iconClassName: "text-success-400",
              },
              { icon: CheckCircle2, text: "ADA Experts" },
            ]}
          />
        </div>
      </PageHero>

      {/* Features Grid */}
      <section className="relative pt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Parking lot design
              <br />
              <span className="gradient-text">services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              Parking lot layout planning, traffic flow design, ADA compliance,
              safety routes, redesigns, and on-site evaluation built around your
              property&apos;s operational needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="relative p-5 sm:p-6 md:p-8">
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center bg-stripe-500/20 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-asphalt-900">
                      {feature.title}
                    </h3>
                    <p className="text-asphalt-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />

        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Our Process
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              From concept to
              <br />
              <span className="gradient-text">completion</span>
            </h2>
            <p className="text-lg text-asphalt-300">
              A streamlined process that takes the stress out of parking lot
              design and ensures outstanding results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative glass-dark border-2 border-asphalt-700 p-6"
              >
                <span className="mb-4 inline-block font-display text-5xl font-bold text-stripe-500/30">
                  {item.step}
                </span>
                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-asphalt-300">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-6 w-6 text-stripe-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <TrendingUp className="mr-1.5 h-3.5 w-3.5" />
                Why Choose A-Line
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                Professional parking lot
                <br />
                <span className="gradient-text">design matters</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                A properly designed parking lot improves safety, supports
                efficient traffic flow, maximizes parking capacity, ensures ADA
                and municipal compliance, and creates a better customer
                experience.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
                    <span className="text-asphalt-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card variant="elevated" className="overflow-hidden p-5 sm:p-6 md:p-8">
                <div className="relative aspect-4/3 overflow-hidden bg-asphalt-100">
                  <ResponsiveImage
                    src="/images/layout-design.webp"
                    alt="Parking lot layout design plan by A-Line Striping"
                    widths={[400]}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    width={800}
                    height={665}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-asphalt-900">
                      10-25%
                    </p>
                    <p className="text-xs text-asphalt-600">More Capacity</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-asphalt-900">
                      100%
                    </p>
                    <p className="text-xs text-asphalt-600">ADA Compliant</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-asphalt-900">
                      {BUSINESS_INFO.yearsExperience}+
                    </p>
                    <p className="text-xs text-asphalt-600">Years Exp.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        description="Everything you need to know about our parking lot layout and design services."
        faqs={SERVICE_FAQS.layoutDesign}
      />

      <CTASection
        heading={
          <>
            Ready to optimize
            <br />
            your parking lot?
          </>
        }
        description="A smarter, safer, and more efficient parking lot layout starts here. Contact A-Line Striping, Inc. today to schedule an on-site evaluation and receive a free, no-obligation quote."
        primaryButtonText="Request a Free Quote"
      />
    </div>
  );
}
