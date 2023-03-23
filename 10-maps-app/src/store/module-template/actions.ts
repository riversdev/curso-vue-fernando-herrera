import { ActionTree } from 'vuex'
import { ExampleState } from './state'
import { StateInterface } from '../index'

export const actions: ActionTree<ExampleState, StateInterface> = {
    someAction: ( /*{ commit }, payload  */) => {
        // a line to prevent linter errors
    }
}