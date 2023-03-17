<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Swal from 'sweetalert2'
  import { useAuth } from '@/modules/auth/composables/useAuth'

  export default {
    setup() {
      const router = useRouter()
      const { registerUser } = useAuth()
      const userForm = ref({ name: 'Alejandro', email: 'rivers@mail.com', password: '123123' })

      const onSubmit = async () => {
        const { ok, message } = await registerUser({ ...userForm.value })

        if (!ok) return Swal.fire('Error', message, 'error')

        router.push({ name: 'no-entry-selected' })
      }

      return {
        userForm,

        onSubmit,
      }
    },
  }
</script>

<template>
  <span class="login100-form-title p-b-41"> Registro </span>
  <form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit">
    <div class="wrap-input100 validate-input" data-validate="Enter name">
      <input class="input100" type="text" placeholder="Nombre" required v-model="userForm.name" />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>
    <div class="wrap-input100 validate-input" data-validate="Enter email">
      <input class="input100" type="email" placeholder="Correo" required v-model="userForm.email" />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>
    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
        v-model="userForm.password"
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>
    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn" type="submit">Crear cuenta</button>
    </div>
    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">¿Ya tienes cuenta?</router-link>
    </div>
  </form>
</template>