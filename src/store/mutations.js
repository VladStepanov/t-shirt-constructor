export default {
  SET_BODY: (state, frontColor) => { state.activeColors.front = frontColor },
  SET_R_SLEEVE: (state, sleevesColor) => { state.activeColors.rightSleeve = sleevesColor },
  SET_L_SLEEVE: (state, sleevesColor) => { state.activeColors.leftSleeve = sleevesColor }
}
