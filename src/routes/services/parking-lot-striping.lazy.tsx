import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Truck,
  Ruler,
  AlertTriangle,
  Paintbrush,
  Star,
  Clock,
  Eye,
  Sparkles,
  Zap,
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
import { SERVICE_FAQS } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createLazyFileRoute("/services/parking-lot-striping")({
  component: ParkingLotStripingPage,
});

const services = [
  {
    icon: Paintbrush,
    title: "New Line Striping",
    description:
      "Crisp, clean lines for newly paved lots or full resurfacing projects.",
  },
  {
    icon: Ruler,
    title: "Re-Striping / Maintenance",
    description:
      "Refresh faded lines and markings to restore visibility and safety.",
  },
  {
    icon: AlertTriangle,
    title: "Fire Lanes & Safety Zones",
    description:
      "Marked fire lanes, loading zones, directional markings, and safety-conscious layouts.",
  },
  {
    icon: Shield,
    title: "ADA-Compliant Markings",
    description:
      "Clearly defined accessible parking stalls and van-accessible spaces with proper signage.",
  },
  {
    icon: Eye,
    title: "Reflective & High-Visibility",
    description:
      "Enhanced visibility for low-light, nighttime, or high-traffic conditions.",
  },
  {
    icon: Truck,
    title: "Custom Lot Layouts",
    description:
      "Tailored striping plans to maximize parking capacity and optimize traffic flow.",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Enhanced Safety & Visibility",
    description:
      "Well-defined lines make navigation easier for drivers and pedestrians",
  },
  {
    icon: Zap,
    title: "Improved Traffic Flow",
    description: "Directional arrows and efficient layouts reduce congestion",
  },
  {
    icon: Truck,
    title: "Maximized Capacity",
    description:
      "Optimized stall layouts allow more vehicles without overcrowding",
  },
  {
    icon: Sparkles,
    title: "Professional Appearance",
    description: "Fresh, clean lines create a strong first impression",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Proper ADA, fire-lane, and safety markings meet legal requirements",
  },
  {
    icon: Clock,
    title: "Extended Asphalt Life",
    description: "Organized traffic flow reduces wear and collision damage",
  },
];

const faqs = SERVICE_FAQS.parkingLotStriping;

function ParkingLotStripingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero className="px-0 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex animate-fade-in-up sm:mb-8">
            <Badge
              variant="glass"
              className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
            >
              <Shield className="mr-1.5 h-3.5 w-3.5 text-stripe-400 sm:mr-2 sm:h-4 sm:w-4" />
              <span className="text-white/90">
                {BUSINESS_INFO.warranty} Warranty
              </span>
            </Badge>
          </div>

          <h1 className="mb-4 animate-fade-in-up stagger-1 font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Parking Lot
            <br />
            <span className="gradient-text">Striping Services</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up stagger-2 text-base leading-relaxed text-asphalt-300 sm:mb-10 sm:text-lg md:text-xl">
            A faded, poorly marked parking lot can cause confusion, reduce
            efficiency, and pose safety risks. We create precise, long-lasting
            striping for commercial lots, retail centers, and industrial
            properties.
          </p>

          <div className="flex animate-fade-in-up stagger-3 flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto sm:size-xl"
            >
              <Link to="/contact">
                Request a Free Quote
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

          {/* Trust indicators */}
          <div className="mt-8 flex animate-fade-in-up stagger-4 flex-wrap items-center justify-center gap-4 text-asphalt-300 sm:mt-12 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-stripe-500 text-stripe-500 sm:h-4 sm:w-4"
                  />
                ))}
              </div>
              <span className="text-xs font-medium sm:text-sm">
                {BUSINESS_INFO.googleRating}/5
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="h-4 w-4 text-stripe-400 sm:h-5 sm:w-5" />
              <span className="text-xs font-medium sm:text-sm">
                ADA Compliant
              </span>
            </div>
            <div className="hidden items-center gap-1.5 sm:flex sm:gap-2">
              <Clock className="h-4 w-4 text-stripe-400 sm:h-5 sm:w-5" />
              <span className="text-xs font-medium sm:text-sm">
                Fast Turnaround
              </span>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Services Grid */}
      <section className="relative pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-32">
        <div className="container-section">
          <div className="mb-10 text-center sm:mb-12 lg:mb-16">
            <Badge variant="accent" className="mb-3 sm:mb-4">
              <Zap className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
              Our Services
            </Badge>
            <h2 className="mb-3 font-display text-3xl font-bold text-asphalt-900 sm:mb-4 sm:text-4xl lg:text-5xl">
              Complete striping
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="gradient-text">solutions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-asphalt-600 sm:text-lg">
              From new installations to maintenance re-striping, we handle every
              aspect of parking lot line marking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                variant="elevated"
                className="group overflow-hidden"
              >
                <CardContent className="relative p-5 sm:p-6 md:p-8">
                  <div className="relative">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center bg-stripe-500/20 text-stripe-600 transition-colors group-hover:bg-stripe-500 group-hover:text-white sm:mb-4 sm:h-14 sm:w-14">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="mb-1.5 font-display text-lg font-bold text-asphalt-900 sm:mb-2 sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="text-sm text-asphalt-600 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />

        <div className="container-section relative">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
            <Badge variant="glass" className="mb-3 sm:mb-4">
              <Sparkles className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
              Why It Matters
            </Badge>
            <h2 className="mb-3 font-display text-3xl font-bold text-white sm:mb-4 sm:text-4xl lg:text-5xl">
              Benefits of quality
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="gradient-text">parking lot striping</span>
            </h2>
            <p className="text-base text-asphalt-300 sm:text-lg">
              Well-defined lines and markings make navigation easier, improve
              your property's appearance, and help you stay compliant with
              safety regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass-dark border-2 border-asphalt-700 p-5 sm:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center bg-stripe-500/20 text-stripe-400 sm:mb-4 sm:h-12 sm:w-12">
                  <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1.5 font-display text-base font-bold text-white sm:mb-2 sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-xs text-asphalt-300 sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container-section">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge variant="accent" className="mb-4 sm:mb-6">
                <Shield className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-3.5 sm:w-3.5" />
                Why A-Line
              </Badge>
              <h2 className="mb-4 font-display text-3xl font-bold text-asphalt-900 sm:mb-6 sm:text-4xl lg:text-5xl">
                Trusted by businesses
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="gradient-text">across the Mid-South</span>
              </h2>
              <p className="mb-6 text-base text-asphalt-600 sm:mb-8 sm:text-lg">
                With {BUSINESS_INFO.yearsExperience}+ years of experience, we've
                built a reputation for precision, reliability, and outstanding
                customer service.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Professional Grade Results",
                    desc: "High-quality paints designed to withstand heavy traffic, weather, and time",
                  },
                  {
                    title: "Full Range of Services",
                    desc: "From new line striping to ADA-compliant markings, fire lanes, and custom stencils",
                  },
                  {
                    title: "Custom Layout & Design",
                    desc: "Optimized layouts for traffic flow and maximum parking capacity",
                  },
                  {
                    title: "Guaranteed Workmanship",
                    desc: `All jobs come with a ${BUSINESS_INFO.warranty} warranty for peace of mind`,
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

            <div className="relative">
              <Card variant="elevated" className="overflow-hidden p-5 sm:p-6 md:p-8">
                <div className="relative aspect-4/3 overflow-hidden bg-asphalt-100">
                  <ResponsiveImage
                    src="/images/parking-lot-striping.webp"
                    alt="Professional parking lot striping project by A-Line Striping"
                    widths={[800, 1200, 1600]}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    width={800}
                    height={369}
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

      {/* FAQ Section */}
      <section className="bg-asphalt-50 py-16 sm:py-20 lg:py-32">
        <div className="container-section">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center sm:mb-10 lg:mb-12">
              <Badge variant="accent" className="mb-3 sm:mb-4">
                FAQ
              </Badge>
              <h2 className="mb-3 font-display text-3xl font-bold text-asphalt-900 sm:mb-4 sm:text-4xl">
                Common questions
              </h2>
              <p className="text-base text-asphalt-600 sm:text-lg">
                Everything you need to know about our parking lot striping
                services.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3 sm:space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-asphalt-200 bg-white px-4 shadow-sm transition-shadow hover:shadow-md sm:px-6"
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-asphalt-900 hover:no-underline sm:py-5 sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-asphalt-600 sm:pb-5 sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-stripe-500 via-stripe-400 to-stripe-500" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-asphalt-900 sm:mb-6 sm:text-4xl lg:text-5xl">
              Ready to transform
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              your parking lot?
            </h2>
            <p className="mb-8 text-base text-asphalt-800 sm:mb-10 sm:text-lg lg:text-xl">
              Get a free, no-obligation quote. Based in Horn Lake, MS, we
              proudly serve clients throughout the Mid-South.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-asphalt-900 text-white shadow-xl hover:bg-asphalt-800 sm:w-auto sm:size-xl"
              >
                <Link to="/contact">
                  Get Your Free Quote
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
