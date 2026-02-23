import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { PageHero } from "@/components/layout/PageHero";
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

const zodV4Resolver =
  (schema: z.ZodType<ContactFormData>) =>
  async (values: Record<string, unknown>) => {
    const result = schema.safeParse(values);
    if (result.success) return { values: result.data, errors: {} };
    return {
      values: {},
      errors: Object.fromEntries(
        result.error.issues.map((issue) => [
          issue.path[0],
          { type: "validation", message: issue.message },
        ]),
      ),
    };
  };

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ContactFormData>({
    resolver: zodV4Resolver(contactSchema),
    mode: "onBlur",
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      const payload = {
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
        subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        from_name: `${data.firstName} ${data.lastName}`,
        botcheck: "",
        ...data,
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
          event_label: data.service,
          value: 1,
        });
        setIsSubmitted(true);
      } else {
        setError("message", {
          message:
            "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch {
      setError("message", {
        message: "Network error. Please try again or call us directly.",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-asphalt-950 pt-40">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />

        <div className="container-section relative flex min-h-[60vh] flex-col items-center justify-center py-20">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border-2 border-success-600 bg-success-500">
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
      <PageHero showSpotlight={false}>
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
      </PageHero>

      {/* Contact Form Section */}
      <section className="relative pt-16 pb-24 lg:pb-32">
        <div className="container-section">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated" className="overflow-hidden">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 sm:space-y-6">
                    {/* Name fields */}
                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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
                          {...register("firstName")}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                          className={cn(
                            "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                            errors.firstName
                              ? "border-red-500"
                              : "border-asphalt-300",
                          )}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="mt-2 text-sm text-red-500">
                            {errors.firstName.message}
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
                          {...register("lastName")}
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                          className={cn(
                            "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                            errors.lastName
                              ? "border-red-500"
                              : "border-asphalt-300",
                          )}
                          placeholder="Smith"
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="mt-2 text-sm text-red-500">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Contact fields */}
                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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
                          {...register("email")}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={cn(
                            "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                            errors.email
                              ? "border-red-500"
                              : "border-asphalt-300",
                          )}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-sm text-red-500">
                            {errors.email.message}
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
                          {...register("phone")}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className={cn(
                            "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                            errors.phone
                              ? "border-red-500"
                              : "border-asphalt-300",
                          )}
                          placeholder="(901) 555-0123"
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-2 text-sm text-red-500">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Zip and Service */}
                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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
                          {...register("zipCode")}
                          aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                          className={cn(
                            "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                            errors.zipCode
                              ? "border-red-500"
                              : "border-asphalt-300",
                          )}
                          placeholder="38637"
                        />
                        {errors.zipCode && (
                          <p id="zipCode-error" className="mt-2 text-sm text-red-500">
                            {errors.zipCode.message}
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
                          {...register("service")}
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className={cn(
                            "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                            errors.service
                              ? "border-red-500"
                              : "border-asphalt-300",
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
                          <p id="service-error" className="mt-2 text-sm text-red-500">
                            {errors.service.message}
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
                        {...register("message")}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        rows={5}
                        className={cn(
                          "w-full border-2 bg-white px-4 py-3.5 text-asphalt-900 transition-all focus:bg-white focus:border-stripe-500 focus:outline-none focus:ring-2 focus:ring-stripe-500/20",
                          errors.message
                            ? "border-red-500"
                            : "border-asphalt-300",
                        )}
                        placeholder="Tell us about your project, including lot size, current condition, and any specific requirements..."
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-sm text-red-500">
                          {errors.message.message}
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
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stripe-500/20">
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
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stripe-500/20">
                          <Phone className="h-5 w-5 text-stripe-600" />
                        </div>
                        <span className="font-semibold">
                          {BUSINESS_INFO.phone}
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stripe-500/20">
                        <MapPin className="h-5 w-5 text-stripe-600" />
                      </div>
                      <span className="text-sm text-asphalt-600">
                        {BUSINESS_INFO.address.full}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stripe-500/20">
                        <Clock className="h-5 w-5 text-stripe-600" />
                      </div>
                      <div className="text-sm text-asphalt-600">
                        <p>{BUSINESS_INFO.hours.weekday}</p>
                        <p className="text-asphalt-500">
                          {BUSINESS_INFO.hours.weekend}
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call Now CTA */}
              <div className="border-2 border-asphalt-700 bg-asphalt-900 p-6 text-center">
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

          {/* Google Maps */}
          <div className="mt-12">
            <h3 className="mb-4 font-display text-lg font-bold text-asphalt-900">
              Find Us
            </h3>
            <Card variant="elevated" className="overflow-hidden">
              <div className="aspect-video w-full lg:aspect-21/9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5!2d-90.2401265!3d34.485458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f8ff17713b329%3A0xd06b41b566ec9cfe!2sA-Line%20Striping%2C%20Inc.!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A-Line Striping location on Google Maps"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
