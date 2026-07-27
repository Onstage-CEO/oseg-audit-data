# Source Coverage Matrix — The Scott Resort & Spa
_Generated 2026-07-27 · matrix V2 · capability V2 · attempts V1._

## ⛔ Coverage blockers (report may not imply completeness while these stand)
- The Scott Resort & Spa: Google / Google Maps reviews is captured partial; Captured, but source completeness is partial or unproven. Captured via aggregator.
- The Scott Resort & Spa: Yelp reviews is captured partial; Captured, but source completeness is partial or unproven. Captured via workspace-corpus.
- The Scott Resort & Spa: Expedia reviews is provider error; The source attempt failed at the provider/adapter layer. import-apify-run expedia: quarantined 876 provider item(s) from ABORTED; not admitted to analysis.
- The Scott Resort & Spa: Facebook mentions is not checked; Not checked — no explicit source attempt is recorded for this workspace. The engine supports this source, but this workspace contains no explicit attempt record.
- The Scott Resort & Spa: Instagram mentions is not checked; Not checked — no explicit source attempt is recorded for this workspace. The engine supports this source, but this workspace contains no explicit attempt record.
- The Scott Resort & Spa: TikTok mentions is captured partial; Captured, but source completeness is partial or unproven. Captured via workspace-corpus.
- The Scott Resort & Spa: YouTube videos + comments is captured partial; Captured, but source completeness is partial or unproven. Captured via official_api.
- The Scott Resort & Spa: Reddit / forums is captured partial; Captured, but source completeness is partial or unproven. Captured via official_api.
- The Scott Resort & Spa: Blogs / travel articles is captured partial; Captured, but source completeness is partial or unproven. Captured via workspace-corpus.

Outlet-level Google capture implemented: **yes**

### PROPERTY — The Scott Resort & Spa
_8/11 engine-supported sources captured_

| Source | Status | Attempt | Complete | Checked | Engine | Captured | Found | Got | In report | Conf | Reason |
|---|---|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|---|
| Google / Google Maps reviews | 🟠 captured partial/unproven | captured_partial | unknown | yes | yes | yes | 1,664 | 1,664 | yes | medium | Captured, but source completeness is partial or unproven. Captured via aggregator. |
| TripAdvisor reviews | ✅ captured complete | captured_complete | complete | yes | yes | yes | 1,215 | 1,215 | yes | high | Captured with completeness proven for the recorded attempt. Captured via aggregator. |
| Yelp reviews | 🟠 captured partial/unproven | captured_partial | unknown | yes | yes | yes | 436 | 436 | yes | medium | Captured, but source completeness is partial or unproven. Captured via workspace-corpus. |
| Booking.com reviews | ✅ captured complete | captured_complete | complete | yes | yes | yes | 122 | 122 | yes | high | Captured with completeness proven for the recorded attempt. Captured via aggregator. |
| Expedia reviews | ❌ provider error | provider_error | unknown | no | yes | no | ? | 0 | yes | low | The source attempt failed at the provider/adapter layer. import-apify-run expedia: quarantined 876 provider item(s) from ABORTED; not admitted to analysis. |
| OpenTable / reservation-platform reviews | — n/a | not_applicable | not_applicable | no | no | no | ? | 0 | no | low | Not applicable at this level. OpenTable lists restaurants, not whole resorts. Outlet capture may use Apify when reliable or the supervised visible-browser recovery operator with explicit provenance. |
| Facebook mentions | ⬜ not checked | not_checked | unknown | no | yes | no | ? | 0 | yes | low | Not checked — no explicit source attempt is recorded for this workspace. The engine supports this source, but this workspace contains no explicit attempt record. |
| Instagram mentions | ⬜ not checked | not_checked | unknown | no | yes | no | ? | 0 | yes | low | Not checked — no explicit source attempt is recorded for this workspace. The engine supports this source, but this workspace contains no explicit attempt record. |
| TikTok mentions | 🟠 captured partial/unproven | captured_partial | unknown | yes | yes | yes | 30 | 30 | yes | medium | Captured, but source completeness is partial or unproven. Captured via workspace-corpus. |
| YouTube videos + comments | 🟠 captured partial/unproven | captured_partial | unknown | yes | yes | yes | 13 | 13 | yes | medium | Captured, but source completeness is partial or unproven. Captured via official_api. |
| Reddit / forums | 🟠 captured partial/unproven | needs_credentials | unknown | yes | yes | yes | 9 | 9 | yes | low | Captured, but source completeness is partial or unproven. Captured via official_api. |
| Blogs / travel articles | 🟠 captured partial/unproven | captured_partial | unknown | yes | yes | yes | 15 | 15 | yes | medium | Captured, but source completeness is partial or unproven. Captured via workspace-corpus. |
| Resort-owned pages | 🚫 not supported yet | not_supported | not_applicable | no | no | no | ? | 0 | no | low | The engine has no coverage-qualified capture path for this source at this level yet. Program-discovery is a useful operator-assisted programming input, but it is not automatically invoked by hosted capture and does not yet write a source-attempt record. It therefore cannot establish source coverage. |
| Local media + event listings | 🚫 not supported yet | not_supported | not_applicable | no | no | no | ? | 0 | no | low | The engine has no coverage-qualified capture path for this source at this level yet. Generic web discovery may incidentally return local-media pages, but the current loader classifies non-community/non-resort findings as blogs. The matrix must not claim local media was distinctly checked. |
| Quora / Q&A platforms | 🚫 not supported yet | not_supported | not_applicable | no | no | no | ? | 0 | no | low | SUPPLEMENTAL (never rating math). The engine has no coverage-qualified capture path for this source at this level yet. SUPPLEMENTAL traveler-intent/public-perception signal only and never rating math. It remains in the canonical accounting set so the unsupported gap is visible. |

### OUTLET — The Canal Club
_1/4 engine-supported sources captured_

| Source | Status | Attempt | Complete | Checked | Engine | Captured | Found | Got | In report | Conf | Reason |
|---|---|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|---|
| Google / Google Maps reviews | ⬜ not checked | — | — | no | yes | no | ? | 0 | no | low | Not checked — no explicit source attempt is recorded for this workspace. The hosted data-repo capture workflow defaults OSEG_GOOGLE_CAPTURE_SOURCE to apify. A bare local CLI defaults to DataForSEO unless that variable selects Apify; selecting Apify without APIFY_TOKEN falls back to DataForSEO. Outlet-level Google capture always uses Apify when a venue carries a googleUrl in audit.json venues[]. |
| TripAdvisor reviews | ✅ captured complete | — | — | yes | yes | yes | 73 | 73 | yes | high | Captured with completeness proven for the recorded attempt. Property capture pins the exact listing when audit.json supplies client.tripadvisorUrl. Outlet capture requires venues[].tripadvisorUrl and is submitted as a DataForSEO url_path task, then collected by capture-venues. |
| Yelp reviews | ⬜ not checked | — | — | no | yes | no | ? | 0 | no | low | Not checked — no explicit source attempt is recorded for this workspace. |
| Booking.com reviews | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | ⬜ not checked | — | — | no | yes | no | ? | 0 | no | low | Not checked — no explicit source attempt is recorded for this workspace. OpenTable lists restaurants, not whole resorts. Outlet capture may use Apify when reliable or the supervised visible-browser recovery operator with explicit provenance. |
| Facebook mentions | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. No per-outlet Facebook review listing; outlet mentions are part of the property-level social evidence layer. |
| Instagram mentions | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. No per-outlet Instagram review listing; outlet mentions are part of the property-level social evidence layer. |
| TikTok mentions | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. No per-outlet TikTok review listing; outlet mentions are part of the property-level social evidence layer. |
| YouTube videos + comments | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. No per-outlet YouTube review listing; this is a bounded qualitative evidence sample, not an exhaustive platform crawl. |
| Reddit / forums | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. No per-outlet Reddit/forum listing; outlet mentions are part of property-level community discovery. |
| Blogs / travel articles | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. No per-outlet blog review listing; outlet mentions are part of property-level editorial discovery. |
| Resort-owned pages | 🚫 not supported yet | — | — | no | no | no | ? | 0 | no | low | The engine has no coverage-qualified capture path for this source at this level yet. Program-discovery is a useful operator-assisted programming input, but it is not automatically invoked by hosted capture and does not yet write a source-attempt record. It therefore cannot establish source coverage. |
| Local media + event listings | — n/a | — | — | no | no | no | ? | 0 | no | low | Not applicable at this level. Generic web discovery may incidentally return local-media pages, but the current loader classifies non-community/non-resort findings as blogs. The matrix must not claim local media was distinctly checked. |
| Quora / Q&A platforms | — n/a | — | — | no | no | no | ? | 0 | no | low | SUPPLEMENTAL (never rating math). Not applicable at this level. SUPPLEMENTAL traveler-intent/public-perception signal only and never rating math. It remains in the canonical accounting set so the unsupported gap is visible. |
