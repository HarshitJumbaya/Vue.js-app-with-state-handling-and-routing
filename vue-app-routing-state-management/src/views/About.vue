<template>
<div>

  <h1>Second page</h1>
  <!-- <h3>Single: {{ count }}</h3>
  <h3>Double: {{ doubleCount }}</h3>
  <button @click="increaseSingleCount">Single</button>
  <button @click="increaseDoubleCount">Double</button> -->
  
</div>
  <Counter />
  </template>
  
  <script setup lang="ts">

  import { ref } from 'vue';
  import { getState, setState, subscribe } from '../store';
  import Counter from '../components/Counter.vue'

  const count = ref(getState().count);
  const doubleCount = ref(getState().doubleCount);
  
  function increaseSingleCount() { 
    setState({ count: getState().count + 1 });
  }
  
  function increaseDoubleCount() {
    setState({ doubleCount: getState().doubleCount + 2 });
  }
  
  subscribe(() => {
    count.value = getState().count;
    doubleCount.value = getState().doubleCount;
  });
  
  </script>

  <style>
div{
  /* margin-left: 3px; */
  align-items: center;
}
</style>