Week 2

** Prompt Ladder**

Track: General AI Fluency, FlyRank
Internship

Baseline
(Version 0)

Prompt:

"Using my given info, give me a complete prompt to
build this website that I can paste into any AI tool like Antigravity to build
this."

Info given: Family freight forwarding business
(Allied Shipping Agency), Next.js 14, TypeScript, Tailwind CSS, Framer Motion,
navy/gold/beige palette, Inter font.

Output:

"Build a modern, professional website for Allied
Shipping Agency, a freight forwarding company. Use Next.js 14, TypeScript,
Tailwind CSS, and Framer Motion. Include a navy, gold, and warm beige color
palette with the Inter font. The site should have a homepage, services page,
about page, and contact page. Make it responsive, modern, and visually
appealing with smooth animations. Include a hero section, services showcase,
testimonials, and a contact form. Make sure it reflects trust and professionalism
for a logistics company."

Notes:

1.              
What changed: nothing yet,
this is the starting point

2.              
What improved: nothing,
it's the baseline

3.              
What failed: everything got
dumped into one output, pages, sections, animations, colors, tone, all mixed
together with zero order. No wonder this never actually got built. Whoever
picks this up (even AI) doesn't know where to start.

4.              
What I'd try next: break
this into small, ordered steps instead of throwing everything at it at once

**Version 1
**

** Layer: Output Format**

Prompt:

"Using my given info, give me a complete prompt to
build this website that I can paste into any AI tool like Antigravity.
Structure the output as a numbered, sequential list of build steps (e.g., Step
1: set up project structure, Step 2: build homepage hero, Step 3: build
services section, etc.) rather than one single paragraph."

Output:

"Build the Allied Shipping Agency website in these
steps:

Step 1: Set up a Next.js 14 project with TypeScript and Tailwind CSS. Configure
the navy/gold/beige color palette and Inter font in the Tailwind config.

Step 2: Build the homepage hero section with company name/tagline, a services
overview, and a call-to-action button.

Step 3: Build the Services page listing freight forwarding services offered.

Step 4: Build the About page with company background.

Step 5: Build the Contact page with a contact form.

Step 6: Add Framer Motion animations to section transitions and the hero.

Step 7: Make the entire site responsive across mobile, tablet, and
desktop."

Notes:

1.              
What changed: I told it to
give me numbered steps instead of one big paragraph

2.              
What improved: now there's
actually an order Step 1, then Step 2, instead of everything at once. This is
the exact thing that was missing before, and it's why the site never got built.

3.              
What failed: the steps are
still vague. "Build the homepage" doesn't say what goes on it or what
"done" even looks like.

4.              
What I'd try next: give it
real info about the actual business instead of placeholder text

**Version 2
**

Layer:
Real Context

Prompt:

"Using my given info, give me a complete prompt to
build this website that I can paste into any AI tool like Antigravity.
Structure the output as a numbered, sequential list of build steps. Include
this real business context so the output is specific, not generic: Allied
Shipping Agency is a freight forwarding company based in Lahore,

Output:

"Build the Allied Shipping Agency website in these
steps:

Step 1: Set up Next.js 14 with TypeScript, Tailwind CSS, navy/gold/beige
palette, Inter font.

Step 2: Build the homepage hero 'Allied Shipping Agency, your trusted freight
forwarding partner in Lahore, Pakistan.'

Step 3: Build a Services page listing freight forwarding services offered.

Step 4: Build an About page mentioning the company's location in Shadman,
Lahore, and its role as a freight forwarder.

Step 5: Build a Contact page with the company address and a contact form.

Step 6: Add Framer Motion animations.

Step 7: Make it responsive."

Notes:

1.              
What changed: added the
real business info I had location and category

2.              
What improved: the hero
line and contact address are now real, not placeholder text. Someone could copy-paste
Step 5 straight into the site.

3.              
What failed: Step 3 (the
services list) is still generic because I hadn't given it my actual services
yet, so it just guessed. This one only half-worked, it fixed what I gave it
real info for, and left the rest exactly as vague as before.

4.              
What I'd try next: actually
give it the real services, or tell it to flag when it's guessing instead of
pretending it knows

**Version 3
**

Layer:
Defined Audience

Prompt:

"Using my given info, give me a complete prompt to
build this website that I can paste into any AI tool like Antigravity.
Structure the output as a numbered, sequential list of build steps. Include
real business context: Allied Shipping Agency is a freight forwarder in Lahore,
Pakistan, offering air freight, sea freight, and customs clearance. Write for
this specific audience: customers who need to book freight shipments not
investors, not job seekers, not general visitors."

Output:

"Build the Allied Shipping Agency website in these
steps:

Step 1: Set up Next.js 14 with TypeScript, Tailwind CSS,
navy/gold/beige palette, Inter font.

Step 2: Build the homepage hero targeted at freight-booking customers headline
like 'Reliable Air, Sea & Customs Clearance Services from Lahore' with a
clear 'Get a Quote' CTA, not generic company branding language.

Step 3: Build a Services page with three clear sections: Air Freight, Sea
Freight, Customs Clearance, each explaining what a customer gets, not company
history.

Step 4: Build an About page brief, since freight customers care more about
capability than company story.

Step 5: Build a Contact/Quote Request page with the address and a form focused
on shipment details (origin, destination, cargo type) rather than a generic
message box.

Step 6: Add Framer Motion animations.

Step 7: Make it responsive."

Notes:

1.              
What changed: told it
exactly who the site is for people booking freight, not investors or random
visitors

2.              
What improved: the CTA
finally sounds like something a customer would click ("Get a Quote")
instead of generic company talk, and the contact form asks for shipment details
instead of just "leave a message." This one actually worked.

3.              
What failed: still no way
to check if any step is actually done well before moving to the next one

4.              
What I'd try next: add a
way to review/check each step before moving on

**Version 4
**

Layer:
Review Instructions

Prompt:

"Using my given info, give me a complete prompt to
build this website that I can paste into any AI tool like Antigravity.
Structure the output as a numbered, sequential list of build steps. Include
real business context: Allied Shipping Agency, freight forwarder in Lahore,
Pakistan , offering air freight, sea freight, and customs clearance. Write for
freight-booking customers. After each step, add a one-line review check I
should do before moving to the next step."

Output:

"Step 1: Set up Next.js 14, TypeScript, Tailwind CSS,
navy/gold/beige palette, Inter font.

Check: Run the dev server and confirm the palette/font are applied globally
before continuing.



Step 2: Build homepage hero 'Reliable Air, Sea & Customs Clearance
Services from Lahore,' with a 'Get a Quote' CTA.

Check: Read the hero out loud, does it clearly say what you offer and what to
do next?



Step 3: Build Services page, Air Freight, Sea Freight, Customs Clearance
sections.

Check: Could a customer explain what each service means after reading it,
without asking you?



Step 4: Build About page, brief, capability-focused.

Check:
Is it under 150 words?



Step 5: Build Contact/Quote page, form with origin, destination, cargo type,
plus the address.

Check: Does the form only ask for info you'd actually need to give a quote?



Step 6: Add Framer Motion animations.

Check: Do animations feel smooth, or do they slow down page load?



Step 7: Make responsive.

Check: Test on an actual phone screen, not just browser resize."

Notes:

1.              
What changed: asked it to
add a check after every step, before moving to the next one

2.              
What improved: now I'd
actually catch a bad step early instead of finding out at the end that
something's wrong which is basically what happened the first time around

3.              
What failed: the checks are
still just vibes "does it feel smooth," "read it out loud."
Nothing stopping me from convincing myself something's fine when it's not. This
helped, but not as much as I wanted.

4.              
What I'd try next: turn
these checks into actual numbers/rules instead of feelings

**Version 5
**

Layer:
Quality Criteria

Prompt:

"Using my given info, give me a complete prompt to
build this website that I can paste into any AI tool like Antigravity.
Structure the output as a numbered, sequential list of build steps. Include
real business context: Allied Shipping Agency, freight forwarder in Lahore,
Pakistan, offering air freight, sea freight, and customs clearance. Write for
freight-booking customers. After each step, add a one-line review check with a
measurable pass/fail bar, not a subjective feeling."

Output:

"Step 1: Set up Next.js 14, TypeScript, Tailwind CSS,
navy/gold/beige palette, Inter font.

Pass: `npm run dev` builds with zero errors and the palette/font are visible on
a blank page.



Step 2: Build homepage hero, headline + 'Get a Quote' CTA.

Pass: Headline is under 12 words and names at least one specific service
(air/sea/customs).



Step 3: Build Services page, Air Freight, Sea Freight, Customs Clearance
sections.

Pass: Each service section is 40-80 words and answers 'what do I get' not
company history.



Step 4: Build About page.

Pass: Under 150 words, no more than 2 paragraphs.



Step 5: Build Contact/Quote page.

Pass: Form has exactly 4 required fields (origin, destination, cargo type,
contact info).



Step 6: Add Framer Motion animations.

Pass: Page load time stays under 2 seconds after animations are added.



Step 7: Make responsive.

Pass: No horizontal scroll or overlapping elements at 375px width (iPhone SE
size)."

Notes:

1.              
What changed: swapped the
"does it feel right" checks for actual pass/fail numbers

2.              
What improved: now anyone
could check this, not just me. "Under 2 seconds," "375px
width," "exactly 4 fields" no guessing, no taste needed.

3.              
What failed: honestly some
of these numbers are just my best guess (why 4 fields, why 40-80 words) not
based on any real customer testing

4.              
What I'd try next: actually
show this to a real customer or my dad/brother who run the business, and adjust
the numbers based on what they say

Final Reusable Prompt

"Give me a complete build prompt for [your website],
structured as a numbered, sequential list of steps I can hand to an AI coding
tool. For each step: (1) include real business context, what the business does,
who it serves, and any real details I provide, (2) write for [specific
audience], not a general visitor, (3) end with a measurable pass/fail check a
specific, testable bar, not a subjective feeling."