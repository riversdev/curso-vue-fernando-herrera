<script>
    import { defineAsyncComponent } from 'vue'

    export default {
        name: 'NoEntrySelected',
        components: { 
            FabButton: defineAsyncComponent(() => import('@/modules/daybook/components/FabButton.vue'))
        },
    }
</script>

<template>
    <div class="d-flex justify-content-center align-items-center h-100">
        <h1>No hay nada seleccionado</h1>
    </div>
    <FabButton @on:click="$router.push({ name: 'entry-view', params: { id: 'new' } })" />
</template>