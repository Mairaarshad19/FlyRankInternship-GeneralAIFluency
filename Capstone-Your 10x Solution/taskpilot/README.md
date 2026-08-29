# TaskPilot

A small backend for tracking deadlines across courses/projects, built as my
10x Solution capstone. I'm juggling several courses and side projects at
once, and kept losing track of what's actually due next — so this is a
personal deadline tracker with an AI layer that tells me what to work on
first, plus a weekly PDF report.

## What it does

- Add tasks with a course, priority, and due date
- `GET /tasks/prioritize` asks an LLM (or falls back to a rule) to sort your
  open tasks and explain why each one matters right now
- A cron job runs every morning, flags anything due in the next 24h, and on
  Sundays generates + emails a weekly PDF summary
- You can also pull the PDF report on demand

## Concepts covered

| Concept | Where |
|---|---|
| API endpoints | Express routes in `routes/` |
| Database | SQLite via `better-sqlite3` (`db.js`) |
| Authentication | JWT + bcrypt (`routes/auth.js`, `middleware/auth.js`) |
| Background/cron job | `node-cron` daily job (`jobs/reminderJob.js`) |
| Reporting (PDF + email) | `pdfkit` report + `nodemailer` (`services/`) |
| Caching | `node-cache`, 60s TTL on the task list, invalidated on writes |
| LLM integration | Gemini API prioritizer with a rule-based fallback |

## Setup

```bash
npm install
cp .env.example .env
npm start
```

The app runs with just `JWT_SECRET` set. `GEMINI_API_KEY` and `SMTP_*` are
optional — without them, prioritization falls back to sorting by due date,
and emails are just logged to the console instead of sent.

## API

| Method | Route | Auth | Description |
|---|---|---|---|
| POST | `/auth/register` | – | Create an account |
| POST | `/auth/login` | – | Get a JWT |
| GET | `/tasks` | List your tasks (cached) |
| POST | `/tasks` | Create a task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |
| GET | `/tasks/prioritize` | AI-ranked "what to do first" |
| GET | `/reports/weekly` | Download a PDF report |
| POST | `/reports/weekly/email` | Email the PDF report |

All authenticated routes need `Authorization: Bearer <token>`.

## Stack

Node.js, Express, SQLite (better-sqlite3), JWT, node-cron, pdfkit,
nodemailer, Gemini API. All free tools, no credit card needed.
