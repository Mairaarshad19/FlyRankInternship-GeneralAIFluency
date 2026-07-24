# Week 4 — Choosing the Stack
**Track:** General AI Fluency, FlyRank Internship

---

## My Constraints

- Free only, no paid tools or hosting
- Comfortable with HTML, CSS, Tailwind, some React and Next.js, plus Cursor and Copilot for agentic coding help. No real backend experience.
- Portfolio needs a hero section, a proof and evidence section with four project cases, an availability section, and a contact section with an email CTA. No user accounts, no admin panel.
- Work needs to be shown through screenshots, embedded demo video, and GitHub repo links
- Nothing needs to be dynamic right now, this is a static site

---

## Three Options Considered

**Option A, simplest: Plain HTML, CSS, and JS, hosted free on GitHub Pages.**
No backend needed. Fastest to ship and nothing to maintain, but no component reuse, meaning I'd copy paste the same header and footer across every page by hand, and animations would be manual instead of using something like Framer Motion.

**Option B, middle: Next.js, TypeScript, Tailwind CSS, Framer Motion, hosted free on Vercel.**
No backend needed. Matches the stack I already used for the Allied Shipping Agency site, gives me component reuse and smooth animations for free, and nothing extra to maintain.

**Option C, most powerful: Next.js full stack with a headless CMS and API routes, hosted free on Vercel.**
Needs a backend. Lets me edit content without touching code later, but adds a CMS account, API routes, and more moving parts to maintain for a portfolio that barely changes.

---

## Pressure Test

What breaks if I pick the simplest option: nothing breaks, but I'd be doing more manual work for less polish, copy pasting the same code across pages and faking animations by hand.

What I'd maintain if I pick the most powerful option: a CMS account and API routes, real overhead for content that only changes maybe twice a year.

Can I finish in two weeks: yes with Option B, since I already know this stack. Option C would eat both weeks just on setup.

Does it show my work the way it needs to be shown: yes, Option B handles image galleries, embedded video, and repo links fine without needing any backend.

---

## My Decision

**Chosen stack: Next.js, TypeScript, Tailwind CSS, Framer Motion, hosted free on Vercel.**

I picked this because it does everything my portfolio actually needs, image galleries, embedded demo videos, repo links, without needing a backend I'd have to maintain for no reason. I already know this stack from building the Allied Shipping Agency site, so I'm not learning something new just to ship this.

**Why not Option A:** It would work too, and it's even simpler to maintain since there's nothing to build or break. But I'd be copy pasting the same header and footer across every page by hand, and the animations Framer Motion gives me for free would be way more manual work to fake. Since I already know Next.js, there's no real reason to go simpler just to go simpler.

**Why not Option C:** This would let me edit content without touching code, but my portfolio doesn't change often enough to justify that. Adding a CMS account and API routes means more things that can break, more to maintain, for a payoff I don't actually need right now. This is the hustle for no real payoff case, more power than the problem calls for.

**Can I maintain this:** Yes. No backend, no database, no CMS to manage. Once it's built, updating a project or swapping a screenshot is just editing a file and pushing to GitHub, which auto redeploys on Vercel.

**Does it show my work the way it needs to be shown:** Yes. Screenshots, embedded video, and GitHub links all work fine as static content, nothing about my sitemap or content map needs a database or user accounts.

---

## Backend Question

Not needed yet. Everything my portfolio requires right now, screenshots, video, repo links, static text, works without one. If I ever need contact form submissions to go somewhere other than email, or want to add a CMS later, that's a future decision, not something this build needs today.