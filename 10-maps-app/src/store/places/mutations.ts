import { MutationTree } from 'vuex'
import { PlacesState } from './state'
import { Feature } from '@/interfaces/places'

export const mutations: MutationTree<PlacesState> = {
    setIsLoading: (state) => {
        state.isLoading = true
    },
    setLngLat: (state, { lng, lat }: { lng: number, lat: number }) => {
        state.isLoading = false
        state.userLocation = [lng, lat]
    },
    setIsLoadingPlaces: (state) => {
        state.isLoadingPlaces = true
    },
    setPlaces: (state, places: Feature[]) => {
        state.isLoadingPlaces = false
        state.places = places
    }
}