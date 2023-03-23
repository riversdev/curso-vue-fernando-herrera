import mapboxgl from 'mapbox-gl'

export interface MapState {
    map?: mapboxgl.Map
    markers: mapboxgl.Marker[]
    distance?: number
    duration?: number
}

export function state(): MapState {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined
    }
}