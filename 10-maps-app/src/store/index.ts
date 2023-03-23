import { createStore } from 'vuex'
import { mapModule, MapState } from './map'
import { placesModule, PlacesState } from './places'

export interface StateInterface {
  places: PlacesState,
  map: MapState
}

export const store = createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})