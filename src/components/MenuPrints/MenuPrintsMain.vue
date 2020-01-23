<template>
  <div class="main-menu" v-if="!!Object.keys(curPrintDummy).length">
    <div class="main-menu__item" v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].texture !== undefined">
      <span class="main-menu__item__title">Тип:</span>
      <BaseSelect
        v-model="texture"
        :options="curPrintTextures"
      />
    </div>
    <div class="main-menu__item" v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].color !== undefined">
      <span class="main-menu__item__title">Цвет:</span>
      <BaseSelect
        v-model="color"
        :options="curPrintColors"
        placeholder="Выберите цвет"
      />
    </div>
    <div class="main-menu__item main-menu__item-size" v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].size !== undefined">
      <span class="main-menu__item__title">Размер:</span>
      <BaseSelect
        v-model="size"
        :options="sizes"
      />
    </div>
    <div class="main-menu__item  main-menu__item-pos" v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].position !== undefined">
      <span class="main-menu__item__title">Позиция:</span>
      <BaseSelect
        v-model="positionX"
        :options="positions.horizontal"
      />
      <BaseSelect
        v-model="positionY"
        :options="positions.vertical"
      />
    </div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MenuPrintsMain',
  components: {
    BaseSelect
  },
  computed: {
    ...mapState({
      sizes: state => state.prints.sizes.sizes,
      positions: state => state.prints.positions,
      curPrintDummy: state => state.prints.curPrintDummy
    }),
    ...mapGetters({
      curPrint: 'prints/curPrint',
      curPrintColors: 'prints/curPrintColors',
      curPrintTextures: 'prints/curPrintTextures'
    }),
    color: {
      get () { return this.$store.getters['prints/curPrintColor'] },
      set (color) {
        this.$store.dispatch('prints/setColor', { color })
      }
    },
    size: {
      get () { return this.$store.getters['prints/curPrintSize'] },
      set (size) {
        this.$store.dispatch('prints/setSize', { size })
      }
    },
    texture: {
      get () { return this.$store.getters['prints/curPrintTexture'] },
      set (texture) {
        this.$store.dispatch('print/setTexture', { texture })
      }
    },
    positionX: {
      get () { return this.$store.getters['prints/curPrintPosition'].x },
      set (position) {
        this.$store.dispatch('prints/setPositionX', { position })
      }
    },
    positionY: {
      get () { return this.$store.getters['prints/curPrintPosition'].y },
      set (position) {
        this.$store.dispatch('prints/setPositionY', { position })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 12px 0;
  /*& > *:not(:last-child) {*/
  /*  margin-right: 12px;*/
  /*}*/
  &__item {
    display: flex;
    align-items: center;
    &__title {
      margin-right: 12px;
    }
    &-pos {
      grid-column: 2;
      grid-row: 2;
    }
    &-size {
      grid-column: 1;
      grid-row: 2;
    }
  }
}
</style>
