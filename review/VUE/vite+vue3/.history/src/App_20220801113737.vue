<template>
  <input type="text" v-model="msg">
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
const msg: string = 'test'
</script>
<style>
.a {
  color: red;
}

.b {
  border: 1px solid #ccc
}
</style>
