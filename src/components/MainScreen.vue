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
        <PrintCollision>
          <BasePrintCustomizable
            v-for="(print, i) in printsToRender"
            :key="`${print.id}-${i}`"
            :paths="print.paths"
            :init-size="print.exportSize"
            :viewBox="print.viewBox"
            :texture="print.types[print.type].texture"
            :color="print.types[print.type].color"
            :width="print.types[print.type].size"
            :aspect-ratio="print.aspectRatio"
            :position="print.types[print.type].position"
          />
        </PrintCollision>
      </template>
    </div>
    <MainScreenPrice v-if="haveCurModel" />
    <div class="main-screen__order" v-if="haveCurModel">
      <button class="main-screen__order__btn" @click="makeOrder">Заказать</button>
    </div>
  </div>
</template>

<script>
import ToggleView from '@/components/ToggleView'
import BaseShirt from '@/components/BaseShirt'
import CountOfSuitableModels from '@/components/CountOfSuitableModels'
import BasePrintCustomizable from '@/components/BasePrintCustomizable'
import PrintCollision from '@/components/PrintCollision'
import MainScreenPrice from '@/components/MainScreenPrice'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'MainScreen',
  components: {
    ToggleView,
    BaseShirt,
    BasePrintCustomizable,
    CountOfSuitableModels,
    MainScreenPrice,
    PrintCollision
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
  },
  methods: {
    ...mapActions(['makeOrder'])
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
  &__order {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    &__btn {
      background-color: transparent;
      border: none;
      padding: 12px 24px;
      border: 1px solid tomato;
      color: tomato;
      cursor: pointer;
    }
  }
}
</style>
