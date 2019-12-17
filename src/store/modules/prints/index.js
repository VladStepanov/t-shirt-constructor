import color from '@/store/modules/prints/color'
import prints from '@/models/prints'
import filters from '@/store/modules/prints/filters'

export default {
  namespaced: true,
  state: () => ({
    curPrint: '',
    prints,
    selected: []
  }),
  mutations: {
    SET_PRINT: (state, print) => { state.curPrint = print },
    SELECT_PRINT: (state, print) => { state.selected.push(print) },
    SELECT_RESET: (state) => { state.selected = [] }
  },
  actions: {
    setPrint ({ commit, state }, printId) {
      const isAlreadySelected = state.selected.some(({ id }) => id === printId)
      if (isAlreadySelected) return
      commit('SET_PRINT', printId)
    },
    selectPrint ({ commit, dispatch, getters }, printId) {
      if (!printId) return
      const print = getters.printById(printId)
      dispatch('setPrint', '')
      commit('SELECT_PRINT', print)
    },
    selectedReset ({ commit }) {
      commit('SELECT_RESET')
    }
  },
  getters: {
    curPrint: ({ prints, curPrint }) => prints.find(print => print.id === curPrint),
    printById: ({ prints }) => id => prints.find(print => print.id === id),
    haveSelected: (state) => !!state.selected.length,
    printsToRender: ({ selected }, { curPrint }) => {
      const prints = [...selected]
      if (curPrint) prints.push(curPrint)
      return prints
    },
    havePrintsToRender: (state, { printsToRender }) => {
      return !!printsToRender.length
    }
  },
  modules: {
    color,
    filters
  }
}
