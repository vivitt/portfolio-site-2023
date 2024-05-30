<script setup>
import { useData, defineClientComponent } from "vitepress";
import FooterTemplate from "./FooterTemplate.vue";
import NotFound from "./NotFoundTemplate.vue";
import BlogPost from "./BlogPost.vue";

const { frontmatter, page } = useData();

const VivittSwitcher = defineClientComponent(() =>
  import("./VivittSwitcher.vue")
);
</script>
<template>
  <header>
    <nav class="layout__navigation">
      <ul>
        <li>
          <div class="layout__navigation__logo">
            <a v-if="frontmatter.title === `Viviana's Blog`" href="/blog/">
              <img
                src="/blog-viviyanez.png"
                width="476"
                height="129"
                alt="vivi's blog"
              />
            </a>
            <a v-else href="/">
              <img
                src="/logo-viviyanez.png"
                width="635"
                height="166"
                alt="viviyanez.dev home"
              />
            </a>
          </div>
        </li>

        <li>
          <a
            :class="{ active: frontmatter.title === 'My projects' }"
            href="/projects/"
            ><span aria-hidden="true">/</span>projects</a
          >
        </li>
        <li>
          <a
            :class="{ active: frontmatter.title === `Viviana's Blog` }"
            href="/blog/"
            ><span aria-hidden="true">/</span>blog</a
          >
        </li>
        <li>
          <a
            :class="{ active: frontmatter.title === 'About me' }"
            href="/about/"
            ><span aria-hidden="true">/</span>about</a
          >
        </li>
        <li>
          <a href="https://github.com/vivitt" target="_blank"
            ><span aria-hidden="true">/</span>GitHub</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
            ><span aria-hidden="true">/</span>LinkedIn</a
          >
        </li>
      </ul>
      <div class="layout__navigation__switcher">
        <VivittSwitcher />
      </div>
    </nav>
  </header>
  <main id="main">
    <div class="layout__content">
      <not-found v-if="page.isNotFound" />
      <BlogPost v-else-if="frontmatter.isBlogPost" />
      <Content v-else />
    </div>
  </main>

  <footer>
    <div class="layout__footer">
      <div class="layout__footer__menu">
        <ul>
          <li>
            <a
              href="/projects/"
              :class="{ active: frontmatter.title === 'My projects' }"
              ><span role="image">/</span>projects</a
            >
          </li>
          <li>
            <a
              href="/blog/"
              :class="{ active: frontmatter.title === `Viviana's Blog` }"
              ><span role="image">/</span>blog</a
            >
          </li>
          <li>
            <a
              :class="{ active: frontmatter.title === 'About me' }"
              href="/about/"
              ><span aria-hidden="true">/</span>about</a
            >
          </li>

          <li>
            <a href="https://github.com/vivitt" target="_blank"
              ><span role="image">/</span>GitHub</a
            >
          </li>
          <li>
            <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
              ><span role="image">/</span>LinkedIn</a
            >
          </li>
        </ul>
      </div>
      <div class="layout__footer__atribution">
        Viviana Yanez 2024 | Made with
        <span role="img" aria-label="heart">♥︎</span>
      </div>
    </div>
  </footer>
</template>
<style lang="less">
.layout {
  &__navigation {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__switcher {
      order: -1;
      align-self: flex-end;
    }
    &__logo img {
      max-width: 70%;
      height: auto;
    }
    ul {
      display: grid;
      width: 100%;
      padding: 0;
      grid-template-columns: repeat(10, auto);
      list-style: none;
      font-size: 1.1em;
      li:first-child {
        grid-column: 1/6;
      }
      li:not(:first-child) {
        padding: 0;
        margin: 0;
        align-content: center;
      }
      li a {
        color: black;
        text-decoration: none;
      }
      li a:hover {
        color: slateblue;
      }
      li a.active {
        color: rgb(72, 48, 226);
        text-decoration: underline;
      }
    }
    &__switcher {
      padding: 0.4em;
    }
  }

  &__content {
    margin-top: 2em;
  }

  &__footer {
    text-align: center;
    padding: 1em 0;
    margin-top: 10em;
    &__menu {
      display: flex;
      justify-content: space-evenly;
      padding: 1em 0;
      ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        li {
          padding-inline-end: 1em;
          a {
            text-decoration: none;
            color: slateblue;
            &:hover {
              color: rgb(188, 178, 255);
            }
          }
          a.active {
            color: rgb(72, 48, 226);
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    &__navigation {
      &__logo img {
        max-width: 100%;
      }
      ul {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, auto);
        li {
          grid-column: 1/10;
          grid-row: auto;
        }
        li:first-child {
          grid-column: 1/10;
        }
        li:not(:first-child) {
          padding: 0.5em 1em;
          margin: 0;
        }
      }
    }

    &__content {
      margin-top: 0.5em;
    }
  }
}
</style>
