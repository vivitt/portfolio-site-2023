<script setup>
import { useData, defineClientComponent } from 'vitepress';
import FooterTemplate from './FooterTemplate.vue';
import NotFound from './NotFoundTemplate.vue';

const { frontmatter, page } = useData();

const VivittSwitcher = defineClientComponent(
  () => import('./VivittSwitcher.vue'),
);

</script>
<template>
  <div class="main">
    <nav>
      <div class="logo">
      <a  href="/">
        <img src="/logo-viviyanez.png" alt="viviyanez.dev home"/>
      </a>
    </div>
    <div class="switcher">
   <VivittSwitcher />
      </div>
      <div class="menu">

        <a
          :class="{ active: frontmatter.title === 'Projects' }"
          href="/projects/"
          ><span role="img">/</span>projects</a
        >
        <a :class="{ active: frontmatter.title === 'Blog' }" href="/blog/"
          ><span role="img">/</span>blog</a
        >
        <a href="https://github.com/vivitt" target="_blank"><span role="img">/</span>GitHub</a>

        <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
          ><span role="img">/</span>LinkedIn</a
        >
      </div>
    </nav>
    <div class="content">
      <not-found v-if="page.isNotFound" />
      <Content v-if="page.relativePath.includes('blog/')" class="centered" />
      <Content v-else />
    </div>
    <footer-template></footer-template>
  </div>
</template>
