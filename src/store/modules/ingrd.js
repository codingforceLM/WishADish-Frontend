import axios from 'axios';
import store from '@/store'

const state = {
    userIngrd: [],
    singleIngrd: {},
    systemIngrd: []
};

const getters = {
    allUserIngrd:  state => state.userIngrd,
    singleIngrd:  state => state.singleIngrd,
    systemIngrd: state => state.systemIngrd
};

const actions = {
    async fetchUserIngrd({commit}) {
        try {
            const response = await axios.get(`http://localhost:3000/api/ingrd/`, {
                headers: {
                    'userId': store.getters.userId
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
    },

    async fetchDeufaultIngrd({commit}) {
        try {
            const systemUser = 'dbaaa759-149b-4fa4-8451-b87a18837b2a'
            const response = await axios.get(`http://localhost:3000/api/ingrd/`, {
                headers: {
                    'userId': systemUser
                }
            });
            console.log("fetchUserIngrd:")
            console.log(response)
            if (response.status == 200) {
                commit('setSystemIngrd', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async saveNewIngrd({dispatch}, title) {
        const response = await axios.post('http://localhost:3000/api/ingrd/', {}, {
            headers: {
                userId: store.getters.userId,
                name: title,
            }
        });

        if(response.status === 404 || response.status === 400) {
            return false;
        } else {
            dispatch('fetchUserIngrd');
            return true;
        }
    }
};


const mutations = {
    setUserIngrd: (state, userIngrd) => (state.userIngrd = userIngrd),
    setSingleIngrd: (state, userIngrd) => (state.userIngrd = userIngrd),
    setSystemIngrd: (state, systemIngrd) => (state.systemIngrd = systemIngrd)

};


export default {
    state,
    getters,
    actions,
    mutations
};
