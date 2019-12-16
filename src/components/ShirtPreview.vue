<template>
  <svg width="301" height="166" viewBox="0 0 301 166">
    <path
      v-for='(path, role, i) in paths'
      :key='i'
      :fill='colorized && colors[curRule][role]'
      :d='path'
    />
    <slot name='print'></slot>
  </svg>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShirtPreview',
  props: {
    paths: {
      type: Object,
      required: true
    },
    colorized: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['colors']),
    ...mapState({
      curRule: state => state.colors.curRule
    })
  }
}
</script>

<style>

</style>
