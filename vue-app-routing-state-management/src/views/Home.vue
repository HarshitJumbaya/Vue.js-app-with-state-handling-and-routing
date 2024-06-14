<template>
    <h3>Single: {{ count }}</h3>
    <h3>Double: {{ doubleCount }}</h3>

    <button @click="increaseSingleCount">Single</button>
    <button @click="increaseDoubleCount">Double</button>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { getState, setState, subscribe } from '../store';
// subscribe is to listen the changes in real time
// Without “subscribe” we would not be able to see the changes in real-time
const count = ref(getState().count);
const doubleCount = ref(getState().doubleCount);


function increaseSingleCount() {
    setState({ count: getState().count + 1 })
}

function increaseDoubleCount() {
    setState({ doubleCount: getState().doubleCount + 2 })
}

subscribe(() => {
    count.value = getState().count;
    doubleCount.value = getState().doubleCount;
})
</script>