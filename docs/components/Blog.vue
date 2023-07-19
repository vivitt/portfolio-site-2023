<script setup>
import { computed } from "vue";
import { data as posts } from "../.vitepress/theme/posts.data.js";
import { useData } from "vitepress";
const { frontmatter } = useData();

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
</script>
<template>
  <div class="blog">
    <ul class="blog__feed">
      <li
        class="blog__feed__preview"
        v-for="{ title, url, date, excerpt } of posts"
      >
        <span>{{
          `${month[Number(date.slice(5, 7)) - 1]} ${date.slice(
            8,
            10
          )}, ${date.slice(0, 4)}`
        }}</span>
        <article>
          <h2 class="blog__feed__preview-title">
            <a :href="url">{{ title }}</a>
          </h2>
          <div
            v-if="excerpt"
            class="blog__feed__preview-text"
            v-html="excerpt"
          ></div>

          <div class="blog__feed__preview-link">
            <a class="link" aria-label="read more" :href="url">Read more...</a>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
.blog {
  &__feed {
    list-style-type: none;
    a {
      text-decoration: none;
    }

    &__preview {
      border-bottom: 1px solid;
      padding: 1em 0;
    }
  }
}
</style>
