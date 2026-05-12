// @ts-check
import { readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import process from "node:process";

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function usageAndExit() {
  // Keep stdout clean for simple usage / CI logs.
  console.error(
    [
      "Usage:",
      "  node scripts/rename-door-images.js",
      "",
      "Renames images in public/images/door_images to door_001.ext, door_002.ext, ...",
      "and writes public/images/door_images/manifest.json.",
    ].join("\n"),
  );
  process.exit(1);
}

/**
 * @param {string} a
 * @param {string} b
 */
function stableNameSort(a, b) {
  return a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });
}

/**
 * @param {number} n
 */
function pad3(n) {
  return String(n).padStart(3, "0");
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 0) usageAndExit();

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(scriptDir, "..");
  const doorDir = path.join(projectRoot, "public", "images", "door_images");

  const entries = await readdir(doorDir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => {
      if (name === "manifest.json") return false;
      const ext = path.extname(name).toLowerCase();
      return SUPPORTED_EXTS.has(ext);
    })
    .sort(stableNameSort);

  if (files.length === 0) {
    console.log(`No supported images found in ${doorDir}`);
    return;
  }

  /** @type {{ original: string, temp: string, final: string }[]} */
  const plan = files.map((name, idx) => {
    const ext = path.extname(name);
    const n = idx + 1;
    const final = `door_${pad3(n)}${ext}`;
    const temp = `.tmp_rename_${pad3(n)}_${crypto.randomUUID()}${ext}`;
    return { original: name, temp, final };
  });

  // Phase 1: rename everything to unique temp names to avoid collisions.
  for (const item of plan) {
    await rename(path.join(doorDir, item.original), path.join(doorDir, item.temp));
  }

  // Phase 2: rename temps into final sequential names.
  for (const item of plan) {
    await rename(path.join(doorDir, item.temp), path.join(doorDir, item.final));
  }

  const manifest = plan.map((item) => `/images/door_images/${item.final}`);
  const manifestPath = path.join(doorDir, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  console.log(`Renamed ${plan.length} file(s).`);
  console.log(`Wrote ${manifestPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

