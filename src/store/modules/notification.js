
const state = {
    msg: "",
    show: false
};

const getters = {
    showState: state => state.show,
    notMsg:  state => state.msg
};


const actions = {
    updateNotification({commit}, {s, m}) {
        console.log("show snackbar s:"+s+";m:"+m);
        if([s, m].includes(undefined)) {
            return;
        }
        commit('setMsg', m);
        commit('setShow', s);
    }
};


const mutations = {
    setMsg: (state, msg) => (state.msg = msg),
    setShow: (state, show) => (state.show = show)
};


export default {
    state,
    getters,
    actions,
    mutations
};
