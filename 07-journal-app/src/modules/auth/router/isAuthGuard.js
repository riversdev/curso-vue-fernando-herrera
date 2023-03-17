import { store } from '@/store'

export const isAuthGuard = async (to, from, next) => {
    const { ok } = await store.dispatch('auth/checkAuthExists')

    if (ok) {
        next()
    } else {
        next({ name: 'login' })
    }
}