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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router