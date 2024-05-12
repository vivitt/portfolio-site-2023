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

];

const current = ref(IMAGES[0]);

const dialog = ref(null);

const mainWidth = ref(500);

const mainHeight = ref(mainWidth.value/4 * 3);

const thumbWidth = ref(Math.ceil(mainWidth.value *20 / 100));

const thumbHeight = ref(Math.ceil(mainHeight.value *20 / 100));

onMounted(() => {
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
        <button @click="() => dialog.close()" class="gallery__dialog__content__button"
          >Close full image</button>
      </div>
    </dialog>

    <div class="gallery__main">
      <button
        @click="
          () => {
            dialog.showModal();
            window.document.body.style.overflowY = 'hidden'
          }
        "
      >
        <img
          :src="`http://viviyanez.dev/.netlify/images?url=${current.src}&fit=cover&w=${mainWidth}&h=${mainHeight}`"
          :alt="current.alt"
        />
      </button>
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
                  :src="`http://viviyanez.dev/.netlify/images?url=${image.src}&fit=cover&w=${thumbWidth}&h=${thumbHeight}`"
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
    border-radius: 15%;
  }

  &__dialog {
    background-color: transparent;
    border-radius: 15%;
    border: transparent;

    &__content {
      display: flex;
      flex-direction: column;s

      img {
        max-width: 100%
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
