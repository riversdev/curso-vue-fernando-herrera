<template>
  <MapView />
  <MapLocationBtn />
  <SearchBar />
  <TripDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MapView from "@/components/map-view/MapView.vue";
import MapLocationBtn from "@/components/map-location-btn/MapLocationBtn.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import TripDetails from "@/components/trip-details/TripDetails.vue";

export default defineComponent({
  name: "HomeView",
  components: { MapView, MapLocationBtn, SearchBar, TripDetails },
});
</script>