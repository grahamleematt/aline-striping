import { createFileRoute, notFound } from "@tanstack/react-router";
import { SERVICE_AREA_DATA } from "@/lib/utils";
import { buildSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/$slug")({
  beforeLoad: ({ params }) => {
    const area = SERVICE_AREA_DATA.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
  },
  head: ({ params }) => {
    const area = SERVICE_AREA_DATA.find((a) => a.slug === params.slug);
    const title = area
      ? `Parking Lot Striping, Sealcoating & Warehouse Marking in ${area.name}, ${area.stateAbbr} | A-Line Striping`
      : "Service Area | A-Line Striping";
    const description = area
      ? `Commercial parking lot striping, asphalt sealcoating, warehouse marking, layout design, and signage services in ${area.name}, ${area.state}. Serving ${area.cities.join(", ")} and surrounding areas.`
      : "";
    return buildSeoMeta({
      title,
      description,
      path: `/service-areas/${params.slug}`,
    });
  },
});
