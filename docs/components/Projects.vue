<script setup>
import { computed } from "vue";
import { data as projects } from "../.vitepress/theme/project.data.js";
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>
<template>
  <div class="project">
    <ul class="project__feed">
      <li
        class="project__feed__preview"
        v-for="{
          title,
          url,
          date,
          excerpt,
          imageUrl,
          deploy,
          github,
        } of projects"
      >
        <img :src="imageUrl" />
        <article>
          <h2 class="project__feed__preview-title">
            <a>{{ title }}</a>
          </h2>
          <div
            v-if="excerpt"
            class="project__feed__preview-text"
            v-html="excerpt"
          ></div>

          <div class="project__feed__preview-link">
            <a class="link" aria-label="view" :href="deploy">Read more...</a>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
.project {
  &__feed {
    list-style-type: none;
    a {
      text-decoration: none;
      font-size: 0.7em;
    }

    &__preview {
      max-width: 45%;
      padding: 1em 0;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
