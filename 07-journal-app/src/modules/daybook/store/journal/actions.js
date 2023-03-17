import { journalApi } from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
    commit('setIsLoading')

    const { data } = await journalApi.get('/entries.json')

    const entries = []

    for (const id in data || []) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, { id, ...entry }) => {
    const { data } = await journalApi.put(`/entries/${id}.json`, entry)

    const savedEntry = { id, ...data }

    commit('updateEntry', savedEntry)
}

export const createEntry = async ({ commit }, entry) => {
    const { data: { name: id } } = await journalApi.post('/entries.json', entry)

    const savedEntry = { id, ...entry }

    commit('addEntry', savedEntry)

    return id
}

export const deleteEntry = async ({ commit }, entryId) => {
    await journalApi.delete(`/entries/${entryId}.json`)

    commit('deleteEntry', entryId)
}