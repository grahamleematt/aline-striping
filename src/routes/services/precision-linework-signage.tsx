import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  AlertTriangle,
  ArrowUpDown,
  Ban,
  Footprints,
  Star,
  Zap,
  Sparkles,
  Eye,
  Flame,
  ParkingCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export const Route = createFileRoute("/services/precision-linework-signage")({
  component: PrecisionLineworkSignagePage,
  head: () => ({
    meta: [
      {
        title: "Precision Linework & Signage Design | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Custom traffic signs, directional markings, and safety-compliant layouts. Fire lanes, pedestrian crossings, no-parking zones. Call (901) 335-8772.",
      },
    ],
  }),
});

const services = [
  {
    icon: AlertTriangle,
    title: "Clear Traffic Signs",
    description:
      "Stop signs, yield signs, speed limit signs, and directional signage that keeps traffic flowing safely.",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: ArrowUpDown,
    title: "Custom Striping Layout",
    description:
      "Tailored markings including arrows, turn lanes, crosshatching, and specialty stencils for your property.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Footprints,
    title: "Pedestrian Crossings",
    description:
      "High-visibility crosswalks and walkway markings that protect pedestrians and meet safety codes.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Flame,
    title: "Fire Lanes",
    description:
      "Properly marked fire lanes with correct coloring and signage to meet fire code requirements.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Ban,
    title: "No-Parking Zones",
    description:
      "Clear no-parking markings, hatching, and signs for restricted areas, loading zones, and emergency access.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: ParkingCircle,
    title: "ADA Signage",
    description:
      "Compliant accessible parking signs, van accessible markers, and access aisle signage.",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

const signageTypes = [
  {
    category: "Traffic Control",
    items: [
      "Stop Signs",
      "Yield Signs",
      "Speed Limit Signs",
      "One Way Signs",
      "Do Not Enter Signs",
    ],
  },
  {
    category: "Directional",
    items: [
      "Entrance/Exit Signs",
      "Directional Arrows",
      "Lane Assignment Signs",
      "Parking Direction Signs",
    ],
  },
  {
    category: "Safety & Compliance",
    items: [
      "ADA Parking Signs",
      "Fire Lane Signs",
      "Reserved Parking Signs",
      "Handicap Van Accessible Signs",
    ],
  },
  {
    category: "Custom Stencils",
    items: [
      "Company Logos",
      "Numbered Stalls",
      "Reserved/VIP Parking",
      "Loading Zone Markings",
    ],
  },
];

const benefits = [
  "Reduce liability with clear safety markings",
  "Meet fire and building code requirements",
  "Improve traffic flow and reduce accidents",
  "Enhance accessibility for all visitors",
  "Professional appearance that builds trust",
  "Durable materials that last for years",
];

function PrecisionLineworkSignagePage() {
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
                <Eye className="mr-2 h-4 w-4 text-stripe-400" />
                <span className="text-white/90">Safety-First Design</span>
              </Badge>
            </div>

            <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Precision Linework
              <br />
              <span className="gradient-text">& Signage Design</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
              Keep drivers and pedestrians safe with clear, easy-to-follow
              markings. From fire lanes to custom directional signs, we ensure
              your property is well-organized and easy to navigate.
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
                <span className="text-sm font-medium">Code Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative -mt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              How our signage
              <br />
              <span className="gradient-text">improves safety</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              Professional signage and linework that guides traffic, protects
              pedestrians, and keeps your property compliant.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="relative p-8">
                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${service.gradient} blur-2xl transition-transform group-hover:scale-150`}
                  />
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-stripe-500/10 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
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

      {/* Signage Types Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

        <div className="container-section relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="glass" className="mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Complete Solutions
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Signs & markings
              <br />
              <span className="gradient-text">we provide</span>
            </h2>
            <p className="text-lg text-asphalt-300">
              From standard traffic signs to custom stencils, we have everything
              you need for a well-marked property.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {signageTypes.map((type) => (
              <div
                key={type.category}
                className="glass-dark rounded-2xl border border-white/10 p-6"
              >
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  {type.category}
                </h3>
                <ul className="space-y-2">
                  {type.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-asphalt-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-stripe-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Card variant="elevated" className="overflow-hidden p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-stripe-500/20 to-stripe-400/5 blur-3xl" />
                <div className="relative aspect-4/3 rounded-xl bg-asphalt-100">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-asphalt-300">Signage Example</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg font-bold text-asphalt-900">
                      Professional Quality
                    </p>
                    <p className="text-sm text-asphalt-600">
                      DOT-Approved Materials
                    </p>
                  </div>
                  <Badge variant="warranty">
                    <Shield className="mr-1 h-3.5 w-3.5" />
                    {BUSINESS_INFO.warranty}
                  </Badge>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge variant="accent" className="mb-6">
                <Shield className="mr-1.5 h-3.5 w-3.5" />
                Why It Matters
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                The importance of
                <br />
                <span className="gradient-text">proper signage</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                Clear signage isn't just about looking professional — it's about
                safety, compliance, and liability protection for your property.
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
              Ready to improve
              <br />
              your property's safety?
            </h2>
            <p className="mb-10 text-xl text-asphalt-800">
              Get a free consultation and quote. We'll assess your signage needs
              and provide expert recommendations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="bg-asphalt-900 text-white shadow-xl hover:bg-asphalt-800"
              >
                <Link to="/contact">
                  Get Started
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
