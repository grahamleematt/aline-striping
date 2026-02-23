import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    buildSeoMeta({
      title:
        "FAQs About Striping, Sealcoating & Warehouse Marking | A-Line Striping",
      description:
        "Get answers to common questions about parking lot striping, asphalt sealcoating, and warehouse floor marking. Learn about our process, materials, and 1-Year warranty.",
      path: "/faq",
    }),
});
