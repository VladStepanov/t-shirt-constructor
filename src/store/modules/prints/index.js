import prints from '@/models/prints/prints'
import sides from '@/models/sides'
import printTypes from '@/models/prints/print-types'
import positions from '@/models/prints/print-pos'

import filters from '@/store/modules/prints/filters'
import colors from '@/store/modules/prints/colors'
import sizes from '@/store/modules/prints/sizes'
import selection from '@/store/modules/prints/selection'

import cloneDeep from 'lodash/cloneDeep'
import uuid from 'uuid/v4'

export default {
  namespaced: true,
  modules: {
    filters,
    selection,
    sizes,
    colors
  },
  state: () => ({
    curPrint: '',
    curPrintDummy: {},
    prints: prints.map(print => ({
      ...print,
      id: uuid(),
      side: '',
      type: '',
      aspectRatio: print.exportSize.x / print.exportSize.y
    })),
    sides,
    positions
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
    },
    SET_POSITION_X: (state, { position, printId, printType }) => {
      const { curPrintDummy } = state
      curPrintDummy.types[printType].position.x = position
    },
    SET_POSITION_Y: (state, { position, printId, printType }) => {
      const { curPrintDummy } = state
      curPrintDummy.types[printType].position.y = position
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
    setType ({ commit, state }, { type, printId = state.curPrint }) {
      commit('SET_TYPE', { type, printId })
    },
    setPositionX ({ commit, state, getters }, { position, printId = state.curPrint, printType = getters.curPrintType }) {
      commit('SET_POSITION_X', { position, printId, printType })
    },
    setPositionY ({ commit, state, getters }, { position, printId = state.curPrint, printType = getters.curPrintType }) {
      commit('SET_POSITION_Y', { position, printId, printType })
    }
  },
  getters: {
    curPrint: ({ prints, curPrint, curPrintDummy }, getters) => {
      const print = getters['filters/suitablePrints'].find(print => print.id === curPrint)
      return curPrintDummy.id === (print && print.id)
        ? curPrintDummy
        : null
    },
    haveCurPrint: (state, { curPrint }) => Object.keys(curPrint).length,
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
    curPrintType: (state, { curPrint }) => curPrint && curPrint.type,
    curPrintTypes: (state, { curPrint }) => {
      // if curPrint exists and have fields
      if (curPrint && !Object.keys(curPrint).length) return

      return Object.keys(curPrint.types).map(print => ({ code: print, title: printTypes[print] }))
    },
    curPrintPosition: (state, { curPrint, curPrintType }) => curPrint && curPrint.types[curPrintType].position,
    curPrintPrice: (state, { calcSize, curPrintSize, curPrint, curPrintTexture }) => {
      if (curPrint) {
        console.log(state.sizes)

        const realWidth = require('@/models/prints/print-sizes').find(size => size.code === curPrintSize).realSize
        const { width, height } = calcSize(curPrint.aspectRatio, realWidth)
        const priceForTexture = require('@/models/prints/print-textures').find(texture => texture.code === curPrintTexture).price
        return parseFloat((width * height * priceForTexture).toFixed(2))
      }
    }
  }
}
