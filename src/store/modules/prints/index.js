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
    SET_SIDE: (state, side) => {
      const print = state.prints.find(print => print.id === state.curPrint)
      print.side = side
    }
  },
  actions: {
    setPrint ({ commit, state, getters, rootGetters, rootState }, printId) {
      const isAlreadySelected = rootGetters['prints/isSelectedById'](printId)
      // const isAlreadySelected = rootState
      if (isAlreadySelected) return
      commit('SET_PRINT', printId)
    },
    setSide ({ commit }, side) {
      commit('SET_SIDE', side)
    }
  },
  getters: {
    curPrint: ({ prints, curPrint }) => prints.find(print => print.id === curPrint),
    printById: ({ prints }) => id => prints.find(print => print.id === id),
    printsToRender: (state, { curPrint, sideForCurPrint }, rootState, rootGetters) => {
      const prints = [...rootState.prints.selection.selected]
      if (curPrint && rootGetters.curView === sideForCurPrint) prints.push(curPrint)

      return prints
    },
    havePrintsToRender: (state, { printsToRender }) => {
      return !!printsToRender.length
    },
    sideForCurPrint: (state, { curPrint }) => (curPrint && curPrint.side)
  }
}