<script setup>
import { useData } from "vitepress";
import Footer from "../../components/Footer.vue";
import Blog from "../../components/Blog.vue";
const { site, frontmatter, page } = useData();
</script>
<template>
  <div class="main">
    <nav>
      <a class="logo" href="/">Hi, I am Viviana ⚡️</a>
      <div class="menu">
        <a href="/blog/">/blog</a>
        <a href="/projects/">/projects</a>
        <a href="https://github.com/vivitt" target="_blank">/GitHub</a>
        <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
          >/LinkedIn</a
        >
      </div>
    </nav>
    <div class="content">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Content v-else />
    </div>
    <Footer></Footer>
  </div>
</template>
