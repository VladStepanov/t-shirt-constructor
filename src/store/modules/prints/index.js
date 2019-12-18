import prints from '@/models/prints'
import color from '@/store/modules/prints/color'
import filters from '@/store/modules/prints/filters'
import sides from '@/models/sides'

export default {
  namespaced: true,
  modules: {
    color,
    filters
  },
  state: () => ({
    curPrint: '',
    prints: [...prints.map(print => ({ ...print, side: '', color: '' }))],
    selected: [],
    sides
  }),
  mutations: {
    SET_PRINT: (state, print) => { state.curPrint = print },
    SELECT_PRINT: (state, print) => { state.selected.push(print) },
    SELECT_RESET: (state) => { state.selected = [] },
    SET_SIDE: (state, side) => {
      const print = state.prints.find(print => print.id === state.curPrint)
      print.side = side
    }
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
    },
    setSide ({ commit }, side) {
      commit('SET_SIDE', side)
    }
  },
  getters: {
    curPrint: ({ prints, curPrint }) => prints.find(print => print.id === curPrint),
    printById: ({ prints }) => id => prints.find(print => print.id === id),
    haveSelected: (state) => !!state.selected.length,
    printsToRender: ({ selected }, { curPrint, sideForCurPrint }, rootState, rootGetters) => {
      const prints = [...selected]
      if (curPrint && rootGetters.curView === sideForCurPrint) prints.push(curPrint)

      return prints
    },
    havePrintsToRender: (state, { printsToRender }) => {
      return !!printsToRender.length
    },
    sideForCurPrint: (state, { curPrint }) => (curPrint && curPrint.side)
  }
}
