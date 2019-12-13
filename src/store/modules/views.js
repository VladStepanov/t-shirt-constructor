export default {
  state: () => ({
    curView: 'front',
    views: {
      'front': 'Перед',
      'rear': 'Спина'
    }
  }),
  mutations: {
    SET_VIEW: (state, view) => { state.curView = view }
  },
  getters: {
    curView: (state) => state.curView,
    nonActiveView: (state) => {
      const views = { ...state.views }
      delete views[state.curView]

      return views
    }
  }
}
