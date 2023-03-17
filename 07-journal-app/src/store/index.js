import { createStore } from 'vuex'
import { journalModule } from '@/modules/daybook/store/journal'

export const store = createStore({
    modules: {
        journal: journalModule
    }
})