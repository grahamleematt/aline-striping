import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/why-us")({
  head: () =>
    buildSeoMeta({
      title: "Why Choose A-Line Striping Inc.",
      description:
        "Women-owned, family-run business with 20+ years of experience. DOT-approved materials, ADA compliance experts, and 1-Year warranty on all services.",
      path: "/why-us",
    }),
});
