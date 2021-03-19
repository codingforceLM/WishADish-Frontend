import axios from 'axios';

const state = {
    userDish: []
};

const getters = {
    allUserDishes:  state => state.userDish
};


const actions = {
    async fetchUserDish({commit}) {
        try {
            const response = await axios.get(`http://localhost:3000/api/dish/`, {
                headers: {
                    'userId': '8bdb8aed-e579-4b25-a16a-9cf219572ca7'
                }
            });
            console.log("fetchUserDish:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserDish', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }

};


const mutations = {
    setUserDish: (state, userDish) => (state.userDish = userDish)
};


export default {
    state,
    getters,
    actions,
    mutations
};
