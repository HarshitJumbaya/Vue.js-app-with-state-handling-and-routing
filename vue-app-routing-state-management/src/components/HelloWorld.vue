<template>
  <!-- <h3>Single: {{ count }}</h3>
  <h3>Double: {{ doubleCount }}</h3>

  <button @click="increaseSingleCount">Single</button>
  <button @click="increaseDoubleCount">Double</button> -->

  <Counter />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { getState, setState, subscribe } from '../store';
import type { CountState } from '../store'
import Counter from '../components/Counter.vue'

const state = getState() as CountState
// subscribe is to listen the changes in real time
// Without “subscribe” we would not be able to see the changes in real-time
const count = ref(state.count);
const doubleCount = ref(state.doubleCount);


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