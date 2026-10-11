(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('luiz-theme'); } catch (_) { /* System preference remains available. */ }
  let hasPreference = saved === 'dark' || saved === 'light';
  root.dataset.theme = hasPreference ? saved : (preference.matches ? 'dark' : 'light');

  function updateControl() {
    const dark = root.dataset.theme === 'dark';
    const label = `Switch to ${dark ? 'light' : 'dark'} theme`;
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-label', label);
      button.title = label;
    }
    document.querySelector('meta[name="theme-color"]').content = dark ? '#1b2422' : '#f7f5ef';
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateControl();
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      hasPreference = true;
      try { localStorage.setItem('luiz-theme', root.dataset.theme); } catch (_) { /* Theme works without storage. */ }
      updateControl();
    });
  });
  preference.addEventListener('change', (event) => {
    if (!hasPreference) {
      root.dataset.theme = event.matches ? 'dark' : 'light';
      updateControl();
    }
  });
})();
