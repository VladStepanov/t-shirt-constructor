<template>
  <div class='toggle-view'>
    <span
      v-for='(viewTitle, viewCode) in nonActiveView'
      :key='viewCode'
      @click='toggleView(viewCode)'
    >&#60;- {{ viewTitle }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToggleView',
  computed: {
    ...mapGetters(['nonActiveView'])
  },
  methods: {
    toggleView (view) {
      this.$store.commit('SET_VIEW', view)
    }
  }
}
</script>

<style lang='scss'>
.toggle-view {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  user-select: none;
}
</style>
