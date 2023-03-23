import { computed, defineComponent } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables'

export default defineComponent({
    name: 'MapLocationBtn',
    setup() {
        const { map, isMapReady } = useMapStore()
        const { userLocation, isUserLocationReady } = usePlacesStore()

        return {
            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            locateMe: () => map.value?.flyTo({ center: userLocation.value, zoom: 14 })
        }
    }
})