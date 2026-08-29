const cron = require('node-cron');
const db = require('../db');
const { generateWeeklyReport } = require('../services/pdfReport');
const { sendReport } = require('../services/mailer');

// Runs once a day at 8am server time: flags anything due within 24h,
// and on Sundays also builds + emails the weekly PDF report per user.
function startReminderJob() {
  cron.schedule('0 8 * * *', async () => {
    console.log('[cron] Running daily deadline check...');

    const users = db.prepare('SELECT * FROM users').all();
    const now = new Date();
    const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    for (const user of users) {
      const dueSoon = db
        .prepare(
          `SELECT * FROM tasks WHERE user_id = ? AND status != 'done' AND due_date <= ? AND due_date >= ?`
        )
        .all(user.id, in24h.toISOString(), now.toISOString());

      if (dueSoon.length > 0) {
        console.log(`[cron] ${user.email} has ${dueSoon.length} task(s) due within 24h`);
      }

      const isSunday = now.getDay() === 0;
      if (isSunday) {
        const allTasks = db.prepare('SELECT * FROM tasks WHERE user_id = ?').all(user.id);
        const filePath = await generateWeeklyReport(user, allTasks);
        await sendReport(
          user.email,
          'Your TaskPilot Weekly Report',
          'Attached is your weekly task summary.',
          filePath
        );
      }
    }
  });

  console.log('[cron] Reminder job scheduled (daily at 08:00)');
}

module.exports = { startReminderJob };
