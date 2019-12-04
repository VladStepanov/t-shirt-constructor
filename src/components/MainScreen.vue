<template>
  <div class='main-screen'>
    <div v-if='haveCurModel'>
      <svg width="301" height="166" viewBox="0 0 301 166">
        <path
          v-for='(path, role, i) in filteredModelPaths'
          :key='i'
          :fill='activeColors[role]'
          :d='path'
        />
      </svg>
      <div class="main-screen__title">{{ curModel.name }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MainScreen',
  computed: {
    ...mapGetters(['curModel', 'haveCurModel']),
    ...mapState(['activeColors']),
    filteredModelPaths () {
      const copy = { ...this.curModel.paths }
      Object.entries(this.curModel.paths).forEach(([role, path]) => {
        if (!path) delete copy[role]
      })
      return copy
    }
  }
}
</script>

<style lang='scss'>
.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &__title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
