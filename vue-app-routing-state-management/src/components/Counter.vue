<template>
    <div class="counter">
      <h3>Single: {{ count }}</h3>
      <h3>Double: {{ doubleCount }}</h3>
      <button @click="increaseSingleCount" class="btn">Single</button>
      <button @click="increaseDoubleCount" class="btn">Double</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { getState, setState, subscribe } from '../store'
  import type { CountState } from '../store'
  
  const state = getState() as CountState
  
  const count = ref(state.count)
  const doubleCount = ref(state.doubleCount)
  
  function increaseSingleCount() {
    setState({ count: getState().count + 1 })
  }
  
  function increaseDoubleCount() {
    setState({ doubleCount: getState().doubleCount + 2 })
  }
  
  subscribe(() => {
    const state = getState() as CountState
    count.value = state.count
    doubleCount.value = state.doubleCount
  })
  </script>
  
  <style scoped>
  .counter {
    text-align: center;
    margin-top: 2rem;
  }
  h3{
    color: rgb(236, 226, 226);
    font-weight: 800;
  }
  .btn {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  