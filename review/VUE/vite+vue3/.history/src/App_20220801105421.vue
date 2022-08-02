<template>
  <div>
    {{ message.split(',').map(v => `44$￥￥${v}`) }}
  </div>
</template>

<script setup lang="ts">
const message: string = '刘,大,润,是,个,傻,呗,儿'
</script>

<style>
</style>
