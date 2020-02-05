<template>
  <div class='main-screen'>
    <div class="main-screen__container" v-if='haveCurModel'>
      <ShirtPreview :paths='curModelPathsWithView' colorized />
      <template v-if="havePrintsToRender">
<!--        <PrintPreview-->
<!--          class="main-screen__print"-->
<!--          v-for="(print, i) in printsToRender"-->
<!--          :key="`${print.id}-${i}`"-->
<!--          :color="print.types[print.type].color"-->
<!--          :texture="print.types[print.type].texture"-->
<!--          :position="print.types[print.type].position"-->
<!--          :aspect-ratio="print.aspectRatio"-->
<!--          :width="print.types[print.type] && print.types[print.type].size"-->
<!--          :init-size="print.exportSize"-->
<!--          :paths="print.paths"-->
<!--          :id="`main-${print.id}-${i}`"-->
<!--          colorized-->
<!--        />-->
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
    <ToggleView v-if="haveRearSide && haveCurModel" />
    <div v-if="haveCurModel" class="main-screen__title">{{ curModel.name }}</div>
    <CountOfSuitableModels />
  </div>
</template>

<script>
import ToggleView from '@/components/ToggleView'
import ShirtPreview from '@/components/ShirtPreview'
import CountOfSuitableModels from '@/components/CountOfSuitableModels'
import BasePrintCustomizable from '@/components/BasePrintCustomizable'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MainScreen',
  components: {
    ToggleView,
    ShirtPreview,
    BasePrintCustomizable,
    CountOfSuitableModels
  },
  computed: {
    ...mapState({
      curRule: state => state.colors.curRule
    }),
    ...mapGetters(['curModelPathsWithView', 'curModel', 'haveCurModel', 'haveRearSide']),
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
  &__container {
    position: relative;
  }
  &__print {
    position: absolute;
  }
}
</style>
