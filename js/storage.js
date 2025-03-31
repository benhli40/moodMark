// storage.js – LocalStorage for MoodMark

const STORAGE_KEY = 'moodmark-log';

export function getMoodLog() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveMood(entry) {
  const log = getMoodLog();
  log.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}