import axios from 'axios';
import store from '@/store'

const state = {
    userList: [],
    list: {}
};

const getters = {
    allShoppingLists:  state => state.userList,
    singleShoppingList:  state => state.list
};


const actions = {
    async fetchShoppingLists({commit}) {
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/list/`, {
                headers: {
                    'userId': userId
                }
            });
            console.log("fetchUserLists:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserList', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },

    async fetchShoppingList({commit},id) {
        try {
            const response = await axios.get(`http://localhost:3000/api/list/${id}`, {
                headers: {
                    'userId': store.getters.userId
                }
            });
            console.log("fetchList:")
            console.log(response)
            if (response.status == 200) {
                commit('setSingleList', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async fetchShoppingListOpen({commit}) {
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/list/`, {
                headers: {
                    'userId': userId,
                    'done': 'true'
                }
            });
            console.log("fetchShoppingListOpen:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserList', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async saveNewShoppingList({dispatch}, {title, groupId}) {
        const response = await axios.post('http://localhost:3000/api/list', {}, {
            headers: {
                userId: store.getters.userId,
                name: title,
                groupId: groupId,
            }
        });

        if(response.status === 404 || response.status === 400) {
            return false;
        } else {
            dispatch('fetchShoppingLists');
            return true;
        }
    },
    async saveEditedShoppingList({dispatch}, {shoppinglist, name, done}) {
        try {
            const response = await axios.put("http://localhost:3000/api/list/", {}, {
                headers: {
                    shoppinglist: JSON.stringify(shoppinglist),
                    name: name,
                    done: done
                }
            });
            console.log("Status: " + response.status);

            if (response.status === 400 || response.status === 404) {
                console.log("Couldnt save shopping list");
                return false;
            } else {
                dispatch('fetchShoppingList', store.getters.singleShoppingList.id);
                dispatch('fetchShoppingLists');
                return true;
            }
        } catch (e) {
            console.log("Couldnt save shopping list");
            return false;
        }
    }
};


const mutations = {
    setUserList: (state, userList) => (state.userList = userList),
    setSingleList: (state, list) => (state.list = list),
};


export default {
    state,
    getters,
    actions,
    mutations
};
