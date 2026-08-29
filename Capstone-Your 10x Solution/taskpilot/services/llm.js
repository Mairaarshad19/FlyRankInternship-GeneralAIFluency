const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Simple fallback used when no API key is configured, so the app still
// works out of the box: sort by due date, then bump anything overdue.
function fallbackPrioritize(tasks) {
  const now = new Date();
  const sorted = [...tasks].sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

  return {
    summary: `You have ${tasks.length} open task(s). Sorted by nearest deadline (no LLM key set, using rule-based fallback).`,
    ordered: sorted.map((t) => ({
      id: t.id,
      title: t.title,
      reason:
        new Date(t.due_date) < now
          ? 'Overdue — handle first'
          : `Due ${t.due_date}`,
    })),
  };
}

async function prioritizeTasks(tasks) {
  if (!tasks.length) {
    return { summary: 'No pending tasks. Nice.', ordered: [] };
  }

  if (!GEMINI_API_KEY) {
    return fallbackPrioritize(tasks);
  }

  const taskList = tasks
    .map((t) => `- [id:${t.id}] "${t.title}" (course: ${t.course || 'n/a'}, due: ${t.due_date}, priority: ${t.priority})`)
    .join('\n');

  const prompt = `You are a study planner assistant. Given this list of a student's pending tasks, return a short JSON object with:
- "summary": a 1-2 sentence plain-language summary of their workload
- "ordered": an array of {id, title, reason} sorted by what to do first, with a short reason each

Tasks:
${taskList}

Respond with ONLY valid JSON, no markdown fences.`;

  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { timeout: 15000 }
    );

    const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleaned = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleaned);
  } catch (err) {
    console.error('LLM call failed, falling back to rule-based sort:', err.message);
    return fallbackPrioritize(tasks);
  }
}

module.exports = { prioritizeTasks };
