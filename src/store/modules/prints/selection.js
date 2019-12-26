import _ from 'lodash'

export default {
  namespaced: true,
  state: () => ({
    selected: []
  }),
  mutations: {
    SELECT_PRINT: (state, { print }) => { state.selected.push(print) },
    DELETE_PRINT: (state, { index }) => {
      state.selected.splice(index, 1)
    },
    SELECT_RESET: (state) => { state.selected = { front: [], rear: [] } }
  },
  actions: {
    selectPrint ({ commit, dispatch, rootGetters }, printId) {
      if (!printId) return

      const print = _.cloneDeep(rootGetters['prints/printById'](printId))
      commit('SELECT_PRINT', { print })
      dispatch('prints/setPrint', '', { root: true })
    },
    deletePrint ({ commit, rootGetters }, { printId, index }) {
      commit('DELETE_PRINT', { index })
    },
    reset ({ commit }) {
      commit('SELECT_RESET')
    }
  },
  getters: {
    haveSelected: (state) => !!state.selected.length,
    isSelectedById: (state) => id => {
      // let isSelected = false
      // for (let side in state.selected) {
      //   for (let print of state.selected[side]) {
      //     if (print.id === id) isSelected = true
      //   }
      // }
      // return isSelected
      return state.selected.some(print => print.id === id)
    },
    selectedPrints: (state) => {
      return state.selected
    }
  }
}
