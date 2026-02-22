import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Clock,
  Target,
  Star,
  MapPin,
  Sparkles,
  Zap,
  Award,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SlideIn } from "@/components/ui/motion";
import { BUSINESS_INFO, SERVICE_AREAS, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});

const services = [
  {
    title: "Parking Lot Striping",
    description:
      "Improve safety and traffic flow with professional parking lot striping. We deliver clear, long-lasting lines for commercial lots of every size.",
    href: "/services/parking-lot-striping",
    icon: "🅿️",
    gradient: "from-blue-500/20 to-cyan-500/20",
    image: "/images/parking-lot-striping.webp",
  },
  {
    title: "Warehouse Floor Striping",
    description:
      "A-Line Striping, Inc. provides tailored warehouse striping solutions to define work zones, improve safety, and keep operations efficient and compliant.",
    href: "/services/warehouse-floor-striping",
    icon: "🏭",
    gradient: "from-purple-500/20 to-pink-500/20",
    image: "/images/warehouse-floor-striping.webp",
  },
  {
    title: "Asphalt Sealcoating",
    description:
      "Our sealcoating protects parking lots, commercial properties, and driveways from cracks, fading, and weather damage with a smooth, durable finish.",
    href: "/services/asphalt-sealcoating",
    icon: "🛡️",
    gradient: "from-orange-500/20 to-red-500/20",
    image: "/images/asphalt-sealcoating.webp",
  },
  {
    title: "Layout Design",
    description:
      "Our designers develop organized, high-efficiency parking lot layouts that maximize space, improve traffic flow, and ensure ADA compliance.",
    href: "/services/layout-design",
    icon: "📐",
    gradient: "from-green-500/20 to-emerald-500/20",
    image: "/images/layout-design.webp",
  },
  {
    title: "Precision Linework & Signage",
    description:
      "Our signage designers enhance the organization of parking lots with clear traffic signs, custom striping layouts, fire lanes, pedestrian crossings, and no-parking zones.",
    href: "/services/precision-linework-signage",
    icon: "⚠️",
    gradient: "from-yellow-500/20 to-amber-500/20",
    image: "/images/precision-signage.webp",
  },
];

const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "5.0", label: "Google Rating", icon: Star },
  { value: "1000+", label: "Projects Completed", icon: Target },
  { value: "100%", label: "Satisfaction", icon: Users },
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
      "Professional, sincere, honest and has always done quality work for us. You will not go wrong if you give A-Line Striping a call.",
    author: "Steven L.",
    role: "15-Year Client",
    rating: 5,
  },
  {
    quote:
      "Amazing team! They saved us from an unfinished job and were quick, accurate, and friendly!",
    author: "First Baptist Church",
    role: "Olive Branch, MS",
    rating: 5,
  },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Modern gradient mesh background */}
      <section className="relative overflow-hidden bg-asphalt-950 px-0 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-40 lg:pt-40">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-animated" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />

        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-spotlight" />

        {/* Floating orbs - hidden on mobile for performance */}
        <div className="absolute left-10 top-20 hidden h-72 w-72 animate-float rounded-full bg-stripe-500/20 blur-[100px] sm:block" />
        <div className="absolute bottom-20 right-10 hidden h-96 w-96 animate-float rounded-full bg-electric-500/15 blur-[120px] stagger-2 sm:block" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stripe-400/10 blur-[60px] sm:h-64 sm:w-64 sm:blur-[80px]" />

        <div className="container-section relative">
          <div className="mx-auto max-w-5xl text-center">
            {/* Announcement badge */}
            <FadeIn delay={0.1} className="mb-6 inline-flex sm:mb-8">
              <Badge
                variant="glass"
                className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-stripe-400 sm:mr-2 sm:h-4 sm:w-4" />
                <span className="text-white/90">
                  Women-Owned Since {BUSINESS_INFO.founded}
                </span>
                <ChevronRight className="ml-1.5 h-3.5 w-3.5 text-white/50 sm:ml-2 sm:h-4 sm:w-4" />
              </Badge>
            </FadeIn>

            {/* Main headline - responsive sizing */}
            <SlideIn direction="up" delay={0.2}>
              <h1 className="mb-6 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Commercial Parking Lot{" "}
                <span className="gradient-text">Striping</span>,
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Warehouse Marking &amp; Asphalt
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>
                Maintenance Across{" "}
                <span className="gradient-text">Mississippi &amp; Memphis</span>
              </h1>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-asphalt-200 sm:mb-12 sm:text-lg md:text-xl">
                Transform your parking lots and warehouses with precision
                striping, sealcoating, and pavement maintenance. Serving the
                Mid-South with {BUSINESS_INFO.yearsExperience}+ years of
                expertise.
              </p>
            </SlideIn>

            {/* CTA buttons - responsive sizing */}
            <SlideIn direction="up" delay={0.4}>
              <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-16 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto sm:size-xl"
                >
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline-light"
                  size="lg"
                  className="w-full sm:w-auto sm:size-xl"
                >
                  <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </SlideIn>

            {/* Trust indicators - responsive layout */}
            <FadeIn
              delay={0.5}
              className="flex flex-wrap items-center justify-center gap-3 text-asphalt-200 sm:gap-6 md:gap-8"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="h-4 w-4 text-success-400 sm:h-5 sm:w-5" />
                <span className="text-xs font-medium sm:text-sm">
                  {BUSINESS_INFO.warranty} Warranty
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-stripe-400 text-stripe-400 sm:h-4 sm:w-4"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium sm:text-sm">
                  {BUSINESS_INFO.googleRating}/5
                </span>
              </div>
              <div className="hidden items-center gap-1.5 sm:flex sm:gap-2">
                <CheckCircle2 className="h-4 w-4 text-stripe-400 sm:h-5 sm:w-5" />
                <span className="text-xs font-medium sm:text-sm">
                  ADA Compliant
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Stats bar */}
          <SlideIn
            direction="up"
            delay={0.6}
            className="mx-auto mt-12 max-w-4xl sm:mt-16 lg:mt-20"
          >
            <div className="glass-dark rounded-2xl border border-white/10 p-1.5 sm:rounded-3xl sm:p-2">
              <div className="grid grid-cols-2 gap-1 sm:gap-2 md:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-xl p-4 text-center transition-all hover:bg-white/5 sm:rounded-2xl sm:p-6"
                  >
                    <div className="mb-1.5 flex justify-center sm:mb-2">
                      <stat.icon className="h-4 w-4 text-stripe-400 sm:h-5 sm:w-5" />
                    </div>
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-[10px] font-medium text-asphalt-300 sm:mt-1 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="relative pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-32">
        <div className="container-section">
          <FadeIn className="mb-10 text-center sm:mb-12 lg:mb-16">
            <Badge variant="accent" className="mb-3 sm:mb-4">
              <Zap className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-3 font-display text-3xl font-bold text-asphalt-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Everything you need for
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="gradient-text">professional pavement</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-asphalt-600 sm:text-lg">
              Comprehensive striping and maintenance solutions for commercial
              and industrial properties across the Mid-South.
            </p>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {/* Featured service - spans 2 columns */}
            <Card
              variant="elevated"
              className="group col-span-1 overflow-hidden sm:col-span-2 lg:col-span-2"
            >
              <div className="relative flex h-full flex-col sm:flex-row">
                <div className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-2/5">
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    width={500}
                    height={350}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10" />
                </div>
                <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-linear-to-br from-stripe-500/20 to-stripe-400/5 blur-3xl transition-transform group-hover:scale-150 sm:h-64 sm:w-64" />
                  <div>
                    <h3 className="mb-2 font-display text-xl font-bold text-asphalt-900 sm:mb-3 sm:text-2xl lg:text-3xl">
                      {services[0].title}
                    </h3>
                    <p className="mb-4 max-w-md text-sm text-asphalt-600 sm:mb-6 sm:text-base lg:text-lg">
                      {services[0].description}
                    </p>
                  </div>
                  <Link
                    to={services[0].href}
                    className="group/link inline-flex items-center text-sm font-semibold text-asphalt-900"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Regular service cards */}
            {services.slice(1).map((service) => (
              <Card
                key={service.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <div className="relative h-36 w-full overflow-hidden sm:h-40">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
                </div>
                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 md:p-8">
                  <div
                    className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-linear-to-br ${service.gradient} blur-2xl transition-transform group-hover:scale-150 sm:h-32 sm:w-32`}
                  />
                  <div>
                    <h3 className="mb-1.5 font-display text-lg font-bold text-asphalt-900 sm:mb-2 sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-3 text-xs text-asphalt-600 line-clamp-2 sm:mb-4 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to={service.href}
                    className="group/link inline-flex items-center text-sm font-semibold text-asphalt-900"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        {/* Background elements - hidden on mobile for performance */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -left-40 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full bg-stripe-500/10 blur-[100px] sm:block" />
        <div className="absolute -right-40 top-1/4 hidden h-96 w-96 rounded-full bg-electric-500/10 blur-[120px] sm:block" />

        <div className="container-section relative">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div>
              <Badge variant="glass" className="mb-4 sm:mb-6">
                <Award className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
                Why Choose A-Line
              </Badge>
              <h2 className="mb-4 font-display text-3xl font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl">
                Trusted by businesses
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="gradient-text">across the Mid-South</span>
              </h2>
              <p className="mb-6 text-base text-asphalt-200 sm:mb-8 sm:text-lg">
                For over {BUSINESS_INFO.yearsExperience} years, we've been the
                trusted choice for parking lot striping, sealcoating, and
                pavement maintenance. Our commitment to quality and customer
                satisfaction sets us apart.
              </p>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-2">
                {[
                  {
                    icon: Shield,
                    title: "1-Year Warranty",
                    desc: "All work backed by our comprehensive warranty",
                  },
                  {
                    icon: Clock,
                    title: "Fast Turnaround",
                    desc: "Flexible scheduling to minimize disruption",
                  },
                  {
                    icon: Target,
                    title: "Precision Work",
                    desc: "DOT-approved materials and expert craftsmanship",
                  },
                  {
                    icon: CheckCircle2,
                    title: "ADA Compliant",
                    desc: "Full accessibility compliance on every project",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-3 rounded-lg p-3 transition-all hover:bg-white/5 sm:gap-4 sm:rounded-xl sm:p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stripe-500/20 text-stripe-400 transition-colors group-hover:bg-stripe-500 group-hover:text-asphalt-900 sm:h-10 sm:w-10 sm:rounded-xl">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs text-asphalt-300 sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Testimonials */}
            <div className="space-y-3 sm:space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-dark rounded-xl border border-white/10 p-4 sm:rounded-2xl sm:p-6"
                >
                  <div className="mb-3 flex gap-0.5 sm:mb-4 sm:gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-stripe-400 text-stripe-400 sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>
                  <p className="mb-3 text-sm text-white sm:mb-4 sm:text-base">
                    "{testimonial.quote}"
                  </p>
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
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-section">
          <div className="mb-10 text-center sm:mb-12 lg:mb-16">
            <Badge variant="accent" className="mb-3 sm:mb-4">
              <MapPin className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
              Service Areas
            </Badge>
            <h2 className="mb-3 font-display text-3xl font-bold text-asphalt-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Serving the entire
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="gradient-text">Mid-South region</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-asphalt-600 sm:text-lg">
              Based in Horn Lake, MS — proudly serving Mississippi, Tennessee,
              and Arkansas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {[
              {
                state: "Mississippi",
                areas: SERVICE_AREAS.mississippi,
                color: "from-blue-500 to-cyan-500",
              },
              {
                state: "Tennessee",
                areas: SERVICE_AREAS.tennessee,
                color: "from-orange-500 to-red-500",
              },
              {
                state: "Arkansas",
                areas: SERVICE_AREAS.arkansas,
                color: "from-purple-500 to-pink-500",
              },
            ].map((region) => (
              <Card
                key={region.state}
                variant="elevated"
                className="group overflow-hidden"
              >
                <div className="relative p-5 sm:p-6 md:p-8">
                  <div
                    className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-linear-to-br ${region.color} opacity-20 blur-2xl transition-transform group-hover:scale-150 sm:h-32 sm:w-32`}
                  />
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-1.5 sm:mb-4 sm:gap-2">
                      <MapPin className="h-4 w-4 text-stripe-500 sm:h-5 sm:w-5" />
                      <h3 className="font-display text-lg font-bold text-asphalt-900 sm:text-xl">
                        {region.state}
                      </h3>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {region.areas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            to="/service-areas"
                            className="text-sm text-asphalt-600 transition-colors hover:text-stripe-600 sm:text-base"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <Button
              asChild
              variant="outline"
              size="default"
              className="sm:size-lg"
            >
              <Link to="/service-areas">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-stripe-500 via-stripe-400 to-stripe-500" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Floating elements - hidden on mobile */}
        <div className="absolute left-10 top-10 hidden h-32 w-32 rounded-full bg-white/10 blur-3xl sm:block" />
        <div className="absolute bottom-10 right-10 hidden h-48 w-48 rounded-full bg-asphalt-900/10 blur-3xl sm:block" />

        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-asphalt-900 sm:mb-6 sm:text-4xl lg:text-5xl">
              Ready to transform
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              your property?
            </h2>
            <p className="mb-8 text-base text-asphalt-800 sm:mb-10 sm:text-lg lg:text-xl">
              Get a free, no-obligation quote for your parking lot or warehouse
              project. Our team responds within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-asphalt-900 text-white shadow-xl hover:bg-asphalt-800 sm:w-auto sm:size-xl"
              >
                <Link to="/contact">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-asphalt-900 text-asphalt-900 hover:bg-asphalt-900/10 sm:w-auto sm:size-xl"
              >
                <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
