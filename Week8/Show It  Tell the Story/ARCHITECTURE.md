# Contract Gig Outreach Architecture

## System flow

Manual Trigger

↓

Gmail Application Retrieval

↓

OpenRouter LLM Generation

↓

Draft Text Extraction

↓

Gmail Draft Creation

## Manual Trigger

The Manual Trigger starts the workflow when I want to process recent application related emails.

This was intentionally used during development because it allowed me to inspect the result of every execution.

## Gmail Application Retrieval

The Gmail node searches the inbox using the following query:

in:inbox (application OR interview OR "thank you for applying") newer_than:14d

The node was initially configured to retrieve one result.

After confirming that the workflow worked correctly for a single item, the limit was changed to five for multi thread testing.

The retrieved data included information such as the Gmail thread identifier, sender, recipient, subject and email snippet.

## OpenRouter

The Gmail information is passed into an HTTP Request node.

The request sends a chat completion request to OpenRouter.

The prompt contains the email subject and snippet.

The model is instructed to produce only the body of a short follow up email.

## Draft extraction

The Code node reads the generated OpenRouter response.

It extracts the assistant message content and stores it as draftText.

The Gmail thread identifier is also retained.

## Gmail draft creation

The final Gmail node creates a draft using the generated text.

The message is not automatically sent.

This provides a human approval point.

## Design decision

The most important design decision was to create drafts rather than automatically send emails.

The purpose of the workflow is to reduce repetitive writing while keeping the user responsible for the final communication.

This also reduces the risk of sending a message containing incorrect application information.

## Version 2 direction

The architecture can be improved by adding an email classification stage before LLM generation.

The classification stage could identify whether a message is an actual application, a recruitment alert, an assessment notice or an unrelated message.

A structured extraction stage could then identify the company, position, recipient, application date and status.

The generation stage would use those structured fields to produce a more accurate follow up.

The final Gmail draft would remain the human review point.