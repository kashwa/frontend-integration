<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-3">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      +
      <!-- Vuejs Logo -->
      <img src="@/assets/logo.png" width="54" />
      <span class="font-semibold text-xl tracking-tight">Frontend-Integration</span>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          v-if="!authenticated"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          :to="'/'"
        >Home</router-link>

        <!-- <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          :to="'signin'"
        >Sign In</router-link>-->
        <router-link
          v-if="authenticated"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          :to="'dashboard'"
        >Dashboard</router-link>
      </div>
      <!-- User Name Badge -->
      <div class="md:flex-auto mr-12" v-if="authenticated" :title="user.name +' is Online'">
        <span class="px-2 py-2 bg-white border rounded text-lg font-bold border-green-300 text-center text-black">
          <span class="dot"></span>
          {{ user.name }}
        </span>
      </div>
      <div>
        <!-- Sign-in / Sign-out -->
        <router-link
          v-if="!authenticated"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          :to="'signin'"
        >Sign In</router-link>

        <router-link
          v-if="authenticated"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          :to="'signin'"
        >Sign Out</router-link>
      </div>
    </div>
  </nav>
</template>

<style>
  .dot {
    height: 15px;
    width: 15px;
    margin-top: 1px;
    background-color: #68D391;
    border-radius: 50%;
    display: inline-block;
  }
</style>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", {
      authenticated: "authenticated",
      user: "user"
    })
  }
};
</script>