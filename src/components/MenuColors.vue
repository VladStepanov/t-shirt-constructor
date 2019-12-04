<template>
  <div v-if='currentModel' class="menu-colors">
    <label v-for='(rule, i) in rules' :key='i' class='menu-colors__rules'>
      <input v-model='colorsRule' type="radio" :value='rule.component'>
      {{ rule.title }}
    </label>
    <component :is='colorsRule' />
  </div>
</template>

<script>
import MenuColorsSingle from '@/components/MenuColorsSingle'
import MenuColorsMixed from '@/components/MenuColorsMixed'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuColors',
  components: {
    MenuColorsSingle,
    MenuColorsMixed
  },
  data () {
    return {
      rules: [
        {
          title: 'Однотонный',
          component: 'MenuColorsSingle'
        },
        {
          title: 'Комбинированный',
          component: 'MenuColorsMixed'
        }
      ],
      colorsRule: 'MenuColorsSingle'
    }
  },
  computed: {
    ...mapGetters(['colorSchema', 'currentModel']),
    allParts () {
      return Object.keys(this.$store.state.activeColors)
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
