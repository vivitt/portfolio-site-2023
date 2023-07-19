<template>
  <div class="preview">
    <h2>{{ title }}</h2>
    <img v-if="isProject" :src="image" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      default: "",
    },
    isProject: {
      default: false,
    },
    title: {},
  },
  setup() {
    const title = "Blogpost";
    const description = "this is the first one";
    return {
      title,
      description,
    };
  },
};
</script>
