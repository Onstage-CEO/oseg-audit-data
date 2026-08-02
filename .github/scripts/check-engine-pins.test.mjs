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

  it('detects an unnamed direct-list checkout step', () => {
    const direct = workflow('engine').replace(
      '      - name: Checkout engine\n        uses: actions/checkout@v4',
      '      - uses: actions/checkout@v4'
    );
    const result = checkWorkflowText('direct.yml', direct, repo, productionRef, {});
    assert.deepEqual(result.failures, []);
    assert.equal(result.engineWorkflow, true);
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
