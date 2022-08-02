<template>
  <div :class="[cls]">我是小满</div>
</template>

<script setup lang="ts">
const flag: boolean = true
type Cls = {
  a: boolean,
  b: false
}
const cls: Cls = {
  a: true,
  b: true
}
</script>

<style>
.a {
  color: red;
}

.b {
  border: 1px solid #ccc
}
</style>
