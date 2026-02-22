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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/services/warehouse-floor-striping")({
  component: WarehouseFloorStripingPage,
});

const services = [
  {
    icon: Forklift,
    title: "Aisle & Work Zone Markings",
    description:
      "Clearly marked aisles, storage zones, forklift lanes, and operational zones to optimize workflow and safety.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Layers,
    title: "Custom Floor Layouts",
    description:
      "Tailored layouts based on your warehouse footprint, traffic flow, and usage to improve efficiency.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Safety & Hazard Markings",
    description:
      "Hazard zones, safety lanes, restricted areas, and forklift-only lanes to meet compliance and protect staff.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Users,
    title: "Pedestrian Walkways",
    description:
      "Clear pedestrian paths that separate foot traffic from equipment zones for enhanced safety.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Factory,
    title: "High-Durability Coatings",
    description:
      "Industrial-grade paints that resist wear from heavy equipment, foot traffic, and warehouse operations.",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Eye,
    title: "Interior & Exterior Striping",
    description:
      "From warehouse floors to loading docks and exterior lot markings — full coverage for all your needs.",
    gradient: "from-indigo-500/20 to-violet-500/20",
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

const faqs = [
  {
    question: "How long does warehouse striping last?",
    answer:
      "The lifespan depends on floor conditions, traffic levels, and paint type. In most industrial settings, professional striping lasts 1–3 years. High-traffic forklift areas may require periodic touch-ups.",
  },
  {
    question: "What type of paint or coating do you use?",
    answer:
      "We use industrial-grade, highly durable coatings formulated for warehouses, including epoxy, polyurethane, and fast-drying acrylics designed to resist abrasion and chemicals.",
  },
  {
    question: "Do you offer both interior and exterior line striping?",
    answer:
      "Yes. We stripe warehouse floors, loading docks, parking lots, truck lanes, staging areas, and industrial yards.",
  },
  {
    question: "Do I need to shut down my warehouse during striping?",
    answer:
      "Not always. Many projects can be completed in sections. We offer overnight and weekend service options to minimize disruption.",
  },
];

function WarehouseFloorStripingPage() {
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

            {/* Trust indicators */}
            <div className="mt-12 flex animate-fade-in-up stagger-4 flex-wrap items-center justify-center gap-8 text-asphalt-300">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success-400" />
                <span className="text-sm font-medium">
                  {BUSINESS_INFO.warranty} Warranty
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-stripe-400" />
                <span className="text-sm font-medium">OSHA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-stripe-400" />
                <span className="text-sm font-medium">Minimal Disruption</span>
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

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

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
                className="glass-dark rounded-2xl border border-white/10 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-stripe-500/20 text-stripe-400">
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
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Card variant="elevated" className="overflow-hidden p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-stripe-500/20 to-stripe-400/5 blur-3xl" />
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-asphalt-100">
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
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-500/10 text-success-500">
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

      {/* FAQ Section */}
      <section className="bg-asphalt-50 py-24 lg:py-32">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <Badge variant="accent" className="mb-4">
                FAQ
              </Badge>
              <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900">
                Common questions
              </h2>
              <p className="text-lg text-asphalt-600">
                Everything you need to know about our warehouse striping
                services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-asphalt-100 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-asphalt-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-asphalt-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              your warehouse?
            </h2>
            <p className="mb-10 text-xl text-asphalt-800">
              We'll evaluate your layout, discuss your needs, and provide a
              free, no-obligation quote tailored to your facility.
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
