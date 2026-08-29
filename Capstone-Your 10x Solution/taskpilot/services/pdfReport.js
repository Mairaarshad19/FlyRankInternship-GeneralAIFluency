const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(__dirname, '..', 'reports');
if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR);

// Builds a simple weekly PDF summary for one user and saves it to /reports.
// Returns a promise resolving to the file path once the file is fully
// written, so callers can safely download or email it right after.
function generateWeeklyReport(user, tasks) {
  const fileName = `weekly-report-${user.id}-${Date.now()}.pdf`;
  const filePath = path.join(REPORTS_DIR, fileName);

  const doc = new PDFDocument({ margin: 50 });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  doc.fontSize(20).text('TaskPilot — Weekly Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Student: ${user.name}`);
  doc.text(`Generated: ${new Date().toLocaleString()}`);
  doc.moveDown();

  const pending = tasks.filter((t) => t.status !== 'done');
  const done = tasks.filter((t) => t.status === 'done');
  const overdue = pending.filter((t) => new Date(t.due_date) < new Date());

  doc.fontSize(14).text('Summary', { underline: true });
  doc.fontSize(12).text(`Pending: ${pending.length}   Completed: ${done.length}   Overdue: ${overdue.length}`);
  doc.moveDown();

  doc.fontSize(14).text('Pending Tasks', { underline: true });
  if (pending.length === 0) {
    doc.fontSize(12).text('Nothing pending. Nice work.');
  } else {
    pending.forEach((t) => {
      doc.fontSize(12).text(`• ${t.title}  [${t.course || 'general'}]  — due ${t.due_date}  (${t.priority})`);
    });
  }

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
}

module.exports = { generateWeeklyReport };
