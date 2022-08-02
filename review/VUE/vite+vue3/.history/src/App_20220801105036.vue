<template>
  <div>
    {{ message ? '我是恁爹' : '我是假的' }}
  </div>
</template>

<script setup lang="ts">
const message: number = 1
</script>

<style>
</style>
