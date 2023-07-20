<script setup>
import { useData } from "vitepress";
import Footer from "../../components/Footer.vue";
import NotFound from "../../components/NotFound.vue";
const { site, frontmatter, page } = useData();
</script>
<template>
  <div class="main">
    <nav>
      <a class="logo" href="/">Hi, I am Viviana ⚡️</a>
      <div class="menu">
        <a
          :class="{ active: frontmatter.title === 'Projects' }"
          href="/projects/"
          >/projects</a
        >
        <a :class="{ active: frontmatter.title === 'Blog' }" href="/blog/"
          >/blog</a
        >
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
