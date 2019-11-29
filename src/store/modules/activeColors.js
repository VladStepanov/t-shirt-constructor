export default {
  state: () => ({
    front: '',
    back: '',
    leftSleeve: '',
    rightSleeve: '',
    neckLine: ''
  }),
  mutations: {
    SET_BODY: (state, frontColor) => { state.front = frontColor },
    SET_R_SLEEVE: (state, sleevesColor) => { state.rightSleeve = sleevesColor },
    SET_L_SLEEVE: (state, sleevesColor) => { state.leftSleeve = sleevesColor }
  }
}
