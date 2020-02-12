<template>
  <div class='main-screen'>
    <ToggleView v-if="haveRearSide && haveCurModel" />
    <div v-if="haveCurModel" class="main-screen__title">{{ curModel.name }}</div>
    <CountOfSuitableModels />
    <div class="main-screen__container" v-if='haveCurModel'>
      <BaseShirt
        :paths="curModelPathsWithView && curModelPathsWithView.paths[curView]"
        :side="curView"
        :view-box="curModelPathsWithView && curModelPathsWithView.viewBox"
        colorized
      />
      <template v-if="havePrintsToRender">
        <BasePrintCustomizable
          v-for="(print, i) in printsToRender"
          :key="`${print.id}-${i}`"
          :paths="print.paths"
          :init-size="print.exportSize"
          :viewBoxSize="print.viewBox"
          :texture="print.types[print.type].texture"
          :color="print.types[print.type].color"
          :width="print.types[print.type].size"
          :aspect-ratio="print.aspectRatio"
          :position="print.types[print.type].position"
        />
      </template>
    </div>
    <MainScreenPrice v-if="haveCurModel" />
  </div>
</template>

<script>
import ToggleView from '@/components/ToggleView'
import BaseShirt from '@/components/BaseShirt'
import CountOfSuitableModels from '@/components/CountOfSuitableModels'
import BasePrintCustomizable from '@/components/BasePrintCustomizable'
import MainScreenPrice from '@/components/MainScreenPrice'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MainScreen',
  components: {
    ToggleView,
    BaseShirt,
    BasePrintCustomizable,
    CountOfSuitableModels,
    MainScreenPrice
  },
  computed: {
    ...mapState({
      curRule: state => state.colors.curRule
    }),
    ...mapGetters(['curModelPathsWithView', 'curModel', 'haveCurModel', 'haveRearSide', 'curView']),
    ...mapGetters({
      curPrint: 'prints/curPrint',
      printsToRender: 'prints/printsToRender',
      havePrintsToRender: 'prints/havePrintsToRender'
    })
  }
}
</script>

<style scoped lang='scss'>
.main-screen {
  position: relative;
  &__title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &__container {
    position: relative;
    width: 50%;
    margin: 24px auto;
  }
  &__print {
    position: absolute;
  }
}
</style>
