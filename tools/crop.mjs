// Crop regions out of a full-screen Figma export.
// Coordinates are given in DESIGN pixels (1x); pass --scale to match the
// export scale of the source image (default 2).
//
// Usage:
//   node tools/crop.mjs <srcImage> <jobsFile.json> [--scale 2]
// jobsFile = [{ "out": "public/images/home/hero-left.png",
//               "x": 58, "y": 937, "w": 632, "h": 535 }, ...]

import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const args = process.argv.slice(2);
const src = args[0];
const jobsFile = args[1];
const scaleFlag = args.indexOf('--scale');
const scale = scaleFlag !== -1 ? Number(args[scaleFlag + 1]) : 2;

if (!src || !jobsFile) {
  console.error('Usage: node tools/crop.mjs <srcImage> <jobsFile.json> [--scale N]');
  process.exit(1);
}

const jobs = JSON.parse(await readFile(jobsFile, 'utf8'));
const meta = await sharp(src).metadata();

let ok = 0;
for (const job of jobs) {
  const left = Math.round(job.x * scale);
  const top = Math.round(job.y * scale);
  const width = Math.round(job.w * scale);
  const height = Math.round(job.h * scale);
  const clampedW = Math.min(width, meta.width - left);
  const clampedH = Math.min(height, meta.height - top);
  const outPath = resolve(process.cwd(), job.out);
  await mkdir(dirname(outPath), { recursive: true });
  await sharp(src)
    .extract({ left, top, width: clampedW, height: clampedH })
    .png()
    .toFile(outPath);
  ok++;
  console.log(`✓ ${job.out}  (${clampedW}x${clampedH} from ${left},${top})`);
}
console.log(`\nDone. ${ok} cropped.`);
