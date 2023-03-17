<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import NavBar from '@/modules/daybook/components/NavBar.vue'
    import EntryList from '@/modules/daybook/components/EntryList.vue'

    export default {
        name: 'DaybookLayout',
        components: { NavBar, EntryList },
        setup() {
            const store = useStore()
            const { isLoading } = computed(() => store.state.journal)

            store.dispatch('journal/loadEntries')

            return {
                isLoading
            }
        },
    }
</script>

<template>
    <NavBar />
    <div v-if="isLoading" class="d-flex align-items-center justify-content-center h-100">
        <div class="alert alert-info" role="alert">
            <i class="fas fa-spin fa-spinner me-2"></i>
            Cargando...
        </div>
    </div>
    <div v-else class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>