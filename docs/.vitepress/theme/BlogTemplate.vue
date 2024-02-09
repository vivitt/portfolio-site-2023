<script setup>
import { data as posts } from './posts.data.js';
</script>

<template>
  <div class="blog centered">
    <ul class="blog__feed">
      <li
        class="blog__feed__preview"
        v-for="{ id, title, url, date, excerpt, link } of posts"
        :key="{id}"
      >
      <article>
        <span>{{ date }}</span>

          <a
          class="blog__feed__link"
              aria-label="read more"
              :href="link !== '' ?link :url"
              :target="link !== '' ?'_blank' :''"
              >
          <h2 class="blog__feed__preview-title">
            {{ title }}
          </h2>
        </a>
          <div
            v-if="excerpt"
            class="blog__feed__preview-text"
            v-html="excerpt"
          ></div>

        </article>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.blog {
  &__intro {
    font-size: 30px;
    padding: 2em 0;
  }
  &__feed {
    list-style-type: none;
    padding: 0;
    a {
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
    &__preview {
      border-bottom: 1px solid;
      padding: 1em 0;
    }
  }
}
</style>
