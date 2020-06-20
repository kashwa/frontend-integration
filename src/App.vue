<template>
  <div id="app">
    
    <TheNavigation />
    <router-view />

  </div>
</template>

<style></style>

<script>
import TheNavigation from '@/components/TheNavigation'

  export default {
    components: {
      TheNavigation
    }
  }
</script>