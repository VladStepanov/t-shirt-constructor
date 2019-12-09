import types from '@/models/types.json'
import collections from '@/models/collections.json'
import genders from '@/models/genders.json'

export default {
  namespaced: true,
  state: () => ({
    curType: '',
    curCollection: '',
    curGender: '',
    types: [
      {
        title: 'Все',
        code: ''
      }, ...types],
    collections: [
      {
        title: 'Все',
        code: ''
      }, ...collections],
    genders: [
      {
        title: 'Все',
        code: ''
      }, ...genders]
  }),
  mutations: {
    SET_TYPE: (state, type) => { state.curType = type },
    SET_COLLECTION: (state, collection) => { state.curCollection = collection },
    SET_GENDER: (state, gender) => { state.curGender = gender }
  },
  actions: {
    resetFilters ({ commit }) {
      commit('SET_TYPE', '')
      commit('SET_COLLECTION', '')
      commit('SET_GENDER', '')
      commit('SET_MODEL', '', { root: true })
      commit('SET_MATERIAL', '', { root: true })
    }
  },
  getters: {
    suitableModels: (state, getters, rootState) => {
      return rootState.models.entities
        .filter(entity => {
          return state.curCollection ? entity.collection === state.curCollection : true
        })
        .filter(entity => {
          return state.curGender ? entity.gender === state.curGender : true
        })
        .filter(entity => {
          return state.curType ? entity.type === state.curType : true
        })
    }
  }
}
