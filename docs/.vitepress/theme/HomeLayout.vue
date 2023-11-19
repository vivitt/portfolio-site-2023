<script setup>
import { useData } from 'vitepress';
import {
  onMounted, ref,
} from 'vue';
import FooterTemplate from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';
import VivittSwitcher from './ColorModeSwitcher';
import { getMediaPreference, getStoredThemePreference, setStoredThemePreference } from './ColorModeUtils';

const { frontmatter, page } = useData();

const selectedColorMode = ref('light');
const isChecked = ref(getStoredThemePreference() === 'dark' || getMediaPreference() === 'dark');

onMounted(() => {
  const preferredColorMode = ref(getStoredThemePreference() || getMediaPreference());
  setStoredThemePreference(preferredColorMode.value);
  selectedColorMode.value = preferredColorMode.value;
});

const handleSwitch = (e) => {
  if (e.detail === true) {
    setStoredThemePreference('dark');
    document.body.classList.add('dark');
    selectedColorMode.value = 'dark';
  } else {
    setStoredThemePreference('light');
    document.body.classList.remove('dark');
    selectedColorMode.value = 'light';
  }
};

</script>
<template>
  <div class="main">
    <nav>
      <a class="logo" href="/">
        <img src="/logo-viviyanez.png" alt="viviyanez.dev"/>
      </a>
      <div class="menu">
        <vivitt-switcher
          disabled
          label="dark mode"
          @checked-changed="(e) => handleSwitch(e)"
          :checked="isChecked"
        >
        </vivitt-switcher>
        <a
          :class="{ active: frontmatter.title === 'Projects' }"
          href="/projects/"
          >/projects</a
        >
        <a :class="{ active: frontmatter.title === 'Blog' }" href="/blog/"
          >/blog</a
        >
        <a href="https://github.com/vivitt" target="_blank">/GitHub</a>

        <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
          >/LinkedIn</a
        >
      </div>
    </nav>
    <div class="content">
      <not-found v-if="page.isNotFound" />
      <Content v-else />
    </div>
    <footer-template></footer-template>
  </div>
</template>
