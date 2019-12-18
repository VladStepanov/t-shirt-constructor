export default {
  state: () => ({
    selected: []
  }),
  mutations: {
    SELECT_PRINT: (state, print) => { state.selected.push(print) },
    SELECT_RESET: (state) => { state.selected = [] }
  },
  actions: {
    selectPrint ({ commit, dispatch, getters }, printId) {
      if (!printId) return

      const print = getters.printById(printId)
      dispatch('prints/setPrint', '', { root: true })
      commit('SELECT_PRINT', print)
    },
    selectedReset ({ commit }) {
      commit('SELECT_RESET')
    }
  },
  getters: {
    haveSelected: (state) => !!state.selected.length,
    isSelectedById: (state) => id => state.selected.some(print => print.id === id)
  }
}
