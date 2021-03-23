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
    },
    async saveNewDish({dispatch}, {title, entries}) {
        if(!Array.isArray(entries)) {
            return false;
        }

        let ingrdj = [];
        for(let i=0;i<entries.length;i++) {
            ingrdj.push({
                "id": entries[i].ingredient,
                "amount": entries[i].amount,
                "unit": entries[i].unit
            })
        }

        const response = await axios.post('http://localhost:3000/api/dish/', {}, {
            headers: {
                userId: store.getters.userId,
                name: title,
                ingredients: JSON.stringify(ingrdj)
            }
        });

        if(response.status === 404 || response.status === 400) {
            return false;
        } else {
            await dispatch('fetchDishes');
            return true;
        }
    }
};


const mutations = {
    setUserDish: (state, userDish) => (state.userDish = userDish),
    setSingleDish: (state, singleDish) => (state.singleDish = singleDish),
    // TODO maybe do it better - idk?
    // dummy: (state) => (state)
};


export default {
    state,
    getters,
    actions,
    mutations
};
