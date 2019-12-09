<template>
  <div class='colors-mixed-item'>
    <div class="colors-mixed-item__title">{{ title }}</div>
    <BaseSelect
      class="colors-mixed-item__options"
      :options='colorSchema'
      :disabled='!haveCurMaterial'
      v-model='handleSelect'
    />
    <div class="colors-mixed-item__preview" :style='{ "background": colorCode }'></div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuColorsMixedItem',
  components: {
    BaseSelect
  },
  props: {
    title: {
      type: String,
      required: true
    },
    pathCode: {
      type: String,
      required: true
    },
    colorCode: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['colorSchema', 'haveCurMaterial']),
    handleSelect: {
      get () { return this.colorCode },
      set (selectedColor) {
        this.$emit('input', { from: this.pathCode, value: selectedColor })
      }
    }
  }
}
</script>

<style lang='scss'>
.colors-mixed-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  &__title {
    flex-basis: 130px;
  }
  &__options {
    margin: 0 20px;
  }
  &__preview {
    width: 24px;
    height: 24px;
  }
}
</style>
