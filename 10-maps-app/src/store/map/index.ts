import { Module } from 'vuex'
import { StateInterface } from '../index'
import { MapState, state } from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const mapModule: Module<MapState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export { MapState }