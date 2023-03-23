<script lang="ts" src="./MapLocationBtn.ts"></script>

<template>
  <button v-if="isBtnReady" @click="locateMe" class="btn btn-primary btn-vue">
    Ir a mi ubicacion
  </button>
</template>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>