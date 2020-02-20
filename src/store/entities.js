export const state = () => ({
})

export const mutations = {
}

export const getters = {
  globalPrice: (state, getters) => {
    const price = getters.curModelPrice + getters['prints/curPrintPrice'] + getters['prints/selection/selectedPrintsPrices']
    return parseFloat(price.toFixed(1))
  }
}

export const actions = {
  makeOrder ({ getters }) {
    const order = {
      model: getters.curModel,
      prints: [
        ...getters['prints/curPrint'],
        ...getters['prints/selection/selectedPrints']]
    }
    console.log(order)
  }
}
