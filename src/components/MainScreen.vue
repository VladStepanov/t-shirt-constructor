<template>
  <div class='main-screen'>
    <div v-if='haveSelectedModel'>
      <ToggleView v-if='haveRearSide' />
      <ShirtPreview :paths='curModelPathsWithView' colorized />
      <div class="main-screen__title">{{ curModel.name }}</div>
    </div>
  </div>
</template>

<script>
import ToggleView from '@/components/ToggleView'
import ShirtPreview from '@/components/ShirtPreview'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MainScreen',
  components: {
    ToggleView,
    ShirtPreview
  },
  computed: {
    ...mapState({
      curRule: state => state.colors.curRule
    }),
    ...mapGetters(['curModelPathsWithView', 'curModel', 'haveSelectedModel', 'haveRearSide'])
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
