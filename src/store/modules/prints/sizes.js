import sizes from '@/models/prints/print-sizes'

export default {
  state: () => ({
    sizes
  }),
  actions: {
    setSize ({ commit, state, rootState }, { size, printId = rootState.prints.curPrint }) {
      commit('SET_SIZE', { size, printId })
    }
  },
  getters: {
    curPrintSize: (state, getters, rootState, rootGetters) => rootGetters['prints/curPrint'] && rootGetters['prints/curPrint'].size,
    sizeByRatio: (state) => (printId, ratio) => {}
  }
}
