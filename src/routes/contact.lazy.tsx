import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  Send,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS_INFO, formatPhoneLink, cn } from "@/lib/utils";
import { z } from "zod";

export const Route = createLazyFileRoute("/contact")({
  component: ContactPage,
});

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  zipCode: z.string().min(5, "Please enter a valid zip code"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Parking Lot Striping",
  "Warehouse Floor Striping",
  "Asphalt Sealcoating",
  "Layout Design",
  "Precision Linework & Signage",
  "Multiple Services",
];

const trustSignals = [
  { icon: Shield, text: "1-Year Warranty" },
  { icon: Building2, text: "Commercial Specialists" },
  { icon: Clock, text: "Minimal Disruption" },
];

function ContactPage() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
        subject: `New Quote Request from ${result.data.firstName} ${result.data.lastName}`,
        from_name: `${result.data.firstName} ${result.data.lastName}`,
        botcheck: "",
        ...result.data,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        window.gtag?.("event", "generate_lead", {
          event_category: "Contact",
          event_label: result.data.service,
          value: 1,
        });
        setIsSubmitted(true);
      } else {
        setErrors({
          message:
            "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch {
      setErrors({
        message: "Network error. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-asphalt-950 pt-40">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-success-500/20 blur-[120px]" />

        <div className="container-section relative flex min-h-[60vh] flex-col items-center justify-center py-20">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-success-500 to-success-400 shadow-lg shadow-success-500/30">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-white">
              Thank You!
            </h1>
            <p className="mb-10 text-lg text-asphalt-300">
              We've received your request and will contact you shortly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="primary" size="lg">
                <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/">
                  Return Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-asphalt-950 pb-32 pt-40">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-stripe-500/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-electric-500/10 blur-[120px]" />

        <div className="container-section relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="glass" className="mb-6">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Free Estimates
            </Badge>
            <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Request a Free Quote for Your
              <br />
              <span className="gradient-text">Parking Lot or Facility</span>
            </h1>
            <p className="text-xl text-asphalt-300">
              Get a free, no-obligation quote for your parking lot or facility.
              Our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative -mt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated" className="overflow-hidden">
                <CardContent className="p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name fields */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-sm font-semibold text-asphalt-900"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName || ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                            errors.firstName
                              ? "border-red-400"
                              : "border-asphalt-200",
                          )}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-sm font-semibold text-asphalt-900"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName || ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                            errors.lastName
                              ? "border-red-400"
                              : "border-asphalt-200",
                          )}
                          placeholder="Smith"
                        />
                        {errors.lastName && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Contact fields */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-asphalt-900"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email || ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                            errors.email
                              ? "border-red-400"
                              : "border-asphalt-200",
                          )}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-semibold text-asphalt-900"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone || ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                            errors.phone
                              ? "border-red-400"
                              : "border-asphalt-200",
                          )}
                          placeholder="(901) 555-0123"
                        />
                        {errors.phone && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Zip and Service */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="zipCode"
                          className="mb-2 block text-sm font-semibold text-asphalt-900"
                        >
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode || ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                            errors.zipCode
                              ? "border-red-400"
                              : "border-asphalt-200",
                          )}
                          placeholder="38637"
                        />
                        {errors.zipCode && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-sm font-semibold text-asphalt-900"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service || ""}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                            errors.service
                              ? "border-red-400"
                              : "border-asphalt-200",
                          )}
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-2 text-sm text-red-500">
                            {errors.service}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-asphalt-900"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        rows={5}
                        className={cn(
                          "w-full rounded-xl border-2 bg-asphalt-50/50 px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-4 focus:ring-stripe-500/10",
                          errors.message
                            ? "border-red-400"
                            : "border-asphalt-200",
                        )}
                        placeholder="Tell us about your project, including lot size, current condition, and any specific requirements..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Honeypot - hidden from real users */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="botcheck">Leave this field empty</label>
                      <input
                        type="text"
                        id="botcheck"
                        name="botcheck"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Request Free Quote
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              {/* Trust Signals */}
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-stripe-500 text-stripe-500"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-asphalt-900">
                      {BUSINESS_INFO.googleRating}/5 Rating
                    </span>
                  </div>
                  <div className="space-y-4">
                    {trustSignals.map((signal) => (
                      <div
                        key={signal.text}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stripe-500/10">
                          <signal.icon className="h-5 w-5 text-stripe-600" />
                        </div>
                        <span className="text-sm font-medium text-asphalt-700">
                          {signal.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card variant="elevated">
                <CardContent className="p-6">
                  <h3 className="mb-5 font-display text-lg font-bold text-asphalt-900">
                    Contact Info
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}
                        className="flex items-center gap-3 text-asphalt-700 transition-colors hover:text-stripe-600"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stripe-500/10">
                          <Phone className="h-5 w-5 text-stripe-600" />
                        </div>
                        <span className="font-semibold">
                          {BUSINESS_INFO.phone}
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stripe-500/10">
                        <MapPin className="h-5 w-5 text-stripe-600" />
                      </div>
                      <span className="text-sm text-asphalt-600">
                        {BUSINESS_INFO.address.full}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stripe-500/10">
                        <Clock className="h-5 w-5 text-stripe-600" />
                      </div>
                      <div className="text-sm text-asphalt-600">
                        <p>{BUSINESS_INFO.hours.weekday}</p>
                        <p className="text-asphalt-300">
                          {BUSINESS_INFO.hours.weekend}
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call Now CTA */}
              <div className="rounded-2xl bg-linear-to-br from-asphalt-900 to-asphalt-800 p-6 text-center">
                <p className="mb-4 text-asphalt-300">Prefer to talk?</p>
                <Button asChild variant="primary" size="lg" className="w-full">
                  <a href={formatPhoneLink(BUSINESS_INFO.phoneRaw)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
