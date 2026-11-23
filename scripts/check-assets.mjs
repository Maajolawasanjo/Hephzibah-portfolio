import { lstat, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve("public");
const folders = ["projects", "about", "editorial"];
const supported = /\.(avif|webp|png|jpe?g)$/i;
const maxFileSize = 3 * 1024 * 1024;
const errors = [];
let count = 0;

/**
 * Verify newly supplied portfolio artwork before deployment.
 * No actual project/portrait assets have been approved yet.
 */
async function inspect(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") return;
    throw error;
  }

  for (const entry of entries) {
    const file = join(directory, entry.name);
    if (entry.isSymbolicLink()) {
      errors.push("Symbolic links not allowed in public imagery: " + file);
      continue;
    }
    if (entry.isDirectory()) {
      await inspect(file);
      continue;
    }
    if (!entry.isFile() || entry.name === ".gitkeep") continue;
    count += 1;

    if (!supported.test(file)) {
      errors.push("Unoptimized or unsupported asset type: " + file);
      continue;
    }
    const info = await lstat(file);
    if (info.size > maxFileSize) {
      errors.push("Image exceeds 3 MiB maximum: " + file);
    }
  }
}

for (const folder of folders) await inspect(join(root, folder));

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Portfolio asset check passed (" + count + " images).");
}
