<template>
  <div class='main-screen'>
    <div v-if='haveSelectedModel'>
      <ToggleView v-if='haveRearSide' />
      <ShirtPreview :paths='curModelPathsWithView' colorized>
        <template #print>
          <path d="M112 1C180.8 59.4 140.667 63.3333 112 58C54 43.6667 -44.6 13.6 25 8" stroke='black' />
        </template>
      </ShirtPreview>
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
  mounted () {
    console.log(this.$store.getters)
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
