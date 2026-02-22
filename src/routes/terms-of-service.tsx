import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/utils";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServicePage,
  head: () => ({
    meta: [
      {
        title: "Terms of Service | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Terms of service for A-Line Striping Inc. Review the terms and conditions for using our services.",
      },
    ],
  }),
});

function TermsOfServicePage() {
  const lastUpdated = "December 2024";

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-asphalt-950 pb-16 pt-40">
        <div className="container-section">
          <Button
            asChild
            variant="ghost"
            className="mb-8 text-asphalt-300 hover:text-white"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-asphalt-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <div className="prose prose-lg max-w-none text-asphalt-700">
            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Agreement to Terms
            </h2>
            <p>
              By accessing our website or using our services, you agree to be
              bound by these Terms of Service. If you disagree with any part of
              these terms, you may not access our website or use our services.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Services
            </h2>
            <p>
              {BUSINESS_INFO.name} provides parking lot striping, sealcoating,
              warehouse floor marking, and related pavement maintenance
              services. All services are subject to the following terms:
            </p>
            <ul>
              <li>Services are provided as described in our written quotes</li>
              <li>
                Pricing is valid for 30 days from the date of the quote unless
                otherwise specified
              </li>
              <li>Work schedules are subject to weather conditions</li>
              <li>
                Customer must provide access to the work area as agreed upon
              </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Warranty
            </h2>
            <p>
              We provide a {BUSINESS_INFO.warranty} workmanship warranty on all
              our services. This warranty covers:
            </p>
            <ul>
              <li>Defects in workmanship</li>
              <li>Premature peeling or fading under normal conditions</li>
              <li>Issues resulting from improper application</li>
            </ul>
            <p>The warranty does not cover:</p>
            <ul>
              <li>Damage caused by vehicle traffic or accidents</li>
              <li>Normal wear and tear</li>
              <li>Damage from oil, gasoline, or chemical spills</li>
              <li>Damage from snow removal equipment</li>
              <li>Pre-existing surface conditions</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Payment Terms
            </h2>
            <ul>
              <li>
                Payment is due upon completion of services unless otherwise
                agreed
              </li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Late payments may incur additional fees</li>
              <li>Larger projects may require a deposit</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Cancellations
            </h2>
            <p>
              If you need to cancel or reschedule a service, please notify us at
              least 48 hours in advance. Last-minute cancellations may incur a
              fee.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Limitation of Liability
            </h2>
            <p>
              {BUSINESS_INFO.name} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of our services. Our liability is limited to the
              amount paid for the specific service in question.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Property Access
            </h2>
            <p>
              By hiring us, you grant permission for our crew and equipment to
              access your property as needed to complete the work. You represent
              that you have the authority to grant such access.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Intellectual Property
            </h2>
            <p>
              All content on our website, including text, images, logos, and
              design, is the property of {BUSINESS_INFO.name} and is protected
              by copyright laws.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws of the State of
              Mississippi. Any disputes shall be resolved in the courts of
              DeSoto County, Mississippi.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to our website.
              Continued use of our services constitutes acceptance of modified
              terms.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us:
            </p>
            <ul>
              <li>
                <strong>Phone:</strong> {BUSINESS_INFO.phone}
              </li>
              <li>
                <strong>Address:</strong> {BUSINESS_INFO.address.full}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
