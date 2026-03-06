import fs from "fs";
import path from "path";

const SITE_URL = "https://www.alinestripinginc.com";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  {
    path: "/services/parking-lot-striping",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/services/warehouse-floor-striping",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/services/asphalt-sealcoating",
    priority: "0.9",
    changefreq: "monthly",
  },
  { path: "/services/layout-design", priority: "0.8", changefreq: "monthly" },
  {
    path: "/services/precision-linework-signage",
    priority: "0.8",
    changefreq: "monthly",
  },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/why-us", priority: "0.8", changefreq: "monthly" },
  { path: "/service-areas", priority: "0.8", changefreq: "monthly" },
  { path: "/our-work", priority: "0.7", changefreq: "monthly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
];

const SERVICE_AREA_SLUGS = [
  "desoto-county-ms",
  "marshall-county-ms",
  "panola-county-ms",
  "tate-county-ms",
  "bolivar-county-ms",
  "lafayette-county-ms",
  "shelby-county-tn",
  "crittenden-county-ar",
];

function buildUrl(entry, lastmod) {
  return [
    "  <url>",
    `    <loc>${SITE_URL}${entry.path}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "  </url>",
  ].join("\n");
}

function generate() {
  const today = new Date().toISOString().split("T")[0];

  const serviceAreaEntries = SERVICE_AREA_SLUGS.map((slug) => ({
    path: `/service-areas/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  }));

  const allRoutes = [...STATIC_ROUTES, ...serviceAreaEntries];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allRoutes.map((entry) => buildUrl(entry, today)),
    "</urlset>",
    "",
  ].join("\n");

  const outPath = path.resolve("public/sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf-8");
  console.log(`Sitemap generated: ${outPath} (${allRoutes.length} URLs, lastmod: ${today})`);
}

generate();
