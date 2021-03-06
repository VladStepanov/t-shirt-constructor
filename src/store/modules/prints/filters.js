import categories from '@/models/prints/prints-categories'

export default {
  namespaced: true,
  state: () => ({
    curCategory: '',
    categories: [
      { title: 'Все', code: '' },
      ...categories
    ]
  }),
  mutations: {
    SET_CATEGORY: (state, category) => { state.curCategory = category }
  },
  actions: {
    setCategory ({ commit }, category) {
      commit('SET_CATEGORY', category)
    }
  },
  getters: {
    suitablePrints: ({ curCategory }, getters, rootState) => {
      return curCategory
        ? rootState.prints.prints.filter(print => print.category === curCategory)
        : rootState.prints.prints
    }
  }
}
