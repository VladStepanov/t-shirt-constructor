import entities from '@/models/entities.json'
import _ from 'lodash'

export default {
  state: () => ({
    curModel: '',
    entities
  }),
  mutations: {
    SET_MODEL: (state, modelId) => { state.curModel = modelId },
    SET_VIEW: (state, view) => { state.curView = view }
  },
  actions: {
    setModel ({ commit, dispatch }, model) {
      commit('SET_MATERIAL', '')
      commit('SET_MODEL', model)
    }
  },
  getters: {
    curModel: (state, getters) => {
      return getters['filters/suitableModels'].find(entity => entity.id === state.curModel)
    },
    curModelPaths: (state, getters) => {
      const modelPaths = _.cloneDeep(getters.curModel.paths)

      for (let side in modelPaths) {
        for (let part in modelPaths[side]) {
          if (!modelPaths[side][part]) {
            delete modelPaths[side][part]
          }
        }
      }

      return modelPaths
    },
    curModelPathsWithView: (state, getters) => {
      return getters.curModelPaths[getters.curView]
    },
    curModelPathsWithAllViews: (state, getters) => {
      return { ...getters.curModelPaths.front, ...getters.curModelPaths.rear }
    },
    haveSelectedModel: (state, getters) => !!getters.curModel,
    haveRearSide: (state, getters) => !!getters.curModelPaths.rear
  }
}
