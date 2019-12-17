<template>
  <BaseMenu title="Принты">
    <MenuPrintsFirstLine />
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
      haveSelected: 'prints/haveSelected'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
