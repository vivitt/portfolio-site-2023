<template>
  <div class="navbar">
    <div class="navbar__logo">
      <a href="/">
        <h1>Viviana Yanez</h1>
      </a>
    </div>

    <ul class="navbar__menu>">
      <li><a href="/about/">About</a></li>
      <li><a href="/blog/">Blog</a></li>
      <li><a href="https://github.com/vivitt" target="blank">Projects</a></li>
    </ul>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
  setup() {
    const mode = ref("light");
  },
};
</script>
<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      padding-inline-end: 0.5em;
    }
  }
}
</style>
