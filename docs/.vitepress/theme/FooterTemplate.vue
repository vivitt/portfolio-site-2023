<template>
  <div class="footer">
    <div class="footer__menu">
      <a href="/blog/"><span role="image">/</span>blog</a>
      <a href="/projects/"><span role="image">/</span>projects</a>
      <a href="https://github.com/vivitt" target="_blank"><span role="image">/</span>GitHub</a>
      <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
        ><span role="image">/</span>LinkedIn</a
      >
    </div>
    <div class="footer__atribution">
      Viviana Yanez 2023 | Made with
      <span role="img" aria-label="heart">♥︎</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
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
