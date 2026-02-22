import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/asphalt-sealcoating")({
  head: () => ({
    meta: [
      {
        title:
          "Asphalt Sealcoating Services | Horn Lake, MS | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Professional asphalt sealcoating services in Horn Lake, MS. Protect your parking lot and extend pavement life. Commercial & residential. 1-Year Warranty.",
      },
    ],
  }),
});
