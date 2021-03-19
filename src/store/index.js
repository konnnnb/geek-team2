import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: null,
  },
  getters: {
    uid: (state) => state.uid,
  },
  mutations: {
    updateUid(state, uid) {
      state.uid = uid
    },
  },
})
