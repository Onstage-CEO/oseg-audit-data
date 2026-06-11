# oseg-audit-data — INTERNAL ONLY

**Private. Never published. No Pages, no releases, no public artifacts.**

This repo is the **source of truth and black-box recorder** for Onstage resort
audit workspaces (Phase 2B). It holds data only — the audit engine lives in
[`oseg-resort-audit`](https://github.com/Onstage-CEO/oseg-resort-audit), and the
hosted console architecture is documented in
[`oseg-ops-hub/docs/PHASE_2B_HOSTED_AUDIT_CONSOLE.md`](https://github.com/Onstage-CEO/oseg-ops-hub/blob/main/docs/PHASE_2B_HOSTED_AUDIT_CONSOLE.md).

## Layout

```
data/clients/{slug}/   audit workspaces (audit.json, research-plan.json,
                       captures, verify-report.json, …)
out/{slug}/            generated outputs — EMPTY in 2B.0; in future phases
                       Tier-B commits directly, Tier-A arrives ONLY via a
                       PR that Joe merges (CODEOWNERS-gated)
.github/workflows/     scaffold.yml (New Audit), status.yml (verify reports),
                       out-guard.yml (Tier-A PR-gate enforcement)
```

## Writing rules

- Every write is a commit attributed to the requesting user
  (`… — requested by <email>`). No silent writes, ever.
- Operator/Tier-B files: direct commits to `main` (the engine, not a human,
  is the authority on these files; history is the audit trail).
- **Tier-A (client-facing) files under `out/`: PR only, merged only by Joe.**
  Direct pushes touching `out/**` fail the `out-guard` check.
- Vendor names and client data are confidential — internal use only, never
  client-facing, never quoted publicly.

## Branch-protection status (honest note, 2026-06-10)

GitHub branch protection and rulesets on **private** repos require GitHub Pro;
this account is on Free, so "no force-push / no deletion" is **not**
hardware-enforced yet. Compensating controls in effect: only Joe and the
(future) narrowly-scoped Worker PAT can write at all; the Worker exposes no
ref-rewriting route; `out-guard.yml` fails loudly on any direct `out/**` push;
git history plus local clones make any rewrite recoverable. **Upgrading to
GitHub Pro (~$4/mo) enables real protection — recommended; one-click after
upgrade.**

## Who writes here

- GitHub Actions in this repo (scaffold/status workflows), dispatched from the
  hosted Audit Console at `audit.onstage.biz` (Cloudflare Access: Joe, Michele,
  Ashley) via the `audit-console-api` Worker.
- Joe's local engine checkout, where `data/clients/` is a clone of this repo
  (capture intake, manual CLI work).
