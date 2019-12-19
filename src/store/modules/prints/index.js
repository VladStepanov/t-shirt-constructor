import prints from '@/models/prints'
import color from '@/store/modules/prints/color'
import filters from '@/store/modules/prints/filters'
import sides from '@/models/sides'
import selection from '@/store/modules/prints/selection'

export default {
  namespaced: true,
  modules: {
    color,
    filters,
    selection
  },
  state: () => ({
    curPrint: '',
    prints: [...prints.map(print => ({ ...print, side: '', color: '' }))],
    sides
  }),
  mutations: {
    SET_PRINT: (state, print) => { state.curPrint = print },
    SET_SIDE: (state, { side, printId }) => {
      const print = state.prints.find(print => print.id === printId)
      print.side = side
    },
    SET_COLOR: (state, { color, printId }) => {
      const print = state.prints.find(print => print.id === printId)
      print.color = color
    }
  },
  actions: {
    setPrint ({ commit, dispatch, rootGetters }, printId) {
      const isAlreadySelected = rootGetters['prints/isSelectedById'](printId)

      if (isAlreadySelected) return

      commit('SET_PRINT', printId)
      if (printId) dispatch('setSide', { side: rootGetters.curView })
    },
    setSide ({ commit, state }, { side, printId = state.curPrint }) {
      commit('SET_SIDE', { side, printId })
    },
    setColor ({ commit, state }, { color, printId = state.curPrint }) {
      commit('SET_COLOR', { color, printId })
    }
  },
  getters: {
    curPrint: ({ prints, curPrint }, getters) => {
      return getters['filters/suitablePrints'].find(print => print.id === curPrint)
    },
    printById: ({ prints }) => id => prints.find(print => print.id === id),
    printsToRender: (state, { curPrint, sideForCurPrint }, rootState, rootGetters) => {
      const prints = [...rootState.prints.selection.selected[rootGetters.curView]]
      if (curPrint && rootGetters.curView === sideForCurPrint) prints.push(curPrint)

      return prints
    },
    havePrintsToRender: (state, { printsToRender }) => {
      return !!printsToRender.length
    },
    sideForCurPrint: (state, { curPrint }) => (curPrint && curPrint.side),
    curPrintColor: (state, { curPrint }) => (curPrint && curPrint.color),
    curPrintColors: (state, { curPrint }) => (curPrint && curPrint.colors)
  }
}
