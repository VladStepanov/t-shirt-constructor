<template>
  <div class="menu-prints">
    <div class="menu-prints__name">
      Название
      <span v-if="curPrint">{{ curPrintDummy.title }}</span>
    </div>
    <button class="menu-prints__choose" @click="showModal">Выбрать</button>
    <BaseSelect
      v-if="!!curPrint"
      v-model="side"
      :options="sides"
      placeholder="Выберите сторону"
      class="menu-prints__side"
    />
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapState } from 'vuex'

export default {
  name: 'MenuPrintsFirstLine',
  components: {
    BaseSelect
  },
  computed: {
    ...mapState({
      sides: state => state.prints.sides,
      curPrint: state => state.prints.curPrint,
      curPrintDummy: state => state.prints.curPrintDummy
    }),
    side: {
      get () { return this.$store.getters['prints/sideForCurPrint'] },
      set (side) {
        this.$store.dispatch('prints/setSide', { side })
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
