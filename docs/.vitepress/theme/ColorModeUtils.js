export function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  if (hasDarkPreference) {
    return 'dark';
  }
  return 'light';
}

export function getStoredThemePreference() {
  return localStorage.getItem('vitepress-theme-appearance');
}

export function setStoredThemePreference(value) {
  localStorage.setItem('vitepress-theme-appearance', value);
}
