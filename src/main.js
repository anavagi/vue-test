// App import modules
import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Router Plugin import modules
import router from './routers'

// Css imports
import './assets/css/index.css'
import './assets/css/SignupLoginAdd.css'
import './assets/css/Header.css'
import './assets/css/Home.css'
// Main app
// createApp(App).use(router).use(BootstrapVue).use(IconsPlugin).mount('#app')
createApp(App).use(router).mount('#app')


