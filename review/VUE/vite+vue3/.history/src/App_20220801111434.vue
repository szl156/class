<template>
  <div>
    <button @click="clickTap">123</button>
  </div>
</template>

<script setup lang="ts">
const clickTap = () => {
  console.log('触发了点击事件');

}
</script>

<style>
</style>
