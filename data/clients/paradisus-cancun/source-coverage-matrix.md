# Source Coverage Matrix — Paradisus Cancún
_Generated 2026-06-29 · proves what was checked, captured, used, and what the engine cannot support._

## Coverage blockers
- none

Outlet-level Google capture implemented: **yes**

### PROPERTY — Paradisus Cancún
_10/14 engine-supported sources captured_

| Source | Status | Checked | Engine | Captured | Found | Got | Ent. | In report | Conf | Reason |
|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|:-:|---|
| Google / Google Maps reviews | ✅ captured | yes | yes | yes | 24,494 | 24,494 | unknown | yes | high | Captured. Outlet-level Google capture runs when a venue carries a googleUrl in audit.json venues[]. |
| TripAdvisor reviews | ✅ captured | yes | yes | yes | 108,810 | 108,810 | unknown | yes | high | Captured. A single outlet (the Tavern) was hand-folded once; there is no repeatable outlet-level TripAdvisor path. |
| Yelp reviews | ✅ captured | yes | yes | yes | 360 | 360 | unknown | yes | high | Captured. |
| Booking.com reviews | ✅ captured | yes | yes | yes | 684 | 684 | unknown | yes | high | Captured. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | ✅ captured | yes | yes | yes | 367 | 367 | unknown | yes | high | Captured. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. No capture path. Confirmed outlet OpenTable bodies exist (J&G, Mowry). |
| Facebook mentions | ☑️ checked, no data | yes | yes | no | 0 | 0 | unknown | no | medium | Checked; the source returned no usable data. |
| Instagram mentions | ✅ captured | yes | yes | yes | 30 | 30 | unknown | yes | high | Captured. |
| TikTok mentions | ✅ captured | yes | yes | yes | 30 | 30 | unknown | yes | high | Captured. |
| YouTube videos + comments | ✅ captured | yes | yes | yes | 40 | 40 | unknown | yes | high | Captured. |
| Reddit / forums | ✅ captured | yes | yes | yes | 28 | 28 | unknown | yes | high | Captured. |
| Blogs / travel articles | ✅ captured | yes | yes | yes | 15 | 15 | unknown | yes | high | Captured. |
| Resort-owned pages | ☑️ checked, no data | yes | yes | no | 0 | 0 | unknown | no | medium | Checked; the source returned no usable data. Property-level only; per-outlet resort pages exist but are not auto-captured per outlet. |
| Local Scottsdale/Phoenix media + event listings | ☑️ checked, no data | yes | yes | no | 0 | 0 | unknown | no | medium | Checked; the source returned no usable data. Surfaced opportunistically via web-discovery, not a dedicated lane. |
| Quora / Q&A platforms | ☑️ checked, no data | yes | yes | no | 0 | 0 | unknown | no | medium | SUPPLEMENTAL (never rating math). Checked; the source returned no usable data. SUPPLEMENTAL traveler-intent / public-perception signal only. Never enters rating math or any figure; accounted for as context. |

### OUTLET — The Avenue (central hub)
_0/2 engine-supported sources captured_

| Source | Status | Checked | Engine | Captured | Found | Got | Ent. | In report | Conf | Reason |
|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|:-:|---|
| Google / Google Maps reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Outlet-level Google capture runs when a venue carries a googleUrl in audit.json venues[]. Checked: https://www.google.com/maps/place/Paradisus+Cancún. |
| TripAdvisor reviews | 🔁 in property capture | yes | no | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. A single outlet (the Tavern) was hand-folded once; there is no repeatable outlet-level TripAdvisor path. Checked: https://www.tripadvisor.com/Hotel_Review-g150807-d282106-Reviews-Paradisus_Cancun-Cancun_Yucatan_Peninsula.html. |
| Yelp reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Checked: https://www.yelp.com/biz/paradisus-cancún. |
| Booking.com reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | 🔍 no standalone listing | yes | no | no | 0 | 0 | unknown | no | high | Searched the provider; this outlet has no standalone listing. No capture path. Confirmed outlet OpenTable bodies exist (J&G, Mowry). Checked: https://www.opentable.com/s?term=The+Avenue+Paradisus+Cancun. |
| Facebook mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Instagram mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| TikTok mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| YouTube videos + comments | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Reddit / forums | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Blogs / travel articles | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Resort-owned pages | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Property-level only; per-outlet resort pages exist but are not auto-captured per outlet. |
| Local Scottsdale/Phoenix media + event listings | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Surfaced opportunistically via web-discovery, not a dedicated lane. |
| Quora / Q&A platforms | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | SUPPLEMENTAL (never rating math). The engine has no capture path for this source at this level yet. SUPPLEMENTAL traveler-intent / public-perception signal only. Never enters rating math or any figure; accounted for as context. |

### OUTLET — Central Atrium
_0/2 engine-supported sources captured_

| Source | Status | Checked | Engine | Captured | Found | Got | Ent. | In report | Conf | Reason |
|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|:-:|---|
| Google / Google Maps reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Outlet-level Google capture runs when a venue carries a googleUrl in audit.json venues[]. Checked: https://www.google.com/maps/place/Paradisus+Canc%C3%BAn. |
| TripAdvisor reviews | 🔁 in property capture | yes | no | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. A single outlet (the Tavern) was hand-folded once; there is no repeatable outlet-level TripAdvisor path. Checked: https://www.tripadvisor.com/Hotel_Review-g150807-d282106-Reviews-Paradisus_Cancun-Cancun_Yucatan_Peninsula.html. |
| Yelp reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Checked: https://www.yelp.com/biz/paradisus-canc%C3%BAn. |
| Booking.com reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | 🔍 no standalone listing | yes | no | no | 0 | 0 | unknown | no | high | Searched the provider; this outlet has no standalone listing. No capture path. Confirmed outlet OpenTable bodies exist (J&G, Mowry). Checked: https://www.opentable.com/landmark/restaurants-near-paradisus-cancun-resort-and-spa. |
| Facebook mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Instagram mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| TikTok mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| YouTube videos + comments | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Reddit / forums | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Blogs / travel articles | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Resort-owned pages | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Property-level only; per-outlet resort pages exist but are not auto-captured per outlet. |
| Local Scottsdale/Phoenix media + event listings | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Surfaced opportunistically via web-discovery, not a dedicated lane. |
| Quora / Q&A platforms | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | SUPPLEMENTAL (never rating math). The engine has no capture path for this source at this level yet. SUPPLEMENTAL traveler-intent / public-perception signal only. Never enters rating math or any figure; accounted for as context. |

### OUTLET — Red Bar
_1/2 engine-supported sources captured_

| Source | Status | Checked | Engine | Captured | Found | Got | Ent. | In report | Conf | Reason |
|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|:-:|---|
| Google / Google Maps reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Outlet-level Google capture runs when a venue carries a googleUrl in audit.json venues[]. Checked: https://www.google.com/maps/place/Paradisus+Cancún. |
| TripAdvisor reviews | 🔁 in property capture | yes | no | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. A single outlet (the Tavern) was hand-folded once; there is no repeatable outlet-level TripAdvisor path. Checked: https://www.tripadvisor.com/Hotel_Review-g150807-d282106-Reviews-Paradisus_Cancun-Cancun_Yucatan_Peninsula.html. |
| Yelp reviews | ✅ captured | yes | yes | yes | 4 | 4 | unknown | yes | medium | Captured. |
| Booking.com reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | 🔍 no standalone listing | yes | no | no | 0 | 0 | unknown | no | high | Searched the provider; this outlet has no standalone listing. No capture path. Confirmed outlet OpenTable bodies exist (J&G, Mowry). Checked: https://www.opentable.com/landmark/restaurants-near-paradisus-cancun-resort-and-spa. |
| Facebook mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Instagram mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| TikTok mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| YouTube videos + comments | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Reddit / forums | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Blogs / travel articles | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Resort-owned pages | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Property-level only; per-outlet resort pages exist but are not auto-captured per outlet. |
| Local Scottsdale/Phoenix media + event listings | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Surfaced opportunistically via web-discovery, not a dedicated lane. |
| Quora / Q&A platforms | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | SUPPLEMENTAL (never rating math). The engine has no capture path for this source at this level yet. SUPPLEMENTAL traveler-intent / public-perception signal only. Never enters rating math or any figure; accounted for as context. |

### OUTLET — Dining bars
_0/2 engine-supported sources captured_

| Source | Status | Checked | Engine | Captured | Found | Got | Ent. | In report | Conf | Reason |
|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|:-:|---|
| Google / Google Maps reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Outlet-level Google capture runs when a venue carries a googleUrl in audit.json venues[]. Checked: https://www.google.com/maps/place/Paradisus+Cancún. |
| TripAdvisor reviews | 🔁 in property capture | yes | no | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. A single outlet (the Tavern) was hand-folded once; there is no repeatable outlet-level TripAdvisor path. Checked: https://www.tripadvisor.com/Hotel_Review-g150807-d282106-Reviews-Paradisus_Cancun-Cancun_Yucatan_Peninsula.html. |
| Yelp reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Checked: https://www.yelp.com/biz/paradisus-canc%C3%BAn. |
| Booking.com reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | 🔍 no standalone listing | yes | no | no | 0 | 0 | unknown | no | high | Searched the provider; this outlet has no standalone listing. No capture path. Confirmed outlet OpenTable bodies exist (J&G, Mowry). Checked: https://www.opentable.com/landmark/restaurants-near-paradisus-cancun-resort-and-spa. |
| Facebook mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Instagram mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| TikTok mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| YouTube videos + comments | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Reddit / forums | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Blogs / travel articles | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Resort-owned pages | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Property-level only; per-outlet resort pages exist but are not auto-captured per outlet. |
| Local Scottsdale/Phoenix media + event listings | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Surfaced opportunistically via web-discovery, not a dedicated lane. |
| Quora / Q&A platforms | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | SUPPLEMENTAL (never rating math). The engine has no capture path for this source at this level yet. SUPPLEMENTAL traveler-intent / public-perception signal only. Never enters rating math or any figure; accounted for as context. |

### OUTLET — Pools & beach
_0/2 engine-supported sources captured_

| Source | Status | Checked | Engine | Captured | Found | Got | Ent. | In report | Conf | Reason |
|---|---|:-:|:-:|:-:|--:|--:|:-:|:-:|:-:|---|
| Google / Google Maps reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Outlet-level Google capture runs when a venue carries a googleUrl in audit.json venues[]. Checked: https://www.google.com/maps/place/Paradisus+Cancún. |
| TripAdvisor reviews | 🔁 in property capture | yes | no | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. A single outlet (the Tavern) was hand-folded once; there is no repeatable outlet-level TripAdvisor path. Checked: https://www.tripadvisor.com/Hotel_Review-g150807-d282106-Reviews-Paradisus_Cancun-Cancun_Yucatan_Peninsula.html. |
| Yelp reviews | 🔁 in property capture | yes | yes | no | ? | 0 | unknown | no | high | No standalone outlet listing; this outlet appears within the property-wide capture. Checked: https://www.yelp.com/biz/paradisus-cancún. |
| Booking.com reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Individual restaurants/bars have no Booking.com listing — outlet level is N/A. |
| Expedia reviews | — n/a | no | no | no | ? | 0 | unknown | no | medium | Not applicable at this level. Outlets have no Expedia listing — N/A. |
| OpenTable / reservation-platform reviews | 🔍 no standalone listing | yes | no | no | 0 | 0 | unknown | no | high | Searched the provider; this outlet has no standalone listing. No capture path. Confirmed outlet OpenTable bodies exist (J&G, Mowry). Checked: https://www.paradisuscancun.com/. |
| Facebook mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Instagram mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| TikTok mentions | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| YouTube videos + comments | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Reddit / forums | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Blogs / travel articles | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. |
| Resort-owned pages | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Property-level only; per-outlet resort pages exist but are not auto-captured per outlet. |
| Local Scottsdale/Phoenix media + event listings | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | The engine has no capture path for this source at this level yet. Surfaced opportunistically via web-discovery, not a dedicated lane. |
| Quora / Q&A platforms | 🚫 not supported yet | no | no | no | ? | 0 | unknown | no | medium | SUPPLEMENTAL (never rating math). The engine has no capture path for this source at this level yet. SUPPLEMENTAL traveler-intent / public-perception signal only. Never enters rating math or any figure; accounted for as context. |
