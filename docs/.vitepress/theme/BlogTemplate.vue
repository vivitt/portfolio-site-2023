<script setup>

// eslint-disable-next-line import/extensions
import BlogPostDate from './BlogPostDate.vue';
import { data as posts } from './posts.data.js';

// const { frontmatter } = useData();

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
</script>
<template>
  <div class="blog">
    <ul class="blog__feed">
      <li
        class="blog__feed__preview"
        v-for="{ id, title, url, date, excerpt, link } of posts"
        :key="{id}"
      >
        <!-- <span>{{
          `${month[Number(date.slice(5, 7)) - 1]} ${date.slice(
            8,
            10
          )}, ${date.slice(0, 4)}`
        }}</span> -->
        <BlogPostDate :date="date"></BlogPostDate>
        <article>
          <a :href="link">
          <h2 class="blog__feed__preview-title">
            {{ title }}
          </h2>
        </a>
          <div
            v-if="excerpt"
            class="blog__feed__preview-text"
            v-html="excerpt"
          ></div>

          <div class="blog__feed__preview-link">
            <a
              v-if="link !== ''"
              aria-label="read more"
              :href="link"
              target="_blank"
              >Read more...</a
            >
            <a v-else aria-label="read more" :href="url">Read more...</a>
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
    padding: 0;
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
