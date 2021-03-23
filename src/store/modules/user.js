import axios from 'axios';
import store from '@/store'
const state = {
    user: {}
};

const getters = {
    singleUser:  state => state.user
};


const actions = {
    async fetchUser({commit}) {
        try {
            const response = await axios.get(`http://localhost:3000/api/user/${store.getters.userId}`);
            console.log("fetchUser:")
            console.log(response)
            if (response.status == 200) {
                commit('setUser', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }

};


const mutations = {
    setUser: (state, user) => (state.user = user)
};


export default {
    state,
    getters,
    actions,
    mutations
};
