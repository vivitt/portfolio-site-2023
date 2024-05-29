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
            <a href="/blog/"><span role="image">/</span>blog</a>
          </li>
          <li>
            <a href="/projects/"><span role="image">/</span>projects</a>
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
        Viviana Yanez 2023 | Made with
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

    ul {
      display: grid;
      grid-template-columns: repeat(10, auto);
      list-style: none;
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
      }
      li a:hover {
        color: slateblue;
      }
      li a .active {
        color: rgb(72, 48, 226);
        text-decoration: underline;
      }
    }
    &__switcher {
      padding: 0.4em;
    }

    @media screen and (max-width: 1000px) {
      ul {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, auto);
        li {
          grid-column: 1/10;
          border: red 1px solid;
        }
        li:not(:first-child) {
          padding: 0;
          margin: 0;
          justify-self: end;
        }
      }
    }

    &__logo img {
      max-width: 100%;
      height: auto;
    }
  }
}

.content {
  margin-top: 5em;
}

// @media screen and (max-width: 800px) {
//   nav {
//     justify-content: flex-start;
//     align-items: flex-start;
//     flex-wrap: wrap;
//   }
//   nav img {
//     max-width: 80%;
//     height: auto;
//   }
//   .switcher {
//     padding: 0.2em;
//     order: 0;
//     margin-left: auto;
//   }
//   nav .menu {
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//   }
//   nav .menu a {
//     padding: 0.2em;
//   }
// }

// @media screen and (max-width: 500px) {
//   nav {
//     flex-direction: row wrap;
//     justify-content: flex-start;
//     align-items: flex-start;
//   }

//   vivitt-switcher {
//     display: inline;
//   }
// }

.content {
  margin-top: 2em;
}

.footer {
  text-align: center;
  padding: 1em 0;
  margin-top: 10em;
  &__menu {
    display: flex;
    justify-content: space-evenly;
    padding: 1em 0;
    a {
      text-decoration: none;
      color: slateblue;
      &:hover {
        color: rgb(188, 178, 255);
      }
    }
  }
  &__atribution {
    padding: 6em 0 3em 0;
  }
}
</style>
