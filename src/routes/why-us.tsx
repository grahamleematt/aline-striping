import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      {
        title: "Why Choose A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Women-owned, family-run business with 20+ years of experience. DOT-approved materials, ADA compliance experts, and 1-Year warranty on all services.",
      },
    ],
  }),
});
