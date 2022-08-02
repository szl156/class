<template>
  <div :class="['a', 'b']">我是小满</div>
</template>

<script setup lang="ts">
const flag: boolean = false
</script>

<style>
.a {
  color: red;
}

.b {
  height: 300px;
}
</style>
