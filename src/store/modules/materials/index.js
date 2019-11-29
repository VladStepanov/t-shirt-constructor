import materials from '@/models/materials'

export default {
  state: () => ({
    curMaterial: 'pique',
    materials
  }),
  getters: {
    colorSchema: state => state.materials[state.curMaterial]
  }
}
