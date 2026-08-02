# Resort Audit Source Universe Contract

**Status:** Binding product and engineering contract
**Version:** 1.0
**Effective:** 2026-08-02
**Owner:** Onstage Entertainment Group

## Purpose

The Resort Entertainment Audit derives its value from researching the broadest defensible set of property reviews, outlet reviews, social posts, videos, forums, editorial coverage, local event listings, official property material, reservation platforms, regional travel platforms, and other public evidence that may reveal entertainment programming or guest response.

The audit must never collapse that work into a methodology statement naming only Google, TripAdvisor, Expedia, and Booking.com. Those platforms may supply the scorable property-review layer, but they are only one part of the research universe.

## The completeness claim

The current registry contains 63 source lanes. It is the mandatory baseline, not a claim that every valuable Internet source worldwide has been discovered.

No audit, report, salesperson, or automated workflow may claim that the registry contains every source in the world or is 99% exhaustive. The Internet changes continuously; regional platforms, new communities, private or login-gated sources, local event calendars, and emerging social products make that claim impossible to prove.

The approved claim is:

> Onstage evaluates each property against a versioned global source universe, applies market- and property-specific relevance rules, records the outcome of every applicable source, and continuously tests for new sources that may add independent evidence.

## Current 63-source baseline

1. Aerial / satellite imagery and map context
2. Agoda
3. Almosafer
4. Independent blogs and editorial
5. Booking.com
6. CheapTickets
7. Cluburlaub
8. Despegar / Decolar
9. Eat App
10. ebookers
11. EuropaBooking
12. Expedia
13. Facebook
14. Google / Google Maps
15. Google Hotels
16. Guest Reservations
17. HolidayCheck
18. Hotel Reservation Network
19. Hotels.com
20. Hotels in America
21. HotelsOne
22. HotelTonight
23. HRS
24. Instagram
25. Approved internal client and operator inputs
26. Jeeran
27. KAYAK
28. Local media and event listings
29. OpenTable
30. Orbitz
31. Otzyv.ru
32. Priceline
33. Property social profiles
34. Official property website
35. Qaym
36. Quora and public Q&A
37. RealTime Reservation
38. Reddit
39. Rehlat
40. ReserveOut
41. ResortPass
42. Resy
43. SevenRooms
44. Skyscanner
45. STAAH
46. Tablet Hotels
47. tiket.com
48. TikTok
49. Toast Tables
50. Tock
51. TopHotels
52. Travelocity
53. Traveloka
54. Trip.com / Ctrip
55. TripAdvisor
56. trivago
57. UrVenue
58. webook
59. Wego
60. Wotif
61. Yelp
62. YouTube
63. Zoover

## Known discovery gaps

The 63-source baseline is not globally exhaustive. At minimum, the next discovery cycle must evaluate additional regional and category candidates including:

- Japan: Rakuten Travel, Jalan, Ikyu, JTB and other domestic hotel-review surfaces.
- India: MakeMyTrip, Goibibo, Cleartrip, EaseMyTrip and regionally important hotel platforms.
- China: Qunar, Fliggy, Dianping and other domestic travel, lifestyle, and local-review surfaces distinct from Trip.com/Ctrip.
- Russia and neighboring markets: Yandex Travel, Ostrovok and ZenHotels.
- Korea: Naver, Kakao and domestic travel/review platforms.
- Additional local discovery: destination-specific tourism boards, city magazines, nightlife calendars, ticketing platforms, neighborhood forums, and property-specific public communities.
- Additional media surfaces: short-form video, podcast transcripts, public photo captions, event flyers, performer calendars, and cached or indexed public results where permitted.

Each candidate must be tested for independent evidence value, property identity reliability, access method, reuse rights, geographic relevance, duplication, and a sustainable execution path before promotion into the mandatory registry.

## Per-audit source contract

Every registry source must receive exactly one property-specific result:

- `captured`
- `checked_no_property_listing`
- `checked_no_relevant_evidence`
- `listing_found_reviews_unavailable`
- `blocked_credentials`
- `blocked_technical`
- `blocked_rights`
- `duplicate_or_syndicated`
- `outlet_level_only`
- `identity_only`
- `not_applicable_market`
- `not_applicable_property_type`

Every result must include:

- registry source ID and display name;
- registry version;
- property and market applicability decision;
- attempt date and method;
- result status;
- evidence count;
- whether evidence contributes to property scoring, outlet analysis, discovery/context, or no analysis;
- a specific client-readable explanation when no usable evidence was produced;
- source lineage or capture reference where evidence was produced.

Blank statuses, unexplained zeroes, generic dashes, and omitted registry sources are prohibited.

## Evidence must remain separated

Research breadth and analytical compatibility are different questions. The report must expose every researched source without improperly combining evidence.

1. **Property-review layer:** property-level reviews eligible for resort-wide scoring.
2. **Outlet-review layer:** restaurant, bar, spa, pool, club, and venue listings analyzed separately.
3. **Entertainment-mention funnel:** broad theme candidates narrowed to actual entertainment mentions, then in-scope, excluded, and ambiguous cases.
4. **Open-web and social layer:** public posts, videos, comments, forums, blogs, local media, event listings, and official pages used as sourced supplementary evidence.
5. **Programming-status layer:** official property materials and approved operator records used to establish what is listed, historical, seasonal, or currently active.

Property reviews and outlet reviews must never be added into a single analytical sample. A total evidence-inventory count may be shown only when each layer is displayed separately and the total is not described as reviews analyzed or scored.

## Pinned entertainment-classification rules

Every generated analytical audit must include a pinned classifier-rules artifact beside the report. The current rule set is `classifier-rules-v1.md`, identified as `entertainment-classifier-rules-v1` / `V1`.

The artifact must document the existing candidate outcomes and precision-layer controls for weddings and private events, seasonal ticketed events, ambient/house/piped/background music, upstream duplicate handling, unclear mentions held as ambiguous, permitted in-scope public-venue categories, lead eligibility, verbatim evidence validation, and structured LLM output failure behavior.

The contract, client report, and CI must reference the same pinned filename and version. CI must fail if the artifact is absent, empty, unreferenced by the report, unreferenced by this contract, or missing the rule-set ID and required rule categories. Classification counts remain evidence-derived; the rules artifact must not invent or replace review-level adjudication records.

## Required report disclosure

Every report must show:

1. the total number of lanes in the applicable registry version, labeled exactly as **versioned research universe evaluated** and never described as sources collected, captured, checked successfully, or operationally covered;
2. the number of distinct source IDs in the property-level source-coverage matrix, labeled exactly as **operational coverage**;
3. the number of operational-matrix sources producing usable evidence;
4. the number of operational-matrix sources producing no usable evidence, including checked-no-data, identity-only, duplicate, and not-applicable outcomes;
5. the number of operational-matrix sources blocked by credentials, rights, technical access, unsupported capture, or another documented barrier;
6. an explicit reconciliation showing both `versioned research universe evaluated = operational coverage + registry-evaluated non-operational lanes` and `operational coverage = produced evidence + no usable evidence + blocked`;
7. duplicate, syndicated, identity-only, outlet-only, and not-applicable sources;
8. a complete source appendix with one row for every registry source;
9. the selected start and end dates;
10. the reconciled review funnel from captured records through final in-scope entertainment evidence.

The 63-source registry cardinality is a research-universe statement, not an evidence-volume or operational-coverage claim. For the current Phoenician audit, the versioned research universe evaluated is 63 lanes and operational coverage is the 40 distinct source IDs in the property-level source-coverage matrix. The remaining 23 lanes are registry-evaluated non-operational lanes resolved through market, scope, duplication, or implementation rules; they must remain visible in the appendix but must not inflate operational coverage.

The report generator must derive all coverage metrics from the canonical registry and property-level coverage matrix and must fail when any registry source is absent from the property coverage manifest, any applicable source lacks an attempt, any zero-result source lacks a client-readable reason, `operational coverage != produced evidence + no usable evidence + blocked`, `versioned research universe evaluated != operational coverage + registry-evaluated non-operational lanes`, or report totals disagree with the evidence manifest.

## Cost-and-rights ledger

Every audit workspace must contain `source-cost-rights-ledger.json` alongside `source-inventory.json`. The ledger is machine-readable, pinned to the same registry version, and contains exactly one entry for every registry source ID.

Each entry must record:

- `sourceId`;
- `provider`, or `null` with a provider-identification TODO;
- `estimatedTypicalRunUsd`, or `null` with a cost-establishment TODO;
- `licenseReuseStatus`, or `null` with a license/reuse review TODO;
- `lastRightsReviewDate`, or `null` with a rights-review-date TODO;
- `mayContributeToRatingMath` as `true`, `false`, or `null` when unresolved;
- `ratingMathBasis`, explaining the current eligibility decision or its TODO;
- `todos`, containing an explicit action for every unresolved field.

Dollar estimates must come from documented typical-run history or an approved provider price model. A single observed charge must not be presented as a typical-run estimate. Unknown costs, providers, rights, dates, and eligibility decisions remain `null`; CI must reject fabricated defaults, omitted fields, duplicate entries, missing registry IDs, or unresolved fields without a TODO.

The ledger does not grant capture or reuse rights. A source may contribute to rating math only when the ledger permits it, the evidence belongs to the compatible property-review layer, and the applicable attempt, identity, completeness, and rights gates also pass.

## Date-window contract

Start date and end date are required audit-run inputs. Presets may include trailing 12, 24, or 36 months and all captured history, but the selected dates must be explicit in the run manifest and report.

Changing the date window reruns analysis against the existing corpus without triggering source recapture. The window must recalculate platform counts, theme counts, entertainment candidates, in-scope cases, exclusions, ambiguous cases, ratings, sentiment, venue findings, and quotes.

## Anti-drift controls

The following controls are mandatory:

1. **Single canonical registry:** one machine-readable registry supplies source inventory, market profiles, audit planning, readiness, report appendices, and tests.
2. **Version pinning:** every audit records the registry version and immutable source IDs used.
3. **Cardinality gate:** the report appendix must contain every registry source exactly once. Registry cardinality is labeled `versioned research universe evaluated`; the distinct property-matrix source count is separately labeled `operational coverage`.
4. **Applicability gate:** every source must have a documented market/property decision; `not_applicable` requires a reason.
5. **Attempt gate:** every applicable source must have a terminal attempt result before report generation.
6. **Reason gate:** every non-captured result requires a client-readable explanation.
7. **Reconciliation gate:** registry, property coverage, evidence manifest, report summary, and appendix counts must agree. CI must prove both `universe = operational + non-operational` and `operational = produced + no usable + blocked` from machine-readable rows rather than hard-coded display totals.
8. **Cost-and-rights gate:** `source-cost-rights-ledger.json` must match the versioned registry exactly and contain all mandatory fields and TODOs for unresolved values.
9. **Classifier-rules gate:** the pinned `classifier-rules-v1.md` artifact must exist and be referenced by both the contract and generated report.
10. **No silent deletion:** removing, merging, renaming, or replacing a source requires a versioned decision record and migration alias.
11. **Automated drift test:** CI fails if the registry count changes unexpectedly, a report renderer uses a hand-maintained source subset, a property matrix drops registry rows, the cost-and-rights ledger omits or duplicates a registry source, or the pinned classifier rules are absent or unreferenced.
12. **Continuous discovery:** scheduled regional sweeps and pre-audit market discovery can nominate new sources; accepted sources increment the registry version rather than silently changing prior audits.

## Phoenician correction required

The current Phoenician registry contains a 63-lane versioned research universe. Its property-level source-coverage matrix contains 40 distinct operational source IDs. These numbers describe different layers and must be presented together without implying that evidence was collected from 63 sources.

The Phoenician report must not be accepted until:

- all 63 versioned research-universe rows are reconciled through aliases and applicability decisions;
- the 40-source matrix is the sole operational-coverage count;
- the report proves `63 = 40 + 23` and partitions the 40 operational sources into produced-evidence, no-usable-evidence, and blocked outcomes;
- the report displays the full research-coverage summary and appendix;
- every zero or unavailable result has a client-readable reason;
- the date-selected evidence funnel reconciles from captured property reviews to final entertainment evidence;
- the meaningless combined property-plus-outlet review headline is removed.

Caesars Republic and international-property audits remain downstream of this correction.

## Review cadence

- Run a source-discovery delta sweep before entering a new country or major region.
- Review the global registry at least quarterly.
- Revalidate blocked and unsupported sources at least every six months.
- Recheck high-value social, review, reservation, and event platforms before each audit because access and indexing change frequently.
- Preserve historical registry versions so prior audit claims remain reproducible.
