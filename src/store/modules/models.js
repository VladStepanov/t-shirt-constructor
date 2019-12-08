import entities from '@/models/entities.json'

export default {
  state: () => ({
    curModel: '',
    entities
  }),
  mutations: {
    SET_MODEL: (state, modelId) => { state.curModel = modelId }
  },
  getters: {
    curModel: (state, getters) => {
      return getters['filters/suitableModels'].find(entity => entity.id === state.curModel)
    },
    curModelPaths: (state, getters) => {
      const copy = { ...getters.curModel.paths }

      Object.entries(copy).forEach(([key, path]) => {
        if (!path) delete copy[key]
      })

      return copy
    },
    haveSelectedModel: (state, getters) => !!getters.curModel
  }
}
