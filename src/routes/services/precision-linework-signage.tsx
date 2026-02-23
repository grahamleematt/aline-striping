import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/precision-linework-signage")({
  head: () =>
    buildSeoMeta({
      title: "Precision Linework & Signage Design | A-Line Striping Inc.",
      description:
        "Custom traffic signs, directional markings, and safety-compliant layouts. Fire lanes, pedestrian crossings, no-parking zones. Call (901) 335-8772.",
      path: "/services/precision-linework-signage",
    }),
});
