<template>
  <div v-for="item in Arr">{{ item }}</div>
</template>

<script setup lang="ts">
const Arr: Array<number> = [1, 2, 3, 4, 5]
</script>

<style>
.a {
  color: red;
}

.b {
  border: 1px solid #ccc
}
</style>
