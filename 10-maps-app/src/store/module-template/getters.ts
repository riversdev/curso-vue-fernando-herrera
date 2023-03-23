import { GetterTree } from 'vuex'
import { ExampleState } from './state'
import { StateInterface } from '../index'

export const getters: GetterTree<ExampleState, StateInterface> = {
    someGetter( /* state */) {
        // return true;
    }
}