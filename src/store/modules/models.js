import entities from '@/models/entities.json'
import cloneDeep from 'lodash/cloneDeep'

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
    setModel ({ commit, dispatch, getters: { curMaterial, findModelById } }, model) {
      const newModel = findModelById(model)

      const haveNewModelOldMaterial = newModel.materials.some(({ code }) => code === curMaterial)
      if (curMaterial && haveNewModelOldMaterial) {
        commit('SET_MODEL', model)
      } else {
        commit('SET_MATERIAL', '')
        dispatch('resetColors')
        commit('SET_MODEL', model)
      }
    }
  },
  getters: {
    curModel: (state, getters) => {
      return getters['filters/suitableModels'].find(entity => entity.id === state.curModel)
    },
    findModelById: (state) => id => state.entities.find(entity => entity.id === id),
    curModelPaths: (state, getters) => {
      const modelPaths = getters.haveCurModel && cloneDeep(getters.curModel.paths)

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
    haveCurModel: (state, getters) => !!getters.curModel,
    haveRearSide: (state, getters) => !!getters.curModelPaths.rear
  }
}
