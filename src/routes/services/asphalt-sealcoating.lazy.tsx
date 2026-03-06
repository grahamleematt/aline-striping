import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Droplets,
  Sun,
  Clock,
  Sparkles,
  Zap,
  CircleDollarSign,
  Hammer,
  ParkingSquare,
  Home,
  Wrench,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";
import { SERVICE_FAQS } from "@/lib/constants";
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { FAQSection } from "@/components/layout/FAQSection";
import { TrustIndicators } from "@/components/layout/TrustIndicators";

export const Route = createLazyFileRoute("/services/asphalt-sealcoating")({
  component: AsphaltSealcoatingPage,
});

const benefits = [
  {
    icon: Droplets,
    title: "Prevents Moisture",
    description: "Seals cracks and prevents water intrusion that causes damage",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Shields against oxidation and fading from sun exposure",
  },
  {
    icon: Clock,
    title: "Extends Lifespan",
    description: "Adds 5-10+ years to your pavement's life expectancy",
  },
  {
    icon: Sparkles,
    title: "Curb Appeal",
    description: "Restores a deep black, smooth finish that looks brand new",
  },
];

const services = [
  {
    icon: ParkingSquare,
    title: "Parking Lot Sealcoating",
    description:
      "Commercial-grade sealant for busy parking lots, protecting against heavy traffic, UV rays, and weather. Perfect for retail centers, industrial lots, offices, churches, and schools.",
  },
  {
    icon: Home,
    title: "Driveway Sealcoating",
    description:
      "Residential sealcoating that prevents cracking, fading, and water intrusion, keeping your property looking sharp and protected for years.",
  },
  {
    icon: Wrench,
    title: "Crack Sealing & Repair",
    description:
      "Before applying sealcoat, we fill cracks and repair problem areas to ensure a smooth, long-lasting finish that protects your investment.",
  },
  {
    icon: Factory,
    title: "Commercial & Industrial",
    description:
      "Industrial-strength sealing for warehouse yards, loading areas, and trucking lanes built for heavy-duty use and maximum durability.",
  },
];

const whyChooseUs = [
  "Durable, commercial-grade materials",
  "Improved appearance & UV protection",
  "Crack sealing included when needed",
  "1-Year warranty on workmanship",
  "Minimal disruption to your operations",
  "Combined sealcoating + striping packages",
];

function AsphaltSealcoatingPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Asphalt Sealcoating",
      path: "/services/asphalt-sealcoating",
    },
  ]);
  const serviceSchema = createServiceSchema({
    name: "Asphalt Sealcoating Services",
    description:
      "Professional asphalt sealcoating, crack sealing, and pavement protection services for commercial properties across Horn Lake, Memphis, and the Mid-South.",
    path: "/services/asphalt-sealcoating",
    areaServed: ["Horn Lake, Mississippi", "Memphis, Tennessee", "Mid-South"],
  });

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <PageHero>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex animate-fade-in-up">
            <Badge variant="glass" className="px-4 py-2 text-sm">
              <Shield className="mr-2 h-4 w-4 text-stripe-400" />
              <span className="text-white/90">
                Horn Lake, MS & Surrounding Areas
              </span>
            </Badge>
          </div>

          <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Asphalt
            <br />
            <span className="gradient-text">Sealcoating Services</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
            A-Line Striping, Inc. provides high-quality asphalt sealcoating
            services designed to protect your pavement, slow deterioration, and
            keep your property clean and well maintained. Our sealcoating
            creates a strong protective barrier against weather, traffic, oil,
            and everyday wear.
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
                text: `${BUSINESS_INFO.warranty} Warranty`,
                iconClassName: "text-success-400",
              },
              { icon: Clock, text: "Adds 5-10+ Years" },
            ]}
          />
        </div>
      </PageHero>

      {/* Why Sealcoating Section */}
      <section className="relative pt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Why Sealcoating
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Essential protection
              <br />
              <span className="gradient-text">for your asphalt</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              Asphalt naturally breaks down over time due to sunlight, moisture,
              chemicals, and vehicle traffic. Sealcoating acts as a durable
              shield that protects, restores, and extends pavement life.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="relative p-5 sm:p-6 md:p-8 text-center">
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-stripe-500/20 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
                      <benefit.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-asphalt-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-asphalt-600">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits list */}
          <Card variant="elevated" className="mt-12 p-5 sm:p-6 md:p-8">
            <h3 className="mb-6 font-display text-2xl font-bold text-asphalt-900">
              Complete Protection Benefits
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Prevents moisture penetration and cracking",
                "Protects against oxidation and fading",
                "Resists oil, gas, salt, and chemical spills",
                "Extends asphalt lifespan by 5-10+ years",
                "Enhances curb appeal with clean, black finish",
                "Reduces long-term repair and maintenance costs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-500" />
                  <span className="text-asphalt-700">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />

        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Hammer className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Complete sealcoating
              <br />
              <span className="gradient-text">solutions</span>
            </h2>
            <p className="text-lg text-asphalt-300">
              From parking lots and driveways to warehouse yards, loading areas,
              and sealcoat-plus-striping packages, we have the expertise and
              equipment to handle every project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-dark border-2 border-asphalt-700 p-8"
              >
                <service.icon className="mb-4 h-9 w-9 text-stripe-400" />
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-asphalt-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <Shield className="mr-1.5 h-3.5 w-3.5" />
                Why A-Line
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                The smart choice for
                <br />
                <span className="gradient-text">asphalt protection</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                Sealcoating is one of the most effective and affordable ways to
                protect your pavement investment and improve the look of your
                property.
              </p>

              <div className="space-y-3">
                {whyChooseUs.map((reason) => (
                  <div key={reason} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
                    <span className="text-asphalt-700">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center bg-linear-to-br from-stripe-500 to-stripe-400">
                  <CircleDollarSign className="h-8 w-8 text-asphalt-900" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-asphalt-900">
                    Save Money Long-Term
                  </p>
                  <p className="text-sm text-asphalt-600">
                    Prevent costly repairs with regular maintenance
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card variant="elevated" className="overflow-hidden p-5 sm:p-6 md:p-8">
                <div className="relative aspect-4/3 overflow-hidden bg-asphalt-100">
                  <ResponsiveImage
                    src="/images/asphalt-sealcoating.webp"
                    alt="Freshly sealcoated parking lot by A-Line Striping"
                    widths={[400, 800]}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    width={800}
                    height={164}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-asphalt-900">
                      {BUSINESS_INFO.warranty} Warranty
                    </p>
                    <p className="text-sm text-asphalt-600">On All Services</p>
                  </div>
                  <Badge variant="warranty">
                    <Shield className="mr-1 h-3.5 w-3.5" />
                    Guaranteed
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        description="Everything you need to know about our asphalt sealcoating services."
        faqs={SERVICE_FAQS.asphaltSealcoating}
        includeSchema
      />

      <CTASection
        heading={
          <>
            Ready to protect
            <br />
            your asphalt?
          </>
        }
        description="A-Line Striping, Inc. will evaluate your asphalt, recommend the right sealcoating solution, and provide a clear, free, no-obligation estimate."
        primaryButtonText="Request a Free Quote"
      />
    </div>
  );
}
