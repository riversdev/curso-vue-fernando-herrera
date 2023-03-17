export const setIsLoading = (state) => {
    state.isLoading = true
}

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    state.entries = state.entries.map(x => x.id === entry.id ? entry : x)
}

export const addEntry = (state, entry) => {
    state.entries.unshift(entry)
}

export const deleteEntry = (state, entryId) => {
    state.entries = state.entries.filter(x => x.id !== entryId)
}

export const clearAll = (state) => {
    state.isLoading = false
    state.entries = []
}