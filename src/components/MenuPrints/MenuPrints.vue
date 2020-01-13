<template>
  <BaseMenu title="Принты">
    <MenuPrintsFirstLine />
    <label
      class="menu-select"
      v-for="type in curPrintTypes"
      :key="type.code"
    >
      <input :value="type.code" v-model="typeController"  type="radio">
      {{ type.title }}
    </label>
    <MenuPrintsMain />
    <button @click="selectPrint">Добавить</button>
    <MenuPrintsSelected v-if="haveSelected" />
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuPrintsFirstLine from '@/components/MenuPrints/MenuPrintsFirstLine'
import MenuPrintsMain from '@/components/MenuPrints/MenuPrintsMain'
import MenuPrintsSelected from '@/components/MenuPrints/MenuPrintsSelected'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuPrints',
  components: {
    BaseMenu,
    MenuPrintsFirstLine,
    MenuPrintsMain,
    MenuPrintsSelected
  },
  computed: {
    ...mapGetters({
      haveSelected: 'prints/selection/haveSelected',
      curPrint: 'prints/curPrint',
      curPrintTypes: 'prints/curPrintTypes'
    }),
    typeController: {
      get () { return this.$store.getters['prints/curPrintType'] },
      set (type) {
        this.$store.dispatch('prints/setType', { type })
      }
    }
  },
  methods: {
    selectPrint () {
      this.$store.dispatch('prints/selection/selectPrint', { printId: this.curPrint.id })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
