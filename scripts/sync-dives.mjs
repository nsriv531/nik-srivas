// Syncs PROJ_DIVE_MAP from local .env to Vercel (production + preview).
// Usage: npm run sync-dives
// The codes live ONLY in .env and the Vercel env store — never in committed code.
import { readFileSync, existsSync } from 'fs';
import { spawnSync } from 'child_process';
import path from 'path';

const root = process.cwd();

// 1. Pull PROJ_DIVE_MAP out of .env
let envText;
try {
  envText = readFileSync(path.join(root, '.env'), 'utf8');
} catch {
  console.error('No .env file found. Create one with: PROJ_DIVE_MAP={"12345":"slug"}');
  process.exit(1);
}
const match = envText.match(/^PROJ_DIVE_MAP=(.+)$/m);
if (!match) {
  console.error('PROJ_DIVE_MAP not found in .env');
  process.exit(1);
}
const raw = match[1].trim();

// 2. Validate before pushing anything
let map;
try {
  map = JSON.parse(raw);
} catch {
  console.error('PROJ_DIVE_MAP is not valid JSON:', raw);
  process.exit(1);
}
let bad = false;
for (const [code, slug] of Object.entries(map)) {
  if (!/^\d{5}$/.test(code)) { console.error(`Bad code "${code}" — must be exactly 5 digits`); bad = true; }
  if (!/^[a-z0-9-]+$/.test(slug)) { console.error(`Bad slug "${slug}" — lowercase letters, digits, dashes only`); bad = true; }
  const file = path.join(root, 'private', 'dives', `${slug}.html`);
  if (!existsSync(file)) { console.error(`Missing page file: private/dives/${slug}.html`); bad = true; }
}
if (bad) process.exit(1);
console.log(`Map OK — ${Object.keys(map).length} dive(s):`);
for (const [code, slug] of Object.entries(map)) console.log(`  /proj-dive-${code} -> ${slug}.html`);

// 2b. Optional: DIVE_REPOS (allowlist for the live latest-commit endpoint)
const repoMatch = envText.match(/^DIVE_REPOS=(.+)$/m);
let repoRaw = null;
if (repoMatch) {
  repoRaw = repoMatch[1].trim();
  const repos = repoRaw.split(',').map((s) => s.trim()).filter(Boolean);
  let badRepo = false;
  for (const r of repos) {
    if (!/^[A-Za-z0-9._-]+$/.test(r)) { console.error(`Bad repo name "${r}" in DIVE_REPOS`); badRepo = true; }
  }
  if (badRepo) process.exit(1);
  console.log(`Live-commit allowlist — ${repos.length} repo(s): ${repos.join(', ')}`);
}

// 3. Replace the vars on Vercel for each environment
const toSync = [['PROJ_DIVE_MAP', raw]];
if (repoRaw) toSync.push(['DIVE_REPOS', repoRaw]);
for (const [name, value] of toSync) {
  for (const env of ['production', 'preview']) {
    // rm fails harmlessly if the var doesn't exist yet
    spawnSync('vercel', ['env', 'rm', name, env, '--yes'], { shell: true, stdio: 'ignore' });
    const add = spawnSync('vercel', ['env', 'add', name, env], {
      shell: true, input: value, encoding: 'utf8',
    });
    if (add.status !== 0) {
      console.error(`Failed to set ${name} for ${env}:\n${add.stderr || add.stdout}`);
      process.exit(1);
    }
    console.log(`Synced ${name} to Vercel (${env})`);
  }
}

console.log('\nDone. Env vars apply to the NEXT deployment — push a commit or run: vercel --prod');
