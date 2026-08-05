import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const script = resolve(dirname(fileURLToPath(import.meta.url)), 'check-phoenician-attestation-freeze.mjs');
const phoenician = 'the-phoenician-resort-and-spa-rebuilt-2026-07-31';
const caesars = 'caesars-republic-scottsdale-2026-08-04';

function run(cwd, targetSlug, operationMode) {
  return execFileSync(process.execPath, [script], {
    cwd,
    env: { ...process.env, TARGET_SLUG: targetSlug, OPERATION_MODE: operationMode },
    encoding: 'utf8',
    stdio: 'pipe',
  });
}

function passingWorkspace() {
  const root = mkdtempSync(resolve(tmpdir(), 'oseg-attestation-freeze-'));
  const workspace = resolve(root, 'data/clients', phoenician);
  mkdirSync(workspace, { recursive: true });
  const html = '<!doctype html><title>Attested report</title>';
  const sha256 = createHash('sha256').update(html).digest('hex');
  writeFileSync(resolve(workspace, 'client-report.html'), html);
  writeFileSync(resolve(workspace, 'report-readiness.json'), JSON.stringify({ status: 'CLIENT_READY' }));
  writeFileSync(resolve(workspace, 'human-editorial-attestation.json'), JSON.stringify({ decision: 'pass', artifactSha256: sha256 }));
  return { root, workspace };
}

test('permits only the Phoenician artifact-only preview before attestation', () => {
  const root = mkdtempSync(resolve(tmpdir(), 'oseg-attestation-freeze-'));
  assert.match(run(root, phoenician, 'artifact_only'), /artifact-only preview permitted/i);
  assert.throws(() => run(root, phoenician, 'commit'), /canonical mutation is disabled/i);
});

test('blocks downstream mutation without a hash-bound passing attestation', () => {
  const root = mkdtempSync(resolve(tmpdir(), 'oseg-attestation-freeze-'));
  assert.throws(() => run(root, 'unattested-property', 'mutation'), /Downstream mutation is locked/i);
});

test("permits only the exact Caesar's internal-audit workspace before Phoenician attestation", () => {
  const root = mkdtempSync(resolve(tmpdir(), 'oseg-attestation-freeze-'));
  assert.match(run(root, caesars, 'mutation'), /internal audit permitted/i);
  assert.match(run(root, caesars, 'artifact_only'), /internal audit permitted/i);
  assert.throws(() => run(root, caesars, 'commit'), /client-report commit is disabled/i);
  assert.throws(() => run(root, 'caesars-republic-scottsdale', 'mutation'), /Downstream mutation is locked/i);
});

test('permits downstream mutation only when readiness, decision, and report hash match', () => {
  const { root, workspace } = passingWorkspace();
  assert.match(run(root, 'attested-downstream-property', 'mutation'), /downstream mutation permitted/i);
  writeFileSync(resolve(workspace, 'client-report.html'), '<!doctype html><title>Changed report</title>');
  assert.throws(() => run(root, 'attested-downstream-property', 'mutation'), /does not match/i);
});

test('every mutating production entry point invokes the shared freeze gate', () => {
  const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
  const gated = [
    'capture-expedia.yml',
    'capture-extra-sources.yml',
    'capture-google.yml',
    'capture-tripadvisor.yml',
    'capture-venues.yml',
    'capture-web-discovery.yml',
    'capture.yml',
    'collect-drain.yml',
    'entertainment-discovery.yml',
    'generate-brief.yml',
    'generate-client-report.yml',
    'generate-entertainment-evidence.yml',
    'import-apify-run.yml',
    'phoenician-approved-paid-source-batch.yml',
    'phoenician-capped-facebook-final-lane.yml',
    'phoenician-quora-public-index-final-lane.yml',
    'phoenician-zero-cost-source-batch.yml',
    'scaffold.yml',
    'status.yml',
  ];
  for (const filename of gated) {
    const yaml = readFileSync(resolve(repoRoot, '.github/workflows', filename), 'utf8');
    assert.match(yaml, /attestation-gate:\s*\n\s+uses: \.\/\.github\/workflows\/phoenician-attestation-freeze-gate\.yml/);
    assert.match(yaml, /needs: attestation-gate/);
  }
});
