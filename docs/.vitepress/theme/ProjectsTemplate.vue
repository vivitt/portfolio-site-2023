<script setup>
// eslint-disable-next-line import/extensions
import { data as projects } from "./project.data.js";
</script>

<template>
  <div class="project expend-w">
    <ul class="project__feed">
      <li
        class="project__feed__preview"
        v-for="{
          id,
          title,
          excerpt,
          imageUrl,
          alt,
          deploy,
          github,
          stack,
        } of projects"
        :key="{ id }"
      >
        <div
          class="project__feed__preview__image"
          :style="`background-image: url(${imageUrl});`"
        >
          <!-- <img :src="imageUrl" :alt="alt" height="430" width="430" /> -->
        </div>
        <div class="project__feed__preview__description">
          <h2 class="project__feed__preview__description-title">
            <a>{{ title }}</a>
          </h2>
          <div
            v-if="excerpt"
            class="project__feed__preview__description-text"
            v-html="excerpt"
          ></div>
          <span class="project__feed__preview__description-stack">{{
            stack
          }}</span>
          <div class="project__feed__preview__description-links">
            <a
              class="link"
              aria-label="view app deploy"
              :href="deploy"
              target="_blank"
              >view app
            </a>
            <a
              class="github"
              aria-label="view code on github"
              :href="github"
              target="_blank"
              >source code
            </a>
          </div>
        </div>
      </li>
    </ul>

    <span class="project__findmore">
      <img
        src="/assets/github-mark.png"
        height="50"
        width="50"
        alt="GitHub icon"
      />
      <p>
        Find out more on
        <a href="https://github.com/vivitt" target="_blank"
          >my GitHub profile</a
        >
      </p>
    </span>
  </div>
</template>
<style scoped lang="less">
.project {
  padding: 4em;
  &__feed {
    display: grid;
    // Change number of colums when more project are added
    // grid-template-columns: repeat( 3, 33.33%);
    grid-template-columns: repeat(2, 50%);
    box-sizing: content-box;
    list-style-type: none;
    column-gap: 1em;
    row-gap: 1em;
    padding: 0;
    @media screen and (max-width: 700px) {
      //grid-template-columns: repeat( 2, 50%);
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 570px) {
      grid-template-columns: 1fr;
    }
    a {
      text-decoration: none;
      font-size: 0.7em;
    }

    &__preview {
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-inline-start: 1px solid;
      border-inline-end: 1px solid;
      padding: 0 0 1em 0;

      @media screen and (max-width: 800px) {
        padding: auto;
      }
      &__image {
        background-position: 50% 0%;
        background-size: cover;
        padding: 0;
        background-clip: border-box;
        display: flex;
        height: 300px;
        width: 100%;
        border-bottom: 1px solid;
      }
      &__description {
        padding: 0 1em;
        &-title {
          font-size: 2em;
          line-height: 0.7em;
        }

        &-stack {
          font-size: 0.8em;
        }
        &-links {
          font-size: 1.2em;
          display: flex;
          justify-content: flex-start;
          a {
            padding-inline-end: 1em;
            padding-top: 0.5em;
          }
        }
      }
    }
    &__preview:hover {
      animation-name: move-box;
      animation-duration: 100ms;
      animation-fill-mode: forwards;
      box-shadow: 5px 4px 0px 1px;
      border-inline-start: 1px solid;
    }
  }
  &__findmore {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    p {
      padding-inline-start: 0.3em;
    }
  }
}
.dark .project__feed__preview {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-inline-end: 1px solid;
  border-inline-start: 1px solid;

  &__image {
    border-bottom: 1px solid;
  }
}
.dark .project__feed__preview:hover {
  animation-name: move-box;
  animation-duration: 100ms;
  animation-fill-mode: forwards;
  box-shadow: 5px 4px 0px 1px;
  border-inline-start: 1px solid;
}

@keyframes move-box {
  to {
    transform: translateX(-5px) translateY(-5px);
  }
}
</style>
