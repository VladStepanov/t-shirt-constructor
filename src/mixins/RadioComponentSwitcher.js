export default {
  methods: {
    determineComponent (list, code) {
      const item = list && list.find(item => item.code === code)
      return item && item.component
    }
  }
}
