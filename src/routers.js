import HomeComponent from './components/Home.vue'
import SignupComponent from './components/SignUp.vue'
import LoginComponent from './components/Login.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'HomeRoute',
        component: HomeComponent,
        path: '/'
    },
    {
        name: 'SignupRoute',
        component: SignupComponent,
        path: '/sign-up'
    },
    {
        name: 'LoginRoute',
        component: LoginComponent,
        path: '/login'
    }


];

const router = createRouter({

    history: createWebHashHistory(),
    routes

})

export default router;