import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: 'red',
    head: 'blue',
    sleeves: 'green'
  },
  mutations: {
    SET_BODY: (state, bodyColor) => { state.body = bodyColor },
    SET_HEAD: (state, headColor) => { state.head = headColor },
    SET_SLEEVES: (state, sleevesColor) => { state.sleeves = sleevesColor }
  },
  actions: {
  },
  modules: {
  }
})
