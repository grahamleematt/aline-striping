import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/parking-lot-striping")({
  head: () => ({
    meta: [
      {
        title:
          "Parking Lot Striping Services | Horn Lake, MS | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Professional parking lot striping and re-striping services in Horn Lake, MS and the Mid-South. ADA-compliant markings, fire lanes, and custom layouts. 1-Year Warranty. Call (901) 335-8772.",
      },
    ],
  }),
});
