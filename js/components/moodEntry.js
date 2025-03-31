// moodEntry.js – display a mood log entry

export function renderMoodEntry(entry) {
  const card = document.createElement('div');
  card.className = 'mood-entry';

  const mood = document.createElement('div');
  mood.className = 'mood';
  mood.textContent = entry.mood;

  const note = document.createElement('div');
  note.className = 'note';
  note.textContent = entry.note || '[No note]';

  const time = document.createElement('div');
  time.className = 'timestamp';
  time.textContent = new Date(entry.timestamp).toLocaleString();

  card.append(mood, note, time);
  return card;
}