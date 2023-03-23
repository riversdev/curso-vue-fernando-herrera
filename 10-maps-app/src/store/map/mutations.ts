import { MutationTree } from 'vuex'
import mapboxgl from 'mapbox-gl'
import { MapState } from './state'
import { Feature } from '@/interfaces/places'

export const mutations: MutationTree<MapState> = {
    setMap: (state, map: mapboxgl.Map) => {
        state.map = map
    },
    setPlaceMarkers: (state, places: Feature[]) => {
        state.markers.forEach(marker => marker.remove())
        state.markers = []

        if (!state.map) return

        places.forEach(place => {
            const [lng, lat] = place.center

            const popup = new mapboxgl.Popup().setLngLat([lng, lat]).setHTML(`
                <h4>${place.text}</h4>
                <p>${place.place_name}</p>
            `)
            const marker = new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(state.map!)

            state.markers.push(marker)
        })

        if (state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
            state.distance = undefined
            state.duration = undefined
        }
    },
    setRoutePolyline: (state, coords: number[][]) => {
        const start = coords[0]
        const end = coords[coords.length - 1]

        const bounds = new mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [end[0], end[1]]
        )

        coords.forEach(coord => bounds.extend([coord[0], coord[1]]))

        state.map?.fitBounds(bounds, {
            padding: 300
        })

        const sourceData: mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        }

        if (state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString')
            state.map.removeSource('RouteString')
        }

        state.map?.addSource('RouteString', sourceData)

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        })
    },
    setDistanceAndDuration: (state, { distance, duration }: { distance: number, duration: number }) => {
        let kms = distance / 1000
        kms = Math.round(kms * 100)
        kms /= 100

        state.distance = kms
        state.duration = Math.floor(duration / 60)
    }
}