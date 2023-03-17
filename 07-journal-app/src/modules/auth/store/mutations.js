export const checkingAuthentication = (state) => {
    state.status = 'checking'
}

export const login = (state, { user, idToken, refreshToken }) => {
    if (!user || !idToken || !refreshToken) return state.status = 'not-authenticated'

    state.status = 'authenticated'
    state.user = user
    state.idToken = idToken
    state.refreshToken = refreshToken

    localStorage.setItem('idToken', idToken)
    localStorage.setItem('refreshToken', refreshToken)
}

export const logout = (state) => {
    state.status = 'not-authenticated'
    state.user = null
    state.idToken = null
    state.refreshToken = null

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
}