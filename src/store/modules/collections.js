import collections from '@/models/collections.json'

export default {
  state: () => ({
    curCollection: '',
    collections
  }),
  mutations: {
    SET_COLLECTION: (state, collection) => { state.curCollection = collection }
  },
  getters: {
    collections: state => state.collections,
    curCollection: state => state.curCollection
  }
}
