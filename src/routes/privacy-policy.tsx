import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/utils";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () =>
    buildSeoMeta({
      title: "Privacy Policy | A-Line Striping Inc.",
      description:
        "Privacy policy for A-Line Striping Inc. Learn how we collect, use, and protect your personal information.",
      path: "/privacy-policy",
    }),
});

function PrivacyPolicyPage() {
  const lastUpdated = "December 2024";

  return (
    <div className="flex flex-col">
      <PageHero>
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
        <Badge variant="glass" className="mb-4">
          Legal
        </Badge>
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-asphalt-300">Last updated: {lastUpdated}</p>
      </PageHero>

      <div className="h-1.5 bg-caution-stripe" />

      {/* Content */}
      <section className="bg-asphalt-50 py-12 sm:py-16 lg:py-24">
        <div className="container-section">
          <div className="mx-auto max-w-4xl">
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-5 sm:p-8 lg:p-12">
                <div className="prose prose-lg max-w-none text-asphalt-700 **:rounded-none prose-headings:font-display prose-headings:tracking-wide prose-headings:text-asphalt-900 prose-h2:border-b-2 prose-h2:border-asphalt-200 prose-h2:pb-3 prose-a:text-electric-600 prose-strong:text-asphalt-900 prose-li:marker:text-stripe-500">
                  <h2>Introduction</h2>
                  <p>
                    {BUSINESS_INFO.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
                    or &ldquo;us&rdquo;) is committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our
                    website or use our services.
                  </p>

                  <h2>Information We Collect</h2>
                  <p>We may collect information about you in various ways:</p>
                  <h3>Personal Data</h3>
                  <p>
                    When you request a quote or contact us, we may collect
                    personally identifiable information, such as:
                  </p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Mailing address</li>
                    <li>Business name</li>
                    <li>Project details</li>
                  </ul>

                  <h3>Derivative Data</h3>
                  <p>
                    Our servers may automatically collect information when you
                    access our website, such as your IP address, browser type,
                    operating system, access times, and pages viewed.
                  </p>

                  <h2>How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Respond to your inquiries and provide quotes</li>
                    <li>Process and complete service requests</li>
                    <li>Send you project updates and service information</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2>Disclosure of Your Information</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information with:
                  </p>
                  <ul>
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisors (lawyers, accountants)</li>
                    <li>Government authorities when required by law</li>
                  </ul>

                  <h2>Security of Your Information</h2>
                  <p>
                    We use administrative, technical, and physical security
                    measures to protect your personal information. However, no
                    data transmission over the Internet can be guaranteed to be
                    100% secure.
                  </p>

                  <h2>Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>

                  <h2>Cookies</h2>
                  <p>
                    Our website may use cookies to enhance your experience. You
                    can set your browser to refuse cookies, but some features of
                    our website may not function properly.
                  </p>

                  <h2>Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the &ldquo;Last Updated&rdquo; date.
                  </p>

                  <h2>Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please
                    contact us:
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Questions About Your Privacy?"
        description="We take your privacy seriously. Contact us if you have any questions about how we handle your information."
        primaryButtonText="Contact Us"
      />
    </div>
  );
}
