# Draft, Critique, Revise: Outreach Message Pipeline
**Track:** General AI Fluency, FlyRank Internship, Build Phase
**Code: FL-O4** 
---

## Pipeline Chosen

I picked draft, critique, revise from my FL-01 audit. This is the pipeline for drafting professional outreach content, since that is a real recurring task for me right now, not a made up example. The other two options, weekly industry brief and source grounded study notes, do not match anything I am actually doing this summer.

---

## Step Diagram

1. Gather, I give the real input, who I am writing to, what role, any real context I have
2. Draft, AI writes a first version using my voice card and proof statement
3. Critique, a fresh pass checks the draft against specific bars, not just approves it
4. Revise, AI rewrites the final version using the critique feedback

Each step only sees what the step before it produced, so critique is reviewing draft's actual output, not continuing the same thought.

---

## Prompts Used

**Draft prompt:**
"You are drafting an outreach message in my voice, direct, honest, eager to learn, no fluff, matter of fact. Here is my proof statement for grounding: [proof statement]. Write a short outreach message to [company/person] for [role]. Keep it under 120 words, one clear ask at the end."

**Critique prompt:**
"Act as a skeptical reviewer, not the author. Here is an outreach message I drafted: [draft]. Check it against these bars, does every claim survive a direct follow up question, does it sound like a specific person not generic AI speak, is there exactly one clear ask, is anything vague or filler. List specific problems, do not just approve it."

**Revise prompt:**
"Here is my original draft: [draft]. Here is the critique: [critique]. Rewrite the message incorporating this feedback, keep my voice, direct, honest, no fluff."

---

## Five Real Runs

### Run 1: Systems Limited, part time contract role, addressed to Adil Sikandar

Draft mentioned real evidence, Dijkstra's algorithm, MySQL, and the Microsoft Inner Circle partnership. Critique caught that "balancing this alongside my degree" read as a soft excuse and could invite the exact question I did not want asked. Also flagged "I'd like to explore" as too tentative for my voice. Final version cut the excuse and used a more direct verb.


### Run 2: Systems Limited, general internship version (before I had Adil's name)

Draft was generic, addressed to no one specific. Critique caught filler like "I'd welcome the chance" and a passive ask, "could you let me know." Also flagged that mixing desktop C# work into a backend web pitch was confusing without explanation. Final version was tighter but this run is what pushed me to go find Adil's actual name and title for Run 1.

### Run 3: PureLogics, AI/ML internship

Critique caught something bigger than phrasing here, that my actual evidence, evaluation rubrics and prompt engineering, proves applied AI skill, not ML engineering skill. If PureLogics is hiring for model building specifically, my draft was quietly overselling fit. Final version narrowed the pitch to "applied AI work" instead of a vague "AI/ML" claim.

### Run 4: Devsinc, general software engineer role

Same failure pattern as Run 2 showed up again, "your reputation as a top tier company" is generic flattery, not a real reason, and "software engineer role" was vague since Devsinc has multiple tracks. Final version asked directly which track fits instead of guessing.

### Run 5: Devsinc, actual internship JD, fresh graduates only

This is the most important run. The critique step refused to just polish the wording and instead flagged a real problem, the JD says fresh graduates only and I am still a current student, and it lists stacks, Python/Django, MERN, RoR, that do not match my actual background. The pipeline correctly said this is not a phrasing fix, it is a decision I need to make before sending anything at all.

---

## Time Saved Estimate

Each run took about four minutes end to end, gather, draft, critique, revise. Writing and honestly revising one outreach message myself, including catching my own generic phrases, usually takes me fifteen to twenty minutes, and I am honest that I often skip a real critique pass when rushed, which is exactly how weak lines slip through. Setup cost was about fifteen minutes the first time, writing and testing the three prompts. Across five runs that is roughly twenty minutes of pipeline time plus setup, versus seventy five to one hundred minutes doing all five manually with a real critique pass each time.

---

## Where It Breaks and What I Still Have to Check

The pipeline is reliably good at catching generic phrasing, filler flattery, and passive asks, that showed up in almost every run. It is not good at catching eligibility mismatches or skill stack mismatches on its own, Run 5 only worked because I gave it the real JD text to check against. If I had not pasted the actual requirements, it would have kept polishing a message I should not have sent in that form at all.

What a human still has to check every time: whether the company specific claim is actually true and verifiable, whether I have a real named contact or am stuck with a generic address, and whether I am actually eligible for the role in the first place. The pipeline can make a message sound like me. It cannot tell me if I should be sending it.