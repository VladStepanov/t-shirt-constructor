import Vue from 'vue'
import Vuex from 'vuex'
import materials from './modules/materials'
import activeColors from './modules/activeColors'
import genders from './modules/genders'
import { state, mutations, getters, actions } from './entities'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    materials,
    activeColors,
    genders
  }
})
