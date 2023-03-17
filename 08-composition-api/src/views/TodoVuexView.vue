<script>
    import Modal from '../components/Modal.vue'
    import { useTodos } from '../composables/useTodos'

    export default {
        components: { Modal },
        setup() {
            const { currentTab, visible, newTodo, pending, getTodosByTab, toggleTodo, showModal, hideModal, addTodo } = useTodos()

            return {
                currentTab, 
                visible,
                newTodo,
                pending, 
                getTodosByTab,

                toggleTodo,
                showModal,
                hideModal,
                addTodo
            }
        }
    }
</script>

<template>
    <h1>Lista de tareas de Thanos</h1>
    <!-- <h4>Tareas: {{ $store.state.todos.length }}</h4> -->
    <!-- <h4>Todos: {{ all.length }}</h4>
    <h4>Completed: {{ completed.length }}</h4> -->
    <h4>Pending: {{ pending.length }}</h4>
    <br />
    <button
        :class="{ 'active': currentTab === 'all' }"
        @click="currentTab = 'all'"
    >
        Todos
    </button>
    <button
        :class="{ 'active': currentTab === 'completed' }"
        @click="currentTab = 'completed'"
    >
        Completados
    </button>
    <button
        :class="{ 'active': currentTab === 'pending' }"
        @click="currentTab = 'pending'"
    >
        Pendientes
    </button>
    <div>
        <ul>
            <li
                v-for="todo in getTodosByTab" :key="todo.id"
                :class="{ 'completed': todo.completed }"
                @dblclick="toggleTodo(todo.id)"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>
    <button @click="showModal">Crear todo</button>
    <Modal v-if="visible" @on:close="hideModal">
        <template v-slot:header>
            <h2>Crear todo</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="addTodo">
                <label>Todo</label>
                <br />
                <input 
                    type="text"
                    v-model="newTodo"
                >
            </form>
        </template>
        <template v-slot:footer>
                <br />
                <br />
            <button @click="addTodo">Crear</button>
        </template>
    </Modal>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul {
        width: 300px;
        text-align: left;
    }

    li {
        cursor: pointer;
    }

    .active {
        background-color: #2c3e50;
        color: white;
    }

    .completed {
        text-decoration: line-through;
    }
</style>