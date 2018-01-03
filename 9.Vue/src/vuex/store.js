import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    username: '',
    userid: 0
}

const mutations = {
    changUsername(state, value) {
        state.username = value;
    },
    changUserid(state, value) {
        state.userid = value;
    }
}

export default new Vuex.Store({
    state,
    mutations
});