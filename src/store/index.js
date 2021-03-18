import Vue from 'vue'
import Vuex from 'vuex'
import group from "@/store/modules/group";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        group
    }
})
