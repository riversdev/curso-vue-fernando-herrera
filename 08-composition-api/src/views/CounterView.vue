<script>
    import { useCounter } from '../composables/useCounter'

    export default {
        name: 'Counter',
        props: {},
        emits: [],
        setup() {
            const { counter, increment, decrement, reset} = useCounter(5)

            return {
                counter,

                increment,
                decrement,
                reset
            }
        }
    }
</script>

<template>
  <h1>Counter view</h1>
  <h2>{{ counter }}</h2>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="decrement(2)">-2</button>
  <button @click="reset">Reset</button>
  <button @click="reset(20)">Set 20</button>
</template>