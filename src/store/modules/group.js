import axios from 'axios';
import store from '@/store'

const state = {
    groupList: [],
    group: {}
};

const getters = {
    allGroups: state => state.groupList,
    singleGroup:  state => state.group
};


const actions = {
    async fetchGroups({commit}) {
        try {
            const userId = store.getters.userId
            if(userId == ''){
                console.log("error: userId unknown")
            }
            const response = await axios.get('http://localhost:3000/api/group', {
                headers: {
                    'userId': userId
                }
            });
            if (response.status == 200) {
                commit('setGroups', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async fetchGroup({commit},id) {
        try {
            const response = await axios.get(`http://localhost:3000/api/group/${id}`);
            if (response.status == 200) {
                console.log(response.data)
                commit('setGroup', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },

    async filterMatches({commit}, e) {
        // Get selected number
        const stars = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

        const response = await axios.get(
            `http://localhost:8080/api/hltv/today?stars=${stars}`
        );

        commit('setMatches', response.data);
    }

};


const mutations = {
    setGroups: (state, groupList) => (state.groupList = groupList),
    setGroup: (state, group) => (state.group = group)
};


export default {
    state,
    getters,
    actions,
    mutations
};
