<script setup>
import { ref, onMounted } from 'vue';
import VivittSwitcher from './ColorModeSwitcher';

// const { isDark } = useData();

function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  if (hasDarkPreference) {
    return 'dark';
  }
  return 'light';
}

function getStoredThemePreference() {
  return localStorage.getItem('vitepress-theme-appearance');
}

function setStoredThemePreference(value) {
  localStorage.setItem('vitepress-theme-appearance', value);
}

const selectedColorMode = ref('light');
const isChecked = ref(getStoredThemePreference() === 'dark' || getMediaPreference() === 'dark');

onMounted(() => {
  const preferredColorMode = ref(getStoredThemePreference() || getMediaPreference());
  setStoredThemePreference(preferredColorMode.value);
  selectedColorMode.value = preferredColorMode.value;
});

const handleSwitchTheme = (e) => {
  if (e.detail === true) {
    setStoredThemePreference('dark');
    document.body.classList.add('dark');
    return 'dark';
  }
  setStoredThemePreference('light');
  document.body.classList.remove('dark');
  return 'light';
};

</script>
<template>
   <vivitt-switcher
    label='dark mode'
    :checked="isChecked"
    @checked-changed="(e) => handleSwitchTheme(e)"
    >
    </vivitt-switcher>
</template>
