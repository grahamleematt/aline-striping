import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/precision-linework-signage")({
  head: () =>
    buildSeoMeta({
      title:
        "Precision Linework & Signage | Horn Lake, MS | A-Line Striping",
      description:
        "Custom traffic signs, directional markings, fire lanes, and safety-compliant linework in Horn Lake, MS and the Mid-South. Built for commercial properties, warehouses, and industrial sites.",
      path: "/services/precision-linework-signage",
    }),
});
