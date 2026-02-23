import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoMeta({
      title: "Contact Us | Request a Free Quote | A-Line Striping Inc.",
      description:
        "Contact A-Line Striping for a free quote on parking lot striping, sealcoating, and warehouse marking services. Call (901) 335-8772 or fill out our form.",
      path: "/contact",
    }),
});
