<template>
  <div v-if="flag === 'A'">
    A
  </div>
  <div v-if="flag === 'A'">
    B
  </div>
  <div v-if="flag === 'A'">
    C
  </div>
</template>

<script setup lang="ts">
const message: string = '<section>刘大润大傻呗儿</section>'
const flag: string = 'A'
</script>

<style>
</style>
