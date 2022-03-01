import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/Home'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Currency',
        name: 'Currency',
        component: () => import( /* webpackChunkName: "Currency" */ '../components/Currency.vue')
    },
    {
        path: '/Todo',
        name: 'Todo',
        component: () => import( /* webpackChunkName: "Todo" */ '../components/Todo.vue')
    },
    {
        path: '/User',
        name: 'User',
        component: () => import( /* webpackChunkName: "User" */ '../components/User.vue')
    },
    {
        path: '/Watch',
        name: 'Stop Watch',
        component: () => import( /* webpackChunkName: "Watch" */ '../components/Watch.vue')
    },
    {
        path: '/Weather',
        name: 'Weather',
        component: () => import( /* webpackChunkName: "Weather" */ '../components/Weather.vue')
    },
    {
        path: '/Exchange',
        name: 'Exchange',
        component: () => import( /* webpackChunkName: "Exchange" */ '../components/Exchange.vue')
    },
    {
        path: '/BMI',
        name: 'BMI',
        component: () => import( /* webpackChunkName: "BMI" */ '../components/BMI.vue')
    }, {
        path: '/Register',
        name: 'Register',
        component: () => import( /* webpackChunkName: "Register" */ '../components/Register.vue')
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router