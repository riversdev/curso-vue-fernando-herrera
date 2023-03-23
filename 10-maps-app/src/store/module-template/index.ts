import { Module } from 'vuex'
import { StateInterface } from '../index'
import { ExampleState, state } from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const exampleModule: Module<ExampleState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}