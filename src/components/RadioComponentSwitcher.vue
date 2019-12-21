<template>
  <div>
    <label v-for='(item, i) in list' :key='i' class='menu-colors__rules'>
      <input :value='item.code' v-model='controller' type="radio">
      {{ item.title }}
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'curItem',
    event: 'input'
  },
  name: 'RadioComponentSwitcher',
  props: {
    list: {
      type: Array,
      required: true,
      validator (value) {
        return value.every(item => item.component && item.code && item.title)
      }
    },
    curItem: {
      type: String,
      required: true
    }
  },
  computed: {
    controller: {
      get () { return this.curItem },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
