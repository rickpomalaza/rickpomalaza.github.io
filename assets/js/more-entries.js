document.querySelectorAll('[data-entry-list]').forEach((list) => {
  const entries = Array.from(list.querySelectorAll('.entry'));
  const more = list.querySelector('[data-view-more]');
  if (!more) return;
  const size = Number(list.dataset.pageSize) || 10;
  // Restore the number of visible posts when a reader returns from an article.
  const storageKey = 'rick-notes:' + window.location.pathname;
  let count = size;
  try { count = Math.max(size, Number(sessionStorage.getItem(storageKey)) || size); } catch (_) {}
  function render() {
    entries.forEach((entry, i) => { entry.hidden = i >= count; });
    more.hidden = count >= entries.length;
  }
  more.addEventListener('click', () => {
    count += size;
    try { sessionStorage.setItem(storageKey, String(count)); } catch (_) {}
    render();
  });
  render();
});
