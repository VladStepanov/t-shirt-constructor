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
