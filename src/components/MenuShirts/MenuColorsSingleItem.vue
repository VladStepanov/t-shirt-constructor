<template>
  <div class="colors-single-item">
    <BaseSelect
      placeholder='Выберите цвет'
      v-model='color'
      :disabled='!haveCurMaterial'
      :options='colorSchema'
    />
    <div class="colors-single-item__preview"></div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuColorsSingleItem',
  components: {
    BaseSelect
  },
  props: {},
  computed: {
    ...mapGetters(['colorSchema', 'haveCurMaterial']),
    color: {
      get () {
        return this.$store.getters.singleColor
      },
      set (color) {
        this.$store.dispatch('setSingleColor', color)
      }
    }
  }
}
</script>

<style lang='scss'>
.colors-single-item {
  &__preview {
    margin-left: 20px;
    width: 24px;
    height: 24px;
  }
}
</style>
