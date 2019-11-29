import genders from '@/models/genders.json'

export default {
  state: () => ({
    curGender: '',
    genders
  }),
  mutations: {
    SET_GENDER: (state, gender) => { state.curGender = gender }
  },
  getters: {
    genders: state => state.genders.genders
  }
}
