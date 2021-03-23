import axios from 'axios';
import store from '@/store'

const state = {
    userWishDate: []
};

const getters = {
    allUserWishDate:  state => state.userWishDate
};


const actions = {
    async fetchUserWishToday({commit}) {
        try {
            const date = new Date()
            let month = date.getMonth()+1
            let day = date.getDate()
            if(day<10){
                day="0"+day
            }
            if(month<10){
                month="0"+month
            }
            const response = await axios.get(`http://localhost:3000/api/wish/`, {
                headers: {
                    'userId': store.getters.userId,
                    'day': day,
                    'month': month
                }
            });
            console.log("fetchUserWishToday:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserWishToday', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async fetchUserWishDate({commit},{day, month, year}) {
        try {
            const response = await axios.get(`http://localhost:3000/api/wish/`, {
                headers: {
                    'userId': store.getters.userId,
                    'day': day,
                    'month': month,
                    'year': year
                }
            });
            console.log("fetchUserWishDate:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserWishDate', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }

};


const mutations = {
    setUserWishToday: (state, userWishDate) => (state.userWishDate = userWishDate),
    setUserWishDate: (state, userWishDate) => (state.userWishDate = userWishDate)
};


export default {
    state,
    getters,
    actions,
    mutations
};
