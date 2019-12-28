<template>
  <div class="main-menu" v-if="!!curPrint">
    <BaseSelect
      v-if="curPrint.types[curPrint.type].color !== undefined"
      v-model="color"
      :options="curPrintColors"
      placeholder="Выберите цвет"
    />
    <BaseSelect
      v-if="curPrint.types[curPrint.type].size !== undefined"
      v-model="size"
      :options="sizes"
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
      sizes: state => state.prints.sizes.sizes
    }),
    ...mapGetters({
      curPrint: 'prints/curPrint',
      curPrintColors: 'prints/curPrintColors'
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
