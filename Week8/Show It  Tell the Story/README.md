# Contract Gig Outreach

## Overview

Contract Gig Outreach is an n8n workflow that helps me follow up on contract job applications without manually opening every email and writing each follow up message from scratch.

The workflow connects to my Gmail account, finds recent application related email threads, sends the relevant information to an LLM through OpenRouter, generates a short follow up message, and saves the result as a Gmail draft.

The main goal of the project is to reduce repetitive work while keeping the final decision in my hands. The workflow creates drafts instead of automatically sending emails, so I can review every message before it is sent.

## Who it is for

This workflow is useful for job seekers who apply to multiple contract positions and want a faster way to prepare follow up messages.

It is especially useful when application emails are spread across a busy inbox and writing individual follow ups becomes repetitive.

## What the workflow does

The workflow starts with a manual trigger.

It then searches Gmail for recent application related messages.

The Gmail node retrieves up to five matching threads during the current test configuration.

The relevant subject and email snippet are passed to the language model.

The language model writes a short follow up email using a direct and professional tone.

The generated response is extracted from the OpenRouter response.

The final message is saved as a Gmail draft.

The workflow does not automatically send the email.

This keeps the human in control of the final communication.

## Architecture

The workflow contains five main stages.

Manual Trigger

The workflow starts when I manually execute it from n8n.

Gmail Application Retrieval

The Gmail node searches the inbox for recent messages using an application related search query.

The current search query is:

in:inbox (application OR interview OR "thank you for applying") newer_than:14d

During testing, the retrieval limit was changed to five so that the workflow could be tested against multiple real email threads.

LLM Generation

The retrieved email information is sent to OpenRouter using an HTTP Request node.

The workflow sends the application subject and email snippet together with instructions for generating a short follow up message.

The model is instructed to use a direct, honest and matter of fact writing style.

Draft Extraction

A Code node extracts the generated message from the OpenRouter response.

It also keeps the Gmail thread identifier so that the generated result remains associated with the original application thread.

Gmail Draft Creation

The final message is passed to Gmail and saved as a draft.

The draft can then be reviewed manually before sending.

## LLM prompt

The workflow uses the following instruction:

You are drafting a short follow up email for a contract job application. Voice: direct, honest, no fluff, matter of fact. Never inflate or use corporate filler.

Subject: application subject

Thread snippet: email snippet

Write a 3 to 4 sentence follow up email checking in on the application status. Return ONLY the email body text, nothing else.

The actual subject and thread snippet are inserted dynamically from the Gmail result.

## Example workflow input

A real application related email contained information indicating that an application had been received for a Virtual Assistant position.

The workflow extracted the email information and generated a follow up message based on that context.

Another test involved an examination related email from Digital Abbot Global Hackathon.

The workflow was able to process the email and create a follow up draft.

## Example generated output

I wanted to check in on the status of my application submitted on August 27, 2026. I'm still very interested in the User Manual Technical Writer project and available to start. Could you let me know where things stand or if you need any additional information from me?

This shows the intended output style.

The messages are short and readable and do not contain unnecessary corporate language.

## Gmail authentication

Gmail access is handled through Gmail OAuth 2.0.

The OAuth connection allows the workflow to read the required Gmail messages and create drafts in the connected account.

No Gmail password is stored in the workflow.

Authentication credentials and secrets are kept inside n8n and are not included in this repository.

## OpenRouter integration

The workflow communicates with OpenRouter through an HTTP Request node.

The request is sent to the OpenRouter chat completions endpoint.

The workflow uses a free model route so that the project can be tested without depending on a paid model.

The model selection was adjusted during development because some free models became unavailable. The final workflow uses the OpenRouter free routing option.

## Setup

Install and run n8n.

Create or open an n8n workflow.

Add a Manual Trigger node.

Add a Gmail node configured to retrieve messages.

Connect a Gmail OAuth 2.0 credential.

Configure the Gmail search query:

in:inbox (application OR interview OR "thank you for applying") newer_than:14d

Set the retrieval limit to five when testing multiple threads.

Add an HTTP Request node.

Configure it to make a POST request to the OpenRouter chat completions endpoint.

Add the Authorization header using the OpenRouter API key stored securely in n8n.

Set the request body to JSON.

Pass the Gmail subject and snippet into the prompt dynamically.

Add a Code node to extract the generated message from the OpenRouter response.

Add a Gmail node configured to create a draft.

Pass the generated text into the draft message field.

Pass the appropriate recipient address into the To field.

Save the workflow and execute it manually.

## Testing

The workflow was tested using real email threads from my Gmail inbox.

The initial configuration retrieved one thread at a time.

After the single thread flow worked successfully, I changed the retrieval limit to five.

The workflow was then executed against five real email threads.

Five outputs were successfully generated and five Gmail drafts appeared in the Gmail Drafts folder.

This confirmed that the workflow could process multiple items in one execution rather than only handling a single email.

## Evaluation

The workflow successfully demonstrated the complete path from Gmail retrieval to generated draft creation.

Gmail OAuth authentication worked successfully.

The workflow retrieved multiple Gmail threads successfully.

Five real threads were processed in one execution.

The OpenRouter request successfully generated text.

The Code node successfully extracted the generated response.

Five Gmail drafts were successfully created.

The workflow therefore met its core objective of turning application related email information into reviewable follow up drafts.

## Limitations

The biggest limitation is that the Gmail search is based on keywords and recent email activity.

Not every email returned by the search is necessarily a genuine job application thread.

For example, the test run included automated job alerts, examination notices and other recruitment related messages.

The language model also depends on the quality of the information contained in the email snippet.

If the original email does not clearly contain the job title, application date or hiring contact, the generated message may use generic wording.

During testing, some drafts referred to the application date correctly while other drafts used generic wording.

Some outputs also included placeholders such as a hiring manager name when that information was not available.

This means the generated message should always be reviewed before sending.

Another limitation is that the workflow currently creates drafts rather than automatically deciding whether an email should be sent.

I intentionally kept this limitation because automatically sending generated job application emails without human review could result in incorrect or inappropriate communication.

## What I would improve in version 2

The next version would add stronger application filtering before the LLM step.

I would classify each retrieved email as a genuine application thread, recruitment notification, assessment message or irrelevant message.

I would also extract structured fields such as company name, position title, recipient email, application date and application status.

The LLM would then receive structured information instead of relying mainly on the Gmail snippet.

I would also add a confidence score and a human approval step before a draft is created.

This would make the workflow more reliable when processing a large inbox.

## AI transparency

AI played an important role in this project.

I used AI assistance while designing the workflow, improving prompts, troubleshooting the OpenRouter integration, and refining the generated follow up messages.

I personally configured and tested the n8n workflow, connected Gmail through OAuth 2.0, tested the OpenRouter request, inspected the generated outputs, fixed errors, tested multiple Gmail threads and reviewed the resulting Gmail drafts.

The final workflow decisions and validation were based on my own testing.

## Human review

The workflow is designed to assist rather than replace the final decision.

Every generated message is saved as a Gmail draft.

I can inspect the original application email, check the generated text, make corrections and decide whether the message should actually be sent.

This is important because automated email content can be technically valid while still being inappropriate for a particular application.

## Final result

Contract Gig Outreach successfully demonstrates an end to end AI assisted workflow for job application follow ups.

It connects Gmail to an LLM through OpenRouter, processes multiple real email threads and produces Gmail drafts that can be reviewed before sending.

The project also showed an important lesson during development.

Generating text is not the difficult part of the system.

The more important challenge is deciding which emails are actually relevant and providing the model with enough reliable context to produce an accurate message.

That is the main area I would focus on in the next version.