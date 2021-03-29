import axios from "axios";

const state = {
    userId: '',
    token: ''
};

const getters = {
    token:  state => state.token,
    userId: state => state.userId,
};

const actions = {
    async login({commit}, {email, password}) {
        const response = await axios.post('http://localhost:3000/api/login/', {}, {
            headers: {
                'email': email,
                'password': password
            }
        });

        if (response.status === 200) {
            const token = response.data.token;
            const userId = response.data.userId;

            console.log("token "+token);

            commit('setToken', token);
            commit('setLoggedInUser', userId);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Token stored in state at this point

            return true;
        } else {
            console.log("error: "+response.statusText)
            return false;
        }

    },
    async logout({commit}) {
        commit('reset');
    }
};


const mutations = {
    setToken: (state, token) => {
        state.token = token;
        console.log("stored: "+token);
    },
    setLoggedInUser: (state, user) => (state.userId = user),
    reset: (state) => {
        state.userId = '',
            state.token = ''
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
