<script>
export default {
  render (h) {
    return this.isVisible && h(
      'div',
      {
        class: 'overlay'
      },
      this.$slots.default)
  },
  name: 'Modal',
  data () {
    return {
      isVisible: false
    }
  },
  props: {
    name: {
      type: String
    }
  },
  created () {
    this.$modal.registerModal(this.name, this)
  },
  methods: {
    show () {
      this.isVisible = true
      this.$emit('show', this.customData)
    },
    hide () {
      this.isVisible = false
      this.$emit('hide')
    }
  }
}
</script>

<style scoped lang='scss'>
.overlay {
  position: absolute;
  background-color: rgba(0,0,0, .5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
