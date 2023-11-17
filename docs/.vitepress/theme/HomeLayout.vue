<script setup>
import { useData } from 'vitepress';
import { ref, watch } from 'vue';
import FooterTemplate from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';
import VivittSwitcher from './ThemeSwitcher';

const { frontmatter, page } = useData();

const getColorMode = window.localStorage.getItem('vitepress-theme-appearance');

const isDarkMode = ref(document.body.hasAttribute('class', 'dark') || false);

const handleSwitch = (e) => {
  isDarkMode.value = e.detail;
};

watch(isDarkMode, () => {
  if (isDarkMode.value === true) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

</script>
<template>
  <div class="main">
    <nav>
      <a class="logo" href="/">
        <img src="/logo-viviyanez.png" alt="viviyanez.dev"/>
      </a>
      <div class="menu">
        <vivitt-switcher
          label="dark mode"
          @checked-changed="(e) => handleSwitch(e)"
          :checked="isDarkMode"
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
