import axios from 'axios';

const state = {
    userIngrd: []
};

const getters = {
    allUserIngrd:  state => state.userIngrd
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
    }

};


const mutations = {
    setUserIngrd: (state, userIngrd) => (state.userIngrd = userIngrd)
};


export default {
    state,
    getters,
    actions,
    mutations
};
