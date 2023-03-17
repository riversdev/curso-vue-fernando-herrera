import { createStore } from 'vuex'
import { v4 as generateUUID } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Buscar la gema del alma', completed: false },
      { id: '2', text: 'Buscar la gema del tiempo', completed: false },
      { id: '3', text: 'Buscar la gema del poder', completed: true },
      { id: '4', text: 'Buscar la gema de la mente', completed: false },
      { id: '5', text: 'Buscar la gema del espacio', completed: true },
      { id: '6', text: 'Buscar la gema de la realidad', completed: false },
    ]
  },
  getters: {
    allTodos(state) {
      return [...state.todos]
    },
    completedTodos(state) {
      return state.todos.filter(x => x.completed)
    },
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(x => !x.completed)
    },
    getTodosByTab: (state, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'completed': return getters.completedTodos
        case 'pending': return getters.pendingTodos
      }
    }
  },
  mutations: {
    toggleTodo: (state, id) => {
      const todoIdx = state.todos.findIndex(x => x.id === id)

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo: (state, text = '') => {
      if (text.length <= 1) return

      state.todos.push({
        id: generateUUID(),
        completed: false,
        text
      })
    }
  },
  actions: {
  },
  modules: {
  }
})