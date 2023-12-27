<script setup>

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const props = defineProps(['date']);
</script>
<template>
        <span>{{
          `${month[Number(props.date.slice(5, 7)) - 1]} ${props.date.slice(
            8,
            10
          )}, ${props.date.slice(0, 4)}`
        }}</span>
</template>
<style scoped lang="less">
</style>
