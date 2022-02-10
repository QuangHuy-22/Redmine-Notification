import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../pages/Login.vue'
import updateTime from '../pages/updateTime.vue'
import createAccount from '../pages/createAccount.vue'
import addEmail from '../pages/addEmail.vue'
import NavBar from '../pages/NavBar.vue'
import NotFound from "../pages/NotFound.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Đăng nhập',
        component: Login,
        meta: {
            title: " Đăng nhập | Risk Manegement",
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home

    },


    {
        path: '/update-time-logtime',
        name: 'update-time',
        component: updateTime,
    },
    {
        path: '/create-account',
        name: 'create-account',
        component: createAccount,
    },
    {
        path: '/add-email',
        name: 'add-email',
        component: addEmail,
    },
    {
        path: '/navbar',
        name: 'navbar',
        component: NavBar,
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    path: '*',
    component: NotFound,
    routes
})
// router.beforeEach((to, from, next) => {
//     if (localStorage.getItem('token') == null) next({ path: '/login' })
//     else next()
// })
export default router