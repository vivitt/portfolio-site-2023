---
head:
  - - link
    - href: assets/fonts/modak-regular-webfont.woff2
      rel: preload
      as: font
      type: font/woff2
      crossorigin: anonymous
  - - link
    - href: assets/fonts/modak-regular-webfont.woff
      rel: preload
      as: font
      type: font/woff
      crossorigin: anonymous

title: Blog
titleTemplate: Viviana Yanez Creative Frontend Developer
---


<script setup>
import Blog from '../.vitepress/theme/BlogTemplate.vue'
</script>
 
<div class="blog">
    <Blog></Blog>
</div>
