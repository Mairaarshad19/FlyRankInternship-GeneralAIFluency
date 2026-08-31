Absolutely — here is the cleaned-up, properly structured Markdown version with headings, tables, bullets, and code formatting preserved so you can save it directly as a `.md` file.

# Week 2 — Prompt Ladder

## Track: General AI Fluency Program — FlyRank Internship

---

# Baseline (Version 0)

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity to build this.

## Info Given

1. Family freight forwarding business (**Allied Shipping Agency**)
2. Next.js 14
3. TypeScript
4. Tailwind CSS
5. Framer Motion
6. Navy/gold/beige palette
7. Inter font

## Output

> Build a modern, professional website for Allied Shipping Agency, a freight forwarding company. Use Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Include a navy, gold, and warm beige color palette with the Inter font. The site should have a homepage, services page, about page, and contact page. Make it responsive, modern, and visually appealing with smooth animations. Include a hero section, services showcase, testimonials, and a contact form. Make sure it reflects trust and professionalism for a logistics company.

## Notes

No additional notes.

## Observation

### What Changed

Nothing yet. This is the starting point.

### What Improved

Nothing, it's the baseline.

### What Failed

Everything got dumped into one output: pages, sections, animations, colors, tone, all mixed together with zero order.

No wonder this never actually got built. Whoever picks this up — even an AI — doesn't know where to start.

### What I'd Try Next

Break this into small, ordered steps instead of throwing everything at it at once.

---

# Version 1 — Layer: Output Format

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps (e.g., Step 1: set up project structure, Step 2: build homepage hero, Step 3: build services section, etc.) rather than one single paragraph.

## Output

| Step  | Build Step                                                                                                                                       |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1** | Set up a Next.js 14 project with TypeScript and Tailwind CSS. Configure the navy/gold/beige color palette and Inter font in the Tailwind config. |
| **2** | Build the homepage hero section with company name/tagline, a services overview, and a call-to-action button.                                     |
| **3** | Build the Services page listing freight forwarding services offered.                                                                             |
| **4** | Build the About page with company background.                                                                                                    |
| **5** | Build the Contact page with a contact form.                                                                                                      |
| **6** | Add Framer Motion animations to section transitions and the hero.                                                                                |
| **7** | Make the entire site responsive across mobile, tablet, and desktop.                                                                              |

## Notes

No additional notes.

## Observation

### What Changed

I told it to give me numbered steps instead of one big paragraph.

### What Improved

Now there's actually an order — Step 1, then Step 2, instead of everything at once.

This is the exact thing that was missing before, and it's why the site never got built.

### What Failed

The steps are still vague.

"Build the homepage" doesn't say what goes on it or what "done" even looks like.

### What I'd Try Next

Give it real information about the actual business instead of placeholder text.

---

# Version 2 — Layer: Real Context

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include this real business context so the output is specific, not generic: Allied Shipping Agency is a freight forwarding company based in Lahore.

## Output

| Step  | Build Step                                                                                                          |
| ----- | ------------------------------------------------------------------------------------------------------------------- |
| **1** | Set up Next.js 14 with TypeScript, Tailwind CSS, navy/gold/beige palette, Inter font.                               |
| **2** | Build the homepage hero: **"Allied Shipping Agency, your trusted freight forwarding partner in Lahore, Pakistan."** |
| **3** | Build a Services page listing freight forwarding services offered.                                                  |
| **4** | Build an About page mentioning the company's location in Shadman, Lahore, and its role as a freight forwarder.      |
| **5** | Build a Contact page with the company address and a contact form.                                                   |
| **6** | Add Framer Motion animations.                                                                                       |
| **7** | Make it responsive.                                                                                                 |

## Notes

No additional notes.

## Observation

### What Changed

Added the real business information I had — location and category.

### What Improved

The hero line and contact address are now real, not placeholder text.

Someone could copy-paste Step 5 straight into the site.

### What Failed

Step 3, the services list, is still generic because I hadn't given it my actual services yet, so it just guessed.

This one only half-worked. It fixed what I gave it real information for and left the rest exactly as vague as before.

### What I'd Try Next

Actually give it the real services, or tell it to flag when it's guessing instead of pretending it knows.

---

# Version 3 — Layer: Defined Audience

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include real business context: Allied Shipping Agency is a freight forwarder in Lahore, Pakistan, offering air freight, sea freight, and customs clearance. Write for this specific audience: customers who need to book freight shipments — not investors, not job seekers, not general visitors.

## Output

| Step  | Build Step                                                                                                                                                                                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | Set up Next.js 14 with TypeScript, Tailwind CSS, navy/gold/beige palette, Inter font.                                                                                                                                     |
| **2** | Build the homepage hero targeted at freight-booking customers — headline like **"Reliable Air, Sea & Customs Clearance Services from Lahore"** with a clear **"Get a Quote"** CTA, not generic company branding language. |
| **3** | Build a Services page with three clear sections: **Air Freight, Sea Freight, Customs Clearance**, each explaining what a customer gets, not company history.                                                              |
| **4** | Build an About page brief, since freight customers care more about capability than company story.                                                                                                                         |
| **5** | Build a Contact/Quote Request page with the address and a form focused on shipment details (**origin, destination, cargo type**) rather than a generic message box.                                                       |
| **6** | Add Framer Motion animations.                                                                                                                                                                                             |
| **7** | Make it responsive.                                                                                                                                                                                                       |

## Notes

No additional notes.

## Observation

### What Changed

Told it exactly who the site is for — people booking freight, not investors or random visitors.

### What Improved

The CTA finally sounds like something a customer would click (**"Get a Quote"**) instead of generic company talk.

The contact form asks for shipment details instead of just **"leave a message."**

This one actually worked.

### What Failed

Still no way to check if any step is actually done well before moving to the next one.

### What I'd Try Next

Add a way to review/check each step before moving on.

---

# Version 4 — Layer: Review Instructions

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include real business context: Allied Shipping Agency, freight forwarder in Lahore, Pakistan, offering air freight, sea freight, and customs clearance. Write for freight-booking customers. After each step, add a one-line review check I should do before moving to the next step.

## Output

| Step  | Build Step                                                                                                           | Review Check                                                                            |
| ----- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **1** | Set up Next.js 14, TypeScript, Tailwind CSS, navy/gold/beige palette, Inter font.                                    | Run the dev server and confirm the palette/font are applied globally before continuing. |
| **2** | Build homepage hero: **"Reliable Air, Sea & Customs Clearance Services from Lahore"**, with a **"Get a Quote"** CTA. | Read the hero out loud. Does it clearly say what you offer and what to do next?         |
| **3** | Build Services page: **Air Freight, Sea Freight, Customs Clearance** sections.                                       | Could a customer explain what each service means after reading it, without asking you?  |
| **4** | Build About page, brief and capability-focused.                                                                      | Is it under 150 words?                                                                  |
| **5** | Build Contact/Quote page, form with origin, destination, cargo type, plus the address.                               | Does the form only ask for information you'd actually need to give a quote?             |
| **6** | Add Framer Motion animations.                                                                                        | Do animations feel smooth, or do they slow down page load?                              |
| **7** | Make the site responsive.                                                                                            | Test on an actual phone screen, not just browser resize.                                |

## Notes

No additional notes.

## Observation

### What Changed

Asked it to add a check after every step, before moving on to the next one.

### What Improved

Now I'd actually catch a bad step early instead of finding out at the end that something's wrong, which is basically what happened the first time around.

### What Failed

The checks are still just vibes:

* "Does it feel smooth?"
* "Read it out loud."
* "Could a customer explain it?"

Nothing is stopping me from convincing myself something's fine when it isn't.

This helped, but not as much as I wanted.

### What I'd Try Next

Turn these checks into actual numbers/rules instead of feelings.

---

# Version 5 — Layer: Quality Criteria

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include real business context: Allied Shipping Agency, freight forwarder in Lahore, Pakistan, offering air freight, sea freight, and customs clearance. Write for freight-booking customers. After each step, add a one-line review check with a measurable pass/fail bar, not a subjective feeling.

## Output

| Step  | Build Step                                                                        | Pass / Fail Criteria                                                                                 |
| ----- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **1** | Set up Next.js 14, TypeScript, Tailwind CSS, navy/gold/beige palette, Inter font. | **Pass:** `npm run dev` builds with zero errors and the palette/font are visible on a blank page.    |
| **2** | Build homepage hero, headline + **"Get a Quote"** CTA.                            | **Pass:** Headline is under 12 words and names at least one specific service (air/sea/customs).      |
| **3** | Build Services page: Air Freight, Sea Freight, Customs Clearance sections.        | **Pass:** Each service section is 40–80 words and answers **"what do I get?"**, not company history. |
| **4** | Build About page.                                                                 | **Pass:** Under 150 words, no more than 2 paragraphs.                                                |
| **5** | Build Contact/Quote page.                                                         | **Pass:** Form has exactly 4 required fields: origin, destination, cargo type, contact information.  |
| **6** | Add Framer Motion animations.                                                     | **Pass:** Page load time stays under 2 seconds after animations are added.                           |
| **7** | Make the site responsive.                                                         | **Pass:** No horizontal scroll or overlapping elements at **375px width** (iPhone SE size).          |

## Notes

No additional notes.

## Observation

### What Changed

Swapped the **"does it feel right?"** checks for actual pass/fail numbers.

### What Improved

Now anyone could check this, not just me.

Examples:

* Under 2 seconds
* 375px width
* Exactly 4 fields
* Under 150 words
* 40–80 words per service

There is no guessing or taste involved.

### What Failed

Honestly, some of these numbers are just my best guess:

* Why 4 fields?
* Why 40–80 words?
* Why under 2 seconds?

They aren't based on real customer testing.

### What I'd Try Next

Actually show this to a real customer or my dad/brother who run the business, and adjust the numbers based on what they say.

---

# Final Reusable Prompt

> **Give me a complete build prompt for [your website], structured as a numbered, sequential list of steps I can hand to an AI coding tool.**
>
> For each step:
>
> 1. Include real business context, what the business does, who it serves, and any real details I provide.
> 2. Write for **[specific audience]**, not a general visitor.
> 3. End with a **measurable pass/fail check** — a specific, testable bar, not a subjective feeling.

---

# Prompt Ladder Progression

| Version | Layer               | Main Improvement                                               |
| ------- | ------------------- | -------------------------------------------------------------- |
| **0**   | Baseline            | Everything dumped into one generic prompt.                     |
| **1**   | Output Format       | Converted the request into ordered build steps.                |
| **2**   | Real Context        | Added actual business and location information.                |
| **3**   | Defined Audience    | Targeted customers who need to book freight shipments.         |
| **4**   | Review Instructions | Added a review check after every build step.                   |
| **5**   | Quality Criteria    | Replaced subjective checks with measurable pass/fail criteria. |

---

# Key Learning

Better prompts did **not** come from simply making the prompt longer.

Each version added **one specific constraint that removed ambiguity**:

**Structure → Context → Audience → Review → Measurable Quality**

The progression shows that effective prompting is less about adding more words and more about adding the **right constraints** at each stage.
