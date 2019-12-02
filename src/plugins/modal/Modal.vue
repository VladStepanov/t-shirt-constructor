<template>
  <div v-if='isVisible' class="overlay" @click.self='handleOutsideClick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
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
    },
    handleOutsideClick (e) {
      this.hide()
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
  width: 100%;
  height: 100%;
}
</style>
