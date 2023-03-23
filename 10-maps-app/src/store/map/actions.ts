import { ActionTree } from 'vuex'
import { MapState } from './state'
import { StateInterface } from '../index'
import { directionsApi } from '@/apis'
import { DirectionsResponse } from '@/interfaces/directions'

export type LngLat = [number, number]

export const actions: ActionTree<MapState, StateInterface> = {
    getRouteBetweenPoints: async ({ commit }, { start, end }: { start: LngLat, end: LngLat }) => {
        const response = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`)

        const route = response.data.routes[0]
        
        const coords = route.geometry.coordinates
        const distance = route.distance
        const duration = route.duration

        commit('setRoutePolyline', coords)
        commit('setDistanceAndDuration', { distance, duration })
    }
}