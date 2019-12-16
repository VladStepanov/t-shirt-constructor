import color from '@/store/modules/prints/color'
import prints from '@/models/prints'
import filters from '@/store/modules/prints/filters'

export default {
  namespaced: true,
  state: () => ({
    curPrint: '0',
    prints
  }),
  mutations: {
    SET_PRINT: (state, print) => { state.curPrint = print }
  },
  actions: {
    setPrint ({ commit }, print) {
      commit('SET_PRINT', print)
    }
  },
  getters: {
    curPrint: ({ prints, curPrint }) => prints.find(print => print.id === curPrint)
  },
  modules: {
    color,
    filters
  }
}
