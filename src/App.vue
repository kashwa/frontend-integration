<template>
  <div id="app">
    <TheNavigation />
    <router-view />
  </div>
</template>

<style>
  body{
    background-color: #C6F6D5;
  }
</style>

<script>
import TheNavigation from '@/components/TheNavigation'

  export default {
    components: {
      TheNavigation
    }
  }
</script>