import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import store from './vuex/index'
import http from './http'

Vue.prototype.$axios = axios
Vue.prototype.$http = http

Vue.config.productionTip = false
    //组件
import vant from './vant/index'
vant()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')