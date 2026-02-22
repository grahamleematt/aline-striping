import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      {
        title:
          "FAQs About Striping, Sealcoating & Warehouse Marking | A-Line Striping",
      },
      {
        name: "description",
        content:
          "Get answers to common questions about parking lot striping, asphalt sealcoating, and warehouse floor marking. Learn about our process, materials, and 1-Year warranty.",
      },
    ],
  }),
});
