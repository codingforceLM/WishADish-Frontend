import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false

// set auth header
axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters.token}`;
/*axios.interceptors.request.use(function (config) {
    const token = store.state.token;
    console.log("in inteceptor: "+token);
    config.headers.Authorization = token;
});*/

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
