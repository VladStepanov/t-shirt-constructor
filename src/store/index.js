import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from './entities'
import materials from './modules/materials'
import activeColors from './modules/activeColors'
import genders from './modules/genders'
import collections from './modules/collections'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    materials,
    activeColors,
    genders,
    collections
  }
})
