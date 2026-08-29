# General AI Fluency — Impact Project Capstone

## How I'll add the next case study

My case studies live in `src/data/portfolio-content.ts` as objects inside the `projectsContent` array, and which ones actually show up on the homepage is controlled by a separate `FEATURED_PROJECT_NAMES` list in `Projects.tsx`. So adding a new case study is really two small steps, not a rebuild:

1. Write the case study using the three-beat shape from Week 2: what the problem was, what I actually did, what came of it. Add it as a new object in `projectsContent` with a name, tagline, description, tech stack, screenshot path, and links.
2. Add the project's name to `FEATURED_PROJECT_NAMES` in `Projects.tsx` so it renders on the homepage. If it has a screenshot, drop the image into `/public/projects/` and it'll automatically pick up the existing dual-layer image component, no new image code needed.

## Next piece of work I'm naming

VOXLINK. It's already built, already has a real screenshot and a hardware photo, and it's currently sitting out of the featured list because I trimmed the homepage down to two projects. Writing it up properly as a three-beat case study (voice-command latency was the problem, built an offline ESP32 + Flutter system as the fix, working demo was the result) is genuinely just a content task at this point, not new development.

## Reminder set

Added a recurring note in my calendar for the first week of next month to come back and either add the VOXLINK case study or swap in whatever real project is furthest along by then.

## Claude Project

Kept as-is. It already has my stack, voice, and identity decisions in it, so adding the next case study stays a short conversation, not a re-explain-everything session.

---

**Commit for this capstone work:**
```
git add .
git commit -m "docs: add case-study addition process notes and plan for next project"
```
