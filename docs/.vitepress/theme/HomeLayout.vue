<script setup>
import { useData } from 'vitepress';
import FooterTemplate from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';

const { frontmatter, page } = useData();
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
      </div>
    </nav>
    <div class="content">
      <not-found v-if="page.isNotFound" />
      <Content v-else />
    </div>
    <footer-template></footer-template>
  </div>
</template>
