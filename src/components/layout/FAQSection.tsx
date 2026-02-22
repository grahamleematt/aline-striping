import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/lib/constants";

interface FAQSectionProps {
  description: string;
  faqs: readonly FAQ[];
}

export function FAQSection({ description, faqs }: FAQSectionProps) {
  return (
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
            <p className="text-lg text-asphalt-600">{description}</p>
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
  );
}
