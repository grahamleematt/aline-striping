import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      {
        title:
          "Service Areas | Parking Lot Striping & Sealcoating | A-Line Striping",
      },
      {
        name: "description",
        content:
          "A-Line Striping serves Horn Lake MS, Memphis TN, and the Mid-South region. Professional parking lot striping, sealcoating, and warehouse marking services.",
      },
    ],
  }),
});
