import { defineComponent, onMounted, ref, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useMapStore, usePlacesStore } from '@/composables'

export default defineComponent({
    name: 'MapView',
    setup() {
        const { setMap } = useMapStore()
        const { isLoading, userLocation, isUserLocationReady } = usePlacesStore()
        const mapElement = ref<HTMLDivElement>()

        watch(isUserLocationReady, () => {
            if (isUserLocationReady.value) initMap()
        })

        const initMap = async () => {
            if (!mapElement.value || !userLocation.value) return

            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 16, // starting zoom
            })

            const myLocationPopup = new mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
                <h4>Aqui estoy</h4>
                <p>Actualmente en Hidalgo</p>
            `)
            const myLocationMarker = new mapboxgl.Marker().setLngLat(userLocation.value).setPopup(myLocationPopup).addTo(map)

            setMap(map)
        }

        return {
            isUserLocationReady,
            mapElement,
        }
    }
})