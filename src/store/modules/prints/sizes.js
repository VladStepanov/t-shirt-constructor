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
      if (!getters.haveCurPrint) return

      const curPrint = rootGetters['prints/curPrint']
      return curPrint.types[curPrint.type]?.size
    },
    calcSize: () => (aspectRatio, width) => {
      // If print is vertical
      if (aspectRatio < 1) {
        return {
          width: width * aspectRatio,
          height: width
        }
      }
      // If print is horizontal
      return {
        width: width,
        height: width / aspectRatio
      }
    }
  }
}
