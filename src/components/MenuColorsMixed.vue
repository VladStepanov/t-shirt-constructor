<template>
  <div class='colors-mixed'>
    <div class="colors-mixed__title">Перед</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='body' :disabled='!haveCurModel' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": body }'></div>

    <div class="colors-mixed__title">Левый рукав</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='leftSleeve' :disabled='!haveCurModel' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": leftSleeve }'></div>

    <div class="colors-mixed__title">Правый рукав</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='rightSleeve' :disabled='!haveCurModel' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": rightSleeve }'></div>

    <div class="colors-mixed__title">Горловина</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='neckLine' :disabled='!haveCurModel' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": neckLine }'></div>

    <div class="colors-mixed__title">Спина</div>
    <div class="colors-mixed__options">
      <BaseSelect v-model='back' :disabled='!haveCurModel' :options='colorSchema' />
    </div>
    <div class="colors-mixed__preview" :style='{ "background": back }'></div>
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
    ...mapGetters(['colorSchema', 'haveCurModel']),
    body: {
      get () { return this.$store.state.activeColors.front },
      set (body) { this.$store.commit('SET_BODY', body) }
    },
    leftSleeve: {
      get () { return this.$store.state.activeColors.leftSleeve },
      set (sleeve) { this.$store.commit('SET_L_SLEEVE', sleeve) }
    },
    rightSleeve: {
      get () { return this.$store.state.activeColors.rightSleeve },
      set (sleeve) { this.$store.commit('SET_R_SLEEVE', sleeve) }
    },
    neckLine: {
      get () { return this.$store.state.activeColors.neckLine },
      set (neckLine) { this.$store.commit('SET_NECKLINE', neckLine) }
    },
    back: {
      get () { return this.$store.state.activeColors.back },
      set (back) { this.$store.commit('SET_BACK', back) }
    }
  }
}
</script>

<style lang='scss'>
.colors-mixed {
  display: grid;
  gap: 12px;
  align-items: center;
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
