# GGC_QA_002 — Detailed Test Cases

| ID | Scenario | Steps | Expected Result |
|---|---|---|---|
| TC-001 | Home loads | Open `/` | Hero, CTA and navigation are displayed |
| TC-002 | Mobile menu | Resize to mobile and tap menu | Navigation opens without horizontal scroll |
| TC-003 | Tee-time CTA | Click Book a Tee Time | External booking destination opens |
| TC-004 | Venue required fields | Submit empty venue form | Browser prevents invalid submission |
| TC-005 | Venue valid submission | Complete form and submit | API returns success and MongoDB stores record |
| TC-006 | Events API | GET `/api/events` | HTTP 200 and JSON array |
| TC-007 | Health API | GET `/api/health` | HTTP 200 with `status=ok` |
| TC-008 | Popup dismiss | Dismiss event popup | Popup closes and last-seen timestamp is stored |
| TC-009 | Popup frequency | Revisit immediately | Popup remains suppressed |
| TC-010 | Database integrity | Query saved enquiry | Required fields and timestamps are present |
