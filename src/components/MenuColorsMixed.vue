<template>
  <div class='colors-mixed'>
    <MenuColorsMixedItem
      v-for='path in pathsViewForCurModel'
      :key='path.title'
      :title='path.title'
      :pathCode='path.code'
      :colorCode='determineColor(path.code)'
      @input='controller'
    />
  </div>
</template>

<script>
import MenuColorsMixedItem from '@/components/MenuColorsMixedItem'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuColorsMixed',
  components: {
    MenuColorsMixedItem
  },
  computed: {
    ...mapGetters(['pathsViewForCurModel']),
    front: {
      get () { return this.$store.state.colors.front },
      set (body) { this.$store.commit('SET_BODY', body) }
    },
    leftSleeve: {
      get () { return this.$store.state.colors.leftSleeve },
      set (sleeve) { this.$store.commit('SET_L_SLEEVE', sleeve) }
    },
    rightSleeve: {
      get () { return this.$store.state.colors.rightSleeve },
      set (sleeve) { this.$store.commit('SET_R_SLEEVE', sleeve) }
    },
    neckLine: {
      get () { return this.$store.state.colors.neckLine },
      set (neckLine) { this.$store.commit('SET_NECKLINE', neckLine) }
    },
    back: {
      get () { return this.$store.state.colors.back },
      set (back) { this.$store.commit('SET_BACK', back) }
    }
  },
  methods: {
    controller ({ from, value }) {
      this.$store.dispatch('controller', { from, value })
    },
    determineColor (pathCode) {
      // refs to computed
      return this[pathCode]
    }
  }
}
</script>

<style lang='scss'>
.colors-mixed {

}
</style>
