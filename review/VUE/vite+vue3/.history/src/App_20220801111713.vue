<template>
  <form action="/">
    <button @click.prevent="clickTap" type="submit">提交</button>
  </form>
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
