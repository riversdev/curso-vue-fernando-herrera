<script>
    import { ref } from 'vue'
    import Modal from '../components/Modal.vue'

    export default {
        components: { Modal },
        setup() {
            const isOpen =  ref(false)

            return {
                isOpen,
                openModal: () => isOpen.value = true,
                closeModal: () => isOpen.value = false,
            }
        }
    }
</script>

<template>
    <h1>Slots</h1>
    <button @click="openModal">Abrir modal</button>
    <Modal v-if="isOpen" @on:close="closeModal" title="Custom title">
        <!-- <h2>Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>Salir</button> -->
        <template v-slot:header>
            <h2>Modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>
        </template>
    </Modal>
</template>

<style scoped>

</style>