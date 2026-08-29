const nodemailer = require('nodemailer');

// If SMTP credentials aren't set, we don't fail — we just log what
// would have been sent. Keeps the app runnable with zero setup.
function getTransport() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return null;

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendReport(toEmail, subject, text, attachmentPath) {
  const transport = getTransport();

  if (!transport) {
    console.log(`[mailer] SMTP not configured — would have emailed "${subject}" to ${toEmail} with attachment ${attachmentPath}`);
    return { sent: false, reason: 'no-smtp-configured' };
  }

  await transport.sendMail({
    from: process.env.SMTP_USER,
    to: toEmail,
    subject,
    text,
    attachments: [{ filename: 'weekly-report.pdf', path: attachmentPath }],
  });

  return { sent: true };
}

module.exports = { sendReport };
