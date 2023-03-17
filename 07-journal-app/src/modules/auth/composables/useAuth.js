import { computed } from 'vue'
import { useStore } from 'vuex'

export const useAuth = () => {
    const store = useStore()

    const registerUser = async (user) => {
        const response = await store.dispatch('auth/registerUser', user)

        return response
    }

    const loginUser = async (user) => {
        const response = await store.dispatch('auth/loginUser', user)

        return response
    }

    const checkAuthExists = async () => {
        const response = await store.dispatch('auth/checkAuthExists')

        return response
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearAll')
    }

    return {
        authStatus: computed(() => store.getters['auth/authStatus']),
        username: computed(() => store.getters['auth/username']),

        registerUser,
        loginUser,
        checkAuthExists,
        logout
    }
}