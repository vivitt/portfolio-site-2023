<template>
  <span class="toggleMode">
    <input type="checkbox" v-model="checkboxValue" />
  </span>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    modelValue: {
      default: false,
    },
  },
  setup(props, { emit }) {
    const checkboxValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return {
      checkboxValue,
    };
  },
};
</script>

<style lang="sass" scoped></style>
