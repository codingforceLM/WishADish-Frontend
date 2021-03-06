import Vue from 'vue'
import Vuex from 'vuex'
import group from "@/store/modules/group";
import user from "@/store/modules/user";
import ingrd from "@/store/modules/ingrd"
import dish from "@/store/modules/dish"
import wish from "@/store/modules/wish"
import shoppinglist from "@/store/modules/shoppinglist"
import authentication from "@/store/modules/authentication"
import notification from "@/store/modules/notification";
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        group,
        user,
        ingrd,
        dish,
        wish,
        authentication,
        shoppinglist,
        notification
    },
    plugins: [createPersistedState({
        path: ['authentication.token', 'authentication.userId']
    })]
})
