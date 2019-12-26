import prints from '@/models/prints/prints'
import filters from '@/store/modules/prints/filters'
import sides from '@/models/sides'
import selection from '@/store/modules/prints/selection'
import printTypes from '@/models/prints/print-types'
import sizes from '@/models/prints/print-sizes'

export default {
  namespaced: true,
  modules: {
    filters,
    selection
  },
  state: () => ({
    curPrint: '',
    prints: [...prints.map(print => ({
      ...print,
      side: '',
      color: '',
      type: '',
      size: ''
    }))],
    sides,
    sizes
  }),
  mutations: {
    SET_PRINT: (state, print) => { state.curPrint = print },
    SET_SIDE: (state, { side, printId }) => {
      const print = state.prints.find(print => print.id === printId)
      print.side = side
    },
    SET_COLOR: (state, { color, printType, printId }) => {
      const print = state.prints.find(print => print.id === printId)
      print.types[printType].color = color
    },
    SET_TYPE: (state, { type, printId }) => {
      const print = state.prints.find(print => print.id === printId)
      print.type = type
    },
    SET_SIZE: (state, { size, printId }) => {
      const print = state.prints.find(print => print.id === printId)
      print.size = size
    }
  },
  actions: {
    setPrint ({ commit, dispatch, getters, rootGetters }, printId) {
      commit('SET_PRINT', printId)

      if (printId) {
        dispatch('setSide', { side: rootGetters.curView })

        const [ firstType ] = Object.keys(getters.printById(printId).types)
        dispatch('setType', { type: firstType })
      }
    },
    setSide ({ commit, state }, { side, printId = state.curPrint }) {
      commit('SET_SIDE', { side, printId })
    },
    setColor ({ commit, state, getters }, { color, printId = state.curPrint, printType = getters.curPrintType }) {
      const print = getters.printById(printId)
      if (print.types[printType].color === undefined) {
        return
      }
      commit('SET_COLOR', { color, printId, printType })
    },
    setType ({ commit, state }, { type, printId = state.curPrint }) {
      commit('SET_TYPE', { type, printId })
    },
    setSize ({ commit, state }, { size, printId = state.curPrint }) {
      commit('SET_SIZE', { size, printId })
    }
  },
  getters: {
    curPrint: ({ prints, curPrint }, getters) => {
      return getters['filters/suitablePrints'].find(print => print.id === curPrint)
    },
    printById: ({ prints }) => id => prints.find(print => print.id === id),
    printsToRender: (state, { curPrint, sideForCurPrint }, rootState, rootGetters) => {
      const prints = rootState.prints.selection.selected.filter(item => item.side === rootGetters.curView)

      if (curPrint && rootGetters.curView === sideForCurPrint) prints.push(curPrint)

      return prints
    },
    havePrintsToRender: (state, { printsToRender }) => {
      return !!printsToRender.length
    },
    sideForCurPrint: (state, { curPrint }) => curPrint && curPrint.side,
    curPrintColor: (state, { curPrint, curPrintType }) => curPrint && curPrint.types[curPrintType].color,
    curPrintColors: (state, { curPrint }) => curPrint && curPrint.colors,
    curPrintType: (state, { curPrint }) => curPrint && curPrint.type,
    curPrintTypes: (state, { curPrint }) => {
      if (!curPrint) return

      return Object.keys(curPrint.types).map(print => ({ code: print, title: printTypes[print] }))
    },
    curPrintSize: (state, { curPrint }) => curPrint && curPrint.size
  }
}
