# INTERNAL ONLY — Pre/Post-Onstage comparison (The Phoenician)

**Not for client delivery. Removed from the Lisa-facing report on 2026-06-26 by decision.**
**Directional only. Not a controlled comparison. Not a causal claim.**

October 2017 is when Onstage assumed the resort's entertainment program. The table below splits
the dated review corpus at that boundary and is preserved here for internal review.

| Period | Reviews | Overall | Entertainment share | 1–2★ share |
|---|---|---|---|---|
| Before Onstage (pre-Oct 2017) — Oct 2002 to Oct 2017 | 2,590 | 4.34 | 17% | 8% |
| Onstage era (Oct 2017 on) — Oct 2017 to Jun 2026 | 3,420 | 4.32 | 10% | 11% |

## Why this is NOT in the client report

The split is technically supported but confounded and not strategically useful to lead with:

- **Platform mix.** Pre-2017 is ~83% TripAdvisor; the post-2017 window is mixed-platform
  (TripAdvisor + Booking + Expedia + Google + social). Entertainment mention-share is not
  comparable across that mix.
- **Review-behavior drift.** What guests write about, and how often, changed over the 24-year span.
- **Property context.** The resort renovated ~2017–18, so the boundary also coincides with a
  physical-product change, not only the entertainment-operator change.
- **No clean story.** Overall rating is essentially flat (4.34 → 4.32). Mention-share reads
  17% → 10%. That does not support a "score went up under Onstage" narrative, and presenting it
  invites a misread of a confounded number.

## What the client report says instead

A short historical-coverage note only:

> The captured corpus includes reviews from before and after October 2017, but this report does
> not treat that boundary as a controlled before/after comparison because platform mix, review
> behavior, and the property context changed over time.

## Provenance

Numbers computed by engine `16e001f65bdf` from the full dated corpus (6,010 reviews,
Oct 2002 – Jun 2026). The `client.comparison` block was removed from `audit.json` on 2026-06-26
so a future report regeneration does not silently reintroduce the table into the client-facing
report. To reproduce internally, restore that block (boundaryDate 2017-10-06) and regenerate.
