import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/layout-design")({
  head: () => ({
    meta: [
      {
        title: "Parking Lot Layout Design Services | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "Professional parking lot layout design services. Maximize space, improve traffic flow, and ensure ADA compliance. Free consultations. Call (901) 335-8772.",
      },
    ],
  }),
});
