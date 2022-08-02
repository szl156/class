<template>
  <div :class="[flag ? 'a' : 'b']">我是小满</div>
</template>

<script setup lang="ts">
const flag: boolean = false
type Cls = {
  a: boolean,
  b: boolean
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
