<template>
  <router-view />
  <img alt="Vue logo" src="./assets/logo.png" class="logo" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 100px;
}

.text-vue {
  color: #42b983;
}

.btn-vue {
  background-color: #42b983 !important;
  border-color: #42b983 !important;
}

.btn-vue:hover {
  background-color: #42c183 !important;
  border-color: #42c183 !important;
}

.btn-vue:active {
  background-color: #42b183 !important;
  border-color: #42b183 !important;
}

.btn-outline-vue {
  background-color: white !important;
  border-color: #42b983 !important;
  color: #42b983 !important;
}

.btn-outline-vue:hover {
  background-color: #42b983 !important;
  border-color: #42b983 !important;
  color: white !important;
}

.btn-outline-vue:active {
  background-color: #42b183 !important;
  border-color: #42b183 !important;
  color: white !important;
}
</style>