import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/layout-design")({
  head: () =>
    buildSeoMeta({
      title: "Parking Lot Layout Design Services | A-Line Striping Inc.",
      description: "Professional parking lot layout design services. Maximize space, improve traffic flow, and ensure ADA compliance. Free consultations. Call (901) 335-8772.",
      path: "/services/layout-design",
    }),
});
