import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Ruler,
  Car,
  MapPin,
  Star,
  Zap,
  Sparkles,
  Target,
  TrendingUp,
  Accessibility,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResponsiveImage } from "@/components/ui/responsive-image";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/services/layout-design")({
  component: LayoutDesignPage,
});

const features = [
  {
    icon: Ruler,
    title: "Smarter Space Use",
    description:
      "Maximize parking capacity without overcrowding, using optimal stall sizing and efficient lane configurations.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Car,
    title: "Safer Traffic Flow",
    description:
      "Clear lanes, directional planning, and logical entry/exit points that reduce congestion and accidents.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Accessibility,
    title: "ADA-Friendly Layout",
    description:
      "Compliant accessible parking spaces, access aisles, and pathways that meet federal requirements.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: MapPin,
    title: "No Blueprint Needed",
    description:
      "We design from scratch or improve existing layouts. Our team handles all measurements and planning.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Target,
    title: "Optimized for Your Needs",
    description:
      "Tailored designs for retail, office, industrial, or multi-use properties with specific traffic patterns.",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready Design",
    description:
      "Layouts that accommodate growth, EV charging stations, and changing traffic patterns.",
    gradient: "from-indigo-500/20 to-violet-500/20",
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
  "Increase parking capacity by 10-25%",
  "Reduce traffic congestion and accidents",
  "Ensure full ADA compliance",
  "Improve customer experience",
  "Enhance property value and curb appeal",
  "Create safer pedestrian pathways",
];

const layoutFaqs = [
  {
    question: "Do I need a blueprint before you can design a layout?",
    answer:
      "No. Our team handles everything from measurements to the final design. We visit your property, assess the space, and create a custom layout from scratch — no existing blueprint required.",
  },
  {
    question: "Can you redesign an existing parking lot layout?",
    answer:
      "Absolutely. We regularly redesign existing lots to increase capacity, improve flow, or bring them into ADA compliance. We'll evaluate your current setup and recommend the best improvements.",
  },
  {
    question: "How much can a new layout increase my parking capacity?",
    answer:
      "Depending on the current configuration, a professionally designed layout can increase parking capacity by 10-25% without expanding the physical lot size. We optimize stall sizing, angles, and lane widths to maximize every square foot.",
  },
  {
    question: "How long does the layout design process take?",
    answer:
      "Most projects are completed within 1-2 weeks from the initial site visit to the final design. Complex commercial properties may take slightly longer. We work with your timeline to minimize disruption.",
  },
];

function LayoutDesignPage() {
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
                <Ruler className="mr-2 h-4 w-4 text-stripe-400" />
                <span className="text-white/90">Optimize Every Space</span>
              </Badge>
            </div>

            <h1 className="mb-6 animate-fade-in-up stagger-1 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Parking Lot
              <br />
              <span className="gradient-text">Layout Design</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up stagger-2 text-lg text-asphalt-300 sm:text-xl">
              A well-planned parking lot saves space, keeps traffic moving, and
              makes parking easier. Our designers create layouts that balance
              efficiency, safety, and convenience for everyone.
            </p>

            <div className="flex animate-fade-in-up stagger-3 flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="primary" size="xl">
                <Link to="/contact">
                  Get a Free Consultation
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
                  {BUSINESS_INFO.yearsExperience}+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-stripe-400" />
                <span className="text-sm font-medium">ADA Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative -mt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="mb-16 text-center">
            <Badge variant="accent" className="mb-4">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Essentials
            </Badge>
            <h2 className="mb-4 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
              Elements of a
              <br />
              <span className="gradient-text">well-planned layout</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-asphalt-600">
              Every aspect of your parking lot design is carefully considered
              for maximum efficiency and safety.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="relative p-8">
                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${feature.gradient} blur-2xl transition-transform group-hover:scale-150`}
                  />
                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-stripe-500/10 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white">
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
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

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
                className="relative glass-dark rounded-2xl border border-white/10 p-6"
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
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="accent" className="mb-6">
                <TrendingUp className="mr-1.5 h-3.5 w-3.5" />
                Benefits
              </Badge>
              <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                What a great layout
                <br />
                <span className="gradient-text">does for you</span>
              </h2>
              <p className="mb-8 text-lg text-asphalt-600">
                A professionally designed parking lot layout isn't just about
                fitting more cars — it's about creating a better experience for
                everyone who uses your property.
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
              <Card variant="elevated" className="overflow-hidden p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-stripe-500/20 to-stripe-400/5 blur-3xl" />
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-asphalt-100">
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

      {/* FAQ Section */}
      <section className="bg-asphalt-50 py-24 lg:py-32">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <Badge variant="accent" className="mb-4">
                <HelpCircle className="mr-1.5 h-3.5 w-3.5" />
                FAQ
              </Badge>
              <h2 className="font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
                Common questions about
                <br />
                <span className="gradient-text">layout design</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {layoutFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`layout-faq-${index}`}
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
              Ready to optimize
              <br />
              your parking lot?
            </h2>
            <p className="mb-10 text-xl text-asphalt-800">
              Get a free consultation and discover how a better layout can
              improve your property. We'll assess your space and provide expert
              recommendations.
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
