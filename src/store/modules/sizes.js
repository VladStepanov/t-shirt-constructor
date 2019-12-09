import sizes from '@/models/sizes'

export default {
  state: () => ({
    curSize: '',
    sizes
  }),
  mutations: {
    SET_SIZE: (state, size) => { state.curSize = size }
  },
  getters: {
    curSize: (state) => state.sizes.find(size => size === state.curSize)
  }
}
