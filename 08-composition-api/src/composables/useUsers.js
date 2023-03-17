import { ref } from 'vue'
import axios from 'axios'

export const useUsers = () => {
    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref(null)

    const getUsers = async (page = 1) => {
        if (page <= 0) page = 1

        isLoading.value = true

        const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)

        if (data.data.length === 0) return errorMessage.value = 'No hay mas usuarios !'

        users.value = data.data
        currentPage.value = page
        isLoading.value = false
        errorMessage.value = null
    }

    getUsers()

    return {
        users,
        isLoading,
        currentPage,
        errorMessage,

        nextPage: () => getUsers(currentPage.value + 1),
        prevPage: () => getUsers(currentPage.value - 1)
    }
}