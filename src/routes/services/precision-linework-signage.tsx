import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/precision-linework-signage")({
  head: () => ({
    meta: [
      {
        title: "Precision Linework & Signage Design | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Custom traffic signs, directional markings, and safety-compliant layouts. Fire lanes, pedestrian crossings, no-parking zones. Call (901) 335-8772.",
      },
    ],
  }),
});
