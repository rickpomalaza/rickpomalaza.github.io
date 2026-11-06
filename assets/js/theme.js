(function () {
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;
  function update() {
    const dark = document.documentElement.dataset.theme === 'dark';
    button.textContent = dark ? '☀️' : '🌙';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  }
  button.addEventListener('click', function () {
    const dark = document.documentElement.dataset.theme === 'dark';
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('rick-notes-theme', next); } catch (e) {}
    update();
  });
  update();
}());
