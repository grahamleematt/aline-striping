import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  Shield,
  Star,
  Zap,
  Sparkles,
  Building2,
  Factory,
  Church,
  School,
  Warehouse,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_INFO, SERVICE_AREAS, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/service-areas")({
  component: ServiceAreasPage,
});

const services = [
  {
    title: "Parking Lot Striping & Re-Striping",
    items: [
      "New parking lot layouts",
      "Re-striping & line marking",
      "ADA-compliant spaces",
      "Fire lanes & safety markings",
    ],
    href: "/services/parking-lot-striping",
  },
  {
    title: "Asphalt Sealcoating & Crack Repair",
    items: [
      "Commercial sealcoating",
      "Residential driveway sealing",
      "Crack sealing",
      "Weather-resistant protection",
    ],
    href: "/services/asphalt-sealcoating",
  },
  {
    title: "Warehouse & Industrial Striping",
    items: [
      "Forklift traffic lanes",
      "Pedestrian walkways",
      "Storage area marking",
      "OSHA-compliant markings",
    ],
    href: "/services/warehouse-floor-striping",
  },
  {
    title: "Layout Design & Traffic Planning",
    items: [
      "Traffic flow analysis",
      "ADA layout design",
      "Stall optimization",
      "Entry/exit planning",
    ],
    href: "/services/layout-design",
  },
];

const industries = [
  { icon: Building2, label: "Shopping Centers" },
  { icon: Factory, label: "Industrial Facilities" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: Church, label: "Churches" },
  { icon: School, label: "Schools" },
  { icon: Building, label: "Office Parks" },
];

const mississippiCities = [
  "Horn Lake",
  "Southaven",
  "Olive Branch",
  "Hernando",
  "Byhalia",
  "Tunica",
  "Tupelo",
  "Batesville",
  "Oxford",
];

const tennesseeCities = [
  "Memphis",
  "Collierville",
  "Bartlett",
  "Germantown",
  "Lakeland",
  "Arlington",
  "Jackson",
];

const arkansasCities = ["West Memphis", "Marion", "Jonesboro", "Forrest City"];

const whyChooseUs = [
  "Over 20 years of experience",
  "Comprehensive services: striping, sealcoating, design, signage",
  "High-durability paints and materials",
  "Safety & ADA compliance focused",
  "Flexible scheduling including evenings and weekends",
  "1-Year workmanship warranty",
];

function ServiceAreasPage() {
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
                <MapPin className="mr-2 h-4 w-4 text-stripe-400" />
                <span className="text-white/90">Based in Horn Lake, MS</span>
              </Badge>
            </div>

            <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Serving the
              <br />
              <span className="gradient-text">Mid-South Region</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
              A-Line Striping, Inc. proudly provides high-quality striping,
              sealcoating, signage, and parking lot layout services throughout
              Mississippi, Tennessee, and Arkansas.
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

            {/* Trust indicators */}
            <div className="mt-12 flex animate-fade-in-up stagger-4 flex-wrap items-center justify-center gap-8 text-asphalt-300">
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
                <span className="text-sm font-medium">
                  {BUSINESS_INFO.yearsExperience}+ Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="relative -mt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <MapPin className="mr-1.5 h-3.5 w-3.5" />
              Coverage Area
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Our primary
              <br />
              <span className="gradient-text">service areas</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              We serve commercial properties, industrial facilities, retail
              centers, schools, and municipalities across three states.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Mississippi */}
            <Card variant="elevated" className="group overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-blue-500/10 to-cyan-500/10 blur-3xl transition-transform group-hover:scale-150" />
              <CardHeader className="relative">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-2xl">
                  Mississippi
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="mb-4 space-y-2">
                  {SERVICE_AREAS.mississippi.map((area) => (
                    <div
                      key={area.slug}
                      className="rounded-lg px-3 py-2 text-asphalt-700 transition-colors hover:bg-asphalt-50"
                    >
                      {area.name}
                    </div>
                  ))}
                </div>
                <div className="border-t border-asphalt-100 pt-4">
                  <p className="text-sm font-medium text-asphalt-600">
                    Cities We Serve:
                  </p>
                  <p className="mt-1 text-sm text-asphalt-600">
                    {mississippiCities.join(", ")}, and surrounding communities
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tennessee */}
            <Card variant="elevated" className="group overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-orange-500/10 to-red-500/10 blur-3xl transition-transform group-hover:scale-150" />
              <CardHeader className="relative">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-2xl">
                  Tennessee
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="mb-4 space-y-2">
                  {SERVICE_AREAS.tennessee.map((area) => (
                    <div
                      key={area.slug}
                      className="rounded-lg px-3 py-2 text-asphalt-700 transition-colors hover:bg-asphalt-50"
                    >
                      {area.name}
                    </div>
                  ))}
                </div>
                <div className="border-t border-asphalt-100 pt-4">
                  <p className="text-sm font-medium text-asphalt-600">
                    Cities We Serve:
                  </p>
                  <p className="mt-1 text-sm text-asphalt-600">
                    {tennesseeCities.join(", ")}, and West Tennessee areas
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Arkansas */}
            <Card variant="elevated" className="group overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-purple-500/10 to-pink-500/10 blur-3xl transition-transform group-hover:scale-150" />
              <CardHeader className="relative">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-2xl">
                  Arkansas
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="mb-4 space-y-2">
                  {SERVICE_AREAS.arkansas.map((area) => (
                    <div
                      key={area.slug}
                      className="rounded-lg px-3 py-2 text-asphalt-700 transition-colors hover:bg-asphalt-50"
                    >
                      {area.name}
                    </div>
                  ))}
                </div>
                <div className="border-t border-asphalt-100 pt-4">
                  <p className="text-sm font-medium text-asphalt-600">
                    Cities We Serve:
                  </p>
                  <p className="mt-1 text-sm text-asphalt-600">
                    {arkansasCities.join(", ")}, and Eastern Arkansas region
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-asphalt-600">
            Located outside these areas?{" "}
            <Link
              to="/contact"
              className="font-semibold text-stripe-600 hover:text-stripe-700"
            >
              Contact us
            </Link>{" "}
            to check service availability for your location.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Building2 className="mr-1.5 h-3.5 w-3.5" />
              Industries We Serve
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Complete solutions for
              <br />
              <span className="gradient-text">every industry</span>
            </h2>
            <p className="text-lg text-asphalt-300">
              We provide asphalt maintenance and marking solutions for
              businesses across all sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="glass-dark rounded-2xl border border-white/10 p-6 text-center transition-all hover:border-stripe-500/30"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-stripe-500/20 text-stripe-400">
                  <industry.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-white">
                  {industry.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Full range of
              <br />
              <span className="gradient-text">professional services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              Wherever you are located, A-Line Striping offers comprehensive
              solutions for all your pavement needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="p-8">
                  <h3 className="mb-4 font-display text-xl font-bold text-asphalt-900">
                    {service.title}
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />
                        <span className="text-asphalt-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-semibold text-stripe-600 transition-colors hover:text-stripe-700"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-asphalt-50 py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Why A-Line
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                Why customers choose
                <br />
                <span className="gradient-text">A-Line Striping</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                We understand the needs of property owners in the Mid-South and
                tailor our services accordingly.
              </p>

              <div className="space-y-3">
                {whyChooseUs.map((reason) => (
                  <div key={reason} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
                    <span className="text-asphalt-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card variant="elevated" className="overflow-hidden p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-stripe-500/20 to-stripe-400/5 blur-3xl" />
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-asphalt-100">
                  <img
                    src="/images/service-area-map.webp"
                    alt="A-Line Striping service area map covering Mississippi, Tennessee, and Arkansas"
                    width={640}
                    height={480}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-asphalt-900">
                      3
                    </p>
                    <p className="text-xs text-asphalt-600">States Served</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-asphalt-900">
                      {BUSINESS_INFO.yearsExperience}+
                    </p>
                    <p className="text-xs text-asphalt-600">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-asphalt-900">
                      1000+
                    </p>
                    <p className="text-xs text-asphalt-600">Projects Done</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-stripe-500 via-stripe-400 to-stripe-500" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-asphalt-900/10 blur-3xl" />

        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Need professional services
              <br />
              in your area?
            </h2>
            <p className="mb-10 text-xl text-asphalt-800">
              A-Line Striping, Inc. is ready to serve your commercial or
              industrial property with fast, reliable, and professional results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="bg-asphalt-900 text-white shadow-xl hover:bg-asphalt-800"
              >
                <Link to="/contact">
                  Request a Free Quote
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
