import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from './entities'
import materials from './modules/materials'
import colors from './modules/colors'
import filters from './modules/filters'
import models from './modules/models'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    materials,
    colors,
    filters,
    models
  }
})
