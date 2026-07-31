# Clean-Room Source Preflight

- **Verdict:** BLOCKED
- **Registry:** v2
- **Live network calls:** no
- **Client data:** no
- **Paid calls:** no
- **Ready sources:** 10
- **Blocking sources:** 14
- **Optional warnings:** 9
- **Excluded sources:** 30

> A source is ready only when the canonical registry is backed by an executable capability. Required and recommended non-connected sources block an accurate live audit.

| Source | Priority | Connection state | Preflight | Required action |
|---|---|---|---|---|
| `aerial_satellite` | `required` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `agoda` | `optional` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `almosafer` | `recommended` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `blogs` | `recommended` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `booking` | `required` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `cheaptickets` | `optional` | `not_applicable` | `excluded` | None. |
| `cluburlaub` | `recommended` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `despegar` | `optional` | `unresolved` | `warning` | Resolve and date source verification before claiming connection readiness. |
| `eat-app` | `recommended` | `not_applicable` | `excluded` | None. |
| `ebookers` | `optional` | `not_applicable` | `excluded` | None. |
| `europabooking` | `optional` | `not_applicable` | `excluded` | None. |
| `expedia` | `required` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `facebook` | `recommended` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `google` | `required` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `google_hotels` | `optional` | `not_applicable` | `excluded` | None. |
| `guestreservations` | `optional` | `not_applicable` | `excluded` | None. |
| `holidaycheck` | `optional` | `policy_blocked` | `warning` | Obtain a compliant documented acquisition path before implementation. |
| `hotel-reservation-network` | `optional` | `not_applicable` | `excluded` | None. |
| `hotels-in-america` | `optional` | `not_applicable` | `excluded` | None. |
| `hotels_com` | `optional` | `not_applicable` | `excluded` | None. |
| `hotelsone` | `optional` | `not_applicable` | `excluded` | None. |
| `hoteltonight` | `recommended` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `hrs` | `optional` | `unresolved` | `warning` | Resolve and date source verification before claiming connection readiness. |
| `instagram` | `recommended` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `internal_inputs` | `optional` | `not_applicable` | `excluded` | None. |
| `jeeran` | `optional` | `not_applicable` | `excluded` | None. |
| `kayak` | `optional` | `not_applicable` | `excluded` | None. |
| `local_media` | `optional` | `configuration_gated` | `warning` | Provide the documented configuration and any separately required spend approval. |
| `opentable` | `recommended` | `not_applicable` | `excluded` | None. |
| `orbitz` | `optional` | `not_applicable` | `excluded` | None. |
| `otzyv-ru` | `recommended` | `policy_blocked` | `blocked` | Obtain a compliant documented acquisition path before implementation. |
| `priceline` | `optional` | `not_applicable` | `excluded` | None. |
| `property_social` | `optional` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `property_website` | `optional` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `qaym` | `optional` | `not_applicable` | `excluded` | None. |
| `quora` | `optional` | `configuration_gated` | `warning` | Provide the documented configuration and any separately required spend approval. |
| `realtime-reservation` | `optional` | `not_applicable` | `excluded` | None. |
| `reddit` | `required` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `rehlat` | `optional` | `unresolved` | `warning` | Resolve and date source verification before claiming connection readiness. |
| `reserveout` | `recommended` | `not_applicable` | `excluded` | None. |
| `resortpass` | `recommended` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `resy` | `optional` | `not_applicable` | `excluded` | None. |
| `sevenrooms` | `optional` | `not_applicable` | `excluded` | None. |
| `skyscanner` | `optional` | `not_applicable` | `excluded` | None. |
| `staah` | `optional` | `not_applicable` | `excluded` | None. |
| `tablet-hotels` | `recommended` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `tiket` | `recommended` | `policy_blocked` | `blocked` | Obtain a compliant documented acquisition path before implementation. |
| `tiktok` | `recommended` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `toast_tables` | `optional` | `not_applicable` | `excluded` | None. |
| `tock` | `optional` | `not_applicable` | `excluded` | None. |
| `tophotels` | `optional` | `unresolved` | `warning` | Resolve and date source verification before claiming connection readiness. |
| `travelocity` | `optional` | `not_applicable` | `excluded` | None. |
| `traveloka` | `recommended` | `policy_blocked` | `blocked` | Obtain a compliant documented acquisition path before implementation. |
| `trip_com` | `optional` | `policy_blocked` | `warning` | Obtain a compliant documented acquisition path before implementation. |
| `tripadvisor` | `required` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `trivago` | `optional` | `not_applicable` | `excluded` | None. |
| `urvenue` | `optional` | `not_applicable` | `excluded` | None. |
| `webook` | `optional` | `connected` | `ready` | Run the executable path and record the property-specific source attempt. |
| `wego` | `optional` | `not_applicable` | `excluded` | None. |
| `wotif` | `optional` | `not_applicable` | `excluded` | None. |
| `yelp` | `recommended` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `youtube` | `required` | `configuration_gated` | `blocked` | Provide the documented configuration and any separately required spend approval. |
| `zoover` | `optional` | `unresolved` | `warning` | Resolve and date source verification before claiming connection readiness. |
