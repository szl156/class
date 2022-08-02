<template>
  <div v-bind:style="style">我是小满</div>
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
.a {
  color: red;
}

.b {
  color: blue;
}
</style>
