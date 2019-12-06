import paths from '@/models/t_shirts-paths'

const mutationsState = {
  'front': 'SET_FRONT',
  'rightSleeve': 'SET_R_SLEEVE',
  'leftSleeve': 'SET_L_SLEEVE',
  'back': 'SET_BACK',
  'neckLine': 'SET_NECKLINE'
}

export default {
  state: () => ({
    front: '',
    back: '',
    leftSleeve: '',
    rightSleeve: '',
    neckLine: ''
  }),
  mutations: {
    SET_FRONT: (state, frontColor) => { state.front = frontColor },
    SET_R_SLEEVE: (state, sleevesColor) => { state.rightSleeve = sleevesColor },
    SET_L_SLEEVE: (state, sleevesColor) => { state.leftSleeve = sleevesColor },
    SET_BACK: (state, backColor) => { state.back = backColor },
    SET_NECKLINE: (state, neckLineColor) => { state.neckLine = neckLineColor }
  },
  actions: {
    controller ({ commit }, { from, value }) {
      commit(mutationsState[from], value)
    }
  },
  getters: {
    pathsViewForCurModel (state, getters) {
      if (!getters.curModel) return null

      return Object.keys(getters.curModelPaths).map(path => ({
        title: paths[path],
        code: path
      }))
    }
  }
}
