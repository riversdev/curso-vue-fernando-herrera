<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'fa-plus'
      }
    },
    setup() {
      
    },
  }
</script>

<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <i class="fas" :class="icon"></i>
  </button>
</template>

<style lang="sass" scoped>
button
    border-radius: 100px
    bottom: 20px
    height: 50px
    position: fixed
    right: 20px
    width: 50px
</style>