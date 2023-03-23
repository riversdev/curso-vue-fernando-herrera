<script lang="ts" src="./MapView.ts"></script>

<template>
  <div
    v-show="isUserLocationReady"
    ref="mapElement"
    class="map-container"
  ></div>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando...</span>
    </div>
  </div>
</template>

<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}

.loading-map {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
</style>