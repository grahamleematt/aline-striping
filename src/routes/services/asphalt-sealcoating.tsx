import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/asphalt-sealcoating")({
  head: () =>
    buildSeoMeta({
      title:
        "Asphalt Sealcoating Services | Horn Lake, MS | A-Line Striping Inc.",
      description:
        "Professional asphalt sealcoating services in Horn Lake, MS. Protect your parking lot and extend pavement life. Commercial & residential. 1-Year Warranty.",
      path: "/services/asphalt-sealcoating",
    }),
});
