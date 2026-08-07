# FL-07 — Build the Agent: Build Log & Deviations

## What this MVP does

Manual trigger → pulls one real application email thread from Gmail → sends it to an LLM to draft a follow-up → saves that draft back into the Gmail thread. One full loop, one live tool connection (Gmail), nothing hand-edited mid-run. Confirmed working end to end.

## Build log

| Step | What I tried | What broke | What I changed |
|---|---|---|---|
| 1 | Imported workflow, ran it | "Save Draft in Gmail" node required a Subject parameter not included in the original setup | Added an expression pulling the subject from the original thread: `=Re: {{ $('Get One Application Thread').item.json.subject }}` |
| 2 | Ran again after Subject fix | "Claude - Draft Follow-Up" node errored: Invalid Custom Auth JSON — credential type wasn't registering correctly | Switched from n8n's credential system to a plain-text `x-api-key` header value (flagged as a security cleanup item for later) |
| 3 | Ran again | Generic "Bad request" from the Anthropic API | Diagnosed as a JSON-escaping issue — the request body used raw string interpolation instead of proper JSON encoding, so special characters in the email content broke the JSON structure |
| 4 | Rebuilt the body using `JSON.stringify()` inside an n8n expression | "JSON Body field is not valid JSON" — n8n's Fixed mode validates the field as literal JSON and rejects expression syntax outright | Switched the field from Fixed mode to Expression mode |
| 5 | Ran again, got a real API error this time | Anthropic account had $0 credit — the API isn't free like claude.ai chat | No money available to add credit. Decided to swap LLM providers rather than pay. |
| 6 | Rebuilt the HTTP node for Google Gemini (free tier, no card required) | 429 error, quota limit shown as 0 for the project | Diagnosed as likely a regional/account restriction on Gemini's free tier, not a normal rate limit — waiting didn't resolve it |
| 7 | Tried Groq as a second free alternative | console.groq.com wouldn't load at all, across 3 different accounts and repeated attempts | Diagnosed as a network-level block, not an account problem — moved on rather than fighting an ISP-level issue |
| 8 | Switched to OpenRouter (email signup, no card needed) | First model slug tried (`meta-llama/llama-3.3-70b-instruct:free`) returned "unavailable for free" — OpenRouter's free model roster rotates constantly | Checked the live free-model list on openrouter.ai/models directly instead of trusting a fixed slug, picked `inclusionai/ling-3.0-tiny:free` |
| 9 | Ran with the new model | "Extract Draft Text" node failed: Cannot read properties of undefined | Compared the actual API response shape against the code node's assumptions — response was structured differently than the code expected |
| 10 | Rewrote the parsing code using `$input.all()[0]` instead of `$input.first()` | — | Full workflow executed successfully end to end. Real draft written into Gmail, matched the voice card (direct, no filler). |

## Deviations from the FL-06 spec

- **LLM provider changed from Claude (Anthropic API) to OpenRouter running `inclusionai/ling-3.0-tiny:free`.** The FL-06 spec assumed Anthropic API access, but that requires paid credits with no free tier available. Tried Gemini and Groq as free alternatives first — both were blocked for reasons outside my control (regional quota restriction on Gemini, network-level block on Groq). OpenRouter's free tier was the one that actually worked, and draft quality on the free model still matched the voice card.
- **No Google Sheets tracking log yet.** The FL-06 spec included a persistent tracking sheet (company, status, dates). Cut for this MVP checkpoint — the core loop (read thread → draft → save draft) needed to prove out first before adding a second data store on top of it.
- **No daily scheduling or 7-day/2-day threshold logic yet.** This MVP runs on manual trigger only and processes one thread regardless of how long it's been sitting. Scheduling and threshold logic are next, once the core loop is stable.
- **Auth header stored as plain text instead of an n8n credential.** A workaround for a credential-type bug during setup, not a permanent choice — needs cleanup before this goes anywhere near production use.

## Verification

Draft confirmed present in the Gmail thread after the successful run, text matched the voice card (direct, honest, no fluff), was not sent, sat correctly as an unsent draft.