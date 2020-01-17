<template>
  <div class='main-screen'>
    <div class="main-screen__container" v-if='haveCurModel'>
      <ShirtPreview :paths='curModelPathsWithView' colorized />
      <template v-if="havePrintsToRender">
        <PrintPreview
          class="main-screen__print"
          v-for="(print, i) in printsToRender"
          :key="`${print.id}-${i}`"
          :color="print.types[print.type].color"
          :texture="print.types[print.type].texture"
          :aspect-ratio="print.aspectRatio"
          :width="(print.types[print.type] && print.types[print.type].size) || defaultPrintSize"
          :init-size="print.exportSize"
          :paths="print.paths"
          :id="`main-${print.id}-${i}`"
          colorized
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
import PrintPreview from '@/components/PrintPreview'
import CountOfSuitableModels from '@/components/CountOfSuitableModels'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MainScreen',
  components: {
    ToggleView,
    ShirtPreview,
    PrintPreview,
    CountOfSuitableModels
  },
  computed: {
    ...mapState({
      curRule: state => state.colors.curRule,
      defaultPrintSize: state => state.prints.sizes.defaultSize
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
