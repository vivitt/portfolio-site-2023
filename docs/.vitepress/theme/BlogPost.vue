<script setup>
import { useData, useRoute } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import { data as posts } from './posts.data.js';
import blogPostDate from './utils/blogPostDate';

const route = useRoute();

const { frontmatter: data } = useData();

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path);
}

const date = computed(() => posts[findCurrentIndex()].date);
const postTitle = computed(() => posts[findCurrentIndex()].title);
// const postTitleSeparatedLines = formatBlogPostTitle(postTitle.value);
// const titleFontSize = (postTitleSeparatedLines.length > 4) ? '78px' : '98px';
// const titleLineHeight = (postTitleSeparatedLines.length > 4) ? 70 : 90;

const cover = ref(null);

function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => (resolve(img));
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onerror = () => null;
  });
}

function loadFont(url) {
  const font = new FontFace('Modak', url);
  font.load()
    .then((face) => {
      document.fonts.add(face);
    })
    .catch(
      cover.value = null,
    );
  // });
}

onMounted(async () => {
  await loadFont(`url('/assets/fonts/modak-regular-webfont.woff2') format('woff2'),
    url('/assets/fonts/modak-regular-webfont.woff') format('woff');`);
  cover.value = await loadImage('/assets/article-cover.svg');
});

const generated = (titleLines) => {
  const canvas = document.createElement('canvas');

  canvas.height = 840;
  canvas.width = 1600;

  const context = canvas.getContext('2d');
  context.drawImage(cover.value, 0, 0);

  context.fillStyle = 'black';
  context.font = `${titleFontSize} Modak`;

  context.textBaseline = 'top';
  let startTitle = 280;

  titleLines.forEach((item) => {
    context.fillText(item, 173, startTitle, 1050);
    startTitle += titleLineHeight;
  });

  context.font = '30px Fairplay Display';
  context.fillText(`${blogPostDate(date.value)}`, 173, 250, 1400);

  return canvas.toDataURL('image/jpeg');
};

</script>
<template>
<article class="centered blogpost">

    <header>
      <div class='blog__cover'>
      <!-- <img  v-if='cover' :src="generated(postTitleSeparatedLines)"
      :alt="data.title"
      /> -->
    </div>
        <span>{{ blogPostDate(date) }}</span>
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
