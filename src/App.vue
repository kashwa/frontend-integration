<template>
  <div id="app">
    
    <TheNavigation />
    <router-view />

    <!-- <SignIn /> -->
    <!-- <SignUp /> -->
  </div>
</template>

<style></style>

<script>
import TheNavigation from '@/components/TheNavigation'
import SignIn from '@/views/SignIn'
import SignUp from '@/components/SignUp'

  export default {
    components: {
      TheNavigation,
      // SignIn,
      // SignUp
    }
  }
</script>