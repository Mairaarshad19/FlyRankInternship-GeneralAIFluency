const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');
const { generateWeeklyReport } = require('../services/pdfReport');
const { sendReport } = require('../services/mailer');

const router = express.Router();
router.use(requireAuth);

// GET /reports/weekly — generate on demand and download directly
router.get('/weekly', async (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId);
  const tasks = db.prepare('SELECT * FROM tasks WHERE user_id = ?').all(req.userId);

  const filePath = await generateWeeklyReport(user, tasks);
  res.download(filePath);
});

// POST /reports/weekly/email — generate and email it (or log, if SMTP unset)
router.post('/weekly/email', async (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.userId);
  const tasks = db.prepare('SELECT * FROM tasks WHERE user_id = ?').all(req.userId);

  const filePath = await generateWeeklyReport(user, tasks);
  const result = await sendReport(
    user.email,
    'Your TaskPilot Weekly Report',
    'Attached is your weekly task summary.',
    filePath
  );

  res.json(result);
});

module.exports = router;
