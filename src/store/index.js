import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from './entities'
import materials from './modules/materials'
import colors from './modules/colors'
import filters from './modules/filters'
import models from './modules/models'
import sizes from './modules/sizes'
import views from './modules/views'
import prints from './modules/prints'

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
    models,
    sizes,
    views,
    prints
  }
})
