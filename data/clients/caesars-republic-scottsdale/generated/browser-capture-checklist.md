# Browser-capture checklist — Caesars Republic Scottsdale

> Generated — do not edit by hand. Companion to `browser-capture-task.md`.

## Required source lanes

- [ ] **Google Reviews (Google Travel/Hotels panel)** (`google`) — [~] captured, no evidence yet
- [ ] **TripAdvisor** (`tripadvisor`) — [ ] MISSING — capture this
- [ ] **Booking.com** (`booking`) — [ ] MISSING — capture this
- [ ] **Expedia** (`expedia`) — [ ] MISSING — capture this
- [ ] **Reddit** (`reddit`) — [ ] MISSING — capture this
- [ ] **YouTube (walkthroughs / vlogs)** (`youtube`) — [ ] MISSING — capture this
- [ ] **Aerial / satellite imagery + property hero photos** (`aerial_satellite`) — [ ] MISSING — capture this

## Optional source lanes

- [ ] Travelocity (`travelocity`) — [ ] MISSING — capture this
- [ ] Travel blogs / longform guest posts (`blogs`) — [ ] MISSING — capture this

## Guardrails (confirm each before promoting evidence)

- [ ] Capture only what is actually on the live page. Never invent, paraphrase-into-existence, or "reconstruct from memory" a review, quote, rating, author, date, or URL.
- [ ] Every evidence record must trace to a real, openable source URL you visited. Record provenance with `capture-record` (real --source-url, real --platform, real --captured-at) before authoring any finding.
- [ ] Quotes must be verbatim from the live source. Do not tidy grammar, merge two reviews, or extend a partial quote.
- [ ] Ratings/scores are copied exactly as shown ("4.6 / 5", "8.9 / 10"). Never normalize, average, or estimate a score the platform did not display.
- [ ] If a source is blocked, empty, or yields nothing for a query, record that honestly (skip-with-reason or zero evidence). An empty result is a finding; a fabricated result is a firewall breach.
- [ ] Do not promote a record to `live_verified` unless you personally read it on the live platform in this session. The promotion flow records HOW it was confirmed — keep that truthful.
- [ ] No invented URLs. If you cannot find the property page on a platform, leave it MISSING and say so — the engine prefers a NOT READY audit over a fabricated one.
- [ ] Inference (e.g. acoustic/massing hypotheses from aerial imagery) must be labeled as `inference`, never as `live_verified` guest evidence.

## Command sequence

- [ ] 1. capture-record — Record provenance for each artifact you captured (one per source page). Offline — only hashes the local screenshot.
- [ ] 2. research-intake — Turn your authored findings (verbatim quotes + themes, tied to the captured URLs) into an evidence patch.
- [ ] 3. merge-evidence — Merge the new evidence into the audit.
- [ ] 4. capture-coverage — See which planned sources / theme slots / keywords still have no evidence — loop back to step 1 for the gaps.
- [ ] 5. promote-live-verified — For each record you personally confirmed on the live page, promote it to live_verified (records HOW it was confirmed).
- [ ] 6. verify — The gate. Exit 0 = READY (teaser/deck unlock); nonzero = NOT READY — run `oseg-audit doctor caesars-republic-scottsdale` for the single next action.

## Outcome

- [ ] NOT READY: 7 required source(s) still without evidence (google, tripadvisor, booking, expedia, reddit, youtube, aerial_satellite). Capture the missing sources and re-run verify; the engine will keep the teaser/deck suppressed until this clears.
