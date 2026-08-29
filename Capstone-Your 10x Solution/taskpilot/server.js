require('dotenv').config();
const express = require('express');

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const reportRoutes = require('./routes/reports');
const { startReminderJob } = require('./jobs/reminderJob');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'TaskPilot API is running' });
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/reports', reportRoutes);

app.listen(PORT, () => {
  console.log(`TaskPilot running on http://localhost:${PORT}`);
  startReminderJob();
});
