#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function usage() {
  console.log('trading-analysis-skills installer');
  console.log('Usage: trading-analysis-skills [--target <path>] [--force]');
  console.log('Default target: ./openclaw/skills');
  process.exit(0);
}

const argv = process.argv.slice(2);
let target = path.resolve(process.cwd(), 'openclaw', 'skills');
let force = false;

for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--help' || a === '-h') usage();
  if (a === '--target' || a === '-t') {
    i++;
    if (!argv[i]) {
      console.error('--target requires a path');
      process.exit(2);
    }
    target = path.resolve(process.cwd(), argv[i]);
    continue;
  }
  if (a === '--force' || a === '-f') {
    force = true;
    continue;
  }
}

const source = path.resolve(__dirname, '..', 'openclaw', 'skills');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const e of entries) {
      copyRecursive(path.join(src, e), path.join(dest, e));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  if (!fs.existsSync(source)) {
    console.error('Packaged skills not found in package. Make sure `openclaw/skills` exists in the package files.');
    process.exit(1);
  }

  if (fs.existsSync(target) && !force) {
    console.error(`Target ${target} already exists. Use --force to overwrite.`);
    process.exit(2);
  }

  // If target exists and force, remove it first
  if (fs.existsSync(target) && force) {
    fs.rmSync(target, { recursive: true, force: true });
  }

  copyRecursive(source, target);

  console.log(`Skills installed to ${target}`);
  console.log('You can now use the skills directory or push it to your ClawHub repository.');
} catch (err) {
  console.error('Installation failed:', err && err.message ? err.message : err);
  process.exit(1);
}
