# My Contract Gig Outreach Retrospective

When I started this project, my main goal was simple. I wanted to build something that could reduce the repetitive work involved in following up on contract job applications. I was already dealing with application emails, recruitment messages and different application processes, so I wanted to see whether an AI workflow could take some of that repetitive work away without completely removing human control.

The first version of the idea was straightforward. Gmail would provide the application email, an LLM would write a follow up message and the result would be saved for later use. What changed during the project was my understanding of where the real difficulty was.

The LLM generation itself was not the hardest part. Getting a model to write a short follow up email was relatively easy. The more important challenge was getting the right information into the workflow in the first place. When I tested the workflow with real Gmail messages, I found that an inbox contains many messages that can look relevant but are not actually suitable application threads. I encountered job alerts, assessment notifications and automated recruitment messages alongside genuine application related emails.

I also had to work through several technical problems during development. The Gmail OAuth connection needed to be configured correctly, and I had to recreate the Gmail credential after encountering a connection problem. The OpenRouter model configuration also needed to be changed when the original free model became unavailable. I eventually got the HTTP Request node working and successfully generated drafts.

One of the most useful tests was changing the Gmail retrieval limit from one item to five. This allowed me to test the workflow against multiple real email threads instead of relying on a single successful example. The workflow retrieved five threads and created five Gmail drafts. That test gave me much more confidence that the workflow was actually processing multiple items rather than simply working for one carefully selected email.

The testing also exposed an important limitation. The workflow can generate a grammatically correct and professional follow up message even when the original email does not contain enough information to make the message highly specific. Some generated drafts therefore needed manual correction. I consider this an important result rather than a failure because it showed me exactly where the workflow needs improvement.

My first transferable lesson was that workflow reliability depends heavily on input quality. A good prompt cannot completely compensate for poor or ambiguous source information.

My second lesson was the importance of testing with real data. A workflow can appear successful when it is tested with one clean example. Testing five real threads exposed issues that I would not have noticed from a single example.

My third lesson was that AI automation should not automatically mean removing the human from the process. Saving the generated message as a Gmail draft gives the workflow a useful balance. The repetitive writing is automated, while the final communication remains under human control.

If I build version 2, I would add an email classification stage before generation. It would identify whether each message is a genuine application thread, a recruitment alert, an assessment notification or an irrelevant email. I would also extract structured information such as company name, position, application date and recipient before asking the LLM to generate the message.

Looking back at Week 1, I wanted to build an AI workflow that saved time. I finished with a better understanding of what makes an AI workflow useful in practice. The valuable part is not simply connecting an LLM to another service. The valuable part is designing the complete process, testing it against real inputs, finding where it fails and deciding where human judgment should remain.

Contract Gig Outreach is therefore more than a message generator. It became a practical example of how AI can be integrated into an existing workflow while keeping accuracy, review and user control in mind.