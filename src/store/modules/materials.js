import materials from '@/models/materials'
import materialsList from '@/models/materials-list'

export default {
  state: () => ({
    curMaterial: 'pique',
    materials,
    materialsList
  }),
  mutations: {
    SET_MATERIAL: (state, material) => { state.curMaterial = material }
  },
  getters: {
    colorSchema: state => state.materials[state.curMaterial],
    curMaterial: state => state.curMaterial
  }
}
