# Contract Gig Outreach Final Submission

## Project

Contract Gig Outreach is an AI assisted n8n workflow that retrieves recent application related Gmail messages, generates follow up emails through OpenRouter and saves the generated messages as Gmail drafts for human review.

## Deliverables

README.md

Complete project documentation including the workflow purpose, setup, architecture, testing, evaluation, limitations and AI transparency.

ARCHITECTURE.md

Description of the complete workflow and the reasoning behind the main design decisions.

EVALUATION.md

Results from testing the workflow against five real Gmail threads.

RETROSPECTIVE.md

My final reflection on what I set out to build, what changed during development, what I learned and what I would improve next.

DEMO.md

Description of the live workflow demonstration, including the design decision and limitation discussed during the demo.

Demo video

A recorded live demonstration of the working n8n workflow.

## Final test

The workflow was tested against five real Gmail threads.

Five items were retrieved.

Five AI generated responses were produced.

Five Gmail drafts were successfully created.

## Main design decision

The workflow creates Gmail drafts rather than automatically sending emails.

This keeps the final communication under human control.

## Main limitation

The Gmail search can return recruitment related messages that are not genuine application threads.

The current version therefore requires human review before a generated message is used.

## Version 2 direction

The next version would classify incoming emails and extract structured application information before generating the follow up.

## AI transparency

AI was used during development for workflow design support, prompt development, troubleshooting and refinement.

I personally configured, tested and validated the workflow and reviewed the generated outputs.

## Final outcome

The project demonstrates a working AI assisted automation workflow that connects Gmail, OpenRouter and n8n and converts multiple application related email threads into reviewable Gmail drafts.