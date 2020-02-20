<template>
  <BaseMenu title="Футболка">
    <MenuFilters />
    <MenuColors v-if="haveCurModel" />
    <MenuPrice />
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuFilters from '@/components/MenuShirts/MenuShirtsFilters'
import MenuColors from '@/components/MenuShirts/MenuColors'
import MenuPrice from '@/components/MenuShirts/MenuShirtPrice'

import { mapGetters } from 'vuex'

export default {
  name: 'MenuShirts',
  computed: {
    ...mapGetters(['haveCurModel'])
  },
  components: {
    BaseMenu,
    MenuFilters,
    MenuColors,
    MenuPrice
  }
}
</script>

<style scoped lang='scss'>

</style>
