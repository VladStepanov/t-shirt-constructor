import prints from '@/models/prints/prints'
import filters from '@/store/modules/prints/filters'
import sides from '@/models/sides'
import selection from '@/store/modules/prints/selection'
import printTypes from '@/models/prints/print-types'
import sizesModule from './sizes'
import { cloneDeep } from 'lodash'

export default {
  namespaced: true,
  modules: {
    filters,
    selection,
    sizes: sizesModule
  },
  state: () => ({
    curPrint: '',
    curPrintDummy: {},
    prints: prints.map(print => ({
      ...print,
      side: '',
      type: ''
    })),
    sides
  }),
  mutations: {
    SET_PRINT: (state, { printId }) => { state.curPrint = printId },
    SET_PRINT_DUMMY: (state, { printId }) => {
      state.curPrintDummy = cloneDeep(state.prints.find(print => print.id === printId) || {})
    },
    SET_SIDE: (state, { side, printId }) => {
      state.curPrintDummy.side = side
    },
    SET_COLOR: (state, { color, printType, printId }) => {
      state.curPrintDummy.types[printType].color = color
    },
    SET_TYPE: (state, { type, printId }) => {
      state.curPrintDummy.type = type
    },
    SET_SIZE: (state, { size, printId, printType }) => {
      const { curPrintDummy } = state
      curPrintDummy.types[printType].size = size
    }
  },
  actions: {
    setPrint ({ commit, dispatch, state, rootGetters, getters }, printId) {
      commit('SET_PRINT_DUMMY', { printId })
      commit('SET_PRINT', { printId })

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
    }
  },
  getters: {
    curPrint: ({ prints, curPrint, curPrintDummy }, getters) => {
      const print = getters['filters/suitablePrints'].find(print => print.id === curPrint)
      return curPrintDummy.id === (print && print.id)
        ? curPrintDummy
        : null
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
      // if curPrint exists and have fields
      if (curPrint && !Object.keys(curPrint).length) return

      return Object.keys(curPrint.types).map(print => ({ code: print, title: printTypes[print] }))
    }
  }
}
