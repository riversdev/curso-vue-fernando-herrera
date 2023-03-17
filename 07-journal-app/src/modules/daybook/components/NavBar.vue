<script>
    export default {
        name: 'NavBar',
        setup() {
            
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
        Daybook
      </a>
      <div class="d-flex">
        <button class="btn btn-outline-info">
            <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</template>