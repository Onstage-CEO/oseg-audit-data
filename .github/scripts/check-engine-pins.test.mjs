import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { checkWorkflowText, engineCheckoutBlocks } from './check-engine-pins.mjs';

const repo = 'Onstage-CEO/oseg-resort-audit';
const ref = '67daf35c887e3509434978ffe7937df6b6385980';

function workflow(repository = '${{ env.ENGINE_REPO }}', checkoutRef = '${{ env.ENGINE_REF }}') {
  return `name: fixture
env:
  ENGINE_REPO: ${repo}
  ENGINE_REF: ${ref}
jobs:
  verify:
    steps:
      - uses: actions/checkout@v4
      - name: Checkout engine
        uses: actions/checkout@v4
        with:
          repository: ${repository}
          ref: ${checkoutRef}
          path: engine
      - run: npm test
`;
}

describe('engine checkout pin alignment', () => {
  it('accepts checkout values derived from the validated declarations', () => {
    assert.deepEqual(checkWorkflowText('good.yml', workflow(), repo, ref).failures, []);
  });

  it('accepts an approved literal repository with the approved env ref', () => {
    assert.deepEqual(checkWorkflowText('literal.yml', workflow(repo), repo, ref).failures, []);
  });

  it('rejects a different actual checkout repository even when declarations remain approved', () => {
    const result = checkWorkflowText('wrong-repo.yml', workflow('Onstage-CEO/other-engine'), repo, ref);
    assert.match(result.failures.join('\n'), /checkout repository .* expected Onstage-CEO\/oseg-resort-audit/);
  });

  it('rejects a different actual checkout ref even when declarations remain approved', () => {
    const result = checkWorkflowText('wrong-ref.yml', workflow(repo, '1111111111111111111111111111111111111111'), repo, ref);
    assert.match(result.failures.join('\n'), /checkout ref .* expected 67daf35c/);
  });

  it('rejects an engine workflow with no path: engine checkout', () => {
    const text = workflow().replace('          path: engine\n', '');
    assert.match(checkWorkflowText('missing.yml', text, repo, ref).failures.join('\n'), /found 0/);
  });

  it('isolates only the checkout block that writes path: engine', () => {
    assert.deepEqual(engineCheckoutBlocks(workflow()), [{ repository: '${{ env.ENGINE_REPO }}', ref: '${{ env.ENGINE_REF }}' }]);
  });
});
