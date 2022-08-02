<template>
  <div @click="parent">
    <button @click="clickTap">123</button>
  </div>
</template>

<script setup lang="ts">
const parent = () => {
  console.log('我是父级元素');

}
const clickTap = () => {
  console.log('我是子集元素');

}
</script>

<style>
</style>
