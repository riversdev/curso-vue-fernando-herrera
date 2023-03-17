// documentacion de firebase
// https://firebase.google.com/docs/reference/rest/auth

import { authApi } from '@/api/authApi'

export const registerUser = async ({ commit }, user) => {
    const { name: displayName, email, password } = user

    commit('checkingAuthentication')

    try {
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data

        await authApi.post(':update', { idToken, displayName })

        delete user.password

        commit('login', { user, idToken, refreshToken })

        return { ok: true }
    } catch (error) {
        commit('logout')

        return { ok: false, message: error.response?.data.error.message }
    }
}

export const loginUser = async ({ commit }, user) => {
    const { email, password } = user

    try {
        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { idToken, refreshToken, displayName } = data

        user.name = displayName

        commit('login', { user, idToken, refreshToken })

        return { ok: true }
    } catch (error) {
        commit('logout')

        return { ok: false, message: error.response?.data.error.message }
    }
}

export const checkAuthExists = async ({ commit }) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken || !refreshToken) {
        commit('logout')

        return { ok: false, message: 'No hay token guardado !' }
    }

    try {
        const { data: { users } } = await authApi.post(':lookup', { idToken })
        const { displayName: name, email } = users[0]

        commit('login', { user: { name, email }, idToken, refreshToken })

        return { ok: true }
    } catch (error) {
        commit('logout')

        return { ok: false, message: error.response?.data.error.message }
    }
}