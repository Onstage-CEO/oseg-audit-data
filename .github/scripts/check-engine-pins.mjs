import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const manifestPath = resolve(root, '.github/engine-release.json');
const workflowsDir = resolve(root, '.github/workflows');

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const approvedRepo = String(manifest.engineRepository ?? '').trim();
const approvedRef = String(manifest.approvedEngineRef ?? '').trim();

if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(approvedRepo)) {
  throw new Error('engine-release.json has an invalid engineRepository');
}
if (!/^[0-9a-f]{40}$/.test(approvedRef)) {
  throw new Error('engine-release.json approvedEngineRef must be a full 40-character lowercase commit SHA');
}

const filenames = (await readdir(workflowsDir))
  .filter((name) => /\.ya?ml$/i.test(name))
  .sort();

const engineWorkflows = [];
const failures = [];

for (const filename of filenames) {
  const path = resolve(workflowsDir, filename);
  const text = await readFile(path, 'utf8');
  const repoMatches = [...text.matchAll(/^\s*ENGINE_REPO:\s*([^\s#]+)\s*$/gm)].map((m) => m[1]);
  const refMatches = [...text.matchAll(/^\s*ENGINE_REF:\s*([0-9a-fA-F]{40})\s*$/gm)].map((m) => m[1].toLowerCase());

  if (repoMatches.length === 0 && refMatches.length === 0) continue;
  engineWorkflows.push(filename);

  if (repoMatches.length !== 1) {
    failures.push(`${filename}: expected exactly one ENGINE_REPO, found ${repoMatches.length}`);
  } else if (repoMatches[0] !== approvedRepo) {
    failures.push(`${filename}: ENGINE_REPO ${repoMatches[0]} does not match approved ${approvedRepo}`);
  }

  if (refMatches.length !== 1) {
    failures.push(`${filename}: expected exactly one full-sha ENGINE_REF, found ${refMatches.length}`);
  } else if (refMatches[0] !== approvedRef) {
    failures.push(`${filename}: ENGINE_REF ${refMatches[0]} does not match approved ${approvedRef}`);
  }
}

if (engineWorkflows.length === 0) {
  failures.push('No engine-using workflows were detected; the check may be stale or broken.');
}

if (failures.length > 0) {
  console.error('Engine pin alignment FAILED:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Engine pin alignment OK: ${engineWorkflows.length} workflow(s) use ${approvedRepo}@${approvedRef}.`);
for (const filename of engineWorkflows) console.log(`- ${filename}`);
