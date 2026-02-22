import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/utils";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Privacy policy for A-Line Striping Inc. Learn how we collect, use, and protect your personal information.",
      },
    ],
  }),
});

function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-asphalt-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <div className="prose prose-lg max-w-none text-asphalt-700">
            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Introduction
            </h2>
            <p>
              {BUSINESS_INFO.name} ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Information We Collect
            </h2>
            <p>We may collect information about you in various ways:</p>
            <h3 className="font-display text-xl font-semibold text-asphalt-900">
              Personal Data
            </h3>
            <p>
              When you request a quote or contact us, we may collect personally
              identifiable information, such as:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Business name</li>
              <li>Project details</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-asphalt-900">
              Derivative Data
            </h3>
            <p>
              Our servers may automatically collect information when you access
              our website, such as your IP address, browser type, operating
              system, access times, and pages viewed.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Process and complete service requests</li>
              <li>Send you project updates and service information</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, accountants)</li>
              <li>Government authorities when required by law</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures
              to protect your personal information. However, no data
              transmission over the Internet can be guaranteed to be 100%
              secure.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your experience. You can
              set your browser to refuse cookies, but some features of our
              website may not function properly.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last Updated" date.
            </p>

            <h2 className="font-display text-2xl font-bold text-asphalt-900">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
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
