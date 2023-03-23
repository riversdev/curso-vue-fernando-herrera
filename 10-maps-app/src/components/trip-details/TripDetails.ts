import { defineComponent } from 'vue'
import { useMapStore } from '@/composables'

export default defineComponent({
    name: 'TripDetails',
    setup() {
        const { distance, duration } = useMapStore()

        return {
            distance,
            duration,
        }
    }
})