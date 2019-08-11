import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions: {
        setId(context, id) {
            context.commit('setGid', id)
        },
        setNum(context, num) {
            context.commit('setNum', num)
        }
    }
})


export default store