import { defineComponent, ref, watch } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables'
import { Feature } from '@/interfaces/places'

export default defineComponent({
    name: 'SearchResults',
    setup() {
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
        const { isLoadingPlaces, places, userLocation } = usePlacesStore()
        const activePlace = ref('')

        watch(places, (newPlaces) => {
            setPlaceMarkers(newPlaces)
            activePlace.value = ''
        })

        return {
            isLoadingPlaces,
            places,
            activePlace,

            setActivePlace: (place: Feature) => {
                activePlace.value = place.id

                const [lng, lat] = place.center

                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            },
            getRouteDirection: (place: Feature) => {
                if (!userLocation.value) return

                const [lng, lat] = place.center

                const start: [number, number] = userLocation.value!
                const end: [number, number] = [lng, lat]
                
                getRouteBetweenPoints(start, end)
            }
        }
    }
})