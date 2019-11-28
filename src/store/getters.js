export default {
  currentClothPaths (state) {
    // Now it 0, later it can be selected from right menu
    return state.paths[0] && state.paths[0].model
  }
}
