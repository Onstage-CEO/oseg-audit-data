import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const PHOENICIAN_SLUG = 'the-phoenician-resort-and-spa-rebuilt-2026-07-31';
const CAESARS_INTERNAL_AUDIT_SLUG = 'caesars-republic-scottsdale-2026-08-04';
const targetSlug = String(process.env.TARGET_SLUG ?? '').trim();
const operationMode = String(process.env.OPERATION_MODE ?? 'mutation').trim();

// The only pre-attestation operation allowed against the frozen Phoenician is
// an artifact-only preview. It creates no commit and cannot replace canonical
// files. Every capture, generation, import, drain, or commit remains closed.
if (targetSlug === PHOENICIAN_SLUG && operationMode === 'artifact_only') {
  console.log('Phoenician artifact-only preview permitted; canonical files remain frozen.');
  process.exit(0);
}

// Joe authorized an urgent, internal Caesar's Republic audit for the
// 2026-08-05 property meeting. Preserve capture lineage, but never allow this
// exception to commit a client report or publish a canonical package.
if (targetSlug === CAESARS_INTERNAL_AUDIT_SLUG && operationMode !== 'commit') {
  console.log("Caesar's Republic internal audit permitted; client-report publication remains disabled.");
  process.exit(0);
}

if (targetSlug === CAESARS_INTERNAL_AUDIT_SLUG) {
  throw new Error("Caesar's Republic is authorized for internal audit only; client-report commit is disabled.");
}

if (targetSlug === PHOENICIAN_SLUG) {
  throw new Error('Phoenician canonical mutation is disabled. Promote only the exact hash-attested artifact; do not regenerate or commit a new report.');
}

const workspace = resolve('data/clients', PHOENICIAN_SLUG);
const readinessPath = resolve(workspace, 'report-readiness.json');
const attestationPath = resolve(workspace, 'human-editorial-attestation.json');
const reportPath = resolve(workspace, 'client-report.html');

for (const path of [readinessPath, attestationPath, reportPath]) {
  if (!existsSync(path)) {
    throw new Error('Downstream mutation is locked until The Phoenician has a hash-bound passing human editorial attestation.');
  }
}

const readiness = JSON.parse(readFileSync(readinessPath, 'utf8'));
const attestation = JSON.parse(readFileSync(attestationPath, 'utf8'));
const report = readFileSync(reportPath);
const reportSha256 = createHash('sha256').update(report).digest('hex');

if (readiness.status !== 'CLIENT_READY') {
  throw new Error('Downstream mutation is locked: Phoenician readiness is not CLIENT_READY.');
}
if (attestation.decision !== 'pass') {
  throw new Error('Downstream mutation is locked: Phoenician human editorial attestation is not PASS.');
}
if (attestation.artifactSha256 !== reportSha256) {
  throw new Error('Downstream mutation is locked: Phoenician attestation does not match the canonical client-report.html SHA-256.');
}

console.log('Phoenician hash-bound attestation verified; downstream mutation permitted.');
