<template>
  <div v-if='currentModel' class="menu-colors">
    <label>
      Однотонный
      <input type="radio" value='Однотонный'>
    </label>
    <label>
      Комбинированный
      <input type="radio" value='Комбинированный'>

    </label>
    <div>
      Body
      <BaseSelect v-model='body' :options='colorSchema'></BaseSelect>
    </div>
    <div>
      leftSleeve
      <BaseSelect v-model='leftSleeve' :options='colorSchema'></BaseSelect>
    </div>
    <div>
      rightSleeve
      <BaseSelect v-model='rightSleeve' :options='colorSchema'></BaseSelect>
    </div>
    {{ $store.getters.suitableModels }}
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuColors',
  components: {
    BaseSelect
  },
  computed: {
    ...mapGetters(['colorSchema', 'currentModel']),
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

</style>
