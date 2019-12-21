import _ from 'lodash'

export default {
  state: () => ({
    selected: {
      front: [],
      rear: []
    }
  }),
  mutations: {
    SELECT_PRINT: (state, { print, side }) => { state.selected[side].push(print) },
    SELECT_RESET: (state) => { state.selected = { front: [], rear: [] } }
  },
  actions: {
    selectPrint ({ commit, dispatch, getters }, printId) {
      if (!printId) return

      const print = _.cloneDeep(getters.printById(printId))
      commit('SELECT_PRINT', { print, side: print.side })
      dispatch('prints/setPrint', '', { root: true })
    },
    selectedReset ({ commit }) {
      commit('SELECT_RESET')
    }
  },
  getters: {
    haveSelected: (state) => !!(state.selected.front.length || state.selected.rear.length),
    isSelectedById: (state) => id => {
      let isSelected = false
      for (let side in state.selected) {
        for (let print of state.selected[side]) {
          if (print.id === id) isSelected = true
        }
      }
      return isSelected
    },
    selectedPrints: (state) => {
      let selectedPrints = []
      for (let side in state.selected) {
        for (let print of state.selected[side]) {
          selectedPrints = [...selectedPrints, print]
        }
      }

      return selectedPrints
    }
  }
}
