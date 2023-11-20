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

export const handleSwitchTheme = (e) => {
  if (e.detail === true) {
    setStoredThemePreference('dark');
    document.body.classList.add('dark');
    return 'dark';
  }
  setStoredThemePreference('light');
  document.body.classList.remove('dark');
  return 'light';
};
