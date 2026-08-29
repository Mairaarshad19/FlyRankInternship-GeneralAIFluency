const express = require('express');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');
const { cache, taskListKey, clearUserTasks } = require('../utils/cache');
const { prioritizeTasks } = require('../services/llm');

const router = express.Router();
router.use(requireAuth);

// GET /tasks — cached per user for 60s
router.get('/', (req, res) => {
  const key = taskListKey(req.userId);
  const cached = cache.get(key);
  if (cached) {
    return res.json({ source: 'cache', tasks: cached });
  }

  const tasks = db
    .prepare('SELECT * FROM tasks WHERE user_id = ? ORDER BY due_date ASC')
    .all(req.userId);

  cache.set(key, tasks);
  res.json({ source: 'db', tasks });
});

router.post('/', (req, res) => {
  const { title, course, priority, due_date } = req.body;
  if (!title || !due_date) {
    return res.status(400).json({ error: 'title and due_date are required' });
  }

  const info = db
    .prepare(
      'INSERT INTO tasks (user_id, title, course, priority, due_date) VALUES (?, ?, ?, ?, ?)'
    )
    .run(req.userId, title, course || null, priority || 'medium', due_date);

  clearUserTasks(req.userId);
  res.status(201).json({ id: info.lastInsertRowid });
});

router.patch('/:id', (req, res) => {
  const { status, priority, due_date, title, course } = req.body;
  const task = db
    .prepare('SELECT * FROM tasks WHERE id = ? AND user_id = ?')
    .get(req.params.id, req.userId);

  if (!task) return res.status(404).json({ error: 'Task not found' });

  db.prepare(
    `UPDATE tasks SET
      title = COALESCE(?, title),
      course = COALESCE(?, course),
      priority = COALESCE(?, priority),
      status = COALESCE(?, status),
      due_date = COALESCE(?, due_date)
     WHERE id = ?`
  ).run(title, course, priority, status, due_date, req.params.id);

  clearUserTasks(req.userId);
  res.json({ updated: true });
});

router.delete('/:id', (req, res) => {
  const result = db
    .prepare('DELETE FROM tasks WHERE id = ? AND user_id = ?')
    .run(req.params.id, req.userId);

  if (result.changes === 0) return res.status(404).json({ error: 'Task not found' });

  clearUserTasks(req.userId);
  res.json({ deleted: true });
});

// GET /tasks/prioritize — LLM-powered "what should I do first"
router.get('/prioritize', async (req, res) => {
  const tasks = db
    .prepare("SELECT * FROM tasks WHERE user_id = ? AND status != 'done'")
    .all(req.userId);

  const result = await prioritizeTasks(tasks);
  res.json(result);
});

module.exports = router;
