<template>
  <div @click="parent">
    <button @click.stop="clickTap">123</button>
  </div>
</template>

<script setup lang="ts">
const parent = () => {
  console.log('我是父级元素');

}
const clickTap = (e) => {
  console.log('我是子级别元素');

}
</script>

<style>
</style>
