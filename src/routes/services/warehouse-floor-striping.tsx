import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/warehouse-floor-striping")({
  head: () =>
    buildSeoMeta({
      title:
        "Warehouse Floor Striping Services | Horn Lake, MS | A-Line Striping",
      description:
        "Professional warehouse floor striping and industrial line marking in Horn Lake, MS. Safety lanes, forklift paths, and OSHA-compliant markings. 1-Year Warranty.",
      path: "/services/warehouse-floor-striping",
    }),
});
