<template>
  <div id="app">

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>


<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App'
}
</script>


<style scoped>
</style>


<!-- <template>
  <div id="app">
    
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script  lang="ts">
import {RouterLink, RouterView} from 'vue-router';


export default {
  name: 'App'
}
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style> -->
