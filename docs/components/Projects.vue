<script setup>
import { computed } from "vue";
import { data as projects } from "../.vitepress/theme/project.data.js";
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>
<template>
  <div class="project">
    <ul class="project__feed">
      <li
        class="project__feed__preview"
        v-for="{
          title,
          url,
          date,
          excerpt,
          imageUrl,
          alt,
          deploy,
          github,
          stack,
        } of projects"
      >
        <img :src="imageUrl" :alt="alt" />

        <h2 class="project__feed__preview-title">
          <a>{{ title }}</a>
        </h2>
        <div
          v-if="excerpt"
          class="project__feed__preview-text"
          v-html="excerpt"
        ></div>
        <span class="project__feed__preview-stack">{{ stack }}</span>
        <div class="project__feed__preview-links">
          <a class="link" aria-label="view app deploy" :href="deploy"
            >view app
          </a>
          <a class="github" aria-label="view code on github" :href="github"
            >source code
          </a>
        </div>
      </li>
    </ul>

    <span class="project__findmore">
      <img
        src="/github-mark.png"
        height="50"
        width="50"
        role="icon"
        alt="GitHub icon"
      />
      <p>
        Find more on
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
      max-width: 45%;
      padding: 1em 0;
      margin: auto;
      @media screen and (max-width: 800px) {
        max-width: 70%;
        padding: auto;
      }
      img {
        max-width: 100%;
      }
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
  &__findmore {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    p {
      padding-inline-start: 0.3em;
    }
  }
}
</style>
