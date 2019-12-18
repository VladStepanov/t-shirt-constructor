<template>
  <BaseMenu title="Принты">
    <MenuPrintsFirstLine />
    <button @click="selectPrint">Добавить</button>
    <MenuPrintsSelected v-if="haveSelected" />
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuPrintsFirstLine from '@/components/MenuPrints/MenuPrintsFirstLine'
import MenuPrintsSelected from '@/components/MenuPrints/MenuPrintsSelected'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuPrints',
  components: {
    BaseMenu,
    MenuPrintsFirstLine,
    MenuPrintsSelected
  },
  computed: {
    ...mapGetters({
      haveSelected: 'prints/haveSelected',
      curPrint: 'prints/curPrint'
    })
  },
  methods: {
    selectPrint () {
      if (!this.curPrint) return

      this.$store.dispatch('prints/selectPrint', this.curPrint.id)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
