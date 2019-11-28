export default {
  state: () => ({
    curMaterial: 'pique',
    materials: {
      pique: [
        {
          title: 'Красный',
          code: 'red'
        },
        {
          title: 'Зеленый',
          code: 'green'
        },
        {
          title: 'Синий',
          code: 'blue'
        }
      ],
      ribana: [],
      cooler: []
    }
  }),
  getters: {
    colorSchema: (state) => state.materials[state.curMaterial]
  }
}
