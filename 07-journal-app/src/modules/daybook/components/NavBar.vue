<script>
    import { useRouter } from 'vue-router'
    import { useAuth } from '@/modules/auth/composables/useAuth'

    export default {
        name: 'NavBar',
        setup() {
            const router = useRouter()
            const { username, logout } = useAuth()

            const startLogout = () => {
              logout()

              router.push({ name: 'login' })
            }

            return {
              username,

              startLogout,
            }
        },
    }
</script>

<template>
  <nav class="navbar bg-body-tertiary bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">
        <img
          src="@/assets/logo.png"
          alt="Logo"
          height="24"
          class="d-inline-block align-text-top me-2"
        />
        {{ username }}
      </a>
      <div class="d-flex">
        <button class="btn btn-outline-info" @click="startLogout">
            <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</template>