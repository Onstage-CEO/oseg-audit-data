import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

function indentation(line) {
  return line.match(/^\s*/)?.[0].length ?? 0;
}

// A checkout step can legitimately be written `uses:` or `- uses:`, with or
// without a trailing comment or quotes. The original pattern matched only the
// bare `uses:` form, so a `- uses: actions/checkout@v4` step — a form already
// used elsewhere in this repo — was INVISIBLE to the check, and so was any
// step carrying a trailing comment. Both are now detected.
const CHECKOUT_LINE = /^\s*(?:-\s+)?uses:\s*["']?actions\/checkout@[^\s#"']+["']?\s*(?:#.*)?$/;

export function checkoutBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  for (let index = 0; index < lines.length; index += 1) {
    if (!CHECKOUT_LINE.test(lines[index])) continue;
    const usesIndent = indentation(lines[index]);
    // Where this step's list marker sits. For `- uses:` the marker is ON this
    // line, so the NEXT sibling step starts at the SAME indent; for a bare
    // `uses:` the marker is on an earlier line at a shallower indent. Getting
    // this wrong makes a block swallow the following step and inherit its
    // `repository:`/`ref:` values.
    const isDashForm = /^\s*-\s+/.test(lines[index]);
    const blockLines = [lines[index]];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const line = lines[cursor];
      if (/^\s*-\s+/.test(line)) {
        const stop = isDashForm ? indentation(line) <= usesIndent : indentation(line) < usesIndent;
        if (stop) break;
      }
      blockLines.push(line);
    }
    const block = blockLines.join('\n');
    blocks.push({
      repository: block.match(/^\s*repository:\s*(\$\{\{[^\n]+\}\}|[^\s#]+)\s*$/m)?.[1] ?? null,
      ref: block.match(/^\s*ref:\s*(\$\{\{[^\n]+\}\}|[^\s#]+)\s*$/m)?.[1] ?? null,
      path: block.match(/^\s*path:\s*([^\s#]+)\s*$/m)?.[1] ?? null,
    });
  }
  return blocks;
}

export function engineCheckoutBlocks(text) {
  return checkoutBlocks(text).filter((block) => block.repository != null);
}

// The checker resolves `${{ env.X }}` by scanning declarations, but GitHub
// resolves it by SCOPE. A second `ENGINE_REF:` in a later step's env block
// would silently win here while GitHub used the workflow-level one (or vice
// versa). Rather than re-implement scope resolution with regexes, record every
// declaration and fail closed on ambiguity.
function envDeclarations(text) {
  const values = new Map();
  const duplicates = new Set();
  for (const match of text.matchAll(/^\s*([A-Z][A-Z0-9_]*):\s*([^\s#]+)\s*$/gm)) {
    const [, name, value] = match;
    if (values.has(name) && values.get(name) !== value) duplicates.add(name);
    values.set(name, value);
  }
  values.__duplicates = duplicates;
  return values;
}

function resolveCheckoutValue(value, declarations) {
  if (value == null) return null;
  const match = value.match(/^\$\{\{\s*env\.([A-Z][A-Z0-9_]*)\s*\}\}$/);
  return match ? (declarations.get(match[1]) ?? null) : value;
}

export function checkWorkflowText(filename, text, approvedRepo, approvedRef, isolatedRefs = {}) {
  const declarations = envDeclarations(text);
  const allExternalCheckouts = engineCheckoutBlocks(text);
  if (allExternalCheckouts.length === 0) {
    return { engineWorkflow: false, isolated: false, failures: [] };
  }

  const expectedRef = isolatedRefs[filename] ?? approvedRef;
  const isolated = Object.hasOwn(isolatedRefs, filename);
  const failures = [];

  // Fail closed when a variable this check depends on is declared more than
  // once with conflicting values: we cannot prove which one GitHub will use.
  for (const name of declarations.__duplicates ?? []) {
    if (name === 'ENGINE_REF' || name === 'ENGINE_REPO') {
      failures.push(filename + ': ' + name + ' is declared more than once with different values; scope is ambiguous, refusing to guess');
    }
  }

  // The checkout action is not the only way to fetch code. A `run:` block that
  // clones an external repository bypasses this check entirely, so treat it as
  // a hard failure and make the operator justify it in review.
  for (const match of text.matchAll(/^\s*[^#\n]*\b(?:git\s+clone|gh\s+repo\s+clone|degit)\b[^\n]*/gm)) {
    failures.push(filename + ': fetches code outside actions/checkout (' + match[0].trim().slice(0, 80) + '); the engine pin cannot be verified for it');
  }
  if (allExternalCheckouts.length !== 1) {
    failures.push(filename + ': expected exactly one external repository checkout, found ' + allExternalCheckouts.length);
  }

  for (const checkout of allExternalCheckouts) {
    const actualRepo = resolveCheckoutValue(checkout.repository, declarations);
    const actualRef = resolveCheckoutValue(checkout.ref, declarations);
    if (actualRepo !== approvedRepo) {
      failures.push(filename + ': external checkout repository ' + (checkout.repository ?? '<missing>') +
        ' resolves to ' + (actualRepo ?? '<missing>') + ', expected ' + approvedRepo);
    }
    if (actualRef !== expectedRef) {
      failures.push(filename + ': engine checkout ref ' + (checkout.ref ?? '<missing>') +
        ' resolves to ' + (actualRef ?? '<missing>') + ', expected ' + expectedRef);
    }
    if (!checkout.path) {
      failures.push(filename + ': external checkout must use an isolated path');
    }
  }

  return { engineWorkflow: true, isolated, failures };
}

export async function checkEnginePins(root = process.cwd()) {
  const manifestPath = resolve(root, '.github/engine-release.json');
  const workflowsDir = resolve(root, '.github/workflows');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const approvedRepo = String(manifest.engineRepository ?? '').trim();
  const approvedRef = String(manifest.approvedEngineRef ?? '').trim();
  const isolatedRefs = manifest.isolatedCleanRoomEngineRefs ?? {};

  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(approvedRepo)) {
    throw new Error('engine-release.json has an invalid engineRepository');
  }
  if (!/^[0-9a-f]{40}$/.test(approvedRef)) {
    throw new Error('engine-release.json approvedEngineRef must be a full lowercase SHA');
  }
  for (const [filename, ref] of Object.entries(isolatedRefs)) {
    if (!/^[^/]+\.ya?ml$/i.test(filename) || !/^[0-9a-f]{40}$/.test(String(ref))) {
      throw new Error('invalid isolated clean-room engine declaration for ' + filename);
    }
  }

  const filenames = (await readdir(workflowsDir)).filter((name) => /\.ya?ml$/i.test(name)).sort();
  const engineWorkflows = [];
  const productionWorkflows = [];
  const isolatedWorkflows = [];
  const failures = [];
  for (const filename of filenames) {
    const text = await readFile(resolve(workflowsDir, filename), 'utf8');
    const result = checkWorkflowText(filename, text, approvedRepo, approvedRef, isolatedRefs);
    if (result.engineWorkflow) {
      engineWorkflows.push(filename);
      (result.isolated ? isolatedWorkflows : productionWorkflows).push(filename);
    }
    failures.push(...result.failures);
  }

  for (const filename of Object.keys(isolatedRefs)) {
    if (!isolatedWorkflows.includes(filename)) {
      failures.push(filename + ': declared isolated clean-room workflow was not detected');
    }
  }
  if (productionWorkflows.length !== manifest.productionEngineWorkflowCount) {
    failures.push('production engine workflow count ' + productionWorkflows.length +
      ' does not match manifest ' + manifest.productionEngineWorkflowCount);
  }
  if (isolatedWorkflows.length !== manifest.isolatedCleanRoomWorkflowCount) {
    failures.push('isolated clean-room workflow count ' + isolatedWorkflows.length +
      ' does not match manifest ' + manifest.isolatedCleanRoomWorkflowCount);
  }
  if (engineWorkflows.length !== manifest.engineWorkflowCount) {
    failures.push('total engine workflow count ' + engineWorkflows.length +
      ' does not match manifest ' + manifest.engineWorkflowCount);
  }

  return {
    approvedRepo,
    approvedRef,
    isolatedRefs,
    engineWorkflows,
    productionWorkflows,
    isolatedWorkflows,
    failures
  };
}

const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (invokedDirectly) {
  const result = await checkEnginePins();
  if (result.failures.length > 0) {
    console.error('Engine pin alignment FAILED:');
    for (const failure of result.failures) console.error('- ' + failure);
    process.exitCode = 1;
  } else {
    console.log('Engine pin alignment OK: ' + result.productionWorkflows.length +
      ' production workflow(s) use ' + result.approvedRepo + '@' + result.approvedRef + '.');
    console.log('Isolated clean-room workflows: ' + result.isolatedWorkflows.length + '.');
    for (const filename of result.engineWorkflows) console.log('- ' + filename);
  }
}
