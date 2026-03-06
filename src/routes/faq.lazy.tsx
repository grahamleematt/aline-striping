import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  HelpCircle,
  MessageCircle,
  ParkingSquare,
  Shield,
  Factory,
  LayoutGrid,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICE_FAQS } from "@/lib/constants";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/faq")({
  component: FAQPage,
});

const faqCategories = [
  {
    title: "Parking Lot Striping",
    icon: ParkingSquare,
    questions: SERVICE_FAQS.parkingLotStriping,
  },
  {
    title: "Warehouse Floor Striping",
    icon: Factory,
    questions: SERVICE_FAQS.warehouseFloorStriping,
  },
  {
    title: "Asphalt Sealcoating",
    icon: Shield,
    questions: SERVICE_FAQS.asphaltSealcoating,
  },
  {
    title: "Layout Design",
    icon: LayoutGrid,
    questions: SERVICE_FAQS.layoutDesign,
  },
  {
    title: "Precision Linework & Signage",
    icon: PenLine,
    questions: SERVICE_FAQS.precisionLinework,
  },
];

function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    ),
  };

  return (
    <div className="flex flex-col">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <PageHero showSpotlight={false} className="pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="glass" className="mb-6">
            <HelpCircle className="mr-1.5 h-3.5 w-3.5" />
            Frequently Asked Questions
          </Badge>
          <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
            FAQs About Striping,
            <br />
            <span className="gradient-text">Sealcoating &amp; More</span>
          </h1>
          <p className="text-xl text-asphalt-300">
            At A-Line Striping, we receive many questions about parking lot
            striping, warehouse floor marking, sealcoating, and ADA-compliant
            signage. This FAQ page provides quick, expert answers to help
            property managers, business owners, and facility operators
            understand timelines, pricing factors, safety requirements, and what
            to expect during a striping or sealcoating project.
          </p>
        </div>
      </PageHero>

      {/* FAQ Content */}
      <section className="py-24 lg:py-32">
        <div className="container-section">
          <div className="mx-auto max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={categoryIndex > 0 ? "mt-16" : ""}
              >
                <div className="mb-8 flex items-center gap-3">
                  <category.icon className="h-7 w-7 text-stripe-500" />
                  <h2 className="font-display text-2xl font-bold text-asphalt-900">
                    {category.title}
                  </h2>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="border-2 border-asphalt-200 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <AccordionTrigger className="text-left font-semibold text-asphalt-900 hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-asphalt-600 pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-asphalt-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-stripe-500/20">
              <MessageCircle className="h-8 w-8 text-stripe-400" />
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mb-10 text-lg text-asphalt-300">
              Our team is happy to answer any questions about your specific
              project. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="primary" size="xl">
                <Link to="/contact">
                  Contact Us
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
          </div>
        </div>
      </section>
    </div>
  );
}
