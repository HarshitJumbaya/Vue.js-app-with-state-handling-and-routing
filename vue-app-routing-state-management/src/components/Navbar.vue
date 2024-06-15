<template>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  </style>