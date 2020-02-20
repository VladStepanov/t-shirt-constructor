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
        ...getters['prints/selection/selectedPrints']]
    }

    if (getters['prints/haveCurPrint']) order.prints.push(getters['prints/curPrint'])

    console.log(order)
  }
}
