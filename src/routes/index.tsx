import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoMeta({
      title:
        "Commercial Parking Lot Striping & Sealcoating | A-Line Striping Inc.",
      description:
        "Professional parking lot striping, warehouse marking & asphalt maintenance across Mississippi and Memphis. Women-owned, 20+ years experience. 1-Year Warranty. Call (901) 335-8772.",
      path: "/",
    }),
});
