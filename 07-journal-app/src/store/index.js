import { createStore } from 'vuex'
import { journalModule } from '@/modules/daybook/store/journal'
import { authModule } from '@/modules/auth/store'

export const store = createStore({
    modules: {
        journal: journalModule,
        auth: authModule
    }
})