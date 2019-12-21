<template>
  <div class="menu-colors">
    <RadioComponentSwitcher :list="rules" v-model="rule" />
    <component :is='determineComponent(rules, rule)' />
    <button @click='resetColors'>Reset colors</button>
  </div>
</template>

<script>
import MenuColorsSingle from '@/components/MenuShirts/MenuColorsSingle'
import MenuColorsMixed from '@/components/MenuShirts/MenuColorsMixed'
import RadioComponentSwitcher from '@/components/RadioComponentSwitcher'
import RadioComponentSwitcherMixin from '@/mixins/RadioComponentSwitcher'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MenuColors',
  components: {
    MenuColorsSingle,
    MenuColorsMixed,
    RadioComponentSwitcher
  },
  mixins: [RadioComponentSwitcherMixin],
  computed: {
    ...mapGetters(['colorSchema']),
    ...mapState({
      rules: state => state.colors.rules,
      curRule: state => state.colors.curRule
    }),
    rule: {
      get () {
        return this.curRule
      },
      set (rule) {
        this.$store.commit('SET_RULE', rule)
      }
    }
  },
  methods: {
    resetColors () {
      this.$store.dispatch('resetColors')
    }
  }
}
</script>

<style lang='scss'>
.menu-colors {
  &__rules {
    display: inline-block;
    margin: 12px 0;
  }
}
</style>
