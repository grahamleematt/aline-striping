import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/layout-design")({
  head: () =>
    buildSeoMeta({
      title:
        "Parking Lot Layout Design Services | Horn Lake, MS | A-Line Striping",
      description:
        "Professional parking lot layout design services in Horn Lake, MS and the Mid-South. Improve traffic flow, maximize space, and support ADA compliance with a custom commercial layout plan.",
      path: "/services/layout-design",
    }),
});
