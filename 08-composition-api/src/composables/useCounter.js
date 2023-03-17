import { ref } from 'vue'

export const useCounter = (initial = 0) => {
    const counter = ref(initial)

    const increment = (value = 1) => typeof value === 'number' ? counter.value += value : counter.value++
    const decrement = (value = 1) => typeof value === 'number' ? counter.value -= value : counter.value--
    const reset = (value) => counter.value = typeof value === 'number' ? value : initial

    return {
        counter,
        increment,
        decrement,
        reset
    }
}