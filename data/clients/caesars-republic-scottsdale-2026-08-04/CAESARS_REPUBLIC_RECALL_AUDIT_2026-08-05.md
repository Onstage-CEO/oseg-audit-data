# Caesars Republic Entertainment Recall Audit

**Audit date:** 2026-08-05  
**Selected window:** 2025-08-04 through 2026-08-04  
**Report-generation engine:** `5a516992b669feb7e186f80f9de49ee42490d809`  
**Method:** full-text human read of all 304 normalized date-eligible property reviews, compared with the V1 narrow live-entertainment decisions  
**New source-provider capture or spending:** none

## Outcome

The human read found no missed explicit reference to resort-operated live entertainment in the selected property-review corpus. The accepted V1 result remains four entertainment candidates: three verified in scope, one excluded, and none ambiguous. Because only three verified property-window reviews support the entertainment finding, the numeric entertainment rating remains suppressed below the minimum `n=10` threshold.

This audit tests recall for the narrow V1 question only: resort-operated live performance or a live-entertainment program in a public guest venue. It does not claim Internet exhaustiveness and does not convert outlet reviews, operator schedules, private events, ambient audio, off-property events, or broader organized programming into property-review entertainment findings.

## Frozen-corpus reconciliation

| Stage | Count |
|---|---:|
| Raw property-review records | 735 |
| Duplicate copies collapsed | 10 |
| Normalized distinct property reviews | 725 |
| Date-eligible normalized reviews read | 304 |
| Broad Entertainment / atmosphere theme | 25 |
| Entertainment candidates | 4 |
| Verified in scope | 3 |
| Excluded | 1 |
| Ambiguous | 0 |

The 304 date-eligible records reconcile by platform: Booking.com 35, TripAdvisor 33, Expedia 131, and Google 105. The ten duplicate copies are Google-returned TripAdvisor records carrying the same native TripAdvisor review IDs as records in the TripAdvisor capture.

| Audit artifact | SHA-256 |
|---|---|
| `caesars-304-frozen-corpus.json` | `2f47bc75c45faa66785cc5e9523bc91f5b5d77af3367c5328fa601317c9d0312` |

## V1 decision ledger

| Audit ID | Decision | Human basis |
|---|---|---|
| `CSR-130-0e2a0d7f` | In scope | Guest reports live music or a DJ operating at the hotel and audible from the room. |
| `CSR-147-3de3b8b9` | In scope | Guest explicitly reports a musician performing downstairs. |
| `CSR-251-4d9303f3` | In scope | Guest describes enjoyable live music in the lobby as the evening highlight. |
| `CSR-247-cb2d767f` | Excluded | Conference/private-event context plus unrelated music from another guest room; not a verified resort-operated public entertainment program. |

All three in-scope records fall inside the selected dates and retain live source URLs. The in-scope set is unchanged from the corrected deterministic and semantic brief.

## Reviewed non-findings and shadow taxonomy

The human read explicitly checked the strongest look-alikes:

| Audit ID | Treatment | Reason |
|---|---|---|
| `CSR-203-fbc22f80` | Ambient audio, excluded | Music blaring before 6 a.m. does not identify a live performer or program. |
| `CSR-211-fcd30165` | Ambient audio, excluded | Holiday music piping through the lobby is recorded/background audio. |
| `CSR-209-23094b41` | Off-property, excluded | The guest was in town for a concert; the review does not place the concert at the resort. |
| `CSR-185-154dbb07` | Lexical non-performance, excluded | “Live bar experience” describes the bar experience, not a live act. |
| `CSR-219-d963323b` | Broader programming shadow | Scheduled events closed one or both pools; operationally relevant, but outside the narrow live-entertainment taxonomy. |

The broader programming shadow is preserved for a future second-classifier/high-recall taxonomy. It is not blended into this client report or its V1 funnel.

## Decision

The Caesars Republic package may use the narrow V1 findings for an artifact-only meeting preview. Human editorial review is still required before any canonical or client-export-ready publication.
