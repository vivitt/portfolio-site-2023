<script setup>
import { useData, useRoute } from 'vitepress';
import { computed } from 'vue';
// eslint-disable-next-line import/extensions
import { data as posts } from './posts.data.js';
import blogPostDate from './blogPostDate';
const route = useRoute();

const { frontmatter: data } = useData();

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path);
}

const date = computed(() => posts[findCurrentIndex()].date);

</script>
<template>
<article class="centered blogpost">
    <header>
        <span>{{ blogPostDate(date) }}</span>
      <!-- <Date :date="date" /> -->
            <h1>
                {{ data.title }}
            </h1>
    </header>

    <Content  />
</article>
</template>
<style scoped lang="less">
.blogpost {
    padding-top: 3em;
  line-height: 1.5em;
}
</style>
