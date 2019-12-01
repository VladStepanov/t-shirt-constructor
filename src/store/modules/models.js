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
    currentModel (state) {
      // Now it 0, later it can be selected from right menu
      return state.entities.find(entity => entity.id === state.curModel)
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
