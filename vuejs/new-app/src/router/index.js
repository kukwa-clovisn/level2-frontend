import {
  createRouter,
  createWebHistory
} from 'vue-router'
import landingpage from '../components/landingpage.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: landingpage
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (Users.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Users" */ '../components/Users.vue')
  },
  {
    path: '/about-user',
    name: 'UserInfo',
    // route level code-splitting
    // this generates a separate chunk (UserInfo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "UserInfo" */ '../components/UserInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router