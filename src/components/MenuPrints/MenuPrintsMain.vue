<template>
  <div class="main-menu" v-if="!!Object.keys(curPrintDummy).length">
    <BaseSelect
      v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].color !== undefined"
      v-model="color"
      :options="curPrintColors"
      placeholder="Выберите цвет"
    />
    <BaseSelect
      v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].size !== undefined"
      v-model="size"
      :options="sizes"
    />
    <BaseSelect
      v-if="curPrintDummy.types[curPrintDummy.type] && curPrintDummy.types[curPrintDummy.type].texture !== undefined"
      v-model="texture"
      :options="curPrintTextures"
    />
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
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  display: flex;
  margin: 12px 0;
  & > *:not(:last-child) {
    margin-right: 12px;
  }
}
</style>
