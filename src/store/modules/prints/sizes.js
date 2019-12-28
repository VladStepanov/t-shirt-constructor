import sizes from '@/models/prints/print-sizes'

export default {
  state: () => ({
    sizes,
    // Selecting middle value of the sizes
    defaultWidth: sizes[Math.round((sizes.length - 1) / 2)].code
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
