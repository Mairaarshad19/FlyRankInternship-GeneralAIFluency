Yes — this version is already much cleaner. I’ve formatted it as a proper `.md` document with consistent Markdown headings, tables, blockquotes, numbered lists, and code formatting.

# Week 2 — Prompt Ladder

## Track: General AI Fluency

**Organization:** FlyRank
**Program:** Internship

---

# Baseline — Version 0

## Layer

**Baseline**

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity to build this.

## Information Provided

| Category         | Details                                                     |
| ---------------- | ----------------------------------------------------------- |
| **Business**     | Family freight forwarding business — Allied Shipping Agency |
| **Tech Stack**   | Next.js 14, TypeScript, Tailwind CSS, Framer Motion         |
| **Visual Style** | Navy, gold, and beige palette                               |
| **Font**         | Inter                                                       |

## Output

> Build a modern, professional website for Allied Shipping Agency, a freight forwarding company. Use Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Include a navy, gold, and warm beige color palette with the Inter font. The site should have a homepage, services page, about page, and contact page. Make it responsive, modern, and visually appealing with smooth animations. Include a hero section, services showcase, testimonials, and a contact form. Make sure it reflects trust and professionalism for a logistics company.

## Notes

### What Changed

Nothing yet; this is the starting point.

### What Improved

Nothing; it's the baseline.

### What Failed

Everything got dumped into one output — pages, sections, animations, colors, and tone — all mixed together with zero order.

No wonder this never actually got built. Whoever picks this up, even an AI, doesn't know where to start.

### What I'd Try Next

Break this into small, ordered steps instead of throwing everything at it at once.

---

# Version 1

## Layer

**Output Format**

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps (e.g., Step 1: set up project structure, Step 2: build homepage hero, Step 3: build services section, etc.) rather than one single paragraph.

## Output

Build the Allied Shipping Agency website in these steps:

### Step 1 — Project Setup

Set up a Next.js 14 project with TypeScript and Tailwind CSS. Configure the navy/gold/beige color palette and Inter font in the Tailwind config.

### Step 2 — Homepage Hero

Build the homepage hero section with company name/tagline, a services overview, and a call-to-action button.

### Step 3 — Services Page

Build the Services page listing freight forwarding services offered.

### Step 4 — About Page

Build the About page with company background.

### Step 5 — Contact Page

Build the Contact page with a contact form.

### Step 6 — Animations

Add Framer Motion animations to section transitions and the hero.

### Step 7 — Responsive Design

Make the entire site responsive across mobile, tablet, and desktop.

## Notes

### What Changed

I told it to give me numbered steps instead of one big paragraph.

### What Improved

Now there's actually an order — Step 1, then Step 2 — instead of everything at once.

This is the exact thing that was missing before, and it's why the site never got built.

### What Failed

The steps are still vague.

"Build the homepage" doesn't say what goes on it or what "done" even looks like.

### What I'd Try Next

Give it real information about the actual business instead of placeholder text.

---

# Version 2

## Layer

**Real Context**

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include this real business context so the output is specific, not generic: Allied Shipping Agency is a freight forwarding company based in Lahore.

## Output

Build the Allied Shipping Agency website in these steps:

### Step 1 — Project Setup

Set up Next.js 14 with TypeScript, Tailwind CSS, navy/gold/beige palette, and Inter font.

### Step 2 — Homepage Hero

Build the homepage hero:

> "Allied Shipping Agency, your trusted freight forwarding partner in Lahore, Pakistan."

### Step 3 — Services Page

Build a Services page listing freight forwarding services offered.

### Step 4 — About Page

Build an About page mentioning the company's location in Shadman, Lahore, and its role as a freight forwarder.

### Step 5 — Contact Page

Build a Contact page with the company address and a contact form.

### Step 6 — Animations

Add Framer Motion animations.

### Step 7 — Responsive Design

Make the website responsive.

## Notes

### What Changed

Added the real business information I had — location and category.

### What Improved

The hero line and contact address are now real, not placeholder text.

Someone could copy-paste Step 5 straight into the site.

### What Failed

Step 3, the services list, is still generic because I hadn't given it my actual services yet, so it just guessed.

This one only half-worked: it fixed what I gave it real information for and left the rest exactly as vague as before.

### What I'd Try Next

Actually give it the real services, or tell it to flag when it's guessing instead of pretending it knows.

---

# Version 3

## Layer

**Defined Audience**

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include real business context: Allied Shipping Agency is a freight forwarder in Lahore, Pakistan, offering air freight, sea freight, and customs clearance. Write for this specific audience: customers who need to book freight shipments — not investors, not job seekers, not general visitors.

## Output

Build the Allied Shipping Agency website in these steps:

### Step 1 — Project Setup

Set up Next.js 14 with TypeScript, Tailwind CSS, navy/gold/beige palette, and Inter font.

### Step 2 — Customer-Focused Homepage Hero

Build the homepage hero targeted at freight-booking customers.

Use a headline like:

> "Reliable Air, Sea & Customs Clearance Services from Lahore"

Include a clear **"Get a Quote"** CTA instead of generic company branding language.

### Step 3 — Services Page

Build a Services page with three clear sections:

* **Air Freight**
* **Sea Freight**
* **Customs Clearance**

Each section should explain what the customer gets rather than focusing on company history.

### Step 4 — About Page

Build a brief About page.

Since freight customers care more about capability than company story, keep the company background concise.

### Step 5 — Contact / Quote Request Page

Build a Contact/Quote Request page with the company address and a form focused on shipment details, including:

* Origin
* Destination
* Cargo type

Avoid using only a generic message box.

### Step 6 — Animations

Add Framer Motion animations.

### Step 7 — Responsive Design

Make the entire website responsive across mobile, tablet, and desktop.

## Notes

### What Changed

Told it exactly who the site is for — people booking freight, not investors or random visitors.

### What Improved

The CTA finally sounds like something a customer would click:

> "Get a Quote"

Instead of generic company talk, the contact form asks for shipment details instead of simply asking the visitor to "leave a message."

This one actually worked.

### What Failed

There is still no way to check if any step is actually done well before moving to the next one.

### What I'd Try Next

Add a way to review/check each step before moving on.

---

# Version 4

## Layer

**Review Instructions**

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include real business context: Allied Shipping Agency, freight forwarder in Lahore, Pakistan, offering air freight, sea freight, and customs clearance. Write for freight-booking customers. After each step, add a one-line review check I should do before moving to the next step.

## Output

### Step 1 — Project Setup

Set up Next.js 14, TypeScript, Tailwind CSS, navy/gold/beige palette, and Inter font.

**Check:** Run the dev server and confirm the palette and font are applied globally before continuing.

---

### Step 2 — Homepage Hero

Build the homepage hero:

> "Reliable Air, Sea & Customs Clearance Services from Lahore"

Include a **"Get a Quote"** CTA.

**Check:** Read the hero out loud. Does it clearly say what you offer and what to do next?

---

### Step 3 — Services Page

Build the Services page with:

* Air Freight
* Sea Freight
* Customs Clearance

**Check:** Could a customer explain what each service means after reading it, without asking you?

---

### Step 4 — About Page

Build an About page that is brief and capability-focused.

**Check:** Is it under 150 words?

---

### Step 5 — Contact / Quote Page

Build a Contact/Quote page with a form containing:

* Origin
* Destination
* Cargo type
* Company address

**Check:** Does the form only ask for information you'd actually need to give a quote?

---

### Step 6 — Animations

Add Framer Motion animations.

**Check:** Do animations feel smooth, or do they slow down page load?

---

### Step 7 — Responsive Design

Make the website responsive.

**Check:** Test on an actual phone screen, not just browser resize.

## Notes

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

# Version 5

## Layer

**Quality Criteria**

## Prompt

> Using my given info, give me a complete prompt to build this website that I can paste into any AI tool like Antigravity. Structure the output as a numbered, sequential list of build steps. Include real business context: Allied Shipping Agency, freight forwarder in Lahore, Pakistan, offering air freight, sea freight, and customs clearance. Write for freight-booking customers. After each step, add a one-line review check with a measurable pass/fail bar, not a subjective feeling.

## Output

### Step 1 — Project Setup

Set up Next.js 14, TypeScript, Tailwind CSS, navy/gold/beige palette, and Inter font.

**Pass:** `npm run dev` builds with zero errors and the palette/font are visible on a blank page.

---

### Step 2 — Homepage Hero

Build the homepage hero with a headline and **"Get a Quote"** CTA.

**Pass:** Headline is under 12 words and names at least one specific service: air, sea, or customs.

---

### Step 3 — Services Page

Build the Services page with:

* Air Freight
* Sea Freight
* Customs Clearance

**Pass:** Each service section is 40–80 words and answers **"What do I get?"** rather than describing company history.

---

### Step 4 — About Page

Build the About page.

**Pass:** The page contains fewer than 150 words and no more than 2 paragraphs.

---

### Step 5 — Contact / Quote Page

Build the Contact/Quote page.

**Pass:** The form has exactly 4 required fields:

1. Origin
2. Destination
3. Cargo type
4. Contact information

---

### Step 6 — Animations

Add Framer Motion animations.

**Pass:** Page load time stays under 2 seconds after animations are added.

---

### Step 7 — Responsive Design

Make the site responsive.

**Pass:** There is no horizontal scroll or overlapping elements at **375px width** (iPhone SE size).

## Notes

### What Changed

Swapped the "does it feel right?" checks for actual pass/fail numbers.

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

They are not based on real customer testing.

### What I'd Try Next

Actually show this to a real customer or my dad/brother who run the business, and adjust the numbers based on what they say.

---

# Final Reusable Prompt

> **Give me a complete build prompt for [your website], structured as a numbered, sequential list of steps I can hand to an AI coding tool.**
>
> For each step:
>
> 1. Include real business context — what the business does, who it serves, and any real details I provide.
> 2. Write for **[specific audience]**, not a general visitor.
> 3. End with a **measurable pass/fail check** — a specific, testable bar, not a subjective feeling.

---

# Prompt Ladder Progression

| Version   | Layer               | Main Improvement                                          |
| --------- | ------------------- | --------------------------------------------------------- |
| **0**     | Baseline            | Everything in one unstructured prompt                     |
| **1**     | Output Format       | Added sequential build steps                              |
| **2**     | Real Context        | Added specific business information                       |
| **3**     | Defined Audience    | Targeted the actual customer                              |
| **4**     | Review Instructions | Added checks after each step                              |
| **5**     | Quality Criteria    | Converted checks into measurable pass/fail criteria       |
| **Final** | Reusable Prompt     | Combined the strongest elements into a reusable framework |

---

# Key Learning

Better prompts did **not** come from simply making the prompt longer.

Each version added **one specific constraint that removed ambiguity**:

> **Structure → Context → Audience → Review → Measurable Quality**

The main lesson from this prompt ladder is that effective prompting is not about giving an AI tool more information at once. It is about progressively adding the right constraints so the AI has less room to guess.

The progression moved from:

**Unstructured request**
↓
**Ordered steps**
↓
**Real business context**
↓
**Specific audience**
↓
**Review checkpoints**
↓
**Measurable quality criteria**

This made the final prompt more actionable, testable, and reusable than the original baseline.
