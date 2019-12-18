<template>
  <div class='main-screen'>
    <div v-if='haveCurModel'>
      <ShirtPreview :paths='curModelPathsWithView' colorized>
        <template
          v-if="havePrintsToRender"
          #print
        >
          <g
            v-for="print in printsToRender"
            :key="`${print.id}-print`"
          >
            <path
              v-for="(path, i) in print.paths"
              :key="`${i}-path`"
              :d="path"
              :fill="print.color"
            />
          </g>
        </template>
      </ShirtPreview>
      {{ printsToRender }}
      <ToggleView v-if="haveRearSide" />
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
    ...mapGetters(['curModelPathsWithView', 'curModel', 'haveCurModel', 'haveRearSide']),
    ...mapGetters({
      curPrint: 'prints/curPrint',
      printsToRender: 'prints/printsToRender',
      havePrintsToRender: 'prints/havePrintsToRender'
    })
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
