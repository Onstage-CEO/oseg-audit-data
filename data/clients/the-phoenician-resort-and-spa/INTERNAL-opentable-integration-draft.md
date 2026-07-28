# INTERNAL — OpenTable recovery integration draft (for Joe's review)

**Status: INTERNAL DRAFT. Not the client report. No PDF, no send, no client package.**
Prepared 2026-07-04 (issue #282). This specifies exactly how the completed
6,699-review OpenTable recovery should change the Phoenician report narrative and
source-coverage matrix. It does NOT edit the client artifact — that is your call
after review. All quotes are sentence-bounded (clampQuote-safe): no mid-word or
mid-sentence truncation.

Evidence basis: `staging/opentable/source-status.json`, all four corpora
fidelity-checked (Tavern 100%, Mowry 22/22, J&G 46/46, Afternoon Tea 48/48),
ingested + pushed to `oseg-audit-data` main.

---

## ⚠️ Headline: the current report is INVERTED on two entertainment points

The live client report was written before the recovery, on ~38 undercaptured
reviews. On the two most important entertainment findings it now says the
**opposite** of the fidelity-checked evidence:

1. **Afternoon Tea pianist** — current report: *"scheduled, but invisible in
   guest reviews … surfaces in only one of those reviews, an under-credited
   asset that is currently invisible to guests."* Recovery (1,678 reviews):
   the pianist is the **strongest** guest-visible entertainment signal on the
   property — 273 mentions (16%), praised across 16 years.
2. **Mowry & Cotton brunch DJ** — current report: a real-if-under-credited asset
   (*"praised when it lands"*). Recovery (1,162 reviews): the DJ is **not**
   materially guest-visible.

This is the core value of the recovery: it corrects the report's entertainment
read from "backwards" to evidence-grounded. The direction of every change below
is exactly as you scoped in #282.

---

## Per-outlet integration

### 1. The Phoenician Tavern — STRENGTHEN (dueling pianos), keep noise honest
- **Current report:** dueling pianos are "a live element guests genuinely notice and praise." (Already positive — now backed by 423 fidelity-checked reviews.)
- **Corrected/strengthened claim:** Dueling pianos are a genuinely guest-visible, praised entertainment asset — entertainment 90/423 (21%), dueling pianos 66 mentions @ 4.42★, piano 84 @ 4.39★.
- **Honest tradeoff (keep):** noise/volume is the real minority detractor — 21 mentions @ 3.57★, seating/conversation @ 3.38★ (vs 4.18★ all-history). Loved by most; a subset finds it loud for conversation.
- **Verbatim (clamped):**
  - [2026-05-09, 5★] "We were there for the dueling pianos on a Saturday night and it was fantastic."
  - [2026-05-02, 5★] "Had a great time, enjoying the Dueling Pianos."

### 2. Mowry & Cotton — WEAKEN / REMOVE the brunch-DJ claim
- **Current report:** "the scheduled live DJ is noticed but only lightly … praised when it lands ('the DJ was incredible, old school R&B') … an under-credited atmosphere [asset]" — based on ~4 reviews.
- **Corrected claim:** OpenTable (1,162 reviews) does **not** support the brunch DJ as a materially guest-visible entertainment asset: DJ 6 mentions @ 3.67★, live music 0, entertainment 3. What guests actually cite is atmosphere (173 @ 4.44★), food, and service; the real detractors are value (142 @ 3.31★) and wait/seating (148 @ 3.59★).
- **Recommendation:** remove the DJ-as-asset framing; if kept at all, downgrade to "a scheduled DJ that guests essentially do not mention." Do not present it as evidence for the entertainment thesis.

### 3. J&G Steakhouse — ADD as fine-dining/venue evidence + amplified-music NOISE caution (NOT entertainment proof)
- **Current report:** J&G is not mentioned. Add it, but framed correctly.
- **Claim:** J&G is a fine-dining/venue credibility source, not an entertainment proof point — entertainment-any 100 @ 4.27★, live music 36 @ 4.22★, piano 2 @ 2.5★, dueling pianos 0 across 2009–2026. The historical arc: little entertainment 2009–2013 → amplified music ~2014–2018 that guests repeatedly experienced as **noise** in a fine-dining room → near-silence after. This is the cautionary counterpoint.
- **Verbatim (clamped, amplified-music-as-noise):**
  - [2018-11-30, 2★] "The loud so-called music ruined it for us."
  - [2017-06-30, 1★] "The service was a joke, piano player was a joke and level of the playing was so loud it was a joke."
  - [2014-01-04, 2★] "As previously, the ambiance was none, the noise from the very mediocre band was more than annoying despite multiple requests to drop the speakers volume, the service was not friendly."

### 4. Afternoon Tea (Thirsty Camel Lounge) — ELEVATE pianist as the STRONGEST positive entertainment-fit finding
- **Current report (WRONG — reverse it):** "Live pianist (Lisa Pressman) scheduled, but invisible in guest reviews … surfaces in only one of those reviews … currently invisible to guests."
- **Corrected claim:** the live pianist is the **strongest** guest-visible entertainment evidence on the property — piano/pianist 273 / 1,678 (16%), only 19 of 273 on ≤3★ reviews, praised consistently across 16 years (2010–2026). Entertainment-any 219 @ 4.78★; noise is minor (32 @ 4.25★); value is the lone soft note (185 @ 3.97★).
- **Verbatim (clamped):**
  - [2026-06-25, 5★] "Afternoon tea - Beautiful location, excellent service, live pianist, delicious and gorgeously presented menu."
  - [2026-06-21, 5★] "Food is delicious and we love the live pianist."
  - [2026-06-12, 5★] "A piano softly playing in the room added to the ambience."
- **Note for you to verify (not blocking):** the current report names the pianist "Lisa Pressman." The OpenTable corpus praises "the live pianist" generically; the name isn't in the guest text. Keep or drop the name per what you know is current.

---

## The thesis (preserved, now evidence-backed)
**Entertainment works when it fits the room.** Afternoon Tea's pianist
(right-fit, praised for 16 years) and the Tavern's dueling pianos (loved, with an
honest noise tradeoff) are the positive proof; J&G's amplified music (repeatedly
experienced as noise in a fine-dining room) is the cautionary counterpoint; Mowry
shows an assumed asset the evidence does not support. The recovery turns this from
an assertion into a grounded, four-outlet pattern.

## Source/coverage matrix — the stale rows to fix
Every OpenTable row currently reads `🚫 not supported yet … 0 … The engine has no
capture path`. That is stale (pre-recovery). Corrected state for the four
recovered outlets:

| Outlet | OpenTable — corrected row |
|---|---|
| Tavern | ✅ captured (manual-cdp) · 423 reviews · fidelity 100% · ingested |
| Mowry & Cotton | ✅ captured (manual-cdp) · 1,162 · fidelity 22/22 · ingested |
| J&G Steakhouse | ✅ captured (manual-cdp) · 3,436 · fidelity 46/46 · ingested |
| Afternoon Tea | ✅ captured (manual-cdp) · 1,678 · fidelity 48/48 · ingested |

The engine capability map (`src/sources/engine-capability.ts`) already marks
OpenTable outlet-level `implemented` on main; the matrix in this workspace is
stale only because it hasn't been regenerated since the recovery. It will correct
on the next brief/report regeneration — a step you approve (below).

---

## What is ready for your review, and the next step (your call)
- **This file** (`INTERNAL-opentable-integration-draft.md`) — the complete
  integration spec. Local only, NOT pushed.
- **Nothing client-facing was changed:** the live `client-report.html`,
  `audit-brief.md`, and generated matrix are untouched; no PDF, no send.
- **Recommended next step (needs your go — it's the G4 client-facing action):**
  approve a supervised regeneration of the internal brief/report so the engine
  folds the four OpenTable venue layers in and refreshes the matrix, then you
  review that draft before anything is published. I did **not** auto-run that
  regeneration — an unsupervised LLM rewrite of a client report is exactly the
  owner-gated step, and the Afternoon Tea reversal is material enough that you
  should see the regenerated draft yourself before it goes anywhere.

No evidence-interpretation fork required a `JOE NEEDED:` signal — every change
direction was pre-specified in #282. The one thing to consciously sign off on is
the **magnitude** of the Afternoon Tea reversal (near-invisible → strongest
positive); it is correct per the fidelity-checked evidence, but it visibly
changes a client-facing conclusion, so it is yours to bless.
