import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, formatPhoneLink } from "@/lib/utils";

interface CTASectionProps {
  heading: React.ReactNode;
  description: string;
  primaryButtonText?: string;
}

export function CTASection({
  heading,
  description,
  primaryButtonText = "Get Your Free Quote",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-stripe-500 via-stripe-400 to-stripe-500" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container-section relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-asphalt-900 sm:text-5xl">
            {heading}
          </h2>
          <p className="mb-10 text-xl text-asphalt-800">{description}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="xl"
              className="bg-asphalt-900 text-white shadow-xl hover:bg-asphalt-800"
            >
              <Link to="/contact">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2.5} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-asphalt-900 text-asphalt-900 hover:bg-asphalt-900/10"
            >
              <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                <Phone className="mr-2 h-5 w-5" strokeWidth={2.5} />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
