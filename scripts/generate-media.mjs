import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dir = path.join(root, "public", "dev sena");
const out = path.join(root, "src", "data", "mediaFiles.js");

if (!fs.existsSync(dir)) {
  console.error("Missing folder:", dir);
  process.exit(1);
}

const files = fs
  .readdirSync(dir)
  .filter((f) => !f.startsWith(".") && !fs.statSync(path.join(dir, f)).isDirectory())
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

const media = files.map((file) => ({
  file,
  kind: /\.(mp4|webm|mov)$/i.test(file) ? "video" : "image",
}));

const banner = `/** Auto-built from public/dev sena — run: node scripts/generate-media.mjs */\n`;

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, `${banner}export const MEDIA = ${JSON.stringify(media, null, 2)};\n`);
console.log("Wrote", media.length, "items to", path.relative(root, out));
