// #134 — migrate Joe's local real workspaces into oseg-audit-data.
//
//   node scripts/migrate-workspaces.mjs --only <slug>   one workspace (canary)
//   node scripts/migrate-workspaces.mjs                 all real workspaces
//
// Copies from the engine repo's gitignored data/clients/ into this repo's
// data/clients/ and writes data/migration-manifest.json describing exactly
// what moved. It NEVER deletes the source, NEVER overwrites an existing
// destination, and NEVER commits — Joe reviews `git status` + diff and
// commits himself (client data: human eyes required).
//
// The committed engine fixtures stay in the engine repo for CI and are
// excluded here by name.

import { cp, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE = '/Users/joepcostello/OSEG/resort-audit-project/data/clients';
const DEST = join(REPO, 'data', 'clients');
const MANIFEST = join(REPO, 'data', 'migration-manifest.json');
// Committed CI fixtures — live in the engine repo, never migrated.
const EXCLUDE = new Set(['example', 'paradisus-cancun', 'azure-sands-puntacana', '_templates']);

const onlyIdx = process.argv.indexOf('--only');
const only = onlyIdx !== -1 ? process.argv[onlyIdx + 1] : null;

async function listFiles(dir, base = '') {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...(await listFiles(join(dir, e.name), rel)));
    else out.push({ path: rel, bytes: (await stat(join(dir, e.name))).size });
  }
  return out;
}

const candidates = (await readdir(SOURCE, { withFileTypes: true }))
  .filter((e) => e.isDirectory() && !EXCLUDE.has(e.name) && !e.name.startsWith('.'))
  .map((e) => e.name)
  .filter((slug) => (only ? slug === only : true));

if (only && candidates.length === 0) {
  console.error(`--only ${only}: not found in ${SOURCE} (or it is an excluded fixture)`);
  process.exit(1);
}

const migrated = [];
for (const slug of candidates) {
  const dest = join(DEST, slug);
  if (existsSync(dest)) {
    console.error(`SKIP ${slug}: destination already exists — refusing to overwrite`);
    continue;
  }
  await cp(join(SOURCE, slug), dest, { recursive: true });
  const files = await listFiles(dest);
  migrated.push({
    slug,
    source: join(SOURCE, slug),
    files: files.length,
    bytes: files.reduce((a, f) => a + f.bytes, 0),
    fileList: files.map((f) => f.path).sort(),
  });
  console.log(`migrated ${slug}: ${files.length} files, ${files.reduce((a, f) => a + f.bytes, 0)} bytes`);
}

let manifest = { migrations: [] };
if (existsSync(MANIFEST)) manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));
manifest.migrations.push({
  at: new Date().toISOString(),
  mode: only ? `canary (--only ${only})` : 'full',
  workspaces: migrated,
});
await mkdir(dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`manifest → ${MANIFEST}`);
console.log('NOT committed — review git status + diff, then commit/push yourself.');
