<script lang="ts" src="./SearchResults.ts"></script>

<template>
  <div
    v-if="isLoadingPlaces || places.length > 0"
    class="mt-3 shadow rounded p-2 bg-white"
  >
    <div v-if="isLoadingPlaces" class="alert alert-primary" role="alert">
      Buscando...
    </div>
    <ul v-if="places.length > 0" class="list-group list-group-flush">
      <li
        v-for="place in places"
        :key="place.id"
        @click="setActivePlace(place)"
        :class="{ 'list-group-item-primary': place.id === activePlace }"
        class="list-group-item list-group-item-action p-2"
      >
        <h6 class="card-title">{{ place.text }}</h6>
        <small class="text-muted d-block my-1">
          {{ place.place_name }}
        </small>
        <div class="w-100 d-flex justify-content-end">
          <button @click.self="getRouteDirection(place)" class="btn btn-sm btn-outline-primary ml-auto btn-outline-vue">
            Direcciones
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>