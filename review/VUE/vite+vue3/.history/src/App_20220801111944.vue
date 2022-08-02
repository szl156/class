<template>
  <div v-bind:style="">我是小满</div>
</template>

<script setup lang="ts">
type Style = {
  color: string,
  height: string
}
const style: Style = {
  color: 'blue',
  height: '300px'
}
</script>

<style>
</style>
