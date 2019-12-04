<template>
  <div class='colors-mixed'>
    <div class="colors-mixed__title">Перед</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='body' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": body }'></div>

    <div class="colors-mixed__title">Левый рукав</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='leftSleeve' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": leftSleeve }'></div>

    <div class="colors-mixed__title">Правый рукав</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='rightSleeve' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": rightSleeve }'></div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuColorsMixed',
  components: {
    BaseSelect
  },
  computed: {
    ...mapGetters(['colorSchema']),
    body: {
      get () { return this.$store.state.activeColors.front },
      set (val) {
        this.$store.commit('SET_BODY', val)
      }
    },
    leftSleeve: {
      get () { return this.$store.state.activeColors.leftSleeve },
      set (val) {
        this.$store.commit('SET_L_SLEEVE', val)
      }
    },
    rightSleeve: {
      get () { return this.$store.state.activeColors.rightSleeve },
      set (val) {
        this.$store.commit('SET_R_SLEEVE', val)
      }
    }
  }
}
</script>

<style lang='scss'>
.colors-mixed {
  display: grid;
  align-items: center;
  gap: 12px;
  grid-template-columns: repeat(3, max-content);
  &__title {

  }
  &__options {

  }
  &__preview {
    width: 24px;
    height: 24px;
  }
}
</style>
