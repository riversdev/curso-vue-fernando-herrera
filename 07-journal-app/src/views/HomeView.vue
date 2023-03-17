<script>
  import { useRouter } from 'vue-router'

  export default {
    name: 'HomeView',
    setup() {
      const router = useRouter()

      const goToDaybook = () => {
        router.push({ name: 'no-entry-selected' })
      }

      return {
        goToDaybook
      }
    },
  }
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button class="btn btn-primary" @click="goToDaybook">Primary</button>
    <button class="btn btn-secondary" @click="goToDaybook">Secondary</button>
    <button class="btn btn-success" @click="goToDaybook">Success</button>
  </div>
</template>