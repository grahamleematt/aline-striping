import puppeteer from "puppeteer";
import { createServer } from "http";
import fs from "fs";
import path from "path";

const DIST_DIR = path.resolve("dist");
const PORT = 4173;
const FALLBACK_TITLE = "A-Line Striping, Inc.";

const ROUTES = [
  "/",
  "/services/parking-lot-striping",
  "/services/warehouse-floor-striping",
  "/services/asphalt-sealcoating",
  "/services/layout-design",
  "/services/precision-linework-signage",
  "/why-us",
  "/service-areas",
  "/our-work",
  "/faq",
  "/contact",
  "/service-areas/desoto-county-ms",
  "/service-areas/marshall-county-ms",
  "/service-areas/panola-county-ms",
  "/service-areas/tate-county-ms",
  "/service-areas/bolivar-county-ms",
  "/service-areas/lafayette-county-ms",
  "/service-areas/shelby-county-tn",
  "/service-areas/crittenden-county-ar",
];

function serveStatic(spaHtml, distDir, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${port}`);
      let filePath = path.join(distDir, url.pathname);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(spaHtml);
        return;
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".woff2": "font/woff2",
      };

      const content = fs.readFileSync(filePath);
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/html" });
      res.end(content);
    });

    server.listen(port, () => resolve(server));
  });
}

async function waitForRouteRender(page) {
  await page.waitForSelector("h1", { timeout: 15000 });
  await page.waitForFunction(
    () => document.querySelector('meta[property="og:title"]') !== null,
    { timeout: 10000 },
  );
}

function cleanDuplicateTitle(html) {
  const fallbackTag = `<title>${FALLBACK_TITLE}</title>`;
  const idx = html.lastIndexOf(fallbackTag);
  if (idx === -1) return html;
  return html.slice(0, idx) + html.slice(idx + fallbackTag.length);
}

async function prerender() {
  console.log("Starting pre-render...");

  const spaHtml = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");
  const server = await serveStatic(spaHtml, DIST_DIR, PORT);
  const browser = await puppeteer.launch({ headless: true });

  let rendered = 0;
  const results = [];

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    await waitForRouteRender(page);

    const title = await page.title();
    let html = await page.content();
    html = cleanDuplicateTitle(html);

    const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, route);

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

    rendered++;
    results.push({ route, title });
    process.stdout.write(`  [${rendered}/${ROUTES.length}] ${route} -> "${title}"\n`);
    await page.close();
  }

  await browser.close();
  server.close();

  console.log(`Pre-rendered ${rendered}/${ROUTES.length} routes`);
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
