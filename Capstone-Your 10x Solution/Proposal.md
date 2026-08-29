# My 10x Solution — Maira Arshad

**TaskPilot — an AI-assisted deadline tracker for students**

## The problem

I am running several things at once right now — coursework, my VOXLINK final year project, the SmartCRM database project, and this internship — each with its own deadlines scattered across group chats, LMS pages, and my own notes. I kept losing track of what was actually due next, and by the time I remembered a task, it was often the day before it was due. A calendar app does not help much here because it does not tell me what matters most when three things are due around the same time.

## The solution

TaskPilot is a small backend service where I can log tasks with a course, priority, and due date, and then ask it what to work on first. Instead of me manually re-sorting a to-do list every morning, an LLM (or a straightforward rule-based fallback when no API key is set) looks at everything still pending and returns a ranked list with a short reason for each item. A background job checks every morning for anything due within 24 hours, and on Sundays it builds a PDF summary of the week and emails it to me automatically — so I get a weekly check-in without having to open the app.

## How I implemented it

The backend is a plain Express API on Node.js, since that is the stack this internship has used throughout. Data is stored in a local SQLite database (better-sqlite3) with two tables — users and tasks. Accounts are protected with JWT tokens and bcrypt-hashed passwords, and every task route checks that token before touching the database.

For the AI part, task prioritization is handed to the Gemini API: it gets a plain-text list of open tasks and returns a short summary plus an ordered list with reasons. If no API key is configured, the app does not break — it falls back to sorting by due date so the feature is still usable out of the box.

Reporting is handled with pdfkit, which builds a one-page PDF report (pending tasks, overdue count, completed count) on demand or on the Sunday cron run, and nodemailer sends it out. If SMTP credentials are not set, the app logs what it would have sent instead of failing, so the whole thing still runs on a machine with no email configured.

Reads on the task list are cached in memory for 60 seconds with node-cache, since that endpoint gets hit far more often than tasks actually change, and the cache is cleared immediately on any create, update, or delete.

## Concepts covered

The brief asks for at least five. This ended up using seven, all naturally part of the same small app rather than bolted on separately:

| Concept | Where it lives |
|---|---|
| API endpoints | Express routes — auth, tasks, reports |
| Database | SQLite (better-sqlite3) — users + tasks tables |
| Authentication | JWT + bcrypt, protected routes via middleware |
| Background/cron job | node-cron — daily deadline check, Sunday report |
| Reporting (PDF + email) | pdfkit for the PDF, nodemailer to send it |
| Caching | node-cache, 60s TTL on the task list, cleared on writes |
| LLM integration | Gemini API prioritizes tasks, with a rule-based fallback |

## What is left out (on purpose)

- No frontend — this is a backend capstone, and the API is tested with curl/Postman.
- No hosted deployment — it runs locally with `npm start`; all pieces (SQLite, Gemini free tier, Gmail SMTP) are free with no credit card.

## Repository

Code, README with setup instructions, and API route list are in the GitHub repository submitted alongside this document.
