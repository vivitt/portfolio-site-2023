<script setup>
import { ref, computed, onMounted } from "vue";

const IMAGES = [
  {
    src: "/assets/gallery/01.jpg",
    alt: "Illustration of a person in a downward dog yoga pose, with a series of different objects under their body.",
    width: 1994,
    height: 2123,
  },
  {
    src: "/assets/gallery/02.jpg",
    alt: "Black and white illustration of two kids hiding in a tree to attack a monster bird.",
    width: 2187,
    height: 3024,
  },
  {
    src: "/assets/gallery/03.jpg",
    alt: "Illustration of the beginning of Kafka's 'Metamorphosis,' featuring a bedroom in blue tones.",
    width: 2476,
    height: 3097,
  },

  {
    src: "/assets/gallery/05.jpg",
    alt: "Illustration of a blue bear traveling in a rocket.",
    width: 2033,
    height: 2692,
  },
  {
    src: "/assets/gallery/06.jpg",
    alt: "Illustration featuring a woman sitting on a bench with a dog by her side in a peaceful setting.",
    width: 2161,
    height: 3305,
  },
  {
    src: "/assets/gallery/07.jpg",
    alt: "Vibrant colored illustration of A woman sitting on a rock looking to a group of people on bikes in the background.",
    width: 1117,
    height: 489,
  },
];

const current = ref(IMAGES[0]);

const mainWidth = ref(500);

const calculateHeight = (originalWidth, originalHeight, currentWidth) => {
  const ratio = originalWidth / currentWidth;
  const currentHeight = ratio * originalHeight;
  return Math.ceil(currentHeight);
};

const mainHeight = ref((mainWidth.value / 4) * 3);

const thumbWidth = ref(Math.ceil((mainWidth.value * 20) / 100));

const thumbHeight = ref(Math.ceil((mainHeight.value * 20) / 100));
</script>

<template>
  <div class="gallery">
    <div class="gallery__main">
      <img
        :src="`http://viviyanez.dev/.netlify/images?url=${
          current.src
        }&fit=contain&w=${mainWidth}&h=${400}&fm=webp`"
        :alt="current.alt"
      />
    </div>

    <div class="gallery__aside">
      <ul>
        <div class="gallery__aside__thumbnails">
          <li v-for="image in IMAGES">
            <div class="gallery__aside__thumbnails__element">
              <button @click="() => (current = image)">
                <img
                  class="gallery__aside__thumbnails__element__image"
                  :class="{
                    'gallery__aside__thumbnails__element__image--active':
                      current.src === image.src,
                  }"
                  :src="`http://viviyanez.dev/.netlify/images?url=${image.src}&fit=cover&w=${thumbWidth}&h=${thumbHeight}&fm=webp&q=25`"
                  :alt="image.alt"
                />
              </button>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.gallery {
  --main-width: 500px;
  --main-height: calc((var(--main-width) / 4) * 3);
  --thumb-width: calc(var(--main-width) * 20 / 100);
  --thumb-height: calc(var(--main-height) * 20 / 100);
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1em;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 1em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: calc(var(--main-width) / 30);
  }

  &__dialog {
    background-color: transparent;
    border-radius: 15%;
    border: transparent;

    &__content {
      display: flex;
      flex-direction: column;
      img {
        max-height: 100vh;
        max-width: 100vw;
      }

      &__button {
        padding: 1em;
        margin: 1em;
        align-self: end;
      }
    }
  }
  &__dialog::backdrop {
    background-color: white;
    opacity: 0.7;
    filter: blur(1.5em);
    backdrop-filter: blur(1.5em);
  }

  &__main {
    margin-right: 1em;
    button {
      border-radius: 15%;
    }

    @media (max-width: 700px) {
      margin-bottom: 1em;
    }
  }

  &__aside {
    ul {
      padding: 0;
      margin: 0;
    }
    &__thumbnails {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
      height: var(--main-height);

      @media (max-width: 700px) {
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
        width: var(--main-width);
        height: 100%;
      }

      li {
        @media (max-width: 700px) {
          display: flex;
          flex-direction: column;
        }
      }

      &__element {
        cursor: pointer;
        margin-bottom: 1em;
        width: var(--thumb-width);

        &__image {
          max-width: 85%;
          &:hover {
            animation: resize-thumb 100ms forwards;
          }
          &--active {
            max-width: 95%;
            &:hover {
              animation: none;
            }
          }
        }
      }
    }
  }

  @keyframes resize-thumb {
    0% {
      max-width: 85%;
    }
    100% {
      max-width: 95%;
    }
  }
}
</style>
