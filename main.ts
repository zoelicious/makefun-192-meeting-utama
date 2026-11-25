import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The entry text below is written verbatim to entry.txt as the submission.
const text = "After the meeting, someone emailed us the email we had just spent an hour not sending.";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
} catch (err) {
  console.error("failed to write entry.txt:", err && err.message ? err.message : err);
  process.exit(1);
}

console.log("wrote entry.txt (" + text.length + " characters) to " + path.join(outDir, "entry.txt"));
console.log("source dir: " + here);
