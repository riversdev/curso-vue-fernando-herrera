import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import mapboxgl from 'mapbox-gl'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mapbox-gl/dist/mapbox-gl.css'

if (!navigator.geolocation) {
    alert('Tu navegador no soporta geolocation !')
    throw new Error('Tu navegador no soporta geolocation !')
} else {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja2tvZHh4Y3YwMDhnMnBvY3ozbHUxdGJvIn0.3zptKSSxJrM5VmfjnkKMYA'
}

createApp(App).use(store).use(router).mount('#app')