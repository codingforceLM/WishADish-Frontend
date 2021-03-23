import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import Ingrd from '../views/Ingrd.vue'
import Group from '../views/Group.vue'
import Wish from "@/views/Wish";
import Register from "../views/Register";
import Dish from '../views/Dish.vue'
import ShoppingList from '../views/ShoppingList'
import Profile from "@/views/Profile";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Group',
        component: Group
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/wish',
        name: 'Wish',
        component: Wish
    }, {
        path: '/dish',
        name: 'Dish',
        component: Dish
    }, {

        path: '/shoppinglist',
        name: 'ShoppingList',
        component: ShoppingList
    }, {

        path: '/ingrd',
        name: 'Ingrd',
        component: Ingrd
    },
]

const router = new VueRouter({
    routes
})

export default router
