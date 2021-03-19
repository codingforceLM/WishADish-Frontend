import Vue from 'vue'
import Vuex from 'vuex'
import group from "@/store/modules/group";
import user from "@/store/modules/user";
import ingrd from "@/store/modules/ingrd"
import dish from "@/store/modules/dish"
import authentication from "@/store/modules/authentication"
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        group,
        user,
        ingrd,
        dish,
        authentication
    },
    plugins: [createPersistedState({
        path: ['authentication.token', 'authentication.userId']
    })]
})
