<template>
  <div v-if="flag" v-html="message">

  </div>
</template>

<script setup lang="ts">
const message: string = '<section>刘大润大傻呗儿</section>'
const flag: boolean = true
</script>

<style>
</style>
