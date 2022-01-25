import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../pages/Login.vue'
import updateTime from '../pages/updateTime.vue'
import createAccount from '../pages/createAccount.vue'
import addEmail from '../pages/addEmail.vue'
import NavBar from '../pages/NavBar.vue'
import Recover from "../components/Recover.vue"
import Verify from "../components/Verify.vue"
import ChangePassword from "../components/ChangePassword.vue"
import ChangePasswordVerify from "../components/ChangePasswordVerify.vue"
import NotFound from "../pages/NotFound.vue"
import Lineness from "../components/Liveness.vue"
import Readiness from "../components/Readiness.vue"
import FooterContent from "../components/FooterContent.vue"
// import health from "./health.js"

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
        path: '/recover',
        name: 'Quên mật khẩu',
        component: Recover,
    },
    {
        path: '/verify',
        name: 'Xác thực Email',
        component: Verify,
    },
    {
        path: '/change-password',
        name: 'Đổi mật khẩu',
        component: ChangePassword,
    },
    {
        path: '/change-password-verify',
        name: 'Đổi mật khẩu xác thực',
        component: ChangePasswordVerify,
    },
    {
        path: '/actuator/liveness',
        name: 'Lineness',
        component: Lineness,
    },
    {
        path: '/actuator/readiness',
        name: 'Readiness',
        component: Readiness,
    },
    {
        path: '/footer-content',
        name: 'FooterContent',
        component: FooterContent,
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