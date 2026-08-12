# Explain It Like You Built It — Base64 Image Embedding

**Track:** General AI Fluency
**Week:** 6
**Assignment:** Explain It Like You Built It

## What I picked

My portfolio is a single HTML file with no separate image files. Every image is base64 encoded and embedded directly in the file. I picked this piece because I used it without fully understanding the syntax or what the browser was actually doing with it.

## How I approached it

I asked Claude to tutor me on it before writing anything. First pass, Claude explained the concept: base64 turns binary image data into a plain text string so it can live inside a text file like HTML, using the `data:[MIME type];base64,[string]` format in the img tag.

I then wrote my own explanation to check my understanding. I got two things wrong:

1. I wrote the syntax as `data:myimage.jpeg/base64,` when the actual format is `data:image/jpeg;base64,`. The MIME type comes right after `data:`, not the filename.
2. I said the browser converts the string into an image "before displaying," implying it happens at some vague later step. Claude corrected this: the browser decodes it automatically the moment it hits the `data:image/jpeg;base64,` prefix, as part of rendering. I did the actual encoding once, upfront, when I built the file. There is no separate conversion step I have to manage.

Claude flagged both issues directly and gave me the corrected syntax and the corrected mental model, then I rewrote the explanation myself.

## Final explanation (posted to track thread)

My portfolio is one HTML file with no separate image files. To add images, I convert the binary image data into a base64 text string, since HTML is a text format and cannot hold raw binary. I paste that string into an img tag like `data:image/jpeg;base64,` followed by the string. The prefix tells the browser what kind of file it is and that it needs decoding, so the browser automatically turns it back into an image when it renders the page. This costs about 33% more file size than a normal image, but it means one file with everything inside it. Wherever I move my portfolio, the images never break or go missing.

