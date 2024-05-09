<script setup>
import { ref, computed } from 'vue';

const IMAGES = [
  {
    src: '../../public/assets/gallery/01.png',
    alt: 'smiling pink hair and blue skin face illustration',
  },
  { src: '../../public/assets/gallery/02.png', alt: 'smiling blue hair and pink skin face illustration' },
  { src: '../../public/assets/gallery/03.png', alt: 'smiling pink hair and yellow skin face illustration' },
  { src: '../../public/assets/gallery/04.png', alt: 'smiling purple hair and blue skin face illustration' },
  { src: '../../public/assets/gallery/05.png', alt: 'smiling yellow hair and purple skin face illustration' },

];

const current = ref(IMAGES[0]);

</script>

<template>
<div class="gallery">
    <div class="gallery__main">
        <img :src="current.src" :alt="current.alt" />
    </div>
    <div class="gallery__aside">
        <ul class="gallery__aside__thumbnails">
            <li v-for="image in IMAGES" @click="() => current = image" >
                <img
                :src="image.src"
                :alt="image.alt"
                class="gallery__aside__thumbnails__element"
                :class="{'gallery__aside__thumbnails__element--active' : current.src === image.src}"
                />
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped lang="less">
.gallery {
    border: pink 1px solid;
    display: flex;

    img {
        border-radius: 15%;

    }

    &__main {
        flex-grow: 2;
        border: violet 1px solid;
        img {
            width: 100%;
        }

    }

    &__aside {
        border: violet 1px solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__thumbnails {
            list-style-type: none;

            &__element {
            width: 45%;
            cursor: pointer;

            &--active {
                width: 55%;
            }
        }
        }

    }
}

</style>
