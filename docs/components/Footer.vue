<template>
  <div class="footer">
    <div class="footer__menu">
      <a href="/blog/">/blog</a>
      <a href="/projects/">/projects</a>
      <a href="https://github.com/vivitt" target="_blank">/GitHub</a>
      <a href="https://www.linkedin.com/in/viviana-yanez/" target="_blank"
        >/LinkedIn</a
      >
    </div>
    <div class="footer__atribution">
      Viviana Yanez 2023 | Made with
      <span role="image" aria-label="heart">♥︎</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.footer {
  text-align: center;
  padding: 1em 0;
  &__menu {
    display: flex;
    justify-content: space-evenly;
    padding: 1em 0;
    a {
      text-decoration: none;
      color: slateblue;
      :hover {
        color: rgb(188, 178, 255);
      }
    }
  }
  &__atribution {
    padding: 2em 0;
  }
}
</style>
