<script>
  import { useAuth } from '@/modules/auth/composables/useAuth'

  export default {
    setup() {
      const { authStatus, checkAuthExists } = useAuth()

      checkAuthExists()

      return {
        authStatus
      }
    },
  }
</script>

<template>
  <h1 v-if="authStatus === 'checking'">Revisando autenticacion...</h1>
  <router-view v-else />
</template>