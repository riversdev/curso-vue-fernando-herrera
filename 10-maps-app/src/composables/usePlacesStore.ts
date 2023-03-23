import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { StateInterface } from '@/store'

export const usePlacesStore = () => {
    const store = useStore<StateInterface>()
    const isUserLocationReady = computed<boolean>(() => store.getters['places/isUserLocationReady'])

    onMounted(() => {
        if (!isUserLocationReady.value) {
            store.dispatch('places/getInitialLocation')
        }
    })

    return {
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),
        isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
        places: computed(() => store.state.places.places),

        isUserLocationReady,

        searchPlacesByTerm: (query: string) => store.dispatch('places/searchPlacesByTerm', query),
    }
}