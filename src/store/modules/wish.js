import axios from 'axios';
import store from '@/store'

const state = {
    userWishDate: [],
    userWishMonth: [],
    selectedDate: ""
};

const getters = {
    allUserWishDate: state => state.userWishDate,
    allUserWishMonth: state => state.userWishMonth,
    selectedDate: state => state.selectedDate
};


const actions = {
    async fetchUserWishToday({commit}) {
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        try {
            const date = new Date()
            let month = date.getMonth()+1
            let day = date.getDate()
            let year = date.getFullYear()
            if(day<10){
                day="0"+day
            }
            if(month<10){
                month="0"+month
            }
            const response = await axios.get(`http://localhost:3000/api/wish/`, {
                headers: {
                    'userId': userId,
                    'day': day,
                    'month': month,
                    'year': year
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
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/wish/`, {
                headers: {
                    'userId': userId,
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
    },
    async fetchUserWishMonth({commit},{month,year}) {
        const userId = store.getters.userId
        if(userId == ''){
            console.log("error: userId unknown")
            return
        }
        try {
            const response = await axios.get(`http://localhost:3000/api/wish/`, {
                headers: {
                    'userId': userId,
                    'month': month,
                    'year': year
                }
            });
            console.log("fetchUserWishMonth:")
            console.log(response)
            if (response.status == 200) {
                commit('setUserWishMonth', response.data);
            } else {
                console.log("error: "+response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    },
    async saveNewWish({dispatch}, {daytime, dish, group, date}) {
        console.log("params", daytime, dish, group, date)
        try {
            const response = await axios.post("http://localhost:3000/api/wish", {}, {
                headers: {
                    userId: store.getters.userId,
                    groupId: group,
                    dishId: dish,
                    daytime: daytime,
                    wishDate: date
                }
            });

            if (response.status < 200 || response > 299) {
                console.log("Couldnt save new Wish");
                return false;
            } else {
                console.log("Saved new Wish");
                dispatch("fetchUserWishToday");
                return true;
            }
        } catch (e) {
            console.log("Couldnt save new Wish");
            return false;
        }
    }
};


const mutations = {
    setUserWishToday: (state, userWishDate) => (state.userWishDate = userWishDate),
    setUserWishDate: (state, userWishDate) => (state.userWishDate = userWishDate),
    setUserWishMonth: (state, userWishMonth) => (state.userWishMonth = userWishMonth),
    setSelectedDate: (state, selectedDate) => (state.selectedDate = selectedDate)
};


export default {
    state,
    getters,
    actions,
    mutations
};
