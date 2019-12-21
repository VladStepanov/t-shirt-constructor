<template>
  <div>
    <BaseSelect
      v-if="!!curPrint && curPrint.colors.length"
      v-model="color"
      :options="curPrintColors"
      placeholder="Выберите цвет"
    />
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters } from 'vuex'

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
    color: {
      get () { return this.$store.getters['prints/curPrintColor'] },
      set (color) {
        this.$store.dispatch('prints/setColor', { color })
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
