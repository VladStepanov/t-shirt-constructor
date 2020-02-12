import entities from '@/models/entities.json'

import cloneDeep from 'lodash/cloneDeep'
import uuid from 'uuid/v4'

export default {
  state: () => ({
    curModel: '',
    entities: entities.map(entity => ({
      id: uuid(),
      ...entity
    }))
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
    curModelPaths: (state, { haveCurModel, curModel }) => {
      if (!haveCurModel) return

      const modelPaths = cloneDeep(curModel)

      const { paths } = modelPaths
      for (let side in paths) {
        for (let part in paths[side]) {
          if (!paths[side][part]) {
            delete paths[side][part]
          }
        }
      }

      return modelPaths
    },
    curModelPathsWithView: (state, { curView, curModelPaths, haveCurModel }) => {
      if (!haveCurModel) return

      const haveRenderToCurView = Object.keys(curModelPaths.paths).some((view) => view === curView)
      return haveRenderToCurView
        ? curModelPaths
        : null
    },
    curModelPathsWithAllViews: (state, getters) => {
      return { ...getters.curModelPaths.paths.front, ...getters.curModelPaths.paths.rear }
    },
    haveCurModel: (state, getters) => !!getters.curModel,
    haveRearSide: (state, { curModelPaths, haveCurModel }) => {
      if (!haveCurModel) return

      return !!curModelPaths.paths.rear
    },
    curModelPrice: (state, { haveCurModel, curModel, haveCurMaterial, curMaterial }) => {
      if (!haveCurModel && !haveCurMaterial) return 0

      const curMaterialPrice = require('@/models/materials-list').find(material => material.code === curMaterial)?.price
      const price = curModel.realSize * (curMaterialPrice ?? 0)

      return parseFloat((price).toFixed(1))
    }
  }
}
