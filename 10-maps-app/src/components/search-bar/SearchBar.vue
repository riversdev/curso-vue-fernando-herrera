<script lang="ts" src="./SearchBar.ts"></script>

<template>
  <div class="searchbar-container">
    <div class="form-floating bg-transparent">
      <input
        class="form-control shadow"
        id="searchInput"
        placeholder="Buscar lugares..."
        v-model="searchTerm"
      />
      <label for="searchInput">Buscar lugares</label>
    </div>
    <SearchResults />
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 9999;
  width: 250px;
}
</style>