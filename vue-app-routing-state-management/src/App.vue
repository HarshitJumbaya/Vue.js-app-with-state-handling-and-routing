<script setup lang="ts">
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="main2">
    <h2>Learning about routing and state management in Vue.js by Zustand</h2>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main2{
  background-color: rgb(234, 168, 82);
}
</style>