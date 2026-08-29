Contract-Gig Outreach and Follow-Up Tracker (FL-07/FL-09)

An n8n workflow that reads my Gmail for job application threads, drafts a follow-up using an LLM, and saves it to Gmail as a draft, never auto-sent.

README: [link]
Demo video: [link]

One design decision: switched from a single hardcoded OpenRouter model to a fallback list (`models: [...]`) after two different free models got pulled out from under me mid-project. That's now how it handles free-tier volatility going forward instead of breaking every time OpenRouter's lineup shifts.

One limitation: the Gmail search query is broad enough that it pulls in adjacent job-related email, not just genuine application threads. In a 5-thread test run, 3 were good matches and 2 were false positives (a hackathon notification, a platform reminder) that got a follow-up drafted for them when there was nothing to actually follow up on. Tightening that filter is the clear next step.

Built with Claude as a debugging partner for the n8n quirks (Expression mode, multi-item processing, credential handling); I designed it, wired every node, and ran the eval myself.
