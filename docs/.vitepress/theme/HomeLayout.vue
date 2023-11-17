<script setup>
import { useData } from 'vitepress';
import { ref, watch } from 'vue';
import FooterTemplate from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';
import VivittSwitcher from './ThemeSwitcher';

const { frontmatter, page } = useData();

const isDarkMode = ref(false);
watch(isDarkMode, () => {
  if (isDarkMode.value === true) {
    console.log(document.body)
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
        <vivitt-switcher
          label="dark mode"
          @checked-changed="(e) => e.detail === 'true' ?isDarkMode = true :isDarkMode=false"
        >
        </vivitt-switcher>
      </div>
    </nav>
    <div class="content">
      <not-found v-if="page.isNotFound" />
      <Content v-else />
    </div>
    <footer-template></footer-template>
  </div>
</template>
