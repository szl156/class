<template>
  <div v-for="item in Arr">{{ item.name }}</div>
</template>

<script setup lang="ts">
const Arr: Array<any> = [{ name: '1' }, { name: '2' }, { name: '3' }]
</script>

<style>
.a {
  color: red;
}

.b {
  border: 1px solid #ccc
}
</style>
