<script>
    import UsersList from '@/components/UsersList.vue'
    import { useUsers } from '../composables/useUsers'

    export default {
        components: { UsersList },
        setup() {
            const { users, isLoading, currentPage, errorMessage, nextPage, prevPage } = useUsers()

            return {
                users,
                isLoading,
                currentPage,
                errorMessage,

                nextPage,
                prevPage
            }
        }
    }
</script>

<template>
    <h2 v-if="isLoading">Espere por favor...</h2>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <users-list :users="users" v-slot="{ user }">
            <h5>{{ user.first_name }} {{ user.last_name }}</h5>
            <span>{{ user.email }}</span>
        </users-list>
    </div>

    <button @click="prevPage">Atras</button>
    <button @click="nextPage">Siguiente</button>

    <span>Pagina: {{ currentPage }}</span>
</template>

<style scoped>
    h2{
        text-align: center;
        width: 100%;
    }

    div{
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul{
        width: 250px;
    }
</style>