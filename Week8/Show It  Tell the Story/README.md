# Contract-Gig Outreach and Follow-Up Tracker

An n8n workflow that reads my Gmail for job application threads, drafts a follow-up email using an LLM, and saves the draft back to Gmail for me to review and send myself.

## What it does and who it's for

Built for anyone doing active outreach for part-time contract or freelance work who needs to follow up on applications without forgetting threads or writing every follow-up from scratch.

The workflow:
1. Reads Gmail for threads matching job application criteria
2. Sends the thread content to an LLM API to draft a follow-up
3. Saves the draft to Gmail as a draft, not sent automatically, so I always review before it goes out

## Setup

Requirements:
- Node.js 18+
- n8n, self-hosted (built and tested on v2.36.8, Windows)
- Gmail account with OAuth access
- OpenRouter API key (free-tier models used here)

Steps:
1. Install n8n globally: `npm install -g n8n`, then start it with `n8n` (not `npx n8n` on every launch, that can re-pull a fresh copy and cause credential decryption errors between sessions). On Windows, if PowerShell blocks the install with an execution-policy error, run `npm.cmd install -g n8n` and `n8n.cmd` instead.
2. Open http://localhost:5678 and import the workflow JSON.
3. Set up Gmail OAuth2 credentials:
   - In Google Cloud Console, create a Web application OAuth client.
   - Set the redirect URI n8n gives you: `http://localhost:5678/rest/oauth2-credential/callback`.
   - Add your own Gmail address as a test user on the OAuth consent screen, or you'll hit a 403 access_denied error.
   - Assign the resulting credential to both Gmail nodes: `Get One Application Thread` and `Save Draft in Gmail`.
4. Add your OpenRouter key as a plain-text `x-api-key` header on the `Claude - Draft Follow-Up` HTTP Request node (see Limitations for why this isn't a proper n8n credential yet).
5. Run once manually via the Manual Trigger node to confirm the full chain executes end to end before relying on it.

## Usage example

Trigger the workflow manually. It searches Gmail with:

```
in:inbox (application OR interview OR "thank you for applying") newer_than:14d
```

pulls up to 5 matching threads, sends each one's subject and snippet to an LLM for a short follow-up draft, and saves each result as a separate Gmail draft (not sent). I open Drafts, read each one, edit if needed, and send myself.

## Architecture

```
Manual Trigger
      |
      v
Get One Application Thread (Gmail search, limit 5)
      |
      | up to 5 email items
      v
Claude - Draft Follow-Up (HTTP Request -> OpenRouter, model fallback list)
      |
      | one LLM response per item
      v
Extract Draft Text (Code node, maps every item, not just the first)
      |
      | draftText, threadId, to, subject per item
      v
Save Draft in Gmail (creates one draft per item, never auto-sends)
```

## Eval results (v2)

Ran the full workflow against 5 real Gmail threads in one execution.

- 5/5 technical success: every thread produced a drafted follow-up and a saved Gmail draft, with no crashes and no missing fields.
- 3/5 were good matches: genuine application-related threads (from sources like FlyRank and Glassdoor-tier communications) where the drafted follow-up was contextually appropriate and usable close to as-is.
- 2/5 were false-positive matches: the Gmail search query is broad enough that it also picked up adjacent job-related email (a hackathon notification, a platform reminder) that isn't actually an application awaiting a follow-up. The workflow still drafted a follow-up for these, which isn't useful, since there was nothing to follow up on.

Read as a whole: the drafting and multi-item pipeline is solid (5/5), the input filtering is the weak point (3/5 relevant). That's the real state of it, not the part to sand down.

## Limitations

- **Input filtering is the biggest gap.** The Gmail search query is intentionally broad (`application OR interview OR "thank you for applying"`) and catches non-application email like job alerts and event reminders alongside real threads. About 40% of retrieved threads in testing weren't genuine candidates for a follow-up. Tightening this query, or adding a filtering step before the LLM call, is the clearest next improvement.
- **OpenRouter free-tier models rotate.** Two different free models I'd wired in became unavailable mid-project (`inclusionai/ling-3.0-flash:free`, later `qwen/qwen3-30b-a3b:free`). Fixed by switching the request from a single `model` field to a `models` array with several free models in priority order, so the workflow falls through to the next available one instead of erroring out.
- **The OpenRouter API key is passed as a plain-text `x-api-key` header** instead of a proper n8n credential, because the native credential type was unreliable in this n8n version. Needs a real credential-based fix before this touches anything more sensitive than free-tier drafting.
- **Self-hosted credential encryption is fragile across sessions.** Switching how n8n was launched (`npx` re-pulling a fresh copy) once caused a "credentials could not be decrypted" error that required recreating the Gmail OAuth credential from scratch. Resolved by installing n8n globally instead of relaunching via npx each time.
- **Drafts only, never auto-sends.** Deliberate, not a gap, but worth stating plainly: every output needs a human read-through before anything goes out.
- **Gmail OAuth needs full scope approval** even though the workflow only touches drafts, which is more access than the task strictly needs.

## Built with AI

I built this workflow using Claude as a debugging and thinking partner throughout: working through n8n's Expression mode requirements, the JSON body syntax errors, the multi-item processing bug in the Code node (an early version only processed the first Gmail item instead of all 5, so 5 emails in produced only 1 draft out, fixed by replacing `.first()`/`items[0]` with a `.map()` over every item), the OpenRouter free-model rotation issue, and the credential decryption error after switching install methods. I designed the workflow architecture, wired and tested every node myself, ran the actual eval against my own Gmail, and made the judgment calls on what counted as a good draft versus a false-positive match.
