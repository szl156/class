<template>
  <div v-if="flag === 'A'" v-html="message">

  </div>
  <div v-show="flag" v-html="message">

  </div>
  <div v-show="flag" v-html="message">

  </div>
</template>

<script setup lang="ts">
const message: string = '<section>刘大润大傻呗儿</section>'
const flag: string = 'A'
</script>

<style>
</style>
