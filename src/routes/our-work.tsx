import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      {
        title: "Our Work | Project Gallery | A-Line Striping Inc.",
      },
      {
        name: "description",
        content:
          "View our portfolio of parking lot striping, sealcoating, and warehouse marking projects across the Mid-South. Quality work backed by a 1-Year warranty.",
      },
    ],
  }),
});
