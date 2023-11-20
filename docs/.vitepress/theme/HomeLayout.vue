<script setup>
import { useData } from 'vitepress';
import {
  onMounted, ref,
} from 'vue';
import FooterTemplate from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';
import VivittSwitcher from './ColorModeSwitcher';
import {
  getMediaPreference, getStoredThemePreference, setStoredThemePreference, handleSwitchTheme,
} from './ColorModeUtils';

const { frontmatter, page } = useData();

const selectedColorMode = ref('light');
const isChecked = ref(getStoredThemePreference() === 'dark' || getMediaPreference() === 'dark');

onMounted(() => {
  const preferredColorMode = ref(getStoredThemePreference() || getMediaPreference());
  setStoredThemePreference(preferredColorMode.value);
  selectedColorMode.value = preferredColorMode.value;
});

const handleSwitch = (e) => {
  selectedColorMode.value = handleSwitchTheme(e);
};

</script>
<template>
  <div class="main">
    <nav>
      <div class="logo">
      <a  href="/">
        <img src="/logo-viviyanez.png" alt="viviyanez.dev"/>
      </a>
    </div>
    <div class="switcher">
      <vivitt-switcher
          disabled
          label="dark mode"
          @checked-changed="(e) => handleSwitch(e)"
          :checked="isChecked"
        >
        </vivitt-switcher>
      </div>
      <div class="menu">

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
