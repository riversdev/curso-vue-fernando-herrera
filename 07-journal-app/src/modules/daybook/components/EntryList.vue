<script>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'
    import EntryItem from '@/modules/daybook/components/EntryItem.vue'

    export default {
        name: 'EntryList',
        components: { EntryItem },
        setup() {
            const store = useStore()
            const term = ref('')

            return {
              term,

              entriesByTerm: computed(() => store.getters['journal/getEntriesByTerm'](term.value))
            }
        },
    }
</script>

<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <div class="form-floating mb-2">
        <input
          class="form-control"
          id="entryInput"
          placeholder="Entrada"
          v-model="term"
        />
        <label for="entryInput">Entrada</label>
      </div>
      <button class="btn btn-block btn-primary mb-2 w-100" @click="$router.push({ name: 'entry-view', params: { id: 'new' } })">
        <i class="fas fa-plus me-2"></i>
        Nueva entrada
      </button>
    </div>
    <div class="entry-scrollarea px-2">
      <EntryItem v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.entry-list-container
    border-right: 1px solid #2c3e50
    height: calc(100vh - 56px)

.entry-scrollarea
    height: calc(100vh - 180px)
    overflow: scroll
</style>