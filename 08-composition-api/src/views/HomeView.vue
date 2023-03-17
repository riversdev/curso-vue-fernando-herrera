<script>
  import { ref, reactive } from 'vue'

  export default {
    name: 'HomeView',
    setup() {
      const ironman = ref({ name: 'Ironman', age: 50 })
      const hulk = reactive({ name: 'Hulk', age: 50 })
      let ironmanIsAlive = reactive(false)
      const hulkIsAlive = ref(true)

      const changeAlives = () => {
        ironmanIsAlive = reactive(!ironmanIsAlive) // no es posible cambiar los valores de tipos primitivos
        hulkIsAlive.value = !hulkIsAlive.value
      }
      
      return {
        ironman,
        hulk,
        ironmanIsAlive,
        hulkIsAlive,

        changeIronman: () => {
          ironman.value.name = 'Tony Stark'
          ironman.value.age = 55
        },
        changeHulk: () => {
          hulk.name = 'Bruce Banner'
          hulk.age = 45
        },
        changeAlives
      }
    }
  }
</script>

<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman">Change Ironman</button>
    <button @click="changeHulk">Change Hulk</button>
    <h4>Ironman is alive? {{ ironmanIsAlive }}</h4>
    <h4>Hulk is alive? {{ hulkIsAlive }}</h4>
    <button @click="changeAlives">Change alives</button>
  </div>
</template>