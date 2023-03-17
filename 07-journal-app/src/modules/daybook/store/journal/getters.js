export const getEntriesByTerm = (state) => (term = '') => {
    return state.entries.filter(x => x.text.toLowerCase().includes(term.toLowerCase()))
}

export const getEntryById = (state) => (id = '') => {
    const entry = state.entries.find(x => x.id === id)

    if (!entry) return

    return { ...entry }
}