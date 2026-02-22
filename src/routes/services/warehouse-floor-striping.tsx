import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/warehouse-floor-striping")({
  head: () => ({
    meta: [
      {
        title:
          "Warehouse Floor Striping Services | Horn Lake, MS | A-Line Striping",
      },
      {
        name: "description",
        content:
          "Professional warehouse floor striping and industrial line marking in Horn Lake, MS. Safety lanes, forklift paths, and OSHA-compliant markings. 1-Year Warranty.",
      },
    ],
  }),
});
