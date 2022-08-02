<template>
  <div :class="[flag ? 'a' : 'b']">我是小满</div>
</template>

<script setup lang="ts">
const flag: boolean = true
</script>

<style>
.a {
  color: red;
}

.b {
  color: blue;
}
</style>
