import tShirts from '@/models/t_shirts.json'

export const state = () => ({
  paths: tShirts
})

export const mutations = {
  SET_BODY: (state, frontColor) => { state.activeColors.front = frontColor },
  SET_R_SLEEVE: (state, sleevesColor) => { state.activeColors.rightSleeve = sleevesColor },
  SET_L_SLEEVE: (state, sleevesColor) => { state.activeColors.leftSleeve = sleevesColor }
}

export const getters = {
  currentClothPaths (state) {
    // Now it 0, later it can be selected from right menu
    return state.paths[0] && state.paths[0].paths
  }
}

export const actions = {

}
