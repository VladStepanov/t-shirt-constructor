import materials from '@/models/materials'
import materialsList from '@/models/materials-list'

export default {
  state: () => ({
    curMaterial: '',
    materials,
    materialsList
  }),
  mutations: {
    SET_MATERIAL: (state, material) => { state.curMaterial = material }
  },
  actions: {
    setMaterial: ({ commit, dispatch }, material) => {
      dispatch('resetColors')
      commit('SET_MATERIAL', material)
    }
  },
  getters: {
    colorSchema: state => state.materials[state.curMaterial],
    haveCurMaterial: state => !!state.curMaterial,
    curMaterial: state => state.curMaterial
  }
}
