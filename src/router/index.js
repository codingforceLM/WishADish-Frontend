import Vue from 'vue'
import VueRouter from 'vue-router'
import Group from '../views/Group.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Group',
        component: Group
    },
    {
        path: '/about',
        name: 'Profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile')
    }
]

const router = new VueRouter({
    routes
})

export default router
