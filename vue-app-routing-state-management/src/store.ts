import {createStore} from "zustand/vanilla";

// const useCountStore = createStore((set) => ({
//     count: 0,
//     doubleCount:0,
//   }))

export interface CountState {
  count: number
  doubleCount: number
  increaseCount: () => void
  increaseDoubleCount: () => void
}

const useCountStore = createStore<CountState>((set) => ({
  count: 0,
  doubleCount: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  increaseDoubleCount: () => set((state) => ({ doubleCount: state.doubleCount + 2 })),
}))

export const { getState, setState, subscribe } = useCountStore;

export default useCountStore


