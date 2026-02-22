import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Commercial Parking Lot Striping & Sealcoating | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Professional parking lot striping, warehouse marking & asphalt maintenance across Mississippi and Memphis. Women-owned, 20+ years experience. 1-Year Warranty. Call (901) 335-8772.",
      },
    ],
  }),
});
