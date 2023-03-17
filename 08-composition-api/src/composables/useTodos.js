import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export const useTodos = () => {
    const store = useStore()
    const currentTab = ref('all')
    const visible = ref(false)
    const newTodo = ref('')

    const addTodo = () => {
        store.commit('createTodo', newTodo.value)
        newTodo.value = ''
        visible.value = false
    }

    return {
        currentTab,
        visible,
        newTodo,

        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        pending: computed(() => store.getters['pendingTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

        toggleTodo: (id) => store.commit('toggleTodo', id),
        showModal: () => visible.value = true,
        hideModal: () => visible.value = false,
        addTodo,
    }
}