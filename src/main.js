// App import modules
import { createApp } from 'vue'
import App from './App.vue'

// Router Plugin import modules
import router from './routers'

// Css imports
import './assets/css/index.css'
import './assets/css/SignupLogin.css'

// Main app
createApp(App).use(router).mount('#app')
