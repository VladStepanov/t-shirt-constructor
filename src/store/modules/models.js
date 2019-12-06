import tShirts from '@/models/t_shirts.json'

export default {
  state: () => ({
    curModel: null,
    entities: tShirts
  }),
  mutations: {
    SET_MODEL: (state, model) => { state.curModel = model }
  },
  getters: {
    curModel (state, getters) {
      return getters.suitableModels.find(model => model.id === state.curModel)
    },
    curModelPaths (state, getters) {
      if (!getters.curModel) {
        return null
      }
      const copy = { ...getters.curModel.paths }
      Object.entries(copy).forEach(([role, path]) => {
        if (!path) delete copy[role]
      })
      return copy
    },
    haveCurModel (state, getters) {
      return !!getters.curModel
    },
    suitableModels (state, getters) {
      return state.entities.filter(model => {
        return (
          model.collection === getters.curCollection &&
          model.gender === getters.curGender &&
          model.material === getters.curMaterial
        )
      })
    }
  }
}
