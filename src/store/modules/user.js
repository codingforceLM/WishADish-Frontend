import axios from 'axios';
import store from '@/store';

const state = {
    user: {},
    groups: [],
};

const getters = {
    singleUser:  state => state.user,
    groups: state => state.groups
};


const actions = {
    async fetchUser({commit}) {
        try {
            const userId = store.getters.userId
            if(userId == ''){
                console.log("error: userId unknown")
                return
            }
            const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
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
    },
    async fetchUserGroups({commit}) {
        try {
            const response = await axios.get('http://localhost:3000/api/user/'+store.getters.userId+'/groups');
            if (response.status === 200) {
                commit('setUserGroups', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }
};


const mutations = {
    setUser: (state, user) => (state.user = user),
    setUserGroups: (state, groups) => (state.groups = groups)
};


export default {
    state,
    getters,
    actions,
    mutations
};
