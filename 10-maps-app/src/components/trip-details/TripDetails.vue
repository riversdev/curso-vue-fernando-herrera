<script lang="ts" src="./TripDetails.ts"></script>

<template>
  <div
    v-if="distance && duration"
    class="trip-container shadow rounded p-3 bg-white"
  >
    <div class="row">
      <div class="col-12 w-auto">
        Distancia: <strong>{{ distance }} kms</strong>
      </div>
      <div class="col-12 w-auto">
        Duracion: <strong>{{ duration }} min</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trip-container {
  position: fixed;
  bottom: 30px;
  left: 30px;
}

strong {
  color: #42b983;
}
</style>