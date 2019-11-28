<template>
  <figure
    class="select"
    @click.stop='isOpened = !isOpened'
  >
    <div class="active">
      <slot
        name='active'
        v-if='$scopedSlots.active'
        :active='value'
      ></slot>
      <figcaption v-else class="select-active">{{ value }}</figcaption>
      <div class="active-image">
        <slot name='append'></slot>
      </div>
    </div>

    <div
      v-if='isOpened'
      class="options"
    >
      <div
        v-for='(option, i) in options'
        :key='i'
        class="option"
        @click.stop='selectOption(option)'
      >
        <slot
          name='option'
          v-if='$scopedSlots.option'
          :option='option'></slot>
        <div v-else>{{ option.title }}</div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    value: {
      type: String,
      default: '',
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.$emit('input', this.options[0].title)
    document.addEventListener('click', this.handleOutsideClick)
  },
  destroyed () {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    selectOption (option) {
      this.$emit('input', option.title)
      this.isOpened = false
    },
    handleOutsideClick (e) {
      this.isOpened = false
    }
  }
}
</script>

<style scoped lang='scss'>
.select {
  border: 1px solid #ccc;
  max-width: 300px;
}
.active {
  position: relative;
}
</style>
