import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function indentation(line) {
  return line.match(/^\s*/)?.[0].length ?? 0;
}

export function engineCheckoutBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];

  for (let index = 0; index < lines.length; index += 1) {
    if (!/^\s*uses:\s*actions\/checkout@[^\s#]+\s*$/.test(lines[index])) continue;
    const usesIndent = indentation(lines[index]);
    const blockLines = [lines[index]];

    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const line = lines[cursor];
      if (/^\s*-\s+/.test(line) && indentation(line) < usesIndent) break;
      blockLines.push(line);
    }

    const block = blockLines.join('\n');
    const path = block.match(/^\s*path:\s*([^\s#]+)\s*$/m)?.[1] ?? null;
    if (path !== 'engine') continue;
    blocks.push({
      repository: block.match(/^\s*repository:\s*(\$\{\{[^\n]+\}\}|[^\s#]+)\s*$/m)?.[1] ?? null,
      ref: block.match(/^\s*ref:\s*(\$\{\{[^\n]+\}\}|[^\s#]+)\s*$/m)?.[1] ?? null,
    });
  }

  return blocks;
}

function resolveCheckoutValue(value, variable, declaredValue) {
  if (value === `\${{ env.${variable} }}`) return declaredValue;
  return value;
}

export function checkWorkflowText(filename, text, approvedRepo, approvedRef) {
  const repoMatches = [...text.matchAll(/^\s*ENGINE_REPO:\s*([^\s#]+)\s*$/gm)].map((match) => match[1]);
  const refMatches = [...text.matchAll(/^\s*ENGINE_REF:\s*([0-9a-fA-F]{40})\s*$/gm)].map((match) => match[1].toLowerCase());

  if (repoMatches.length === 0 && refMatches.length === 0) return { engineWorkflow: false, failures: [] };

  const failures = [];
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

  const engineCheckouts = engineCheckoutBlocks(text);
  if (engineCheckouts.length !== 1) {
    failures.push(`${filename}: expected exactly one actions/checkout step with path: engine, found ${engineCheckouts.length}`);
    return { engineWorkflow: true, failures };
  }

  const checkout = engineCheckouts[0];
  const actualRepo = resolveCheckoutValue(checkout.repository, 'ENGINE_REPO', repoMatches[0]);
  const actualRef = resolveCheckoutValue(checkout.ref, 'ENGINE_REF', refMatches[0]);
  if (actualRepo !== approvedRepo) {
    failures.push(`${filename}: engine checkout repository ${checkout.repository ?? '<missing>'} resolves to ${actualRepo ?? '<missing>'}, expected ${approvedRepo}`);
  }
  if (actualRef !== approvedRef) {
    failures.push(`${filename}: engine checkout ref ${checkout.ref ?? '<missing>'} resolves to ${actualRef ?? '<missing>'}, expected ${approvedRef}`);
  }

  return { engineWorkflow: true, failures };
}

export async function checkEnginePins(root = process.cwd()) {
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

  const filenames = (await readdir(workflowsDir)).filter((name) => /\.ya?ml$/i.test(name)).sort();
  const engineWorkflows = [];
  const failures = [];
  for (const filename of filenames) {
    const text = await readFile(resolve(workflowsDir, filename), 'utf8');
    const result = checkWorkflowText(filename, text, approvedRepo, approvedRef);
    if (result.engineWorkflow) engineWorkflows.push(filename);
    failures.push(...result.failures);
  }

  if (engineWorkflows.length === 0) failures.push('No engine-using workflows were detected; the check may be stale or broken.');
  return { approvedRepo, approvedRef, engineWorkflows, failures };
}

const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (invokedDirectly) {
  const result = await checkEnginePins();
  if (result.failures.length > 0) {
    console.error('Engine pin alignment FAILED:');
    for (const failure of result.failures) console.error(`- ${failure}`);
    process.exitCode = 1;
  } else {
    console.log(`Engine pin alignment OK: ${result.engineWorkflows.length} workflow(s) checkout ${result.approvedRepo}@${result.approvedRef}.`);
    for (const filename of result.engineWorkflows) console.log(`- ${filename}`);
  }
}
