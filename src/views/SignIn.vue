<template>
  <div class="home">
    <br />
    <!-- <div class="w-full max-w-sm mx-auto"> -->
    <form
      class="w-full max-w-sm mx-auto bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20"
      @submit.prevent="submit"
    >
      <div class="mb-4">
        <label class="block text-gray-300 text-sm font-bold mb-2" for="email">Email</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-500"
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          v-model="form.email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-300 text-sm font-bold mb-2" for="password">Password</label>
         <!-- class='border-red-500' -->
        <input
          class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="******************"
          v-model="form.password"
        />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign In</button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-200"
          href="#"
          title="Soon!"
        >Forgot Password?</a>
      </div>
    </form>
    <p
      class="text-center text-black font-bold text-xs"
    >&copy;2020 Frontend-Integration. All rights reserved.</p>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: "signin",
    components: {},
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions('auth', { // auth => is the namespaced module i want to call methods from.
        signIn: 'signIn'
      }),
      submit() {
        this.signIn(this.form)
          .then(() => {
            this.$router.replace({
              name: 'dashboard'
            })
          })
          .catch(() => {
            alert('Error in credentials!')
          })
      }
    }
  };
</script>
