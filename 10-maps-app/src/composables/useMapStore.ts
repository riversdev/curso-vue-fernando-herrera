import { computed } from 'vue'
import { useStore } from 'vuex'
import mapboxgl from 'mapbox-gl'
import { StateInterface } from '@/store'
import { Feature } from '@/interfaces/places'
import { LngLat } from '@/store/map/actions'

export const useMapStore = () => {
    const store = useStore<StateInterface>()

    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

        setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places),

        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', { start, end })
    }
}