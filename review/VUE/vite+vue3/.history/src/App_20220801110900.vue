<template>
  <div v-if="flag === 'A'">
    A
  </div>
  <div v-else-if="flag === 'B'">
    B
  </div>
  <div v-else-if="flag === 'C'">
    C
  </div>
  <div v-else>
    D
  </div>
</template>

<script setup lang="ts">
const message: string = '<section>刘大润大傻呗儿</section>'
const flag: string = 'A'
</script>

<style>
</style>
