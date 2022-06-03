import HomeComponent from './components/Home.vue'
import SignupComponent from './components/SignUp.vue'
import LoginComponent from './components/Login.vue'
import AddComponent from './components/Add.vue'
import UpdateComponent from './components/Update.vue'

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
    },
    {
        name: 'AddRoute',
        component: AddComponent,
        path: '/add'
    },
    {
        name: 'UpdateRoute',
        component: UpdateComponent,
        path: '/update/:id'
    }


];

const router = createRouter({

    history: createWebHashHistory(),
    routes

})

export default router;