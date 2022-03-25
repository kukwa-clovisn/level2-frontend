import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/Home'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Login',
        name: 'Login',
        component: () => import( /* webpackChunkName: "Login" */ '../components/login.vue')
    }, {
        path: '/Register',
        name: 'Register',
        component: () => import( /* webpackChunkName: "Register" */ '../components/Register.vue')
    }, {
        path: '/overview',
        name: 'Client',
        component: () => import('../components/client.vue')
    }, {
        path: '/Page',
        name: 'Page',
        component: () => import( /* webpackChunkName: "Page" */ '../components/Page.vue')
    }, {
        path: '/Demo',
        name: 'Demo',
        component: () => import( /* webpackChunkName: "Demo" */ '../components/Demo.vue')
    }, {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import( /* webpackChunkName: "Dashboard" */ '../components/Dashboard.vue')
    },
    {
        path: '/Directory',
        name: 'Directory',
        component: () => import( /* webpackChunkName: "Directory" */ '../components/Directory.vue')
    },
    {
        path: '/ChatLogic',
        name: 'ChatLogic',
        component: () => import( /* webpackChunkName: "ChatLogic" */ '../components/ChatLogic.vue')
    }, {
        path: '/Projects',
        name: 'Projects',
        component: () => import('../components/Projects.vue')
    }, {
        path: '/chatBox',
        name: 'chatBox',
        component: () => import('../components/chatBox.vue')
    }, {
        path: '/online',
        name: 'online',
        component: () => import('../components/online.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router