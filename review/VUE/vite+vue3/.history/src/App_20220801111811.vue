<template>
  <div>'我是小满'</div>
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
