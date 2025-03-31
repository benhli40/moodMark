import { saveMood } from '../storage.js';

export function renderMoodForm() {
  const form = document.createElement('div');
  form.className = 'mood-form';

  const title = document.createElement('h2');
  title.textContent = 'How are you feeling today?';

  const emojiRow = document.createElement('div');
  emojiRow.className = 'mood-options';

  const emojis = ['😄', '😐', '😢', '😠', '🥰', '😴'];
  let selected = null;

  emojis.forEach((emoji) => {
    const span = document.createElement('span');
    span.textContent = emoji;
    span.addEventListener('click', () => {
      selected = emoji;
      Array.from(emojiRow.children).forEach(el => el.classList.remove('selected'));
      span.classList.add('selected');
    });
    emojiRow.appendChild(span);
  });

  const noteInput = document.createElement('textarea');
  noteInput.placeholder = "Write a short note (optional)...";

  const button = document.createElement('button');
  button.textContent = '➕ Save Mood';

  button.addEventListener('click', () => {
    if (!selected) {
      alert('Please select a mood emoji!');
      return;
    }

    const entry = {
      mood: selected,
      note: noteInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    saveMood(entry);
    location.reload(); // quick refresh to re-render list
  });

  form.append(title, emojiRow, noteInput, button);
  return form;
}