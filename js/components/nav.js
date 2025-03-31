// nav.js – MoodMark Navbar
import { toggleTheme } from './themeToggle.js';

export function renderNavbar() {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');
  nav.className = 'navbar';

  const logo = document.createElement('a');
  logo.href = '#';
  logo.className = 'logo';
  logo.textContent = 'MoodMark';

  const toggle = document.createElement('button');
  toggle.id = 'theme-toggle';
  toggle.textContent = '🌓';
  toggle.title = 'Toggle Theme';
  toggle.addEventListener('click', toggleTheme);

  nav.append(logo, toggle);
  header.appendChild(nav);
}