import { createFileRoute } from "@tanstack/react-router";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/our-work")({
  head: () =>
    buildSeoMeta({
      title: "Our Work | Project Gallery | A-Line Striping Inc.",
      description:
        "View our portfolio of parking lot striping, sealcoating, and warehouse marking projects across the Mid-South. Quality work backed by a 1-Year warranty.",
      path: "/our-work",
    }),
});
