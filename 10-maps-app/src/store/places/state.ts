import { Feature } from "@/interfaces/places"

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
    isLoadingPlaces: boolean
    places: Feature[]
}

export function state(): PlacesState {
    return {
        isLoading: false,
        userLocation: undefined,
        isLoadingPlaces: false,
        places: []
    }
}