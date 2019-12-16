import color from './color'
import categories from '@/store/modules/prints/categories'
import prints from '@/models/prints'

export default {
  namespaced: true,
  state: () => ({
    curPrint: '0',
    prints
  }),
  mutations: {
    SET_PRINT: (state, print) => { state.print = print }
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
    categories
  }
}
