import { GetterTree } from 'vuex'
import { PlacesState } from './state'
import { StateInterface } from '../index'

export const getters: GetterTree<PlacesState, StateInterface> = {
    isUserLocationReady: (state) => {
        return !!state.userLocation
    }
}