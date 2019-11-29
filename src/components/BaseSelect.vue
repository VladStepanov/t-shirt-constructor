<template>
  <figure
    class="select"
    @click.stop='isOpened = !isOpened'
  >
    <div class="active">
      <slot
        name='active'
        v-if='$scopedSlots.active'
        :active='findTitleByCode(value)'
      ></slot>
      <figcaption v-else class="select-active">{{ findTitleByCode(value) }}</figcaption>
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
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.$emit('input', this.options[0].code)
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
      this.$emit('input', option.code)
      this.isOpened = false
    },
    handleOutsideClick (e) {
      this.isOpened = false
    },
    findTitleByCode (code) {
      const curOption = this.options.find(option => option.code === code)
      return curOption && curOption.title
    }
  }
}
</script>

<style scoped lang='scss'>
.select {
  border: 1px solid #ccc;
  display: inline-block;
  position: relative;
  padding: 5px 10px;
  margin: 0;
  cursor: pointer;
}
.active {
  position: relative;
}
.options {
  position: absolute;
  z-index: 1;
  top: calc(100% + 10px);
  left: 0;
  width: auto;
  background-color: #fff;
  border: 1px solid #ccc;
}
.option {
  padding: 5px 10px;
  &:hover {
    background-color: darken(#fff, 30%);
  }
}
</style>
