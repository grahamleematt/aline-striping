import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/")({
  head: () =>
    buildSeoMeta({
      title:
        "Service Areas | Parking Lot Striping & Sealcoating | A-Line Striping",
      description:
        "A-Line Striping serves Horn Lake MS, Memphis TN, and the Mid-South region. Professional parking lot striping, sealcoating, and warehouse marking services.",
      path: "/service-areas",
    }),
});
