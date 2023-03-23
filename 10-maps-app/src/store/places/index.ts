import { Module } from 'vuex'
import { StateInterface } from '../index'
import { PlacesState, state } from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const placesModule: Module<PlacesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export { PlacesState }