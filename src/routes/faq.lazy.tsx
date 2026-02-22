import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  HelpCircle,
  MessageCircle,
  ParkingSquare,
  Shield,
  Factory,
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
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

export const Route = createLazyFileRoute("/faq")({
  component: FAQPage,
});

const faqCategories = [
  {
    title: "Parking Lot Striping",
    icon: ParkingSquare,
    questions: [
      {
        question: "How often should a parking lot be re-striped?",
        answer:
          "For most commercial lots, re-striping is recommended every 12–24 months, depending on traffic volume, climate exposure, and wear. High-traffic areas like shopping centers may need more frequent attention.",
      },
      {
        question: "Do you handle ADA compliance and fire-lane markings?",
        answer:
          "Yes. We provide full ADA-compliant striping, including accessible parking stalls, van-accessible spaces, access aisles, and proper signage. We also paint fire lanes, loading zones, and crosswalks to meet local code requirements.",
      },
      {
        question: "Can you customize the layout to fit my lot?",
        answer:
          "Absolutely. Every striping plan is tailored to your lot's dimensions, traffic patterns, and intended use. Our team designs layouts that maximize parking capacity while ensuring safe, efficient traffic flow.",
      },
      {
        question: "What type of paint do you use?",
        answer:
          "We use DOT-approved, commercial-grade traffic paints designed for durability and visibility. Our paints are formulated to withstand heavy traffic, UV exposure, and varying weather conditions.",
      },
    ],
  },
  {
    title: "Asphalt Sealcoating",
    icon: Shield,
    questions: [
      {
        question: "What is asphalt sealcoating?",
        answer:
          "Sealcoating is the process of applying a protective coating over asphalt surfaces to safeguard them from weather damage, traffic wear, UV rays, oil spills, and moisture. It extends the life of your pavement and improves its appearance.",
      },
      {
        question: "How often should asphalt be sealcoated?",
        answer:
          "Most asphalt surfaces should be sealcoated every 2 to 3 years, depending on traffic volume, climate, and wear. We can evaluate your pavement and recommend an appropriate maintenance schedule.",
      },
      {
        question: "Does sealcoating make asphalt look new?",
        answer:
          "Yes. Sealcoating restores a deep black, smooth finish that dramatically improves curb appeal. It fills minor surface imperfections and gives your pavement a clean, well-maintained appearance.",
      },
      {
        question: "Can striping be done with sealcoating?",
        answer:
          "Yes. We offer combined sealcoating and striping services. Doing both together ensures the best results — fresh sealcoat provides an ideal surface for bright, long-lasting line markings.",
      },
    ],
  },
  {
    title: "Warehouse Striping",
    icon: Factory,
    questions: [
      {
        question: "How long does warehouse striping last?",
        answer:
          "The lifespan depends on floor conditions, traffic levels, and paint type. In most industrial settings, professional striping lasts 1–3 years. High-traffic forklift areas may require periodic touch-ups.",
      },
      {
        question: "What coatings do you use for warehouse floors?",
        answer:
          "We use industrial-grade, highly durable coatings including epoxy, polyurethane, and fast-drying acrylics designed to resist abrasion, forklift traffic, chemicals, and daily wear.",
      },
      {
        question: "Do I need to shut down my warehouse?",
        answer:
          "Not always. Many projects can be completed in sections, so your operations remain active. We offer overnight and weekend service options to minimize disruption.",
      },
    ],
  },
  {
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What areas do you serve?",
        answer:
          "We're based in Horn Lake, MS and serve the entire Mid-South region, including DeSoto County, Shelby County (Memphis, TN), Crittenden County (AR), and surrounding areas.",
      },
      {
        question: "Do you offer a warranty?",
        answer:
          "Yes. All of our services come with a 1-Year workmanship warranty. We stand behind our work and are committed to your complete satisfaction.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Contact us by phone at (901) 335-8772 or fill out our online quote request form. We'll schedule a site visit to evaluate your project and provide a free, no-obligation estimate.",
      },
      {
        question: "How quickly can you schedule a project?",
        answer:
          "We offer flexible scheduling to meet your needs. Many projects can be scheduled within 1–2 weeks, and we can accommodate rush requests when possible.",
      },
    ],
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
              <span className="gradient-text">
                Sealcoating &amp; Warehouse Marking
              </span>
            </h1>
            <p className="text-xl text-asphalt-300">
              Find answers to common questions about our services, process, and
              what to expect when working with A-Line Striping.
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
                      className="rounded-2xl border border-asphalt-100 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
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
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-stripe-500/10 blur-[120px]" />

        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-stripe-500/20">
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
