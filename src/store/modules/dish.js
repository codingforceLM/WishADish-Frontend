import axios from 'axios';
import store from '@/store'

const state = {
    userDish: [],
    singleDish: {}
};

const getters = {
    allDishes:  state => state.userDish,
    singleDish: state => state.singleDish
};


const actions = {
    async fetchDishes({commit}) {
        try {
            const response = await axios.get(`http://localhost:3000/api/dish/`, {
                headers: {
                    'userId': store.getters.userId
                }
            });
            console.log("fetchDishes:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserDish', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async fetchDish({commit}, id) {
        try {
            const response = await axios.get(`http://localhost:3000/api/dish/${id}`);
            console.log("fetchDish:")
            console.log(response)
            if (response.status == 200) {
                commit('setSingleDish', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }


};


const mutations = {
    setUserDish: (state, userDish) => (state.userDish = userDish),
    setSingleDish: (state, singleDish) => (state.singleDish = singleDish)
};


export default {
    state,
    getters,
    actions,
    mutations
};
