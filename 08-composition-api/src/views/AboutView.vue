<script>
  import {
    onMounted,
    onUpdated,
    onUnmounted,
    onBeforeMount,
    onBeforeUpdate,
    onBeforeUnmount,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    onActivated,
    onDeactivated,
    onServerPrefetch,
    ref
  } from 'vue'

  export default {
    setup() {
      const title = ref('titulo')

      onMounted(()=>{
        console.log('onMounted')
      })
      onUpdated(()=>{
        console.log('onUpdated')
      })
      onUnmounted(()=>{
        console.log('onUnmounted')
      })
      onBeforeMount(()=>{
        console.log('onBeforeMount')
      })
      onBeforeUpdate(()=>{
        console.log('onBeforeUpdate')
      })
      onBeforeUnmount(()=>{
        console.log('onBeforeUnmount')
      })
      onErrorCaptured(()=>{
        console.log('onErrorCaptured')
      })
      onRenderTracked(()=>{
        console.log('onRenderTracked')
      })
      onRenderTriggered(()=>{
        console.log('onRenderTriggered')
      })
      onActivated(()=>{
        console.log('onActivated')
      })
      onDeactivated(()=>{
        console.log('onDeactivated')
      })
      onServerPrefetch(()=>{
        console.log('onServerPrefetch')
      })

      console.log('setup')

      return {
        title,
        changeTitle: () => title.value = 'New about'
      }
    },
  }
</script>

<template>
  <div class="about">
    <h1>This is an {{ title }} page</h1>
    <button @click="changeTitle">Change title</button>
  </div>
</template>