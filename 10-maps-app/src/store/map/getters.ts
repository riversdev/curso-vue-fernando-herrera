import { GetterTree } from 'vuex'
import { MapState } from './state'
import { StateInterface } from '../index'

export const getters: GetterTree<MapState, StateInterface> = {
    isMapReady: (state) => {
        return !!state.map
    }
}