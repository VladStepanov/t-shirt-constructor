import categories from '@/models/prints-categories'

export default {
  state: () => ({
    curCategory: '',
    categories
  }),
  mutations: {
    SET_CATEGORY: (state, category) => { state.curCategory = category }
  },
  actions: {
    setCategory ({ commit }, category) {
      commit('SET_CATEGORY', category)
    }
  }
}
