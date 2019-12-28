<template>
  <div class="menu-vinyl">
    <BaseSelect
      v-if="!!curPrint && curPrint.colors.length"
      v-model="color"
      :options="curPrintColors"
      placeholder="Выберите цвет"
    />
    <BaseSelect
      v-model="size"
      :options="sizes"
    />
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MenuPrintsVinyl',
  components: {
    BaseSelect
  },
  computed: {
    ...mapGetters({
      curPrint: ['prints/curPrint'],
      curPrintColors: 'prints/curPrintColors'
    }),
    ...mapState({
      sizes: state => state.prints.sizes.sizes
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
.menu-vinyl {
  display: flex;
  & > *:not(:last-child) {
    margin-right: 12px;
  }
}
</style>
