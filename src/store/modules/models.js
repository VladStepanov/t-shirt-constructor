import tShirts from '@/models/t_shirts.json'

export default {
  state: () => ({
    entities: tShirts
  }),
  getters: {
    currentModel (state) {
      // Now it 0, later it can be selected from right menu
      return state.entities[0]
    },
    suitableModels (state, getters, rootState) {
      console.log(rootState)
      return rootState.models.entities.filter(model => {
        return (
          model.collection === getters.curCollection &&
          model.gender === getters.curGender &&
          model.material === getters.curMaterial
        )
      })
    }
  }
}
