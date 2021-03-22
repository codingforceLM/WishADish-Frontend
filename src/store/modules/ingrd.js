import axios from 'axios';

const state = {
    userIngrd: [],
    singleIngrd: {}
};

const getters = {
    allUserIngrd:  state => state.userIngrd,
    singleIngrd:  state => state.singleIngrd
};


const actions = {
    async fetchUserIngrd({commit}) {
        try {
            const response = await axios.get(`http://localhost:3000/api/ingrd/`, {
                headers: {
                    'userId': '8bdb8aed-e579-4b25-a16a-9cf219572ca7'
                }
            });
            console.log("fetchUserIngrd:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserIngrd', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async fetchIngrd({commit},id) {
        try {
            const response = await axios.get(`http://localhost:3000/api/ingrd/${id}`);
            console.log("fetchIngrd:")
            console.log(response)
            if (response.status == 200) {
                commit('setSingleIngrd', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }

};


const mutations = {
    setUserIngrd: (state, userIngrd) => (state.userIngrd = userIngrd),
    setSingleIngrd: (state, userIngrd) => (state.userIngrd = userIngrd)
};


export default {
    state,
    getters,
    actions,
    mutations
};
