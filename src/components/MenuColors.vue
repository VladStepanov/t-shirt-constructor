<template>
  <div class="menu-colors">
    <label v-for='(rule, i) in rules' :key='i' class='menu-colors__rules'>
      <input :value='rule.code' v-model='ruleController' type="radio">
      {{ rule.title }}
    </label>
    <component :is='determineComponent(ruleController)' />
  </div>
</template>

<script>
import MenuColorsSingle from '@/components/MenuColorsSingle'
import MenuColorsMixed from '@/components/MenuColorsMixed'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MenuColors',
  components: {
    MenuColorsSingle,
    MenuColorsMixed
  },
  computed: {
    ...mapGetters(['colorSchema']),
    ...mapState({
      rules: state => state.colors.rules,
      curRule: state => state.colors.curRule
    }),
    ruleController: {
      get () {
        return this.curRule
      },
      set (rule) {
        this.$store.commit('SET_RULE', rule)
      }
    }
  },
  methods: {
    determineComponent (ruleCode) {
      return this.rules && this.rules.find(rule => rule.code === this.curRule).component
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
