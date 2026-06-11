# Browser-capture task — Test Resort Alpha

> **Generated handoff package — do not edit by hand.** Regenerate with
> `oseg-audit browser-capture-pack test-resort-alpha`. This is the bridge that
> replaces a hand-written Claude prompt (Issue #127): the audit engine owns
> structure + gates; the browser operator owns live-source capture.

## Instructions for the browser operator (Claude)

You are capturing live guest-review evidence for **Test Resort Alpha** (Phoenix, Arizona) using Joe's logged-in browser. Work the **required**
source lanes below first, then optional ones. For each lane: open the page, run the listed
searches, capture screenshots, then author findings (verbatim quotes + themes). Obey the
guardrails exactly — the engine will reject fabricated or unverifiable evidence at `verify`.
When captures exist, run the command sequence to fold them into the audit and re-check readiness.

## Resort identity

| Field | Value |
|---|---|
| Slug | `test-resort-alpha` |
| Property | Test Resort Alpha |
| Location | Phoenix, Arizona |
| Audit version | V0.1 — Working Draft |

## URLs

No source URLs are known yet.

**Locate first (required, no URL yet — find the real page, never invent one):**
- Google Reviews (Google Travel/Hotels panel) (`google`)
- TripAdvisor (`tripadvisor`)
- Booking.com (`booking`)
- Expedia (`expedia`)
- YouTube (walkthroughs / vlogs) (`youtube`)

## Anti-fabrication guardrails (non-negotiable)

- Capture only what is actually on the live page. Never invent, paraphrase-into-existence, or "reconstruct from memory" a review, quote, rating, author, date, or URL.
- Every evidence record must trace to a real, openable source URL you visited. Record provenance with `capture-record` (real --source-url, real --platform, real --captured-at) before authoring any finding.
- Quotes must be verbatim from the live source. Do not tidy grammar, merge two reviews, or extend a partial quote.
- Ratings/scores are copied exactly as shown ("4.6 / 5", "8.9 / 10"). Never normalize, average, or estimate a score the platform did not display.
- If a source is blocked, empty, or yields nothing for a query, record that honestly (skip-with-reason or zero evidence). An empty result is a finding; a fabricated result is a firewall breach.
- Do not promote a record to `live_verified` unless you personally read it on the live platform in this session. The promotion flow records HOW it was confirmed — keep that truthful.
- No invented URLs. If you cannot find the property page on a platform, leave it MISSING and say so — the engine prefers a NOT READY audit over a fabricated one.
- Inference (e.g. acoustic/massing hypotheses from aerial imagery) must be labeled as `inference`, never as `live_verified` guest evidence.

## Required source lanes

### Google Reviews (Google Travel/Hotels panel) `google` — [ ] MISSING — capture this

- **How to capture:** logged-in browser (server fetch blocked) — use in-page review search + topic chips
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Richest, most searchable corpus. Use in-panel "Search reviews" + topic chips. Filtered views cap ~10 per query — run every keyword across all three sort strategies (most_helpful, lowest_score, most_recent) and dedupe by author+date.
- **Run these searches:**
  - `Test Resort Alpha Phoenix, Arizona reviews`
  - `Test Resort Alpha entertainment`
  - `Test Resort Alpha nightlife`
  - `Test Resort Alpha live music`
  - `Test Resort Alpha after dinner`
  - `Test Resort Alpha evening`
  - `Test Resort Alpha family`
  - `Test Resort Alpha atmosphere`

### TripAdvisor `tripadvisor` — [ ] MISSING — capture this

- **How to capture:** logged-in browser (server fetch blocked) — use in-page review search + topic chips
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Server-side fetch is 403-blocked — logged-in browser only. Use review search + "Popular mentions" chips. The ABSENCE of entertainment from popular mentions is itself a finding worth capturing.
- **Run these searches:**
  - `Test Resort Alpha Phoenix, Arizona reviews`
  - `Test Resort Alpha entertainment`
  - `Test Resort Alpha nightlife`
  - `Test Resort Alpha live music`
  - `Test Resort Alpha after dinner`
  - `Test Resort Alpha evening`
  - `Test Resort Alpha family`
  - `Test Resort Alpha atmosphere`

### Booking.com `booking` — [ ] MISSING — capture this

- **How to capture:** logged-in browser (server fetch blocked) — use in-page review search + topic chips
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** "Read all reviews" modal has a topic search. Structured liked/disliked fields give clean attribution. Category sub-scores (Value, Staff, etc.) are tell-tale signals. Often blocks server fetch.
- **Run these searches:**
  - `Test Resort Alpha Phoenix, Arizona reviews`
  - `Test Resort Alpha entertainment`
  - `Test Resort Alpha nightlife`
  - `Test Resort Alpha live music`
  - `Test Resort Alpha after dinner`
  - `Test Resort Alpha evening`
  - `Test Resort Alpha family`
  - `Test Resort Alpha atmosphere`

### Expedia `expedia` — [ ] MISSING — capture this

- **How to capture:** logged-in browser (server fetch blocked) — use in-page review search + topic chips
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Tends to skew more recent. Note: shares the Expedia-Group review DB with Travelocity — never count both as independent platforms in client-facing scorecards.
- **Run these searches:**
  - `Test Resort Alpha Phoenix, Arizona reviews`
  - `Test Resort Alpha entertainment`
  - `Test Resort Alpha nightlife`
  - `Test Resort Alpha live music`
  - `Test Resort Alpha after dinner`
  - `Test Resort Alpha evening`
  - `Test Resort Alpha family`
  - `Test Resort Alpha atmosphere`

### Reddit `reddit` — [ ] MISSING — capture this

- **How to capture:** harvest verbatim quotes from Google "site:" result snippets (direct fetch blocked)
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Direct fetch is usually blocked. Harvest verbatim quotes from Google "site:reddit.com" result snippets (#:~:text= fragments). Candid signal — often surfaces things review platforms hide.
- **Run these searches:**
  - `site:reddit.com Test Resort Alpha review`
  - `site:reddit.com Test Resort Alpha nightlife`
  - `site:reddit.com Test Resort Alpha entertainment`
  - `site:reddit.com Test Resort Alpha party`
  - `site:reddit.com Test Resort Alpha Phoenix, Arizona`

### YouTube (walkthroughs / vlogs) `youtube` — [ ] MISSING — capture this

- **How to capture:** logged-in browser (server fetch blocked) — use in-page review search + topic chips
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Walkthrough chapter titles reveal the named-venue inventory (this is how venue lists are recovered without floor plans). Titles + comments are also guest-generated signal.
- **Run these searches:**
  - `Test Resort Alpha walkthrough`
  - `Test Resort Alpha resort tour`
  - `Test Resort Alpha vlog`
  - `Test Resort Alpha Phoenix, Arizona tour`

### Aerial / satellite imagery + property hero photos `aerial_satellite` — [ ] MISSING — capture this

- **How to capture:** visual inspection only (satellite/aerial + hero photos) — findings are inference, label as such
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Read building massing for the acoustic-siting hypothesis. Cross-check venue inventory against property hero photos. Findings derived here are INFERENCE — label as such.

## Optional source lanes

### Travelocity `travelocity` — [ ] MISSING — capture this

- **How to capture:** optional reference capture — do not double-count toward independent platforms
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** NOT an independent source — shares the Expedia-Group review DB. Capture only for reference; never double-count toward "platforms cross-checked".
- **Run these searches:**
  - `Test Resort Alpha Phoenix, Arizona reviews`
  - `Test Resort Alpha entertainment`
  - `Test Resort Alpha nightlife`
  - `Test Resort Alpha live music`
  - `Test Resort Alpha after dinner`
  - `Test Resort Alpha evening`
  - `Test Resort Alpha family`
  - `Test Resort Alpha atmosphere`

### Travel blogs / longform guest posts `blogs` — [ ] MISSING — capture this

- **How to capture:** logged-in browser (server fetch blocked) — use in-page review search + topic chips
- **URL:** _(none known — locate the property page first; do not invent one)_
- **Why it matters:** Useful for noise/atmosphere callouts and longer-form anecdotes that capped review fields cannot hold.
- **Run these searches:**
  - `"Test Resort Alpha" review blog`
  - `"Test Resort Alpha" noise`
  - `"Test Resort Alpha" honest review`

## Theme focus (what evidence to aim for)

- **nightlife_after_dinner_gap** (aim ≥6, have 0): The money theme — aim for ≥6 records across multiple platforms and at least one 5-star fan asking for more.
- **explicit_demand** (aim ≥2, have 0): Guests asking by name for an adult-only zone / live music / late hours. 2-3 is enough; quality > volume.
- **live_music_shows_dj** (aim ≥4, have 0): Protect-this signals — named talent and format-that-works reviews.
- **cultural_programming** (aim ≥2, have 0): Standout-to-scale signals. Mayan / mariachi / regional content that over-performs.
- **production_quality** (aim ≥1, have 0): Quality ceiling / venue-sightline / thermal-fail callouts. Often 1-2 records are enough.
- **pool_beach_daytime** (aim ≥2, have 0): The engine-that-works signal. Contrasts with the after-dinner-gap.
- **family_kids_teens** (aim ≥2, have 0): Family-strong evidence + teen-tier-absent evidence. The segment-opportunity flank.
- **noise_atmosphere** (aim ≥3, have 0): External spill + internal bleed + thermal. Three distinct sub-problems; cover each.
- **renovation_context** (aim ≥1, have 0): Relaunch-window timing signal. 1 representative quote is enough.

## Keyword focus (45 terms across 8 categories)

- **entertainment_general** — Run on every review platform; this is the load-bearing category for the after-dinner-gap finding.
  - `entertainment`, `music`, `live music`, `DJ`, `karaoke`, `show`, `shows`, `dancing`, `dance`, `nightlife`, `night life`, `party`, `band`, `singer`, `mariachi`, `lobby music`, `bar music`, `performer`
- **activity** — Daytime/poolside coverage — distinguishes the engine-that-works from the after-dinner-gap.
  - `activities`, `pool activities`, `games`
- **sentiment_negative** — Run lowest-score sort and pair with the sentiment-negative terms to surface harshest reviews fast.
  - `boring`, `quiet`, `sleepy`, `nothing to do`, `loud`
- **sentiment_positive** — Pair with most-helpful and 5-star reviews to identify named-talent and protect-this signals.
  - `fun`, `vibe`, `energy`, `atmosphere`
- **segment** — Surface segment-mix signals (adults vs family vs teens) for the segment-opportunity section.
  - `family`, `kids`, `teens`, `adults`
- **time_of_day** — Use to triangulate the evening-cliff timing without committing to specific clock times pre-engagement.
  - `evening`, `night`, `after dinner`
- **location** — Cross-reference with venue inventory recovered from YouTube walkthroughs.
  - `bar`, `pool`, `beach`
- **seasonal** — Use to spot holiday/peak-period programming gaps and renovation-window claims.
  - `holiday`, `Christmas`, `New Year`, `Thanksgiving`, `Mexican night`

## Command sequence (after capture)

1. **capture-record** — Record provenance for each artifact you captured (one per source page). Offline — only hashes the local screenshot.
   ```bash
   oseg-audit capture-record --source-url "<live url>" --platform <platform> --property "<name>" --location "<location>" --local-path <screenshot> --reviewer "<you>" -o data/clients/test-resort-alpha/captures.json
   ```
2. **research-intake** — Turn your authored findings (verbatim quotes + themes, tied to the captured URLs) into an evidence patch.
   ```bash
   oseg-audit research-intake data/clients/test-resort-alpha/findings.json --id-prefix <slugPrefix> -o data/clients/test-resort-alpha/evidence-patch.json
   ```
3. **merge-evidence** — Merge the new evidence into the audit.
   ```bash
   oseg-audit merge-evidence data/clients/test-resort-alpha/audit.json data/clients/test-resort-alpha/evidence-patch.json
   ```
4. **capture-coverage** — See which planned sources / theme slots / keywords still have no evidence — loop back to step 1 for the gaps.
   ```bash
   oseg-audit capture-coverage data/clients/test-resort-alpha/audit.json --plan data/clients/test-resort-alpha/research-plan.json --capture-archive data/clients/test-resort-alpha/captures.json
   ```
5. **promote-live-verified** — For each record you personally confirmed on the live page, promote it to live_verified (records HOW it was confirmed).
   ```bash
   oseg-audit promote-live-verified data/clients/test-resort-alpha/audit.json --evidence-id <id>
   ```
6. **verify** — The gate. Exit 0 = READY (teaser/deck unlock); nonzero = NOT READY — run `oseg-audit doctor test-resort-alpha` for the single next action.
   ```bash
   oseg-audit verify data/clients/test-resort-alpha/audit.json --capture-archive data/clients/test-resort-alpha/captures.json --summary
   ```

## Outcome — READY / NOT READY

NOT READY: 7 required source(s) still without evidence (google, tripadvisor, booking, expedia, reddit, youtube, aerial_satellite). Capture the missing sources and re-run verify; the engine will keep the teaser/deck suppressed until this clears.

