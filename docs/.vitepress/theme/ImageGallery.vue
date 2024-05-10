<script setup>
import { ref, computed } from 'vue';

const IMAGES = [
  {
    src: '/assets/gallery/01.png',
    alt: 'smiling pink hair and blue skin face illustration',
  },
  { src: '/assets/gallery/02.png', alt: 'smiling blue hair and pink skin face illustration' },
  { src: '/assets/gallery/03.png', alt: 'smiling pink hair and yellow skin face illustration' },
  { src: '/assets/gallery/04.png', alt: 'smiling purple hair and blue skin face illustration' },
  { src: '/assets/gallery/05.png', alt: 'smiling yellow hair and purple skin face illustration' },
  {
    src: '/assets/gallery/01.png',
    alt: 'smiling pink hair and blue skin face illustration',
  },
  { src: '/assets/gallery/02.png', alt: 'smiling blue hair and pink skin face illustration' },
  { src: '/assets/gallery/03.png', alt: 'smiling pink hair and yellow skin face illustration' },
  { src: '/assets/gallery/04.png', alt: 'smiling purple hair and blue skin face illustration' },
  { src: '/assets/gallery/05.png', alt: 'smiling yellow hair and purple skin face illustration' },
];

const current = ref(IMAGES[0]);
const mainWidth = ref(500);
const mainHeight = ref(500);
const thumbSize = ref(Math.ceil(mainWidth.value / 6));
</script>

<template>
    <div class="controls">
        <label> Width
        <input type="number" v-model="mainWidth"/>
        </label>
        <label> Height
        <input type="number" v-model="mainHeight"/>
        </label>
    </div>
    <div class="gallery" >
    <div class="gallery__main">
        <img :src="`http://viviyanez.dev/.netlify/images?url=${current.src}&fit=fill&w=${mainWidth}&h=${mainHeight}`" :alt="current.alt" />
    </div>
    <div class="gallery__aside" >
        <div class="gallery__aside__thumbnails" :style="`height: ${mainHeight - 50}px`">
            <div v-for="image in IMAGES" @click="() => current = image" >
                <img
                :src="`http://viviyanez.dev/.netlify/images?url=${image.src}&fit=cover&w=${thumbSize}`"
                :alt="image.alt"
                class="gallery__aside__thumbnails__element"
                :class="{'gallery__aside__thumbnails__element--active' : current.src === image.src}"
                />
            </div>
        </div>
    </div>

</div>
</template>

<style scoped lang="less">
.gallery {
    border: pink 1px solid;
    display: flex;
    justify-content: center;
    padding: 1em;
    @media (max-width: 700px) {

    flex-direction: column;

    }
    img {
        border-radius: 15%;
    }

    &__main {
        border: violet 1px solid;
        margin: 0 2em;

    }

    &__aside {
        border: violet 1px solid;
        margin: 1.5em 0;
        &__thumbnails {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            overflow-y: scroll;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;
            /* Hide scrollbar for Chrome, Safari and Opera */
            ::-webkit-scrollbar {
                display: none;
            }

            &__element {
            cursor: pointer;
            max-width: 90%;
            display: flex;
            padding: 0.3em;

            &--active {
                max-width: 100%;
            }
        }
        }

    }
}

</style>
