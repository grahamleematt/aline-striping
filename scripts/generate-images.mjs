import sharp from "sharp";
import fs from "fs";
import path from "path";

const IMAGES_DIR = path.resolve("public/images");
const PROJECTS_DIR = path.join(IMAGES_DIR, "projects");

const SERVICE_IMAGES = [
  "parking-lot-striping.webp",
  "warehouse-floor-striping.webp",
  "asphalt-sealcoating.webp",
  "layout-design.webp",
  "precision-signage.webp",
];

const FULL_WIDTH_IMAGES = [
  "service-area-map.webp",
  "hero-parking-lot.webp",
  "hero-road-markings.webp",
  "road-marking-cones.webp",
  "ada-parking.webp",
];

const SERVICE_WIDTHS = [400, 800];
const FULL_WIDTH_WIDTHS = [600, 1200];
const PROJECT_WIDTHS = [400, 800];

async function generateVariants(filePath, widths) {
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  const metadata = await sharp(filePath).metadata();
  let generated = 0;

  for (const w of widths) {
    if (w >= metadata.width) continue;

    const outPath = path.join(dir, `${base}-${w}w${ext}`);
    await sharp(filePath)
      .resize(w)
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);
    const size = fs.statSync(outPath).size;
    console.log(
      `  ${path.relative("public", outPath)} (${Math.round(size / 1024)}KB)`,
    );
    generated++;
  }

  return generated;
}

async function main() {
  let total = 0;

  console.log("Generating service image variants...");
  for (const file of SERVICE_IMAGES) {
    const filePath = path.join(IMAGES_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP: ${file} (not found)`);
      continue;
    }
    total += await generateVariants(filePath, SERVICE_WIDTHS);
  }

  console.log("\nGenerating full-width image variants...");
  for (const file of FULL_WIDTH_IMAGES) {
    const filePath = path.join(IMAGES_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP: ${file} (not found)`);
      continue;
    }
    total += await generateVariants(filePath, FULL_WIDTH_WIDTHS);
  }

  console.log("\nGenerating project gallery variants...");
  if (fs.existsSync(PROJECTS_DIR)) {
    const projectFiles = fs
      .readdirSync(PROJECTS_DIR)
      .filter((f) => f.endsWith(".webp") && !f.includes("-"));

    for (const file of projectFiles) {
      const filePath = path.join(PROJECTS_DIR, file);
      total += await generateVariants(filePath, PROJECT_WIDTHS);
    }
  }

  console.log(`\nDone! Generated ${total} responsive variants.`);
}

main().catch(console.error);
