<script setup>
import { useData } from "vitepress";
import Footer from "./Footer.vue";
import NotFound from "./NotFound.vue";
const { site, frontmatter, page } = useData();
</script>
<template>
  <div class="main">
    <nav>
      <a class="logo" href="/"
        >Hi, I am Viviana
        <span role="img" aria-label="High Voltage emoji">⚡️</span></a
      >
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
      <NotFound v-if="page.isNotFound" />
      <Content v-else />
    </div>
    <Footer></Footer>
  </div>
</template>
