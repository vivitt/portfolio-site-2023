<script setup>
import { ref, computed, onMounted } from "vue";

const IMAGES = [
  {
    src: "/assets/gallery/01.png",
    alt: "smiling pink hair and blue skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/02.png",
    alt: "smiling blue hair and pink skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/03.png",
    alt: "smiling pink hair and yellow skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/04.png",
    alt: "smiling purple hair and blue skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/05.png",
    alt: "smiling yellow hair and purple skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/01.png",
    alt: "smiling pink hair and blue skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/02.png",
    alt: "smiling blue hair and pink skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/03.png",
    alt: "smiling pink hair and yellow skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/04.png",
    alt: "smiling purple hair and blue skin face illustration",
    width: 500,
    height: 500,
  },
  {
    src: "/assets/gallery/05.png",
    alt: "smiling yellow hair and purple skin face illustration",
    width: 500,
    height: 500,
  },
];

const current = ref(IMAGES[0]);

const dialog = ref(null);

const windowWidth = ref(null);

const mainWidth = ref((windowWidth.value / 100) * 80 || 500);

const mainHeight = ref(mainWidth);

const thumbSize = ref(Math.ceil(mainWidth.value / 6));

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("click", (event) => {
    if (event.target === dialog.value) {
      dialog.value.close();
    }
  });
});
</script>

<template>
  <div class="gallery">
    <dialog class="gallery__dialog" ref="dialog">
      <div class="gallery__dialog__content">
        <img
          :src="`http://viviyanez.dev/.netlify/images?url=${current.src}&fit=fill&w=${current.width}&h=${current.height}`"
          :alt="current.alt"
        />
        <button @click="() => dialog.close()">Close full view</button>
      </div>
    </dialog>

    <div class="gallery__main">
      <button
        @click="
          () => {
            dialog.showModal();
            console.log(fullImage);
          }
        "
      >
        <img
          :src="`http://viviyanez.dev/.netlify/images?url=${current.src}&fit=fill&w=${mainWidth}&h=${mainHeight}`"
          :alt="current.alt"
        />
      </button>
    </div>

    <div class="gallery__aside">
      <ul>
        <div
          class="gallery__aside__thumbnails"
          :style="`height: ${mainHeight}px`"
        >
          <li v-for="image in IMAGES">
            <div class="gallery__aside__thumbnails__element">
              <button @click="() => (current = image)">
                <img
                  class="gallery__aside__thumbnails__element__image"
                  :class="{
                    'gallery__aside__thumbnails__element__image--active':
                      current.src === image.src,
                  }"
                  :src="`http://viviyanez.dev/.netlify/images?url=${image.src}&fit=cover&w=${thumbSize}`"
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
  border: pink 1px solid;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1em;

  @media (max-width: 700px) {
    flex-direction: column;
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
    border-radius: 15%;
  }

  &__dialog {
    background-color: transparent;
    border-radius: 15%;
    border: transparent;

    &__content {
      display: flex;
      flex-direction: column;
      button {
        font-size: 1.2em;
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
    border: violet 1px solid;
    margin: 0 2em;

    button {
      border-radius: 15%;
    }
  }

  &__aside {
    border: violet 1px solid;
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
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }
      @media (max-width: 700px) {
        flex-flow: row nowrap;
        align-items: start;
        justify-content: start;
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
      }

      &__element {
        cursor: pointer;
        margin-bottom: 1em;

        &__image {
          max-width: 90%;
          &--active {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>
