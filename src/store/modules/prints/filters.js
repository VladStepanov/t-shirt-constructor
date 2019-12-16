import categories from '@/models/prints-categories'

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
      return rootState.prints.prints
        .filter(print => curCategory ? print.category === curCategory : true)
    }
  }
}
