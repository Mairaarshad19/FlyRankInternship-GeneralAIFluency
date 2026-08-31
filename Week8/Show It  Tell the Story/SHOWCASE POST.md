# Contract Gig Outreach

I built an AI assisted workflow in n8n to make contract job application follow ups less repetitive.

The workflow connects Gmail to OpenRouter, retrieves recent application related messages, generates a short follow up email and saves the result as a Gmail draft.

I initially tested it with one email thread. After that worked, I changed the workflow to process five items and ran it against five real Gmail threads.

The result was five generated Gmail drafts from one workflow execution.

One design decision I made was to create drafts instead of automatically sending messages. I wanted the workflow to handle the repetitive writing while keeping the final decision with me.

The biggest limitation I found was email context. Not every message returned by a Gmail keyword search is a genuine application thread. Some were job alerts or assessment notifications, and some did not contain enough information to generate a highly specific follow up.

That changed how I think about AI automation. The LLM is only one part of the system. The quality of the input and the decisions made around the model are just as important.

For version 2, I would add an email classification stage and structured extraction for company name, position, application date, recipient and application status before generating the follow up.

The current version successfully demonstrates the complete workflow from Gmail retrieval to AI generated Gmail drafts while keeping human review in the loop.