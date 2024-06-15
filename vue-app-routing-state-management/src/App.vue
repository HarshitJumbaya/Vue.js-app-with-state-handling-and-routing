<template>
  <div id="app">

    <nav>
      <div>

        <RouterLink to="/">Home</RouterLink>
      </div>
      <div>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
    <div>
      <Navbar />
    </div>
    <RouterView />
  </div>
</template>


<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'

export default {
  name: 'App'
}
</script>


<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url('https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fogvgbqlwdsvnc6u8iq7a.png');
  background-repeat: no-repeat;
  background-size: cover;
  
}

h1 {
  text-align: center;
  margin-top: 2rem;
}

nav {
  display: flex;
  padding: 4px;
  margin: 54px;
  justify-items: center;
}
nav>div{
  margin: 22px;
}
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
