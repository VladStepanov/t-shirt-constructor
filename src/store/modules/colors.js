import paths from '@/models/entities-paths'

const mutationsState = {
  'front': 'SET_FRONT',
  'rightSleeve': 'SET_R_SLEEVE',
  'leftSleeve': 'SET_L_SLEEVE',
  'back': 'SET_BACK',
  'neckLine': 'SET_NECKLINE'
}

export default {
  state: () => ({
    rules: [
      {
        title: 'Однотонный',
        code: 'single',
        component: 'MenuColorsSingle'
      },
      {
        title: 'Комбинированный',
        code: 'mixed',
        component: 'MenuColorsMixed'
      }
    ],
    curRule: 'mixed',
    mixed: {
      front: '',
      back: '',
      leftSleeve: '',
      rightSleeve: '',
      neckLine: ''
    },
    single: {
      front: '',
      back: '',
      leftSleeve: '',
      rightSleeve: '',
      neckLine: ''
    }
  }),
  mutations: {
    SET_FRONT: (state, frontColor) => { state[state.curRule].front = frontColor },
    SET_R_SLEEVE: (state, sleevesColor) => { state[state.curRule].rightSleeve = sleevesColor },
    SET_L_SLEEVE: (state, sleevesColor) => { state[state.curRule].leftSleeve = sleevesColor },
    SET_BACK: (state, backColor) => { state[state.curRule].back = backColor },
    SET_NECKLINE: (state, neckLineColor) => { state[state.curRule].neckLine = neckLineColor },
    SET_RULE: (state, rule) => { state.curRule = rule }
  },
  actions: {
    controller ({ commit }, { from, value }) {
      commit(mutationsState[from], value)
    },
    setSingleColor ({ commit }, color) {
      commit('SET_FRONT', color)
      commit('SET_BACK', color)
      commit('SET_R_SLEEVE', color)
      commit('SET_L_SLEEVE', color)
      commit('SET_NECKLINE', color)
    }
  },
  getters: {
    pathsViewForCurModel (state, getters) {
      if (!getters.curModel) return null

      return Object.keys(getters.curModelPaths).map(path => ({
        title: paths[path],
        code: path
      }))
    },
    curMode: (state) => state[state.curRule],
    singleColor: (state) => {
      // in single mode all parts are colored with same color, so we access the first field
      return Object.values(state.single)[0]
    }
  }
}