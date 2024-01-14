<script setup>
import { useData, defineClientComponent } from 'vitepress';
import FooterTemplate from './FooterTemplate.vue';
import BlogTemplate from './BlogTemplate.vue';
import NotFound from './NotFoundTemplate.vue';
import BlogPost from './BlogPost.vue';

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
          ><span aria-hidden="true">/</span>projects</a
        >
        <a :class="{ active: frontmatter.title === 'Blog' }" href="/blog/"
          ><span aria-hidden="true">/</span>blog</a
        >
        <a href="https://github.com/vivitt" target="_blank"><span aria-hidden="true">/</span>GitHub</a>

        <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
          ><span aria-hidden="true">/</span>LinkedIn</a
        >
      </div>
    </nav>
    <div class="content">

      <not-found v-if="page.isNotFound" />
      <BlogPost v-if="frontmatter.isBlogPost" />
      <Content v-else />
    </div>
    <footer-template></footer-template>
  </div>
</template>
