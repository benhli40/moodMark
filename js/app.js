import { renderNavbar } from './components/nav.js';
import { renderMoodForm } from './components/moodForm.js';
import { getMoodLog } from './storage.js';
import { renderMoodEntry } from './components/moodEntry.js';
import { initTheme } from './components/themeToggle.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavbar();
  loadMoodView();
});

function loadMoodView() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const form = renderMoodForm();
  const timeline = document.createElement('div');
  timeline.className = 'mood-timeline';

  const entries = getMoodLog().reverse(); // newest first
  entries.forEach(entry => {
    timeline.appendChild(renderMoodEntry(entry));
  });

  app.append(form, timeline);
}