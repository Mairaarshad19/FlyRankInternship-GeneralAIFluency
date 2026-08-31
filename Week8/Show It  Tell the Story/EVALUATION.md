# Contract Gig Outreach Evaluation

## Purpose

I evaluated Contract Gig Outreach by running the complete workflow against multiple real email threads from my Gmail account.

The goal was to confirm that the workflow could retrieve multiple messages, generate follow up content and create usable Gmail drafts.

## Test configuration

The workflow used Gmail OAuth 2.0 for authentication.

The Gmail search was configured to find recent application related messages.

The retrieval limit was set to five.

The OpenRouter HTTP Request node generated the follow up content.

The Code node extracted the generated message.

The Gmail node created the final drafts.

## Results

Gmail authentication passed.

Gmail message retrieval passed.

Multiple thread processing passed.

Five real email threads were retrieved during the test.

OpenRouter generation passed.

The generated response was successfully extracted.

Gmail draft creation passed.

Five Gmail drafts were created successfully.

## Quality observations

The generated messages were generally short and professional.

The model followed the requested direct and matter of fact tone in the successful examples.

The generated messages were suitable as starting points for manual review.

The strongest outputs used enough context from the original email to mention the application or position.

## Problems found

The Gmail search was broader than an actual application database.

Some retrieved messages were automated job alerts or assessment related emails rather than direct application correspondence.

The available Gmail fields did not always contain a clear job title or hiring manager name.

Because of this, some generated messages used generic language.

One important observation was that the workflow can successfully process multiple messages while still producing outputs that require human review.

## Overall assessment

The technical workflow passed its core functional test.

It successfully connected Gmail, retrieved multiple messages, generated AI content and created five drafts.

The main remaining issue is semantic accuracy rather than workflow execution.

The next version should improve email classification and structured information extraction before generation.