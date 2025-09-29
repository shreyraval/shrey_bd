// scripts/validate-assets.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUB = path.join(ROOT, 'public');

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function listDirNames(dir) {
  try { return fs.readdirSync(dir); } catch { return []; }
}

function existsExact(rel) {
  const abs = path.join(PUB, rel);
  try {
    const stat = fs.statSync(abs);
    return stat.isFile() || stat.isDirectory();
  } catch {
    return false;
  }
}

function suggestCase(rel) {
  const dir = path.dirname(rel);
  const base = path.basename(rel);
  const dirAbs = path.join(PUB, dir);
  const entries = listDirNames(dirAbs);
  const found = entries.find(e => e.toLowerCase() === base.toLowerCase());
  return found ? path.join(dir, found) : null;
}

function* gatherAssets(profile) {
  // Gallery images from profile.json
  if (profile?.gallery) {
    for (const [category, images] of Object.entries(profile.gallery)) {
      if (Array.isArray(images)) {
        for (const img of images) {
          if (typeof img === 'string') yield img;
        }
      }
    }
  }

  // Family photos if they exist
  if (profile?.family) {
    for (const member of Object.values(profile.family)) {
      if (typeof member === 'object' && member?.photo) {
        yield member.photo;
      }
    }
  }
}

// Also check hardcoded assets from source code
const hardcodedAssets = [
  'images/hero-bg.jpg',  // from HomePage.tsx
  'images/placeholder-image.jpg'  // from PhotosPage.tsx and lightbox.tsx
];

const jsonPath = path.join(PUB, 'data/profile.json');
if (!fs.existsSync(jsonPath)) {
  console.error('ERROR: public/data/profile.json not found');
  process.exit(1);
}
const profile = readJSON(jsonPath);

const assets = Array.from(new Set([
  ...Array.from(gatherAssets(profile))
    .filter(Boolean)
    .map(s => s.replace(/^\/+/, '')), // strip leading slash if any
  ...hardcodedAssets
]));

let ok = 0, bad = 0;
console.log('— Validating asset paths from profile.json —');
for (const rel of assets) {
  if (existsExact(rel)) {
    console.log('OK     :', rel);
    ok++;
  } else {
    const hint = suggestCase(rel);
    console.log('MISSING:', rel, hint ? `→ did you mean: ${hint}` : '');
    bad++;
  }
}
console.log(`\nSummary: ${ok} OK, ${bad} missing`);
if (bad > 0) process.exitCode = 2;