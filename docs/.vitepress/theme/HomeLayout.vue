<script setup>
import {
  ref, computed, watch,
} from 'vue';
import { useData } from 'vitepress';
import Footer from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';

const { frontmatter, page } = useData();

const selectedTheme = computed(() => (localStorage.getItem('vitepress-theme-appearance') === 'light' ? 'dark' : 'light'));
const isDarkMode = ref(selectedTheme.value === 'dark' || false);
watch(isDarkMode, (() => {
  localStorage.setItem('vitepress-theme-appearance', selectedTheme.value); const url = new URL(window.location.href);
  window.location.href = url;
}));

</script>
<template>
  <div class="main" ref="main">
    <nav>
      <a class="logo" href="/" >
        Hi, I am Viviana
        <span role="img" aria-hidden="true">⚡️</span>
      </a>
      <div class="menu">
        <ul>
          <li>
            <a :class="{ active: frontmatter.title === 'Projects' }"
          href="/projects/"
          >/projects</a
        ></li>

        <li> <a :class="{ active: frontmatter.title === 'Blog' }" href="/blog/"
          >/blog</a
        ></li>
        <li> <a href="https://github.com/vivitt" target="_blank">/GitHub</a></li>

       <li> <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
          >/LinkedIn</a
        >
      </li>
      <li>
        <label for="mode">switch mode</label>
        <input
        v-model="isDarkMode"
        id="mode"
        type="checkbox"
        />
      </li>
      </ul>
      </div>
    </nav>
    <div class="content">
      <NotFound v-if="page.isNotFound" />
      <Content v-else />
    </div>
    <Footer></Footer>
  </div>
</template>
