<template>
  <div class='main-screen'>
    <div v-if='haveSelectedModel'>
      <svg width="301" height="166" viewBox="0 0 301 166">
        <path
          v-for='(path, role, i) in curModelPaths'
          :key='i'
          :fill='colors[curRule][role]'
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
    ...mapGetters({
      haveSelectedModel: 'haveSelectedModel'
    }),
    ...mapState({
      curRule: state => state.colors.curRule
    }),
    ...mapGetters(['curModelPaths', 'curModel']),
    ...mapState(['colors'])
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
