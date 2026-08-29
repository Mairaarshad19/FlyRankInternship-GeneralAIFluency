const NodeCache = require('node-cache');

// Tasks list is read far more often than it changes, so we cache it for
// a short window per user and wipe it on any write.
const cache = new NodeCache({ stdTTL: 60 });

function taskListKey(userId) {
  return `tasks:${userId}`;
}

function clearUserTasks(userId) {
  cache.del(taskListKey(userId));
}

module.exports = { cache, taskListKey, clearUserTasks };
