export const authStatus = (state) => {
    return state.status
}

export const username = (state) => {
    return state.user?.name || ''
}