<template>
   <svg width="301" height="166" viewBox="0 0 301 166">
    <path
      v-for='(path, role, i) in filteredClothPaths'
      :key='i'
      :fill='activeColors[role]'
      :d='path'
    />
  </svg>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MainScreen',
  computed: {
    ...mapGetters(['currentClothPaths']),
    ...mapState(['activeColors']),
    filteredClothPaths () {
      const copy = { ...this.currentClothPaths }
      Object.entries(this.currentClothPaths).forEach(([role, path]) => {
        if (!path) delete copy[role]
      })
      return copy
    }
  }
}
</script>

<style>

</style>
