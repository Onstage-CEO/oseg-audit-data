#!/usr/bin/env bash
# Phase 2B.0 task #134 — one-time migration of REAL client workspaces from
# Joe's local engine checkout into this data repo.
#
# SAFETY DESIGN — this script:
#   * copies only (never deletes the source),
#   * excludes the committed CI fixtures (they stay in the engine repo),
#   * stages the result but NEVER commits and NEVER pushes —
#     Joe reviews `git status` / `git diff --cached --stat` and pushes himself.
#
# Usage (Joe, from anywhere):
#   bash ~/OSEG/oseg-audit-data/scripts/migrate-local-workspaces.sh
set -euo pipefail

SRC="${OSEG_ENGINE_CLIENTS:-$HOME/OSEG/resort-audit-project/data/clients}"
DEST_REPO="$HOME/OSEG/oseg-audit-data"
DEST="$DEST_REPO/data/clients"
FIXTURES=(example paradisus-cancun azure-sands-puntacana _templates)

[ -d "$SRC" ] || { echo "source not found: $SRC"; exit 1; }
[ -d "$DEST" ] || { echo "dest not found: $DEST (clone oseg-audit-data first)"; exit 1; }

echo "== Migration manifest =="
copied=0; skipped=0
for dir in "$SRC"/*/; do
  slug=$(basename "$dir")
  for f in "${FIXTURES[@]}"; do
    if [ "$slug" = "$f" ]; then echo "SKIP (fixture, stays in engine repo): $slug"; slug=""; break; fi
  done
  [ -z "$slug" ] && { skipped=$((skipped+1)); continue; }
  if [ -e "$DEST/$slug" ]; then echo "SKIP (already in data repo):        $slug"; skipped=$((skipped+1)); continue; fi
  cp -R "$dir" "$DEST/$slug"
  echo "COPY:                                $slug  ($(du -sh "$DEST/$slug" | cut -f1))"
  copied=$((copied+1))
done

cd "$DEST_REPO"
git add data/clients
echo
echo "== Result: $copied copied, $skipped skipped. Staged, NOT committed. =="
echo
git status --short | head -40
echo
echo "Review what is staged, then run YOURSELF:"
echo "  cd $DEST_REPO"
echo "  git diff --cached --stat        # full file list"
echo "  git commit -m 'migrate: initial import of local client workspaces — reviewed by Joe'"
echo "  git push"
echo
echo "Nothing has left this machine yet."
