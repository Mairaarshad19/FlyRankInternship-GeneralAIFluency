Build Explainer

This site is one HTML file. No framework, no build tools, no separate CSS or JS files. Everything, structure, styling, and content, lives in that single file. When I dragged it onto Netlify, that's literally all that got uploaded.

Every case study follows the same three-part shape, repeated four times. Look at any of the four projects, Emergency Response, Food Order, School Management, Faculty System. Each one has an identical structure: a "The Problem" section, a "What I Did" section, a "What Came Of It" section, then a row of tags like "C# WinForms" or "MySQL." It's not four different designs, it's one template used four times with different words in it. That keeps a reader always knowing where to find the outcome.

The images are baked directly into the file, not linked from somewhere else. Normally a website points to an image sitting on a server somewhere. This one doesn't. Each image is converted into a long block of text called base64 and pasted straight into the HTML. That's why the whole site works as a single upload with no broken links, there's nothing external that can break.

Nothing on this site is unexplained. No generated logic I can't account for, no dependency I can't name.