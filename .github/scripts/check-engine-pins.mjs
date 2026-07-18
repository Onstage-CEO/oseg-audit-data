import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const release = JSON.parse(await readFile(resolve(root, 'engine-release.json'), 'utf8'));
const sha = /^[0-9a-f]{40}$/;
if (release.schemaVersion !== 'V1') throw new Error('engine-release.json schemaVersion must be V1');
if (!sha.test(release.approvedEngineCommit)) throw new Error('approvedEngineCommit must be a full 40-character SHA');
if (!sha.test(release.validatedEngineCommit)) throw new Error('validatedEngineCommit must be a full 40-character SHA');

const workflowDir = resolve(root, '.github/workflows');
const files = (await readdir(workflowDir)).filter((name) => /\.ya?ml$/i.test(name)).sort();
const engineRepository = 'Onstage-CEO/oseg-resort-audit';
const pins = [];
const malformed = [];

for (const file of files) {
  const text = await readFile(resolve(workflowDir, file), 'utf8');
  if (!text.includes(engineRepository)) continue;
  const checkoutBlocks = text.split(/-\s+uses:\s*actions\/checkout@[^\n]+/g).slice(1);
  let found = false;
  for (const block of checkoutBlocks) {
    const section = block.split(/\n\s*-\s+(?:name:|uses:|run:)/, 1)[0] ?? block;
    if (!section.includes(`repository: ${engineRepository}`)) continue;
    const match = /ref:\s*['"]?([0-9a-f]{40})['"]?/i.exec(section);
    if (match) {
      pins.push({ file, commit: match[1].toLowerCase() });
      found = true;
    }
  }
  if (!found) malformed.push(file);
}

if (pins.length === 0) throw new Error(`No ${engineRepository} workflow checkouts were found`);
if (malformed.length > 0) throw new Error(`Engine checkout exists without a full immutable ref in: ${malformed.join(', ')}`);

const mismatched = pins.filter((pin) => pin.commit !== release.approvedEngineCommit);
if (mismatched.length > 0) {
  throw new Error(
    `Engine pin drift detected. Approved ${release.approvedEngineCommit}; mismatches: ` +
      mismatched.map((pin) => `${pin.file}=${pin.commit}`).join(', '),
  );
}

const unique = [...new Set(pins.map((pin) => pin.commit))];
if (unique.length !== 1) throw new Error(`Hosted workflows use mixed engine pins: ${unique.join(', ')}`);

const calculatedState = release.approvedEngineCommit === release.validatedEngineCommit ? 'aligned' : 'lagging';
if (release.deploymentState !== calculatedState) {
  throw new Error(`deploymentState is stale: expected ${calculatedState}, found ${release.deploymentState}`);
}

console.log(`Engine pin truth: ${pins.length} workflow checkout(s), all ${release.approvedEngineCommit}.`);
if (calculatedState === 'lagging') {
  console.log(`Deployment lag is explicit: validated ${release.validatedEngineCommit}, deployed ${release.approvedEngineCommit}.`);
}
