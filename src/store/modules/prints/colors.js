export default {
  actions: {
    setColor ({ commit, rootState, getters }, { color, printId = rootState.prints.curPrint, printType = getters.curPrintType }) {
      const print = getters.printById(printId)
      if (print.types[printType].color === undefined) {
        return
      }

      commit('SET_COLOR', { color, printId, printType })
    },
    setTexture ({ commit, state, rootState, getters }, { texture, printId = rootState.prints.curPrint, printType = getters.curPrintType }) {
      commit('SET_TEXTURE', { texture, printId, printType })
    }
  },
  getters: {
    curPrintTextures: (state, { curPrint, haveCurPrint }) => haveCurPrint && curPrint.textures,
    curPrintTexture: (state, { curPrint, haveCurPrint, curPrintType }) => haveCurPrint && curPrint.types[curPrintType].texture,
    curPrintColor: (state, { curPrint, haveCurPrint, curPrintType }) => haveCurPrint && curPrint.types[curPrintType].color,
    curPrintColors: (state, { curPrint, haveCurPrint }) => haveCurPrint && curPrint.colors
  }
}
