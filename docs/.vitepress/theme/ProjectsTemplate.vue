<script setup>
// eslint-disable-next-line import/extensions
import { data as projects } from './project.data.js';

// const { frontmatter } = useData();
</script>
<template>
  <div class="project">
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
        :key="{id}"
      >
      <div class="project__feed__preview__image">
        <img :src="imageUrl" :alt="alt" height="430" width="430" />
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
        <span class="project__feed__preview__description-stack">{{ stack }}</span>
        <div class="project__feed__preview__description-links">
          <a class="link" aria-label="view app deploy" :href="deploy" target="_blank"
            >view app
          </a>
          <a class="github" aria-label="view code on github" :href="github" target="_blank"
            >source code
          </a>
        </div>
      </div>
      </li>
    </ul>

    <span class="project__findmore">
      <img src="/assets/github-mark.png" height="50" width="50" alt="GitHub icon" />
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
  &__feed {
    list-style-type: none;
    padding: 0;
    display: flex;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    a {
      text-decoration: none;
      font-size: 0.7em;
    }

    &__preview {
      border: 1px solid black;
      box-shadow: 9px 9px 0px 1px black;
      max-width: 45%;
      margin: 1em;
      padding: 1em 0 ;
      @media screen and (max-width: 800px) {
        max-width: 70%;
        padding: auto;
      }
      &__image {

        img {
          object-fit: cover;
          width: 100%;
        height: 100%;
        }
        border-bottom: 1px solid black;
      }
      &__description {
        padding: 0 1em ;
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
  border: solid 1px white;
  box-shadow: 9px 9px 0px black, 9px 9px 0px 2px white;
  &__image {
    border-bottom: 1px solid white;
  }
}
</style>
