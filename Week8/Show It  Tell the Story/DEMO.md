# Contract Gig Outreach Demo

## Demo overview

The demo shows a live end to end execution of Contract Gig Outreach in n8n.

The workflow starts from a manual trigger and retrieves application related messages from Gmail.

The retrieved information is passed to OpenRouter for follow up message generation.

The generated response is extracted and then saved as a Gmail draft.

## What the demo shows

The first part of the demo shows the n8n workflow and its five stages.

The Gmail node retrieves application related email threads.

The HTTP Request node sends the relevant information to OpenRouter.

The Code node extracts the generated message.

The final Gmail node saves the generated message as a draft.

The demo then shows the workflow being executed against multiple Gmail threads.

The workflow successfully processed five items during the multi thread test.

Five Gmail drafts were created as a result.

## Design decision explained in the demo

I chose to save generated messages as Gmail drafts instead of automatically sending them.

This gives the workflow a human approval point.

The generated content can be reviewed against the original application email before anything is sent.

## Limitation explained in the demo

The main limitation is that Gmail search results are not always genuine application threads.

Some messages can be automated job alerts, assessment notifications or other recruitment related messages.

The workflow can still generate a message from those inputs, but the result may not contain enough accurate job specific information.

This is why the generated drafts require human review.

## Result

The final test demonstrated that the workflow can retrieve multiple real email threads, generate follow up content and create Gmail drafts in one execution.