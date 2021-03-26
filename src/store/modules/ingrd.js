import axios from 'axios';
import store from '@/store'

const state = {
    userIngrd: [],
    singleIngrd: {},
    systemIngrd: [],
    associatedIngrd: []
};

const getters = {
    allUserIngrd:  state => state.userIngrd,
    singleIngrd:  state => state.singleIngrd,
    systemIngrd: state => state.systemIngrd,
    associatedIngrd: state => state.associatedIngrd
};

const actions = {
    async fetchUserIngrd({commit}) {
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/ingrd/`, {
                headers: {
                    'userId': userId
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
    async fetchAssociatedIngrd({commit}) {
        const userId = store.getters.userId;
        const response = await axios.get("http://localhost:3000/api/group/", {
            headers: {
                userId: userId
            }
        });

        if(response.status < 200 || response.status > 299) {
            console.log("Couldnt get all groups for user");
            return
        }

        let groups = response.data;
        console.log(groups);
        let allUser = [];
        for(let i=0;i<groups.length;i++) {
            const response = await axios.get("http://localhost:3000/api/group/"+groups[i].id);
            if(response.status < 200 || response.status > 299) {
                console.log("Couldnt get all user");
                return
            }
            allUser = allUser.concat(response.data.user);
        }

        let nondup = [];
        for(let i=0;i<allUser.length;i++) {
            let userId = allUser[i].id;
            if(!nondup.includes(userId)) {
                nondup.push(userId);
            }
        }

        let allIngrd = [];
        for(let i=0;i<nondup.length;i++) {
            const response = await axios.get("http://localhost:3000/api/ingrd/", {
                headers: {
                    userId: nondup[i]
                }
            });
            if(response.status < 200 || response.status > 299) {
                console.log("Couldnt get all ingredients");
                return;
            }
            allIngrd = allIngrd.concat(response.data);
        }

        let nondupIngrd = [];
        for(let i=0;i<allIngrd.length;i++) {
            let ingrd = allIngrd[i]
            if(!nondupIngrd.includes(ingrd)) {
                nondupIngrd.push(ingrd);
            }
        }

        console.log(nondupIngrd);

        commit("setAssociatedIngrd", nondupIngrd);
    },
    async saveNewIngrd({dispatch}, title) {
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        const response = await axios.post('http://localhost:3000/api/ingrd/', {}, {
            headers: {
                userId: userId,
                name: title,
            }
        });

        if(response.status === 404 || response.status === 400) {
            return false;
        } else {
            dispatch('fetchUserIngrd');
            return true;
        }
    },
};


const mutations = {
    setUserIngrd: (state, userIngrd) => (state.userIngrd = userIngrd),
    setSingleIngrd: (state, userIngrd) => (state.userIngrd = userIngrd),
    setSystemIngrd: (state, systemIngrd) => (state.systemIngrd = systemIngrd),
    setAssociatedIngrd: (state, associatedIngrd) => (state.associatedIngrd = associatedIngrd)
};


export default {
    state,
    getters,
    actions,
    mutations
};
