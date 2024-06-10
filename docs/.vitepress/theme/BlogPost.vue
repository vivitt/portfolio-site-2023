<script setup>
import { useData, useRoute } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import { data as posts } from './posts.data';
import formatBlogPostTitleForCoverImage from './utils/formatBlogPostTitle';
import getRandomNumberForCoverImages from './utils/getRandomNumberForCoverImages';

const route = useRoute();

const { frontmatter: data } = useData();

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path);
}

const date = computed(() => (posts[findCurrentIndex()] ? posts[findCurrentIndex()].date : ''));
const title = computed(() => (posts[findCurrentIndex()] ? posts[findCurrentIndex()].title : ''));
const tags = computed(() => (posts[findCurrentIndex()] ? posts[findCurrentIndex()].tags : ''));

const lineSeparatedBlogTitle = formatBlogPostTitleForCoverImage(title.value);
const titleFontSize = lineSeparatedBlogTitle.length > 4 ? '88px' : '108px';
const titleLineHeight = lineSeparatedBlogTitle.length > 4 ? 90 : 120;

const cover = ref(null);
const font = ref(null);

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function loadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.height = 840;
    img.width = 1600;
    img.onload = () => {
      resolve(img);
      cover.value = img;
    };
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onerror = () => {
      cover.value = null;
    };
  });
}

async function loadFont(fontFamily, url) {
  return new Promise((resolve, reject) => {
    const face = new FontFace(fontFamily, url);
    face.onload = () => document.fonts.add(face);
    font.value = face.family;
    face.onerror = reject;
  });
}

const generateCover = () => {
  const canvas = document.createElement('canvas');

  canvas.height = 840;
  canvas.width = 1600;

  const context = canvas.getContext('2d');
  context.drawImage(cover.value, 0, 0);

  context.fillStyle = 'black';
  context.font = `600 ${titleFontSize} ${font.value}`;

  context.textBaseline = 'top';
  let startTitle = 180;

  lineSeparatedBlogTitle.forEach((item) => {
    context.fillText(item.toUpperCase(), 173, startTitle, 1300);
    startTitle += titleLineHeight;
  });

  context.font = '400 30px Inter';
  if (tags.value) {
    let firstTagPosition = 175;
    tags.value.split(',').forEach((item) => {
      const text = context.measureText(item);
      roundedRect(
        context,
        firstTagPosition - 10,
        startTitle + 5,
        text.width + 40,
        40,
        20,
      );
      context.fillText(`#${item}`, firstTagPosition, startTitle + 10, 1300);
      firstTagPosition += text.width + 50;
    });
  }

  context.font = '600 30px Inter';

  context.fillText('viviyanez.dev', 173, 730, 1400);

  context.fillText(`${date.value}`, 873, 730, 1400);

  const dataUrl = canvas.toDataURL('image/jpeg');

  return dataUrl;
};

onMounted(async () => {
  await loadImage(
    `/assets/Blog-post-cover-${getRandomNumberForCoverImages(4) + 1}.svg`,
  );
  await loadFont(
    'Inter',
    "url('/assets/fonts/inter-regular-webfont.woff') format('woff')",
  );
  document
    .querySelector('meta[name="og:image"]')
    .setAttribute('content', `https://www.viviyanez.dev/assets/${generated()}`);
});
</script>
<template>
  <article class="centered blogpost">
    <header>
      <div class="blog__cover">
        <img
          v-if="cover"
          :src="generateCover()"
          alt=""
          width="1600"
          height="840"
        />
        <img v-else alt="" width="1600" height="840" />
      </div>
      <span>{{ date }}</span>
      <h1>
        {{ data.title }}
      </h1>
    </header>

    <Content />
  </article>
</template>
<style scoped lang="less">
.blogpost {
  padding-top: 3em;
  line-height: 1.5em;
}
</style>
