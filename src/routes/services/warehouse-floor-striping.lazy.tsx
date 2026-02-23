import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Forklift,
  Users,
  AlertTriangle,
  Layers,
  Star,
  Clock,
  Zap,
  Sparkles,
  Factory,
  Eye,
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

export const Route = createLazyFileRoute("/services/warehouse-floor-striping")({
  component: WarehouseFloorStripingPage,
});

const services = [
  {
    icon: Forklift,
    title: "Aisle & Work Zone Markings",
    description:
      "Clearly marked aisles, storage zones, forklift lanes, and operational zones to optimize workflow and safety.",

  },
  {
    icon: Layers,
    title: "Custom Floor Layouts",
    description:
      "Tailored layouts based on your warehouse footprint, traffic flow, and usage to improve efficiency.",

  },
  {
    icon: AlertTriangle,
    title: "Safety & Hazard Markings",
    description:
      "Hazard zones, safety lanes, restricted areas, and forklift-only lanes to meet compliance and protect staff.",

  },
  {
    icon: Users,
    title: "Pedestrian Walkways",
    description:
      "Clear pedestrian paths that separate foot traffic from equipment zones for enhanced safety.",

  },
  {
    icon: Factory,
    title: "High-Durability Coatings",
    description:
      "Industrial-grade paints that resist wear from heavy equipment, foot traffic, and warehouse operations.",

  },
  {
    icon: Eye,
    title: "Interior & Exterior Striping",
    description:
      "From warehouse floors to loading docks and exterior lot markings — full coverage for all your needs.",

  },
];

const benefits = [
  {
    icon: Shield,
    title: "Enhanced Safety",
    description:
      "Clear markings reduce accident risk by guiding foot traffic and equipment flow",
  },
  {
    icon: Zap,
    title: "Improved Efficiency",
    description:
      "Defined zones and optimized layouts streamline workflow and minimize confusion",
  },
  {
    icon: CheckCircle2,
    title: "Better Compliance",
    description:
      "Properly marked hazard zones and walkways maintain regulatory standards",
  },
  {
    icon: Clock,
    title: "Long-Term Savings",
    description:
      "Durable striping lowers maintenance needs and prevents costly accidents",
  },
  {
    icon: Sparkles,
    title: "Professional Look",
    description:
      "Clean, precise markings reflect positively on your facility's commitment to safety",
  },
  {
    icon: Factory,
    title: "OSHA Compliant",
    description:
      "All markings meet or exceed OSHA requirements for industrial facilities",
  },
];

function WarehouseFloorStripingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex animate-fade-in-up">
            <Badge variant="glass" className="px-4 py-2 text-sm">
              <Factory className="mr-2 h-4 w-4 text-stripe-400" />
              <span className="text-white/90">
                Industrial-Grade Solutions
              </span>
            </Badge>
          </div>

          <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Warehouse Floor
            <br />
            <span className="gradient-text">Striping Services</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
            Transform your warehouse with durable, safe, and efficient floor
            markings. Custom striping solutions that improve safety,
            organization, and workflow efficiency.
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
            items={[
              {
                icon: Shield,
                text: `${BUSINESS_INFO.warranty} Warranty`,
                iconClassName: "text-success-400",
              },
              { icon: CheckCircle2, text: "OSHA Compliant" },
              { icon: Clock, text: "Minimal Disruption" },
            ]}
          />
        </div>
      </PageHero>

      {/* Services Grid */}
      <section className="relative pt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Complete warehouse
              <br />
              <span className="gradient-text">floor solutions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              From aisle markings to safety zones, we handle every aspect of
              industrial floor striping.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="relative p-5 sm:p-6 md:p-8">
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center bg-stripe-500/20 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-asphalt-900">
                      {service.title}
                    </h3>
                    <p className="text-asphalt-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />


        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Why It Matters
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Benefits of quality
              <br />
              <span className="gradient-text">warehouse striping</span>
            </h2>
            <p className="text-lg text-asphalt-300">
              Professional floor markings create a safer, more organized, and
              more efficient warehouse environment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass-dark border-2 border-asphalt-700 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-stripe-500/20 text-stripe-400">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-asphalt-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Card variant="elevated" className="overflow-hidden p-5 sm:p-6 md:p-8">
                <div className="relative aspect-4/3 overflow-hidden bg-asphalt-100">
                  <ResponsiveImage
                    src="/images/warehouse-floor-striping.webp"
                    alt="Warehouse floor striping with safety zone markings by A-Line Striping"
                    widths={[400]}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-asphalt-900">
                      Since {BUSINESS_INFO.founded}
                    </p>
                    <p className="text-sm text-asphalt-600">
                      Trusted by Mid-South Businesses
                    </p>
                  </div>
                  <Badge variant="rating">
                    <Star className="mr-1 h-3.5 w-3.5 fill-current" />
                    {BUSINESS_INFO.googleRating}/5
                  </Badge>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge variant="accent" className="mb-6">
                <Shield className="mr-1.5 h-3.5 w-3.5" />
                Why A-Line
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                Precision &
                <br />
                <span className="gradient-text">durability</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                We use commercial-grade paints and coatings designed to
                withstand heavy foot traffic, forklifts, machinery, and
                industrial wear.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Commercial-Grade Materials",
                    desc: "Industrial paints that last 1-3+ years under heavy use",
                  },
                  {
                    title: "Custom Layout Design",
                    desc: "Tailored to your warehouse footprint and workflow",
                  },
                  {
                    title: "Flexible Scheduling",
                    desc: "Overnight and weekend options to minimize downtime",
                  },
                  {
                    title: "Experienced Team",
                    desc: `${BUSINESS_INFO.yearsExperience}+ years serving Mid-South facilities`,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-success-500/20 text-success-500">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-asphalt-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-asphalt-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        description="Quick answers about our warehouse striping services."
        faqs={SERVICE_FAQS.warehouseFloorStriping}
      />

      <CTASection
        heading={
          <>
            Ready to improve
            <br />
            your warehouse?
          </>
        }
        description="We'll evaluate your layout, discuss your needs, and provide a free, no-obligation quote tailored to your facility."
      />
    </div>
  );
}
