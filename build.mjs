import { mkdir, readFile, writeFile } from "node:fs/promises";

const assets = [
  "index.html",
  "solutions.html",
  "about.html",
  "contact.html",
  "separation-kernel-hypervisor.html",
  "globe.html",
  "iot-solutions.html",
  "cybersecurity-solutions.html",
  "cybersecurity-visual.html",
  "iot-visual.html",
  "information-security-consulting.html",
  "consulting-visual.html",
  "styles.css",
  "service-page.css",
  "main.js",
  "why-globe.js",
  "service-page.js",
  "footer-mount.js",
  "CurvedInput.js",
  "components/CurvedInput.js",
  "components/CurvedInput.jsx",
  "components/CurvedInput.css",
  "about-section.css",
  "about-section.js",
  "comparison.css",
  "comparison.js",
  "testimonials.css",
  "testimonials.js",
  "testimonials-data.js",
  "assets/logo.webp",
  "assets/solution-kernel.jpg",
  "assets/solution-iot.jpg",
  "assets/solution-cybersecurity.jpg",
  "assets/solution-consulting.jpg",
];

const encodedAssets = {};

for (const asset of assets) {
  const contents = await readFile(new URL(asset, import.meta.url));
  encodedAssets[`/${asset.replaceAll("\\", "/")}`] = contents.toString("base64");
}

const workerTemplate = await readFile(new URL("worker.js", import.meta.url), "utf8");
const workerBundle = workerTemplate.replace(
  "const files = Object.create(null);",
  `const files = ${JSON.stringify(encodedAssets)};`,
);

await mkdir(new URL("dist/server/", import.meta.url), { recursive: true });
await writeFile(new URL("dist/server/index.js", import.meta.url), workerBundle);

console.log(`Built ${assets.length} assets into dist/server/index.js`);
