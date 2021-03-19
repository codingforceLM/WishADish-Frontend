import Vue from 'vue'
import Vuex from 'vuex'
import group from "@/store/modules/group";
import user from "@/store/modules/user";
import ingrd from "@/store/modules/ingrd"
import dish from "@/store/modules/dish"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        group,
        user,
        ingrd,
        dish
    }
})
