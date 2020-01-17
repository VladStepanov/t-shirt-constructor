import sizes from '@/models/prints/print-sizes'

export default {
  state: () => ({
    sizes,
    // Choosing the biggest size
    previewSize: sizes[0].code
  }),
  actions: {
    setSize ({ commit, state, rootState }, { size, printId = rootState.prints.curPrint }) {
      commit('SET_SIZE', { size, printId, printType: rootState.prints.curPrintDummy.type })
    }
  },
  getters: {
    curPrintSize: (state, getters, rootState, rootGetters) => {
      const curPrint = rootGetters['prints/curPrint']
      return curPrint && curPrint.types[curPrint.type].size
    }
  }
}
