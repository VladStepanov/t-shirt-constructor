<template>
  <div class="menu-prints">
    <div class="menu-prints__name">
      Название
      <span v-if="curPrint">{{ curPrint.title }}</span>
    </div>
    <button class="menu-prints__choose" @click="showModal">Выбрать</button>
    <BaseSelect
      v-model="side"
      :options="sides"
      placeholder="Выберите сторону"
      class="menu-prints__side"
    />
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
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MenuPrintsFirstLine',
  components: {
    BaseSelect
  },
  computed: {
    ...mapState({
      sides: state => state.prints.sides
    }),
    ...mapGetters({
      curPrint: ['prints/curPrint'],
      curPrintColors: 'prints/curPrintColors'
    }),
    side: {
      get () { return this.$store.getters['prints/sideForCurPrint'] },
      set (side) {
        this.$store.dispatch('prints/setSide', { side })
      }
    },
    color: {
      get () { return this.$store.getters['prints/curPrintColor'] },
      set (color) {
        this.$store.dispatch('prints/setColor', { color })
      }
    }
  },
  methods: {
    showModal () {
      this.$modal.show('select-print')
    },
    selectPrint () {
      if (!this.curPrint) return

      this.$store.dispatch('prints/selectPrint', this.curPrint.id)
    }
  }
}
</script>

<style scoped lang="scss">
.menu-prints {
  display: flex;
  align-items: baseline;
  & > *:not(:last-child) {
    margin-right: 12px;
  }
}
</style>
