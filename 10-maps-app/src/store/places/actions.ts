import { ActionTree } from 'vuex'
import { PlacesState } from './state'
import { StateInterface } from '../index'
import { searchApi } from '@/apis'
import { Feature, PlacesResponse } from '@/interfaces/places'

export const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation: ({ commit }) => {
        commit('setIsLoading')

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (error) => {
                console.log(error)
                throw new Error('No geolocation')
            }
        )
    },
    searchPlacesByTerm: async ({ commit, state }, query: string): Promise<Feature[]> => {
        if (!state.userLocation) throw new Error('No hay ubicacion del usuario')

        if (query.length === 0) {
            commit('setPlaces', [])

            return []
        }

        commit('setIsLoadingPlaces')

        const { data: { features: places } } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: { proximity: state.userLocation?.join(',') }
        })

        commit('setPlaces', places)

        return places
    },
}