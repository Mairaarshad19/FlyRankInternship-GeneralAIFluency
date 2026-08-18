# Week 6 

# Make It Do Something

# Track: General AI Fluency, FlyRank Internship

# The Feature

A working contact form on my portfolio's Contact section. A visitor fills in their name, email, and message, hits submit, and the message actually reaches my inbox, instead of just opening their own email app like a mailto link does.

# Evidence

Submitted a real test through the live form and confirmed the message arrived in my email. The form is live on my portfolio site, wired to Formspree.

# Plain Words Explainer

# What a backend is

A backend is the part of a website that runs somewhere other than the visitor's browser. My portfolio itself is just HTML and CSS, it sits in the visitor's browser and does not talk to anywhere else on its own. A contact form needs somewhere to actually send the message once someone hits submit, since a plain webpage has no way to send an email by itself. That somewhere is the backend.

# What my feature does

When someone fills out my contact form and clicks submit, the browser does not send an email directly. Instead it sends the form data to Formspree, a free service that acts as my backend so I did not have to build or host a server myself. Formspree receives the data, checks it is a real submission, and forwards it straight to my email inbox as a formatted message.

# How the data flows

Visitor types their name, email, and message into the form on my live site
They click submit, and the browser sends that data as a POST request to my Formspree form endpoint, a specific URL tied only to my account
Formspree's servers receive the request, process it, and generate an email
That email lands in my inbox, with the visitor's name, email, and message inside it, so I can just reply directly

Nothing about this involves me hosting a server or writing backend code myself. Formspree is doing that job, I am just pointing my form at their endpoint and trusting them to deliver it. That is the trade-off, less control, but a real, working feature I could wire up in an afternoon instead of a week.