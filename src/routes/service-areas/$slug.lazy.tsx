import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  MapPin,
  ArrowLeft,
  Sparkles,
  ParkingSquare,
  Factory,
  Paintbrush,
  Ruler,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { TrustIndicators } from "@/components/layout/TrustIndicators";
import { BUSINESS_INFO, SERVICE_AREA_DATA, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/service-areas/$slug")({
  component: ServiceAreaPage,
});

const services = [
  {
    icon: ParkingSquare,
    title: "Parking Lot Striping",
    description:
      "New layouts, re-striping, ADA-compliant spaces, fire lanes, and directional markings.",
    href: "/services/parking-lot-striping",
  },
  {
    icon: Factory,
    title: "Warehouse Floor Striping",
    description:
      "Forklift lanes, pedestrian walkways, storage zones, and OSHA-compliant safety markings.",
    href: "/services/warehouse-floor-striping",
  },
  {
    icon: Paintbrush,
    title: "Asphalt Sealcoating",
    description:
      "Protective sealcoating for parking lots and driveways, plus crack sealing and repair.",
    href: "/services/asphalt-sealcoating",
  },
  {
    icon: Ruler,
    title: "Layout Design",
    description:
      "Custom parking lot layouts optimized for traffic flow, capacity, and ADA compliance.",
    href: "/services/layout-design",
  },
  {
    icon: Target,
    title: "Precision Linework & Signage",
    description:
      "Custom stenciling, directional arrows, fire lane markings, and regulatory signage.",
    href: "/services/precision-linework-signage",
  },
];

const whyChoose = [
  `${BUSINESS_INFO.yearsExperience}+ years of experience`,
  "Women-owned, family-run business",
  `${BUSINESS_INFO.warranty} workmanship warranty on all services`,
  "DOT-approved, commercial-grade materials",
  "Flexible scheduling — evenings and weekends available",
  "Free, no-obligation quotes",
];

function ServiceAreaPage() {
  const { slug } = Route.useParams();
  const area = SERVICE_AREA_DATA.find((a) => a.slug === slug);

  if (!area) return null;

  return (
    <div className="flex flex-col">
      <PageHero>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex animate-fade-in-up justify-center">
            <Badge variant="glass" className="px-4 py-2 text-sm">
              <MapPin className="mr-2 h-4 w-4 text-stripe-400" />
              <span className="text-white/90">{area.state}</span>
            </Badge>
          </div>

          <div className="mb-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm text-asphalt-400 transition-colors hover:text-stripe-400"
            >
              <ArrowLeft className="h-4 w-4" />
              All Service Areas
            </Link>
          </div>

          <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Parking Lot Striping in
            <br />
            <span className="gradient-text">
              {area.name}, {area.stateAbbr}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
            {area.description}
          </p>

          <div className="flex animate-fade-in-up stagger-3 flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="primary" size="xl">
              <Link to="/contact">
                Get a Free Quote
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
              {
                icon: CheckCircle2,
                text: `${BUSINESS_INFO.yearsExperience}+ Years Experience`,
              },
            ]}
          />
        </div>
      </PageHero>

      {/* Cities We Serve */}
      <section className="relative pt-16 pb-24">
        <div className="container-section">
          <div className="mb-12 text-center">
            <Badge variant="accent" className="mb-4">
              <MapPin className="mr-1.5 h-3.5 w-3.5" />
              Cities We Serve
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Serving {area.name}
              <br />
              <span className="gradient-text">and surrounding areas</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {area.cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 border-2 border-asphalt-200 bg-white px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <MapPin className="h-4 w-4 text-stripe-500" />
                <span className="font-display font-bold text-asphalt-900">
                  {city}, {area.stateAbbr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Services available in
              <br />
              <span className="gradient-text">{area.name}</span>
            </h2>
            <p className="text-lg text-asphalt-300">
              We bring the full range of A-Line Striping services to {area.name}
              , {area.state}.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="glass-dark border border-white/10 p-8 transition-all hover:border-stripe-500/50 hover:bg-white/5"
              >
                <service.icon className="mb-4 h-9 w-9 text-stripe-400" />
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-asphalt-300">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-stripe-400">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose A-Line */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <Shield className="mr-1.5 h-3.5 w-3.5" />
                Why A-Line Striping
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                Your trusted partner
                <br />
                <span className="gradient-text">in {area.name}</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                Based in Horn Lake, MS, we've been serving {area.name} and the
                surrounding Mid-South region since {BUSINESS_INFO.founded}.
                Every project gets the same attention to detail, quality
                materials, and professional results.
              </p>
              <div className="space-y-3">
                {whyChoose.map((reason) => (
                  <div key={reason} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
                    <span className="text-asphalt-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card variant="elevated" className="p-8">
              <CardContent className="p-0">
                <h3 className="mb-6 font-display text-2xl font-bold text-asphalt-900">
                  Get a Free Quote in {area.name}
                </h3>
                <p className="mb-6 text-asphalt-600">
                  Ready to improve your parking lot, warehouse, or driveway? We
                  provide free, no-obligation estimates for all projects in{" "}
                  {area.name}, {area.stateAbbr}.
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Link to="/contact">
                      Request a Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                      <Phone className="mr-2 h-5 w-5" />
                      {BUSINESS_INFO.phone}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        heading={
          <>
            Ready to get started
            <br />
            in {area.name}?
          </>
        }
        description={`Get a free, no-obligation quote for your parking lot, warehouse, or driveway in ${area.name}, ${area.stateAbbr}. Our team responds within 24 hours.`}
      />
    </div>
  );
}
